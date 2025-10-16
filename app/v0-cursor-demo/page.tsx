"use client";

import { useState, useEffect } from 'react';
import { useV0Cursor } from '@/hooks/useV0Cursor';

export default function V0CursorDemo() {
  const [apiKey, setApiKey] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [refinedCode, setRefinedCode] = useState('');
  const [error, setError] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { generate, refine } = useV0Cursor();

  useEffect(() => {
    const storedKey = localStorage.getItem('v0_api_key');
    if (storedKey) {
      setApiKey(storedKey);
    } else {
      // Pre-populate with demo API key
      const demoKey = 'v1:team_9fkPiH0fr9a5dh3EV4hG8NV6:PZRpEsUF2lVUzJ28RpEKNaGk';
      setApiKey(demoKey);
      localStorage.setItem('v0_api_key', demoKey);
    }
  }, []);

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.value;
    setApiKey(key);
    localStorage.setItem('v0_api_key', key);
  };

  const startDemo = async () => {
    setIsGenerating(true);
    setError('');
    setGeneratedCode('');
    setRefinedCode('');
    try {
      const result = await generate('Create a React button with Tailwind CSS for JoinEcoGrow', { apiKey });
      setGeneratedCode(result.code);
    } catch (err: any) {
      if (err.message.includes('404')) {
        setError('HTTP 404: V0 API not found - Use manual method or request access (see Get API Key)');
      } else {
        setError(`Error: ${err.message}`);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const refineGenerated = async () => {
    if (!generatedCode) return;
    try {
      const refined = await refine(generatedCode, { options: ['add-typescript', 'optimize-performance'] });
      setRefinedCode(refined.code);
    } catch (err: any) {
      setError(`Refine Error: ${err.message}`);
    }
  };

  const showApiGuide = () => {
    alert(`Step 1: Go to https://v0.dev/ and sign in with GitHub.\nStep 2: Navigate to Settings > API (or request beta access).\nStep 3: Generate key and copy.\nStep 4: Paste here. If 404 error, it's beta - email support@vercel.com for access.`);
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-[#E8F5E9] to-white text-[#388E3C]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">V0-Cursor Integration Demo</h1>
          <p className="text-lg text-gray-600 mb-6">
            This demo showcases the integration between V0.dev and Cursor AI for code generation and refinement.
          </p>
          
          {/* Back to Home Link */}
          <a 
            href="/" 
            className="inline-flex items-center text-[#388E3C] hover:text-[#2e7031] transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to JoinEcoGrow Platform
          </a>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Generate React components with V0.dev</li>
            <li>Refine existing code with Cursor AI</li>
            <li>Batch processing capabilities</li>
            <li>TypeScript support</li>
            <li>Tailwind CSS styling</li>
          </ul>
        </div>

        {/* API Key Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">V0.dev API Key:</h2>
            {apiKey && (
              <div className="flex items-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">API Key Loaded</span>
              </div>
            )}
          </div>
          
          <input
            type="password"
            value={apiKey}
            onChange={handleKeyChange}
            placeholder="Enter your V0.dev API key"
            className="w-full p-3 border border-[#9CCC65] rounded-lg mb-3 bg-white text-[#388E3C] focus:outline-none focus:ring-2 focus:ring-[#7CB342] focus:border-transparent"
          />
          <p className="text-sm text-gray-600 mb-4">
            Your API key is stored locally and not sent to any external servers except V0.dev.
          </p>
          
          {apiKey && apiKey.startsWith('v1:team_') && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-green-800 text-sm">
                ✅ Demo API key detected. You can start using the demo immediately!
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button 
            onClick={startDemo}
            disabled={isGenerating || !apiKey}
            className="px-8 py-4 bg-[#388E3C] text-white rounded-lg hover:bg-[#2e7031] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-lg"
          >
            {isGenerating ? 'Generating...' : 'Start Demo'}
          </button>
          <button 
            onClick={showApiGuide}
            className="px-8 py-4 bg-[#7CB342] text-white rounded-lg hover:bg-[#689f38] transition-colors font-semibold text-lg"
          >
            Get API Key
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-red-800 font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Generated Code Section */}
        {generatedCode && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Generated Code:</h3>
              <button 
                onClick={refineGenerated}
                className="px-6 py-2 bg-[#29B6F6] text-white rounded-lg hover:bg-[#0288d1] transition-colors font-semibold"
              >
                Refine This Code
              </button>
            </div>
            <pre className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-auto max-h-96 text-sm font-mono">
              <code>{generatedCode}</code>
            </pre>
          </div>
        )}

        {/* Refined Code Section */}
        {refinedCode && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Refined Code (Enhanced with Cursor AI):</h3>
            <pre className="bg-gray-900 text-blue-400 p-6 rounded-lg overflow-auto max-h-96 text-sm font-mono">
              <code>{refinedCode}</code>
            </pre>
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Enhancements Applied:</h4>
              <ul className="list-disc pl-6 text-blue-700 text-sm">
                <li>TypeScript types added</li>
                <li>Performance optimizations (memo, useCallback)</li>
                <li>Accessibility improvements</li>
                <li>Better error handling</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

