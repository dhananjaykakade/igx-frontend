# Quick Setup Guide - IGX

## 🚀 Complete Setup in 5 Minutes

### Step 1: Install Dependencies
```bash
pnpm install
```

### Step 2: Configure Environment
Copy the example environment file:
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
SITE_URL=https://igx.onetools.app
NEXT_PUBLIC_GA_ID=G-YOUR-MEASUREMENT-ID
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

### Step 3: Start FastAPI Backend
Make sure your FastAPI server is running on port 8000.

### Step 4: Run Development Server
```bash
pnpm dev
```

Visit: http://localhost:3000

---

## 📊 Google Analytics Setup

1. Go to https://analytics.google.com/
2. Create new GA4 property
3. Copy your Measurement ID (G-XXXXXXXXXX)
4. Add to `.env.local` as `NEXT_PUBLIC_GA_ID`
5. Restart dev server

---

## 🗺️ Sitemap Generation

The sitemap is automatically generated during build:

```bash
pnpm build
```

Files created:
- `public/sitemap.xml` - Main sitemap with all URLs
- `public/robots.txt` - Search engine instructions

View sitemap: http://localhost:3000/sitemap.xml

---

## 🎨 Theme Customization

The theme uses blue, black, and white colors (no gradients).

Primary color is defined in `app/globals.css`:
```css
--primary: 211 100% 60%; /* Blue */
```

To change colors, edit the CSS variables in `globals.css`.

---

## 📝 Content Management

### Blog Posts
All 100+ blog posts are in `lib/blog-data.ts`. Each post includes:
- Title
- Description  
- Slug
- Category
- Tags
- Reading time

### Pages
Static pages in `app/`:
- `/` - Home page with downloader
- `/blog` - Blog listing (100+ posts)
- `/about` - About page
- `/faq` - FAQ page
- `/how-it-works` - How it works guide

---

## 💼 Backend Script Sales

Footer includes pricing info:
- **India**: ₹500
- **International**: $9
- **Contact**: business@igx.onetools.app

Edit in `components/Footer.tsx` to change pricing or email.

---

## 🔍 SEO Features Included

✅ Structured Data (JSON-LD):
- Organization schema
- Website schema
- WebApplication schema
- HowTo schema
- Article schema (blog posts)
- FAQ schema
- Breadcrumb schema

✅ Meta Tags:
- Title, description, keywords
- Open Graph tags
- Twitter Card tags

✅ Sitemap & Robots.txt:
- Auto-generated with all pages
- 100+ blog post URLs included
- Daily/weekly changefreq
- Priority weights

✅ Google Analytics:
- GA4 integration
- Automatic page tracking
- Event tracking ready

---

## 🚢 Production Deployment

### Build for Production
```bash
pnpm build
```

This will:
1. Build Next.js app
2. Generate sitemap.xml
3. Generate robots.txt
4. Optimize assets

### Start Production Server
```bash
pnpm start
```

### Deploy to Vercel
```bash
vercel
```

Make sure to set environment variables in Vercel dashboard:
- `SITE_URL` - Your production domain
- `NEXT_PUBLIC_GA_ID` - Your GA4 Measurement ID
- `NEXT_PUBLIC_API_URL` - Your production FastAPI URL

---

## 🐛 Common Issues

### Issue: API not responding
**Solution**: Verify FastAPI is running on http://127.0.0.1:8000

### Issue: CORS errors with Instagram images
**Solution**: App includes proxy endpoints to handle CORS automatically

### Issue: Sitemap not found
**Solution**: Run `pnpm build` to generate sitemap

### Issue: GA not tracking
**Solution**: 
1. Check `NEXT_PUBLIC_GA_ID` is set correctly
2. Use production build to test
3. Wait 24-48 hours for data in GA dashboard

---

## 📚 Key Files Reference

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with metadata & GA |
| `app/page.tsx` | Home page with structured data |
| `components/GoogleAnalytics.tsx` | GA4 integration |
| `components/StructuredData.tsx` | JSON-LD schemas |
| `next-sitemap.config.js` | Sitemap configuration |
| `lib/blog-data.ts` | All blog posts |
| `app/globals.css` | Theme colors |
| `.env.local` | Environment variables |

---

## 🎯 SEO Checklist

Before going live, verify:

- [ ] Google Analytics ID is set
- [ ] SITE_URL is set to production domain
- [ ] Sitemap generated (`/sitemap.xml` accessible)
- [ ] Robots.txt exists (`/robots.txt` accessible)
- [ ] All meta tags present (check page source)
- [ ] Structured data validates (use Google Rich Results Test)
- [ ] No console errors
- [ ] All links work
- [ ] Mobile responsive
- [ ] Fast page load (<3 seconds)

---

## 📧 Support

For backend script purchase or questions:
- Email: business@igx.onetools.app
- Pricing: ₹500 (India) / $9 (International)

---

**Ready to go live! 🚀**
