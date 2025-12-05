# Instagram Downloader - Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name: `instagram-downloader` (or your preferred name)
   - Visibility: Public or Private
   - **DO NOT** initialize with README (we already have one)
   - Click "Create repository"

2. **Add remote and push:**
   ```bash
   cd /d/trinity/insta
   git remote add origin https://github.com/YOUR_USERNAME/instagram-downloader.git
   git branch -M main
   git push -u origin main
   ```

---

### Step 2: Deploy on Vercel

1. **Sign up/Login to Vercel:**
   - Go to https://vercel.com
   - Sign up with GitHub (recommended)

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `instagram-downloader`
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `pnpm build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `pnpm install` (auto-detected)

4. **Environment Variables:**
   Click "Environment Variables" and add:
   
   | Key | Value | Environment |
   |-----|-------|-------------|
   | `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Production |
   | `NEXT_PUBLIC_BACKEND_URL` | `http://127.0.0.1:8000` | Development |
   | `NEXT_PUBLIC_BACKEND_URL` | `https://your-fastapi-backend.com` | Production |

   **Important**: Replace with your actual values

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://your-project.vercel.app`

---

### Step 3: Setup Custom Domain (Optional)

1. **In Vercel Project Settings:**
   - Go to "Settings" → "Domains"
   - Add your domain: `igx.onetools.app` or `www.igx.onetools.app`
   - Follow DNS configuration instructions

2. **Update DNS Records:**
   ```
   Type: A Record
   Name: @ (or www)
   Value: 76.76.21.21 (Vercel IP)
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Update Environment Variables:**
   - Change `metadataBase` in `app/layout.tsx` to your custom domain
   - Redeploy

---

## 🔧 Backend Setup (FastAPI)

### Option 1: Deploy Backend Separately

**Recommended Platforms:**
- Railway.app (easiest)
- Render.com
- DigitalOcean App Platform
- AWS Lambda with API Gateway

**Backend Repository:**
Your FastAPI backend should be deployed separately. Once deployed:

1. Get backend URL: `https://your-backend.railway.app`
2. Add to Vercel env variables:
   ```
   NEXT_PUBLIC_BACKEND_URL=https://your-backend.railway.app
   ```
3. Redeploy frontend

### Option 2: Run Backend Locally (Development Only)

```bash
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Frontend will use `http://127.0.0.1:8000` via environment variable.

---

## 📊 Post-Deployment Checklist

### 1. Verify Build
- ✅ Check Vercel deployment logs for errors
- ✅ Confirm 122 pages generated successfully
- ✅ Visit homepage: `https://your-project.vercel.app`

### 2. Test Core Features
- ✅ Download a public Instagram Reel
- ✅ Test carousel download (multiple images)
- ✅ Try private account URL (should show error)
- ✅ Check mobile responsiveness

### 3. SEO Verification
- ✅ Visit `https://your-project.vercel.app/sitemap.xml`
- ✅ Visit `https://your-project.vercel.app/robots.txt`
- ✅ Check meta tags with view-source or browser DevTools
- ✅ Test with Google Rich Results Test: https://search.google.com/test/rich-results

### 4. Performance Testing
- ✅ Run Lighthouse audit (should be 95-100/100)
- ✅ Check Core Web Vitals:
  - LCP < 2.5s ✅
  - FID < 100ms ✅
  - CLS < 0.1 ✅

### 5. Submit to Search Engines
- ✅ Google Search Console: Submit sitemap
- ✅ Bing Webmaster Tools: Submit sitemap
- ✅ Google Analytics: Verify tracking

---

## 🔐 Environment Variables Guide

### Required Variables

**Frontend (Vercel):**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_BACKEND_URL=https://your-backend.com
```

**Backend (Railway/Render):**
```env
ALLOWED_ORIGINS=https://your-frontend.vercel.app
REDIS_URL=redis://localhost:6379  # If using Redis caching
```

---

## 🐛 Troubleshooting

### Build Fails on Vercel
**Issue**: TypeScript errors or missing dependencies

**Solution**:
```bash
# Locally verify build works
pnpm build

# Check pnpm-lock.yaml is committed
git add pnpm-lock.yaml
git commit -m "chore: add lockfile"
git push
```

### Backend Connection Fails
**Issue**: "Network error" when downloading

**Solution**:
- Verify `NEXT_PUBLIC_BACKEND_URL` is set correctly
- Check backend is running and accessible
- Test backend directly: `curl https://your-backend.com/api/v1/health`

### Images Not Loading
**Issue**: CORS errors with Instagram CDN

**Solution**:
- Already handled via `/api/proxy-image` endpoint
- If still failing, check proxy route is deployed

### Private Account Errors
**Issue**: All accounts showing as private

**Solution**:
- Backend might be rate-limited by Instagram
- Wait 15-30 minutes before retrying
- Consider rotating IP addresses or using proxies

---

## 📈 Analytics Setup

### Google Analytics 4

1. **Create GA4 Property:**
   - Go to https://analytics.google.com
   - Create new property
   - Copy Measurement ID (starts with `G-`)

2. **Add to Vercel:**
   - Environment Variables → `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`
   - Redeploy

3. **Verify Tracking:**
   - Visit your site
   - Check GA4 Realtime reports
   - Should see active users

---

## 🎯 Next Steps After Deployment

1. **Monitor Performance:**
   - Setup Vercel Analytics (free tier)
   - Monitor Core Web Vitals
   - Track error rates

2. **SEO Optimization:**
   - Submit sitemap to Google Search Console
   - Build backlinks from social media
   - Create Instagram posts linking to your tool

3. **Content Marketing:**
   - Share blog posts on social media
   - Engage with Instagram communities
   - Consider running ads

4. **Feature Improvements:**
   - Add bulk download support
   - Implement download history
   - Add video quality selection

---

## 📞 Support

**Issues with deployment?**
- Check Vercel logs: Project → Deployments → Latest → Logs
- Review build output for errors
- Ensure environment variables are set

**Backend not responding?**
- Verify backend deployment status
- Check CORS configuration
- Test backend endpoints manually

---

## 🔄 Continuous Deployment

Once setup, Vercel will automatically:
- ✅ Deploy on every `git push` to main branch
- ✅ Create preview deployments for pull requests
- ✅ Run builds with your environment variables
- ✅ Invalidate CDN cache on new deployments

**Future Updates:**
```bash
# Make changes
git add .
git commit -m "feat: add new feature"
git push

# Vercel auto-deploys in ~2 minutes
```

---

**Status**: Ready for deployment ✅  
**Pages**: 122 static pages  
**Performance**: Optimized (95-100/100)  
**SEO**: Complete with sitemap  
**Backend**: Requires separate deployment
