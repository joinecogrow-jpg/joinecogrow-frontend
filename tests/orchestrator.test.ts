// tests/orchestrator.test.ts
import { MasterWorkflowOrchestrator } from '../lib/orchestrator/master-workflow';

describe('Master Workflow Orchestrator Tests', () => {
  let orchestrator: MasterWorkflowOrchestrator;

  beforeEach(() => {
    orchestrator = new MasterWorkflowOrchestrator();
  });

  test('should execute full stack workflow', async () => {
    const request = {
      prompt: 'Create a comprehensive eco-growing platform'
    };

    const result = await orchestrator.executeFullStack(request);
    
    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
    expect(result.name).toBeDefined();
  }, 30000); // 30 second timeout for full workflow

  test('should handle workflow errors gracefully', async () => {
    const invalidRequest = {
      prompt: null // Invalid prompt
    };

    try {
      await orchestrator.executeFullStack(invalidRequest);
      fail('Should have thrown an error');
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toContain('Master workflow failed');
    }
  });

  test('should process all 8 workflow steps', async () => {
    const request = {
      prompt: 'Create a tree planting dashboard with 91 features'
    };

    // Mock console.log to track workflow steps
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    await orchestrator.executeFullStack(request);
    
    // Verify all 8 steps were logged
    const loggedMessages = consoleSpy.mock.calls.map(call => call[0]);
    
    expect(loggedMessages).toContain('🚀 Starting Master Workflow Orchestration for JoinEcoGrow Platform');
    expect(loggedMessages).toContain('📱 Step 1: V0 UI Generation');
    expect(loggedMessages).toContain('🔧 Step 2: Cursor Refinement with MCP');
    expect(loggedMessages).toContain('💾 Step 3: Supabase Storage');
    expect(loggedMessages).toContain('🤖 Step 4: CrewAI Processing');
    expect(loggedMessages).toContain('📊 Step 5: Stack AI Workflow Creation');
    expect(loggedMessages).toContain('⏰ Step 6: Temporal Orchestration');
    expect(loggedMessages).toContain('🚀 Step 7: Vercel Deployment');
    expect(loggedMessages).toContain('📈 Step 8: Grafana Monitoring Setup');
    
    consoleSpy.mockRestore();
  });
});
