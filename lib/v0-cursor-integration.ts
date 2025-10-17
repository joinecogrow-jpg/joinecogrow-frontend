// lib/v0-cursor-integration.ts
import { createClient } from '@supabase/supabase-js'

// V0 Configuration
export const v0Config = {
  projectId: process.env.V0_PROJECT_ID,
  apiKey: process.env.V0_API_KEY,
  syncEnabled: true
}

// Supabase Client
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Integration Functions
export async function syncV0ToCursor() {
  // Pull latest from V0
  const response = await fetch('https://v0.dev/api/sync', {
    headers: {
      'Authorization': `Bearer ${v0Config.apiKey}`
    }
  })
  return response.json()
}

export async function pushCursorToV0(code: string) {
  // Push changes back to V0
  const response = await fetch('https://v0.dev/api/push', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${v0Config.apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ code })
  })
  return response.json()
}
