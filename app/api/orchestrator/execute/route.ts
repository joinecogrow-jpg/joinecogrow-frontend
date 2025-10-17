// app/api/orchestrator/execute/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { MasterWorkflowOrchestrator } from '@/lib/orchestrator/master-workflow';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.prompt) {
      return NextResponse.json(
        { error: 'Prompt is required for workflow execution' },
        { status: 400 }
      );
    }

    const orchestrator = new MasterWorkflowOrchestrator();
    
    console.log(`🚀 Starting Master Workflow for prompt: ${body.prompt}`);
    
    const result = await orchestrator.executeFullStack(body);
    
    return NextResponse.json({
      success: true,
      message: 'Master workflow executed successfully',
      result,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Master workflow execution error:', error);
    
    return NextResponse.json(
      { 
        error: 'Master workflow execution failed',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Master Workflow Orchestrator API',
    endpoints: {
      POST: '/api/orchestrator/execute',
      description: 'Execute full-stack workflow with V0, Cursor, Supabase, CrewAI, Stack AI, Temporal, and Vercel'
    },
    stack: [
      'V0 UI Generation',
      'Cursor Refinement with MCP',
      'Supabase Storage',
      'CrewAI Processing',
      'Stack AI Workflow',
      'Temporal Orchestration',
      'Vercel Deployment',
      'Grafana Monitoring'
    ]
  });
}
