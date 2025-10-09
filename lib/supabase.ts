// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qexiyflqdrzouoimrbzn.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Profile {
  id: string
  email: string
  username?: string
  full_name?: string
  avatar_url?: string
  eco_points: number
  trees_planted: number
  carbon_offset: number
  created_at: string
}

export interface Tree {
  id: string
  user_id: string
  species: string
  location: { lat: number; lng: number }
  planted_date: string
  growth_stage: string
  verified: boolean
  nft_token_id?: string
  qr_code?: string
}

export interface Feature {
  id: string
  name: string
  category: string
  enabled: boolean
  rollout_percentage: number
}