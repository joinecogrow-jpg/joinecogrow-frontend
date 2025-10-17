// lib/v0-integration/cursor-sync.ts
// Cursor IDE Integration for V0 Components

import { v0API, V0Component, V0GenerationRequest } from './v0-api';
import { supabase } from '../supabase';
import fs from 'fs/promises';
import path from 'path';

export interface CursorSyncConfig {
  componentsDir: string;
  autoSave: boolean;
  generateTypes: boolean;
  runTests: boolean;
}

export class CursorSync {
  private config: CursorSyncConfig;

  constructor(config: Partial<CursorSyncConfig> = {}) {
    this.config = {
      componentsDir: config.componentsDir || 'components/generated',
      autoSave: config.autoSave ?? true,
      generateTypes: config.generateTypes ?? true,
      runTests: config.runTests ?? false,
    };
  }

  /**
   * Generate component using V0 and sync with Cursor
   */
  async generateAndSync(prompt: string, options: Partial<V0GenerationRequest> = {}): Promise<V0Component | null> {
    try {
      console.log('🚀 Starting V0-Cursor integration...');
      
      // 1. Generate component with V0
      const request: V0GenerationRequest = {
        prompt,
        framework: 'nextjs',
        styling: 'tailwind',
        ...options,
      };

      const response = await v0API.generateComponent(request);
      
      if (!response.success || !response.component) {
        throw new Error(response.error || 'Failed to generate component');
      }

      const component = response.component;
      console.log('✅ V0 component generated:', component.name);

      // 2. Save component to file system
      await this.saveComponentToFile(component);

      // 3. Generate TypeScript types
      if (this.config.generateTypes) {
        await this.generateComponentTypes(component);
      }

      // 4. Store in Supabase
      await this.storeInSupabase(component);

      // 5. Sync with V0
      await v0API.syncComponent(component);

      // 6. Run tests if enabled
      if (this.config.runTests) {
        await this.runComponentTests(component);
      }

      console.log('🎉 V0-Cursor integration complete!');
      return component;

    } catch (error) {
      console.error('❌ V0-Cursor integration failed:', error);
      return null;
    }
  }

  /**
   * Save component to file system
   */
  private async saveComponentToFile(component: V0Component): Promise<void> {
    const componentsDir = path.join(process.cwd(), this.config.componentsDir);
    
    // Ensure directory exists
    await fs.mkdir(componentsDir, { recursive: true });
    
    const fileName = `${component.name}.tsx`;
    const filePath = path.join(componentsDir, fileName);
    
    await fs.writeFile(filePath, component.code, 'utf8');
    console.log('📁 Component saved to:', filePath);
  }

  /**
   * Generate TypeScript types for component
   */
  private async generateComponentTypes(component: V0Component): Promise<void> {
    const typesDir = path.join(process.cwd(), 'types', 'generated');
    await fs.mkdir(typesDir, { recursive: true });
    
    const typeFileName = `${component.name}.types.ts`;
    const typeFilePath = path.join(typesDir, typeFileName);
    
    const typeContent = `// Generated types for ${component.name}
export interface ${component.name}Props {
  // Add your props here
  className?: string;
  children?: React.ReactNode;
}

export interface ${component.name}State {
  // Add your state here
}

export type ${component.name}Ref = React.RefObject<HTMLDivElement>;
`;
    
    await fs.writeFile(typeFilePath, typeContent, 'utf8');
    console.log('📝 Types generated:', typeFilePath);
  }

  /**
   * Store component in Supabase
   */
  private async storeInSupabase(component: V0Component): Promise<void> {
    try {
      const { error } = await supabase
        .from('v0_components')
        .insert({
          v0_id: component.id,
          name: component.name,
          code: component.code,
          description: component.description,
          category: component.category,
          tags: component.tags,
          created_at: component.created_at,
          updated_at: component.updated_at,
        });

      if (error) {
        console.warn('⚠️ Failed to store in Supabase:', error.message);
      } else {
        console.log('💾 Component stored in Supabase');
      }
    } catch (error) {
      console.warn('⚠️ Supabase storage failed:', error);
    }
  }

  /**
   * Run component tests
   */
  private async runComponentTests(component: V0Component): Promise<void> {
    try {
      const { exec } = require('child_process');
      
      return new Promise((resolve, reject) => {
        exec(`npm test -- --testPathPattern=${component.name}`, (error: any, stdout: string, stderr: string) => {
          if (error) {
            console.warn('⚠️ Tests failed for', component.name, ':', error.message);
          } else {
            console.log('✅ Tests passed for', component.name);
          }
          resolve();
        });
      });
    } catch (error) {
      console.warn('⚠️ Test execution failed:', error);
    }
  }

  /**
   * Watch for file changes and sync with V0
   */
  async watchForChanges(): Promise<void> {
    const chokidar = require('chokidar');
    
    const watcher = chokidar.watch(`${this.config.componentsDir}/**/*.tsx`, {
      ignored: /node_modules/,
      persistent: true,
    });

    watcher.on('change', async (filePath: string) => {
      console.log('📝 File changed:', filePath);
      
      try {
        const content = await fs.readFile(filePath, 'utf8');
        const fileName = path.basename(filePath, '.tsx');
        
        // Extract component info and sync with V0
        const component: V0Component = {
          id: `local-${Date.now()}`,
          name: fileName,
          code: content,
          description: `Updated from Cursor: ${filePath}`,
          category: 'cursor-refined',
          tags: ['cursor-edited'],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        await v0API.syncComponent(component);
        console.log('🔄 Synced changes with V0');
      } catch (error) {
        console.error('❌ Sync failed:', error);
      }
    });

    console.log('👀 Watching for changes in:', this.config.componentsDir);
  }
}

export const cursorSync = new CursorSync();
