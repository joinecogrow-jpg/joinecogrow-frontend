// components/SupabaseTest.tsx
'use client';

import { supabase } from '@/lib/supabase';
import { useState } from 'react';

export default function SupabaseTest() {
  const [connectionStatus, setConnectionStatus] = useState<string>('Not tested');
  const [testData, setTestData] = useState<any>(null);

  async function testConnection() {
    try {
      setConnectionStatus('Testing...');
      
      const { data, error } = await supabase
        .from('features')
        .select('*')
        .limit(1);
      
      if (error) {
        console.error('Supabase error:', error);
        setConnectionStatus(`Error: ${error.message}`);
      } else {
        console.log('Supabase connected:', data);
        setConnectionStatus('✅ Connected successfully!');
        setTestData(data);
      }
    } catch (err) {
      console.error('Connection test failed:', err);
      setConnectionStatus(`Failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-green-200">
      <h2 className="text-xl font-semibold text-green-800 mb-4">
        🔗 Supabase Connection Test
      </h2>
      
      <button
        onClick={testConnection}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mb-4"
      >
        Test Supabase Connection
      </button>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          <strong>Status:</strong> {connectionStatus}
        </p>
        
        {testData && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Test Data:</strong>
            </p>
            <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto">
              {JSON.stringify(testData, null, 2)}
            </pre>
          </div>
        )}
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This test queries the &apos;features&apos; table. 
          If the table doesn&apos;t exist, you&apos;ll see an error. 
          Check your Supabase dashboard to create the table.
        </p>
      </div>
    </div>
  );
}
