// lib/queries/features.ts
import { supabase } from '@/lib/supabase';

// V0-compatible feature queries for JoinEcoGrow Platform

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

// Get all features with pagination
export async function getFeatures(page = 1, limit = 10) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  
  const { data, error, count } = await supabase
    .from('features')
    .select('*', { count: 'exact' })
    .range(from, to)
    .order('created_at', { ascending: false });
  
  return { data, error, count };
}

// Get features by category
export async function getFeaturesByCategory(category: string) {
  const { data, error } = await supabase
    .from('features')
    .select('*')
    .eq('category', category)
    .eq('is_active', true)
    .order('name');
  
  return { data, error };
}

// Get feature by ID
export async function getFeatureById(id: string) {
  const { data, error } = await supabase
    .from('features')
    .select('*')
    .eq('id', id)
    .single();
  
  return { data, error };
}

// Search features by name or description
export async function searchFeatures(query: string) {
  const { data, error } = await supabase
    .from('features')
    .select('*')
    .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
    .eq('is_active', true)
    .order('name');
  
  return { data, error };
}

// Create new feature
export async function createFeature(feature: Omit<Feature, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('features')
    .insert([feature])
    .select()
    .single();
  
  return { data, error };
}

// Update feature
export async function updateFeature(id: string, updates: Partial<Feature>) {
  const { data, error } = await supabase
    .from('features')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  
  return { data, error };
}

// Delete feature (soft delete by setting is_active to false)
export async function deleteFeature(id: string) {
  const { data, error } = await supabase
    .from('features')
    .update({ is_active: false })
    .eq('id', id)
    .select()
    .single();
  
  return { data, error };
}

// Get feature statistics
export async function getFeatureStats() {
  const { data: totalFeatures, error: totalError } = await supabase
    .from('features')
    .select('*', { count: 'exact', head: true });
  
  const { data: activeFeatures, error: activeError } = await supabase
    .from('features')
    .select('*', { count: 'exact', head: true })
    .eq('is_active', true);
  
  const { data: categories, error: categoryError } = await supabase
    .from('features')
    .select('category')
    .eq('is_active', true);
  
  const uniqueCategories = Array.from(new Set(categories?.map(c => c.category) || []));
  
  return {
    totalFeatures: totalFeatures?.length || 0,
    activeFeatures: activeFeatures?.length || 0,
    categories: uniqueCategories.length,
    error: totalError || activeError || categoryError
  };
}

// Get features for V0 component generation
export async function getFeaturesForV0(category?: string) {
  const query = supabase
    .from('features')
    .select('id, name, category, description')
    .eq('is_active', true);
  
  if (category) {
    query.eq('category', category);
  }
  
  const { data, error } = await query.order('category, name');
  
  return { data, error };
}
