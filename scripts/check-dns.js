// scripts/check-dns.js
// DNS Check Script for joinecogrow.com

const { exec } = require('child_process');

function checkDNS() {
  console.log('🔍 Checking DNS configuration for joinecogrow.com...\n');
  
  // Check nameservers
  exec('nslookup -type=NS joinecogrow.com', (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Error checking nameservers:', error);
      return;
    }
    console.log('📡 Current Nameservers:');
    console.log(stdout);
  });
  
  // Check A records
  exec('nslookup joinecogrow.com', (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Error checking A records:', error);
      return;
    }
    console.log('🌐 Current A Records:');
    console.log(stdout);
  });
  
  // Check if domain resolves to Vercel
  setTimeout(() => {
    console.log('\n✅ Expected Results:');
    console.log('Nameservers should be:');
    console.log('  - ns1.vercel-dns.com');
    console.log('  - ns2.vercel-dns.com');
    console.log('\nA Records should be:');
    console.log('  - 76.76.21.21 (Vercel IP)');
    console.log('\nIf you see different results, DNS changes are still propagating.');
  }, 1000);
}

// Run the check
checkDNS();
