// tests/setup.ts
// Jest setup file for JoinEcoGrow Platform tests

// Mock environment variables
process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co';
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key';
process.env.CREWAI_API_KEY = 'test-crewai-key';
process.env.STACKAI_API_KEY = 'test-stackai-key';
process.env.VERCEL_TOKEN = 'test-vercel-token';
process.env.GRAFANA_API_KEY = 'test-grafana-key';

// Global test setup
beforeAll(() => {
  console.log('🧪 Setting up JoinEcoGrow Platform test environment');
});

afterAll(() => {
  console.log('🧪 Cleaning up test environment');
});

// Mock fetch for API tests
global.fetch = jest.fn();

// Mock console methods for cleaner test output
const originalConsole = { ...console };

beforeEach(() => {
  // Reset mocks
  jest.clearAllMocks();
  
  // Mock successful API responses
  (global.fetch as jest.Mock).mockImplementation((url: string) => {
    if (url.includes('supabase')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: { id: 'test-id' }, error: null })
      });
    }
    
    if (url.includes('v0') || url.includes('crewai') || url.includes('stackai')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true, data: 'test-data' })
      });
    }
    
    if (url.includes('vercel')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ 
          url: 'https://test.vercel.app',
          id: 'test-deployment-id'
        })
      });
    }
    
    if (url.includes('grafana')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true })
      });
    }
    
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({})
    });
  });
});

// Restore console after tests
afterEach(() => {
  console = originalConsole;
});
