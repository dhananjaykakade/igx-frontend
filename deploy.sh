#!/bin/bash

# Instagram Downloader - GitHub & Vercel Deployment Script
# Run this to push to GitHub and deploy to Vercel

set -e  # Exit on error

echo "🚀 Instagram Downloader - Deployment Setup"
echo "=========================================="
echo ""

# Check if git remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Git remote already configured"
    echo "   Remote: $(git remote get-url origin)"
else
    echo "⚠️  No git remote configured"
    echo ""
    read -p "Enter your GitHub repository URL (e.g., https://github.com/username/instagram-downloader.git): " REPO_URL
    
    if [ -z "$REPO_URL" ]; then
        echo "❌ Repository URL cannot be empty"
        exit 1
    fi
    
    echo "📡 Adding remote origin..."
    git remote add origin "$REPO_URL"
    echo "✅ Remote added successfully"
fi

echo ""
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Code pushed to GitHub successfully!"
echo ""
echo "=========================================="
echo "📋 Next Steps:"
echo "=========================================="
echo ""
echo "1. Deploy to Vercel:"
echo "   • Go to https://vercel.com/new"
echo "   • Import your GitHub repository"
echo "   • Click 'Deploy' (it will auto-detect Next.js)"
echo ""
echo "2. Add Environment Variables in Vercel:"
echo "   • NEXT_PUBLIC_GA_ID (your Google Analytics ID)"
echo "   • NEXT_PUBLIC_BACKEND_URL (your FastAPI backend URL)"
echo ""
echo "3. Deploy Backend Separately:"
echo "   • Use Railway.app, Render.com, or DigitalOcean"
echo "   • Deploy your FastAPI backend"
echo "   • Update NEXT_PUBLIC_BACKEND_URL in Vercel"
echo ""
echo "4. Verify Deployment:"
echo "   • Visit your Vercel deployment URL"
echo "   • Test downloading a public Instagram Reel"
echo "   • Check /sitemap.xml and /robots.txt"
echo ""
echo "=========================================="
echo "📖 Full deployment guide: DEPLOYMENT_GUIDE.md"
echo "=========================================="
