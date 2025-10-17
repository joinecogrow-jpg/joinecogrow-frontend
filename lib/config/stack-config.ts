// lib/config/stack-config.ts
export const stackConfig = {
  v0: {
    apiUrl: 'https://v0.dev/api',
    projectId: 'your-v0-project'
  },
  cursor: {
    workspacePath: process.cwd(),
    rulesPath: '.cursorrules',
    mcpConfig: '.cursor/mcp.json'
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  },
  temporal: {
    address: 'temporal.joinecogrow.com',
    namespace: 'default'
  },
  crewai: {
    apiKey: process.env.CREWAI_API_KEY
  },
  stackai: {
    apiKey: process.env.STACKAI_API_KEY
  },
  monitoring: {
    grafana: 'https://grafana.joinecogrow.com',
    opentelemetry: 'https://otel.joinecogrow.com'
  }
};
