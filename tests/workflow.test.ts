// tests/workflow.test.ts
import { IntegratedWorkflow } from '../lib/services/integrated-workflow';

describe('JoinEcoGrow Platform Workflow Tests', () => {
  let workflow: IntegratedWorkflow;

  beforeEach(() => {
    workflow = new IntegratedWorkflow();
  });

  test('should generate V0 component successfully', async () => {
    const result = await workflow.generateComponent(
      'Create a sustainable growing dashboard'
    );
    
    expect(result).toBeDefined();
    expect(result.name).toBeDefined();
    expect(result.code).toBeDefined();
    expect(result.id).toBeDefined();
  });

  test('should refine component with Supabase context', async () => {
    // First generate a component
    const component = await workflow.generateComponent(
      'Create a tree planting tracker'
    );
    
    // Then refine it
    const refined = await workflow.refineWithData(component.id);
    
    expect(refined).toBeDefined();
    expect(typeof refined).toBe('string');
    expect(refined.length).toBeGreaterThan(0);
  });

  test('should execute full V0 to Cursor to Supabase workflow', async () => {
    const result = await workflow.v0ToCursorToSupabase(
      'Create a community challenge component'
    );
    
    expect(result).toBeDefined();
    expect(result.component).toBeDefined();
    expect(result.refined).toBeDefined();
  });

  test('should handle error gracefully', async () => {
    // Test with invalid prompt
    try {
      await workflow.generateComponent('');
      fail('Should have thrown an error');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
