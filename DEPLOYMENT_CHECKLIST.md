# 🚀 Deployment Checklist - IGX

Use this checklist before deploying to production.

---

## Pre-Deployment

### 1. Environment Configuration
- [ ] Create `.env.local` with production values
- [ ] Set `SITE_URL` to your production domain (e.g., `https://igx.onetools.app`)
- [ ] Add Google Analytics ID: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
- [ ] Set production FastAPI URL: `NEXT_PUBLIC_API_URL=https://api.yourdomain.com`
- [ ] Remove or backup any test/development credentials

### 2. Content Review
- [ ] Review all blog post content in `lib/blog-data.ts`
- [ ] Verify about page content (`app/about/page.tsx`)
- [ ] Check FAQ content (`app/faq/page.tsx`)
- [ ] Review how-it-works page (`app/how-it-works/page.tsx`)
- [ ] Verify footer information and pricing
- [ ] Check navbar links and branding

### 3. SEO Setup
- [ ] Google Analytics account created and configured
- [ ] Measurement ID copied and added to environment
- [ ] Google Search Console account created
- [ ] Site ownership verified in Search Console
- [ ] Sitemap URL ready to submit: `https://igx.onetools.app/sitemap.xml`

### 4. Technical Checks
- [ ] Run `pnpm build` successfully
- [ ] Test production build locally: `pnpm start`
- [ ] No TypeScript errors: `pnpm lint`
- [ ] All images load correctly
- [ ] No console errors in browser
- [ ] Mobile responsive check (Chrome DevTools)
- [ ] Test download functionality with FastAPI backend

---

## Build & Test

### Build Process
```bash
# Install dependencies
pnpm install

# Run build (includes sitemap generation)
pnpm build

# Start production server locally
pnpm start
```

### Verify Generated Files
- [ ] `public/sitemap.xml` exists
- [ ] `public/robots.txt` exists
- [ ] Check sitemap contains all URLs: http://localhost:3000/sitemap.xml
- [ ] Verify robots.txt: http://localhost:3000/robots.txt

### Test All Pages
- [ ] Home page loads: http://localhost:3000/
- [ ] Blog listing: http://localhost:3000/blog
- [ ] Sample blog post: http://localhost:3000/blog/instagram-reels-best-practices-2025
- [ ] About page: http://localhost:3000/about
- [ ] FAQ page: http://localhost:3000/faq
- [ ] How it works: http://localhost:3000/how-it-works
- [ ] 404 page: http://localhost:3000/non-existent-page

### Test Functionality
- [ ] Download form accepts valid Instagram URLs
- [ ] Error messages display for invalid URLs
- [ ] Video preview displays correctly
- [ ] Download button works
- [ ] Thumbnails load via proxy
- [ ] Video downloads via proxy
- [ ] Toast notifications work

---

## Deployment (Vercel)

### 1. Connect Repository
```bash
# Initialize git if not already
git init
git add .
git commit -m "Initial commit - IGX Production Ready"
git remote add origin <your-repo-url>
git push -u origin main

# Or deploy directly
vercel
```

### 2. Configure Vercel Project
- [ ] Project created in Vercel dashboard
- [ ] Repository connected
- [ ] Build command: `pnpm build`
- [ ] Output directory: `.next`
- [ ] Install command: `pnpm install`

### 3. Set Environment Variables in Vercel
Go to Project Settings → Environment Variables

Add these variables:
- [ ] `SITE_URL` = `https://igx.onetools.app` (your production domain)
- [ ] `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX` (your GA4 ID)
- [ ] `NEXT_PUBLIC_API_URL` = `https://api.igx.onetools.app` (your production API)

### 4. Deploy
- [ ] Trigger deployment
- [ ] Wait for build completion
- [ ] Check deployment logs for errors
- [ ] Visit preview URL

---

## Post-Deployment

### 1. Verify Production Site
- [ ] Visit production URL
- [ ] Test all pages load correctly
- [ ] Check browser console for errors
- [ ] Verify Google Analytics script is loaded
- [ ] Test download functionality end-to-end
- [ ] Check mobile responsiveness
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

### 2. SEO Submission
- [ ] Submit sitemap to Google Search Console
  - Go to: https://search.google.com/search-console
  - Add property: https://igx.onetools.app
  - Submit sitemap: https://igx.onetools.app/sitemap.xml
  
- [ ] Submit sitemap to Bing Webmaster Tools
  - Go to: https://www.bing.com/webmasters
  - Add site: https://igx.onetools.app
  - Submit sitemap: https://igx.onetools.app/sitemap.xml

### 3. Analytics Verification
- [ ] Check Google Analytics Real-Time view
- [ ] Visit your site and verify traffic appears
- [ ] Test page view tracking
- [ ] Wait 24-48 hours for full data

### 4. Structured Data Validation
- [ ] Test with Google Rich Results Test:
  - URL: https://search.google.com/test/rich-results
  - Enter: https://igx.onetools.app
  - Verify all schemas valid (Organization, Website, WebApplication, HowTo)
  
- [ ] Test with Schema Markup Validator:
  - URL: https://validator.schema.org/
  - Enter: https://igx.onetools.app
  - Fix any warnings

### 5. Performance Check
- [ ] Test with PageSpeed Insights: https://pagespeed.web.dev/
  - Target: 90+ score for both mobile and desktop
  
- [ ] Test with GTmetrix: https://gtmetrix.com/
  - Target: Grade A, Load time < 3s

### 6. Social Media Preview
- [ ] Test with Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Test with Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] Verify Open Graph images and descriptions

---

## Security & Compliance

### Security Checks
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] No sensitive data in environment variables exposed to client
- [ ] API endpoints use HTTPS in production
- [ ] CORS configured correctly on FastAPI backend
- [ ] No API keys in client-side code

### Legal & Compliance
- [ ] Privacy policy page (if required)
- [ ] Terms of service page (if required)
- [ ] Cookie consent (if required by region)
- [ ] GDPR compliance (if serving EU users)
- [ ] Instagram's terms of service compliance

---

## Monitoring Setup

### 1. Set Up Alerts
- [ ] Configure Vercel deployment notifications
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Configure uptime monitoring (e.g., UptimeRobot)
- [ ] Set up Google Analytics email alerts

### 2. Regular Checks
- [ ] Monitor Google Analytics weekly
- [ ] Check Search Console for crawl errors
- [ ] Review site performance monthly
- [ ] Update content regularly

---

## Backup & Recovery

### Create Backups
- [ ] Export database (if applicable)
- [ ] Backup environment variables
- [ ] Save deployment configuration
- [ ] Document custom domain settings
- [ ] Keep copy of `.env.local`

---

## Marketing Launch

### 1. Social Media
- [ ] Announce on Twitter/X
- [ ] Post on Instagram
- [ ] Share on Facebook
- [ ] Post in relevant Reddit communities
- [ ] Share on LinkedIn

### 2. SEO Strategy
- [ ] Start building backlinks
- [ ] Submit to web directories
- [ ] Guest post on relevant blogs
- [ ] Engage with Instagram community

### 3. Content Marketing
- [ ] Schedule weekly blog posts
- [ ] Create video tutorials
- [ ] Build email list
- [ ] Start newsletter

---

## Success Metrics

### Week 1 Goals
- [ ] Site indexed by Google
- [ ] 100+ daily visitors
- [ ] No critical errors
- [ ] GA tracking working

### Month 1 Goals
- [ ] 1,000+ daily visitors
- [ ] Top 10 for "instagram reels downloader without ads"
- [ ] 5+ backlinks
- [ ] 50+ blog subscribers

### Month 3 Goals
- [ ] 10,000+ daily visitors
- [ ] Top 3 for primary keyword
- [ ] 100+ backlinks
- [ ] 1,000+ blog subscribers

---

## Emergency Contacts

**Technical Issues**:
- Vercel Support: support@vercel.com
- FastAPI Backend: [Your backend team contact]

**Business Inquiries**:
- Email: business@igx.onetools.app

---

## Final Checklist Before Go-Live

- [ ] All above sections completed
- [ ] Stakeholders notified
- [ ] Launch announcement ready
- [ ] Monitoring in place
- [ ] Support process documented
- [ ] Backup strategy confirmed

---

## 🎉 Ready to Launch!

Once all items are checked, you're ready to go live!

**Launch Command**:
```bash
vercel --prod
```

**Or via Git**:
```bash
git push origin main
# Vercel auto-deploys
```

---

**Good luck with your launch! 🚀**

For questions: business@igx.onetools.app
