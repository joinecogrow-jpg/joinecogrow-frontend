// components/V0CursorIntegration.tsx
// React component for V0-Cursor integration interface

'use client';

import React, { useState } from 'react';

interface GeneratedComponent {
  id: string;
  name: string;
  description?: string;
  category?: string;
  urls: {
    component: string;
    types: string;
  };
}

export default function V0CursorIntegration() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedComponent, setGeneratedComponent] = useState<GeneratedComponent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [framework, setFramework] = useState<'nextjs' | 'react' | 'vue'>('nextjs');
  const [styling, setStyling] = useState<'tailwind' | 'css' | 'styled-components'>('tailwind');

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a component description');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedComponent(null);

    try {
      const response = await fetch('/api/v0/cursor-integration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          options: {
            framework,
            styling,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate component');
      }

      setGeneratedComponent({
        id: data.component.id,
        name: data.component.name,
        description: data.component.description,
        category: data.component.category,
        urls: data.urls,
      });

      // Clear the prompt for next generation
      setPrompt('');

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsGenerating(false);
    }
  };

  const examplePrompts = [
    'Create a tree planting dashboard with statistics and progress tracking',
    'Build a user profile card with avatar, bio, and social links',
    'Design a feature showcase grid with icons and descriptions',
    'Make a contact form with validation and submission handling',
    'Create a pricing table with multiple tiers and features',
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-2">
          🚀 V0-Cursor Integration
        </h1>
        <p className="text-gray-600">
          Generate components using V0.dev and sync them with your Cursor IDE for JoinEcoGrow Platform.
        </p>
      </div>

      {/* Configuration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Framework
          </label>
          <select
            value={framework}
            onChange={(e) => setFramework(e.target.value as any)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="nextjs">Next.js</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Styling
          </label>
          <select
            value={styling}
            onChange={(e) => setStyling(e.target.value as any)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="tailwind">Tailwind CSS</option>
            <option value="css">CSS</option>
            <option value="styled-components">Styled Components</option>
          </select>
        </div>
      </div>

      {/* Prompt Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Component Description
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the component you want to generate..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 h-32 resize-none"
          disabled={isGenerating}
        />
      </div>

      {/* Example Prompts */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Example prompts:</p>
        <div className="flex flex-wrap gap-2">
          {examplePrompts.map((example, index) => (
            <button
              key={index}
              onClick={() => setPrompt(example)}
              className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              disabled={isGenerating}
            >
              {example}
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        disabled={isGenerating || !prompt.trim()}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        {isGenerating ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating Component...
          </span>
        ) : (
          '🚀 Generate Component'
        )}
      </button>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">Error:</p>
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* Generated Component Display */}
      {generatedComponent && (
        <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            ✅ Component Generated Successfully!
          </h3>
          
          <div className="space-y-3">
            <div>
              <span className="font-medium text-green-700">Name:</span>
              <span className="ml-2 text-green-600">{generatedComponent.name}</span>
            </div>
            
            {generatedComponent.description && (
              <div>
                <span className="font-medium text-green-700">Description:</span>
                <p className="ml-2 text-green-600">{generatedComponent.description}</p>
              </div>
            )}
            
            {generatedComponent.category && (
              <div>
                <span className="font-medium text-green-700">Category:</span>
                <span className="ml-2 text-green-600">{generatedComponent.category}</span>
              </div>
            )}
            
            <div>
              <span className="font-medium text-green-700">Files Created:</span>
              <ul className="ml-2 text-green-600 list-disc list-inside">
                <li>{generatedComponent.urls.component}</li>
                <li>{generatedComponent.urls.types}</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-white rounded border">
            <p className="text-sm text-gray-600">
              🎉 Your component has been generated and synced with Cursor! 
              Check the generated files and start customizing them in your IDE.
            </p>
          </div>
        </div>
      )}

      {/* Integration Status */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          🔧 Integration Status
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-blue-700">V0 API Integration: Active</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-blue-700">Cursor Sync: Enabled</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-blue-700">File System Watch: Active</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-blue-700">Supabase Storage: Connected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
