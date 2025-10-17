// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a mock client if environment variables are not available (for build time)
const createMockClient = () => {
  const mockQuery = Object.assign(
    Promise.resolve({ data: [], error: null, count: 0 }),
    {
      limit: () => mockQuery,
      eq: () => mockQuery,
      range: () => mockQuery,
      order: () => mockQuery,
      single: () => Promise.resolve({ data: null, error: null }),
      or: () => mockQuery
    }
  );
  
  return {
    from: () => ({
      select: () => mockQuery,
      insert: () => Object.assign(
        Promise.resolve({ data: [], error: null }),
        {
          select: () => Object.assign(
            Promise.resolve({ data: null, error: null }),
            { single: () => Promise.resolve({ data: null, error: null }) }
          )
        }
      ),
      update: () => Object.assign(
        Promise.resolve({ data: [], error: null }),
        {
          eq: () => Object.assign(
            Promise.resolve({ data: [], error: null }),
            {
              select: () => Object.assign(
                Promise.resolve({ data: null, error: null }),
                { single: () => Promise.resolve({ data: null, error: null }) }
              )
            }
          )
        }
      ),
      delete: () => Promise.resolve({ data: [], error: null })
    }),
    auth: {
      getUser: () => Promise.resolve({ data: { user: null }, error: null })
    }
  };
};

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient();

// Database types for JoinEcoGrow Platform
export interface Component {
  id: string;
  name: string;
  code: string;
  refined_code?: string;
  created_by_v0: boolean;
  created_at: string;
  updated_at: string;
  feature_id?: string;
}

export interface Feature {
  id: string;
  name: string;
  category: string;
  description: string;
  component_id?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}
