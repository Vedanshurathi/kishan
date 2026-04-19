#!/usr/bin/env node
// Simple deployment script for Kisan Suraksha AI
// Try deploying to multiple free hosting services

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('============================================');
console.log('   Kisan Suraksha AI - Auto Deploy Script   ');
console.log('============================================\n');

// Check if build folder exists
const buildPath = path.join(__dirname, 'build');
if (!fs.existsSync(buildPath)) {
  console.log('❌ Build folder not found!');
  console.log('Please run: npm run build');
  process.exit(1);
}

console.log('✅ Build folder found!\n');

// Try deploying to different services
async function deploy() {
  // Method 1: Try Surge
  console.log('Attempting deploy to Surge...');
  try {
    execSync('npx surge ./build kisan-suraksha-ai-web.surge.sh', { 
      stdio: 'inherit',
      cwd: __dirname
    });
    console.log('✅ Deployed to Surge!');
    return;
  } catch (e) {
    console.log('⚠️  Surge failed, trying other methods...\n');
  }

  // Method 2: Try Vercel
  console.log('Attempting deploy to Vercel...');
  try {
    execSync('npx vercel deploy --prod ./build', { 
      stdio: 'inherit',
      cwd: __dirname
    });
    console.log('✅ Deployed to Vercel!');
    return;
  } catch (e) {
    console.log('⚠️  Vercel failed...\n');
  }

  console.log('============================================');
  console.log('Free deployment options:');
  console.log('============================================');
  console.log('1. Netlify: https://app.netlify.com/drag-and-drop');
  console.log('2. Vercel: https://vercel.com/drag-and-drop');
  console.log('3. GitHub Pages: Upload to GitHub repo');
  console.log('4. Firebase: firebase deploy --only hosting');
  console.log('5. Render: https://render.com/deploy');
  console.log('\nQuick instructions for Netlify:');
  console.log('1. Go to https://app.netlify.com');
  console.log('2. Drag build folder to drop zone');
  console.log('3. Get your free URL!');
}

deploy();