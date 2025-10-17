// app/api/workflow/generate/route.ts
import { IntegratedWorkflow } from '@/lib/services/integrated-workflow';

export async function POST(request: Request) {
  const { prompt } = await request.json();
  const workflow = new IntegratedWorkflow();
  
  const result = await workflow.v0ToCursorToSupabase(prompt);
  
  return Response.json(result);
}
