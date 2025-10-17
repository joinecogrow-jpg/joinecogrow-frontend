// scripts/test-supabase.js
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Environment check:');
console.log('URL exists:', !!supabaseUrl);
console.log('Key exists:', !!supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase environment variables');
  console.log('Please check your .env.local file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testSupabase() {
  console.log('🧪 Testing Supabase connection...');
  console.log('URL:', supabaseUrl);
  console.log('Key:', supabaseKey.substring(0, 20) + '...');
  
  try {
    // Test basic connection
    const { data, error } = await supabase
      .from('features')
      .select('*')
      .limit(1);
    
    if (error) {
      console.log('⚠️ Table "features" not found or error:', error.message);
      console.log('This is normal if the table doesn\'t exist yet.');
    } else {
      console.log('✅ Supabase connection successful!');
      console.log('Data:', data);
    }
    
    // Test auth
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    console.log('Auth status:', authError ? 'Not authenticated' : 'Authenticated');
    
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
}

testSupabase();
