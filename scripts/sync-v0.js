// scripts/sync-v0.js
// Comprehensive V0 synchronization script for JoinEcoGrow Platform

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

class V0Sync {
  constructor() {
    this.projectRoot = process.cwd();
    this.componentsDir = path.join(this.projectRoot, 'components');
    this.generatedDir = path.join(this.componentsDir, 'generated');
    this.typesDir = path.join(this.projectRoot, 'types', 'generated');
    this.syncLogFile = path.join(this.projectRoot, '.v0-sync.log');
    
    // Ensure directories exist
    this.ensureDirectories();
  }

  /**
   * Ensure required directories exist
   */
  ensureDirectories() {
    const dirs = [this.componentsDir, this.generatedDir, this.typesDir];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        this.log(`📁 Created directory: ${dir}`);
      }
    });
  }

  /**
   * Log messages with timestamp
   */
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.syncLogFile, logMessage + '\n');
  }

  /**
   * Main sync function
   */
  async sync() {
    this.log('🚀 Starting V0 sync process...');
    
    try {
      // 1. Check for V0 changes
      await this.checkV0Changes();
      
      // 2. Pull latest changes from git
      await this.pullLatestChanges();
      
      // 3. Process new components
      await this.processNewComponents();
      
      // 4. Update component registry
      await this.updateComponentRegistry();
      
      // 5. Generate types
      await this.generateTypes();
      
      // 6. Run tests
      await this.runTests();
      
      this.log('✅ V0 sync completed successfully!');
      
    } catch (error) {
      this.log(`❌ V0 sync failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Check for V0 changes
   */
  async checkV0Changes() {
    this.log('🔍 Checking for V0 changes...');
    
    return new Promise((resolve, reject) => {
      exec('git status --porcelain', (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        
        const changes = stdout.trim().split('\n').filter(line => line);
        
        if (changes.length > 0) {
          this.log(`📝 Found ${changes.length} changes:`);
          changes.forEach(change => this.log(`   ${change}`));
        } else {
          this.log('✅ No changes detected');
        }
        
        resolve(changes);
      });
    });
  }

  /**
   * Pull latest changes from git
   */
  async pullLatestChanges() {
    this.log('📥 Pulling latest changes from repository...');
    
    return new Promise((resolve, reject) => {
      exec('git pull origin main', (error, stdout, stderr) => {
        if (error) {
          this.log(`⚠️ Git pull warning: ${error.message}`);
          // Don't reject on git pull errors, continue with sync
        }
        
        if (stdout) {
          this.log(`📥 Git pull output: ${stdout.trim()}`);
        }
        
        resolve();
      });
    });
  }

  /**
   * Process new components from V0
   */
  async processNewComponents() {
    this.log('🔄 Processing new V0 components...');
    
    const componentFiles = this.findComponentFiles();
    
    for (const file of componentFiles) {
      await this.processComponent(file);
    }
    
    this.log(`✅ Processed ${componentFiles.length} component files`);
  }

  /**
   * Find all component files
   */
  findComponentFiles() {
    const files = [];
    
    // Check generated components directory
    if (fs.existsSync(this.generatedDir)) {
      const generatedFiles = fs.readdirSync(this.generatedDir)
        .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
      files.push(...generatedFiles.map(file => path.join(this.generatedDir, file)));
    }
    
    // Check main components directory
    const componentFiles = fs.readdirSync(this.componentsDir)
      .filter(file => (file.endsWith('.tsx') || file.endsWith('.ts')) && !file.includes('ui/'))
      .map(file => path.join(this.componentsDir, file));
    files.push(...componentFiles);
    
    return files;
  }

  /**
   * Process individual component file
   */
  async processComponent(filePath) {
    const fileName = path.basename(filePath);
    this.log(`🔧 Processing component: ${fileName}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Validate component structure
      this.validateComponent(content, fileName);
      
      // Extract component metadata
      const metadata = this.extractComponentMetadata(content, fileName);
      
      // Update component registry
      await this.updateComponentInRegistry(metadata);
      
      this.log(`✅ Processed: ${fileName}`);
      
    } catch (error) {
      this.log(`❌ Error processing ${fileName}: ${error.message}`);
    }
  }

  /**
   * Validate component structure
   */
  validateComponent(content, fileName) {
    // Check for required imports
    if (!content.includes('import React')) {
      throw new Error('Missing React import');
    }
    
    // Check for export
    if (!content.includes('export default') && !content.includes('export {')) {
      throw new Error('Missing component export');
    }
    
    // Check for TypeScript types
    if (fileName.endsWith('.tsx') && !content.includes('interface') && !content.includes('type')) {
      this.log(`⚠️ Component ${fileName} might benefit from TypeScript types`);
    }
  }

  /**
   * Extract component metadata
   */
  extractComponentMetadata(content, fileName) {
    const name = fileName.replace(/\.(tsx|ts)$/, '');
    
    // Extract component name
    const componentNameMatch = content.match(/export\s+(?:default\s+)?function\s+(\w+)/);
    const componentName = componentNameMatch ? componentNameMatch[1] : name;
    
    // Extract props interface
    const propsMatch = content.match(/interface\s+(\w+Props)/);
    const propsInterface = propsMatch ? propsMatch[1] : null;
    
    // Extract description from comments
    const descriptionMatch = content.match(/\/\*\*[\s\S]*?\*\//) || content.match(/\/\/\s*(.+)/);
    const description = descriptionMatch ? descriptionMatch[1].trim() : `Component: ${componentName}`;
    
    return {
      name: componentName,
      fileName,
      propsInterface,
      description,
      filePath: content.includes('components/generated') ? 'generated' : 'components',
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };
  }

  /**
   * Update component registry
   */
  async updateComponentRegistry() {
    this.log('📋 Updating component registry...');
    
    const registryFile = path.join(this.projectRoot, 'lib', 'component-registry.json');
    let registry = {};
    
    // Load existing registry
    if (fs.existsSync(registryFile)) {
      try {
        registry = JSON.parse(fs.readFileSync(registryFile, 'utf8'));
      } catch (error) {
        this.log('⚠️ Could not load existing registry, creating new one');
      }
    }
    
    // Update registry with current components
    const componentFiles = this.findComponentFiles();
    
    for (const filePath of componentFiles) {
      try {
        const fileName = path.basename(filePath);
        const metadata = this.extractComponentMetadata(
          fs.readFileSync(filePath, 'utf8'), 
          fileName
        );
        
        registry[metadata.name] = metadata;
      } catch (error) {
        this.log(`⚠️ Could not process ${filePath} for registry`);
      }
    }
    
    // Save updated registry
    fs.writeFileSync(registryFile, JSON.stringify(registry, null, 2));
    this.log(`📋 Updated registry with ${Object.keys(registry).length} components`);
  }

  /**
   * Update individual component in registry
   */
  async updateComponentInRegistry(metadata) {
    const registryFile = path.join(this.projectRoot, 'lib', 'component-registry.json');
    let registry = {};
    
    if (fs.existsSync(registryFile)) {
      registry = JSON.parse(fs.readFileSync(registryFile, 'utf8'));
    }
    
    registry[metadata.name] = metadata;
    
    fs.writeFileSync(registryFile, JSON.stringify(registry, null, 2));
  }

  /**
   * Generate TypeScript types
   */
  async generateTypes() {
    this.log('📝 Generating TypeScript types...');
    
    const registryFile = path.join(this.projectRoot, 'lib', 'component-registry.json');
    
    if (!fs.existsSync(registryFile)) {
      this.log('⚠️ No component registry found, skipping type generation');
      return;
    }
    
    const registry = JSON.parse(fs.readFileSync(registryFile, 'utf8'));
    const typesContent = this.generateTypesContent(registry);
    
    const typesFile = path.join(this.typesDir, 'components.ts');
    fs.writeFileSync(typesFile, typesContent);
    
    this.log(`📝 Generated types for ${Object.keys(registry).length} components`);
  }

  /**
   * Generate TypeScript types content
   */
  generateTypesContent(registry) {
    let content = `// Auto-generated component types
// Generated on: ${new Date().toISOString()}

export interface ComponentMetadata {
  name: string;
  fileName: string;
  propsInterface?: string | null;
  description: string;
  filePath: string;
  createdAt: string;
  lastModified: string;
}

export interface ComponentRegistry {
`;

    Object.values(registry).forEach(component => {
      content += `  ${component.name}: ComponentMetadata;\n`;
    });
    
    content += `}

export const componentRegistry: ComponentRegistry = ${JSON.stringify(registry, null, 2)};
`;

    return content;
  }

  /**
   * Run tests
   */
  async runTests() {
    this.log('🧪 Running component tests...');
    
    return new Promise((resolve) => {
      exec('npm test -- --passWithNoTests', (error, stdout, stderr) => {
        if (error) {
          this.log(`⚠️ Tests failed: ${error.message}`);
        } else {
          this.log('✅ Tests passed');
        }
        resolve();
      });
    });
  }

  /**
   * Watch for file changes
   */
  watch() {
    this.log('👀 Starting file watcher...');
    
    const chokidar = require('chokidar');
    
    const watcher = chokidar.watch([
      `${this.componentsDir}/**/*.{ts,tsx}`,
      `${this.generatedDir}/**/*.{ts,tsx}`
    ], {
      ignored: /node_modules/,
      persistent: true,
      ignoreInitial: true
    });

    watcher.on('change', async (filePath) => {
      this.log(`📝 File changed: ${path.basename(filePath)}`);
      await this.processComponent(filePath);
    });

    watcher.on('add', async (filePath) => {
      this.log(`➕ File added: ${path.basename(filePath)}`);
      await this.processComponent(filePath);
    });

    this.log('👀 File watcher active');
  }

  /**
   * Clean up old files
   */
  async cleanup() {
    this.log('🧹 Cleaning up old files...');
    
    const registryFile = path.join(this.projectRoot, 'lib', 'component-registry.json');
    
    if (!fs.existsSync(registryFile)) {
      this.log('⚠️ No registry found for cleanup');
      return;
    }
    
    const registry = JSON.parse(fs.readFileSync(registryFile, 'utf8'));
    const currentFiles = this.findComponentFiles();
    const currentFileNames = currentFiles.map(f => path.basename(f));
    
    let cleanedCount = 0;
    
    for (const [name, metadata] of Object.entries(registry)) {
      if (!currentFileNames.includes(metadata.fileName)) {
        delete registry[name];
        cleanedCount++;
      }
    }
    
    if (cleanedCount > 0) {
      fs.writeFileSync(registryFile, JSON.stringify(registry, null, 2));
      this.log(`🧹 Cleaned up ${cleanedCount} removed components`);
    } else {
      this.log('✅ No cleanup needed');
    }
  }
}

// CLI Interface
async function main() {
  const sync = new V0Sync();
  const args = process.argv.slice(2);
  
  try {
    switch (args[0]) {
      case 'watch':
        await sync.sync();
        sync.watch();
        break;
      case 'cleanup':
        await sync.cleanup();
        break;
      case 'registry':
        await sync.updateComponentRegistry();
        break;
      case 'types':
        await sync.generateTypes();
        break;
      default:
        await sync.sync();
    }
  } catch (error) {
    console.error('❌ Sync failed:', error.message);
    process.exit(1);
  }
}

// Run if this script is executed directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = V0Sync;
