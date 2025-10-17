// tests/api.test.ts
describe('API Integration Tests', () => {
  const baseUrl = 'http://localhost:3000';

  test('should respond to workflow generate endpoint', async () => {
    const response = await fetch(`${baseUrl}/api/workflow/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: 'Create a sustainable growing component'
      })
    });

    expect(response.status).toBe(200);
    
    const result = await response.json();
    expect(result).toBeDefined();
    expect(result.component || result.refined).toBeDefined();
  });

  test('should respond to orchestrator execute endpoint', async () => {
    const response = await fetch(`${baseUrl}/api/orchestrator/execute`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: 'Create a comprehensive eco-platform'
      })
    });

    expect(response.status).toBe(200);
    
    const result = await response.json();
    expect(result.success).toBe(true);
    expect(result.result).toBeDefined();
  });

  test('should handle invalid requests gracefully', async () => {
    const response = await fetch(`${baseUrl}/api/workflow/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Missing prompt
      })
    });

    expect(response.status).toBe(400);
    
    const result = await response.json();
    expect(result.error).toBeDefined();
  });

  test('should provide API documentation', async () => {
    const response = await fetch(`${baseUrl}/api/orchestrator/execute`);
    
    expect(response.status).toBe(200);
    
    const result = await response.json();
    expect(result.message).toBe('Master Workflow Orchestrator API');
    expect(result.stack).toBeDefined();
    expect(result.stack.length).toBe(8); // All 8 workflow steps
  });
});
