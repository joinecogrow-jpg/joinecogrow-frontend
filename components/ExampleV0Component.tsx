// Example V0 Component - Ready for Cursor AI Enhancement
// Paste your V0 code here, then use Ctrl+K enhancements

'use client';

import React from 'react';

export default function ExampleV0Component() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <img 
            className="h-12 w-12 rounded-full" 
            src="/placeholder-avatar.jpg" 
            alt="User avatar"
          />
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-900">John Doe</h2>
            <p className="text-sm text-gray-500">Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
ENHANCEMENT WORKFLOW:

1. PASTE YOUR V0 CODE ABOVE (replace this example)

2. USE CURSOR AI ENHANCEMENTS:

   Ctrl+K: "Add error handling and loading states"
   - Include loading spinner while data is being fetched
   - Error boundary for component failures
   - Retry functionality for failed requests
   - Proper error messages for users
   - Use React.Suspense for async operations

   Ctrl+K: "Integrate with Supabase for data"
   - Fetch user profile data from Supabase users table
   - Handle authentication state
   - Add CRUD operations for user profile updates
   - Use Supabase real-time subscriptions for live updates
   - Implement proper data validation and sanitization
   - Add optimistic updates for better UX

   Ctrl+K: "Add proper TypeScript types"
   - Define proper interfaces for user data
   - Add type safety for props and state
   - Create types for Supabase responses and errors
   - Add generic types for reusable components
   - Include JSDoc comments for better IntelliSense
   - Add strict type checking for all functions

3. REGISTER WITH V0 SYNC:
   npm run sync:v0

4. TEST AND DEPLOY:
   npm run build
   npm run deploy
*/
