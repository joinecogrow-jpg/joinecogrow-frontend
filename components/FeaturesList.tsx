// components/FeaturesList.tsx
'use client';

import { useState, useEffect } from 'react';
import { getFeatures, getFeaturesByCategory, searchFeatures, getFeatureStats } from '@/lib/queries/features';

interface Feature {
  id: string;
  name: string;
  category: string;
  description: string;
  component_id?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function FeaturesList() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [stats, setStats] = useState({ totalFeatures: 0, activeFeatures: 0, categories: 0 });

  // V0-compatible categories for JoinEcoGrow Platform
  const categories = [
    'all',
    'diy',
    'trees',
    'entertainment',
    'gaming',
    'ai',
    'iot',
    'blockchain',
    'community',
    'analytics',
    'commerce',
    'enterprise',
    'admin'
  ];

  useEffect(() => {
    loadFeatures();
    loadStats();
  }, []);

  const loadFeatures = async () => {
    try {
      setLoading(true);
      const { data, error } = await getFeatures(1, 50);
      
      if (error) {
        setError(error.message);
      } else {
        setFeatures(data || []);
      }
    } catch (err) {
      setError('Failed to load features');
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const statsData = await getFeatureStats();
      setStats(statsData);
    } catch (err) {
      console.error('Failed to load stats:', err);
    }
  };

  const handleCategoryChange = async (category: string) => {
    setSelectedCategory(category);
    setLoading(true);
    
    try {
      if (category === 'all') {
        await loadFeatures();
      } else {
        const { data, error } = await getFeaturesByCategory(category);
        if (error) {
          setError(error.message);
        } else {
          setFeatures(data || []);
        }
      }
    } catch (err) {
      setError('Failed to filter features');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      handleCategoryChange(selectedCategory);
      return;
    }
    
    setLoading(true);
    try {
      const { data, error } = await searchFeatures(query);
      if (error) {
        setError(error.message);
      } else {
        setFeatures(data || []);
      }
    } catch (err) {
      setError('Failed to search features');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        <span className="ml-2 text-green-600">Loading features...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">Error: {error}</p>
        <button 
          onClick={loadFeatures}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800">Total Features</h3>
          <p className="text-2xl font-bold text-green-600">{stats.totalFeatures}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Active Features</h3>
          <p className="text-2xl font-bold text-blue-600">{stats.activeFeatures}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800">Categories</h3>
          <p className="text-2xl font-bold text-purple-600">{stats.categories}</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search features..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div key={feature.id} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-gray-800">{feature.name}</h3>
              <span className={`px-2 py-1 text-xs rounded-full ${
                feature.is_active 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {feature.is_active ? 'Active' : 'Inactive'}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {feature.category}
              </span>
              <span className="text-xs text-gray-400">
                {new Date(feature.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {features.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No features found</p>
        </div>
      )}
    </div>
  );
}
