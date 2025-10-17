// .cursor/watch.js
const { exec } = require('child_process');
const fs = require('fs');

let timeoutId = null;
const DEBOUNCE_DELAY = 2000; // 2 seconds

// Watch for V0 changes
fs.watch('.', { recursive: true }, (eventType, filename) => {
  if (filename && 
      !filename.includes('node_modules') && 
      !filename.includes('.git') &&
      !filename.includes('index.lock') &&
      (filename.endsWith('.tsx') || filename.endsWith('.ts') || filename.endsWith('.js'))) {
    
    console.log(`File changed: ${filename}`);
    
    // Debounce git operations
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      exec('git pull', (error, stdout) => {
        if (!error) console.log('Synced with V0:', stdout);
      });
    }, DEBOUNCE_DELAY);
  }
});

console.log('Watching for V0 changes...');
