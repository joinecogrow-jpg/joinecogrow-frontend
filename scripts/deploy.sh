#!/bin/bash

# JoinEcoGrow Platform Deployment Script

echo "🚀 Starting JoinEcoGrow Platform Deployment..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌱 Your JoinEcoGrow Platform is now live!"
