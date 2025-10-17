// app/api/v0/cursor-integration/route.ts
// API endpoint for V0-Cursor integration

import { NextRequest, NextResponse } from 'next/server';
import { cursorSync } from '@/lib/v0-integration/cursor-sync';
import { v0API } from '@/lib/v0-integration/v0-api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, options = {} } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    console.log('🎯 V0-Cursor integration request:', { prompt, options });

    // Generate and sync component
    const component = await cursorSync.generateAndSync(prompt, options);

    if (!component) {
      return NextResponse.json(
        { error: 'Failed to generate component' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      component,
      message: 'Component generated and synced successfully',
      urls: {
        component: `/components/generated/${component.name}.tsx`,
        types: `/types/generated/${component.name}.types.ts`,
      }
    });

  } catch (error) {
    console.error('V0-Cursor integration error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'V0-Cursor Integration API',
    description: 'Generate components using V0 and sync with Cursor IDE',
    endpoints: {
      POST: {
        description: 'Generate and sync a component',
        body: {
          prompt: 'string (required) - Description of the component to generate',
          options: {
            framework: 'nextjs | react | vue',
            styling: 'tailwind | css | styled-components',
            features: 'string[]'
          }
        }
      }
    },
    examples: {
      generate: {
        url: '/api/v0/cursor-integration',
        method: 'POST',
        body: {
          prompt: 'Create a tree planting dashboard with statistics and progress tracking',
          options: {
            framework: 'nextjs',
            styling: 'tailwind'
          }
        }
      }
    }
  });
}
