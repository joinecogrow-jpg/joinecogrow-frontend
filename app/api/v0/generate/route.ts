// app/api/v0/generate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { IntegratedWorkflow } from '@/lib/services/integrated-workflow';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    
    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }
    
    const workflow = new IntegratedWorkflow();
    
    // Generate component using integrated workflow
    const result = await workflow.v0ToCursorToSupabase(prompt);
    
    return NextResponse.json({
      success: true,
      component: result.component,
      refined: result.refined,
    });
    
  } catch (error) {
    console.error('V0 generation error:', error);
    
    return NextResponse.json(
      { error: 'Failed to generate component' },
      { status: 500 }
    );
  }
}
