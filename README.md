# IGX - Instagram Reels Downloader Without Ads

A modern, production-grade Instagram content downloader built with Next.js 16, TypeScript, and shadcn/ui. Features a FastAPI backend for reliable Instagram media fetching, complete with SEO optimization, Google Analytics, and automated sitemap generation.

## Features

- ⚡ **Fast & Modern**: Built with Next.js 16 App Router and React 19
- 🎨 **Beautiful UI**: Crafted with shadcn/ui and Tailwind CSS 4
- 🔄 **React Suspense**: Optimized loading states with Suspense boundaries
- 🪝 **Custom Hooks**: Clean state management with custom React hooks
- 🛡️ **Type-Safe**: Full TypeScript coverage
- 📱 **Responsive**: Works perfectly on all devices
- 🚀 **Production-Ready**: Error boundaries, validation, and proper error handling
- 🐍 **FastAPI Backend**: Real Instagram API integration running on localhost:8000
- 🔍 **SEO Optimized**: Structured data, meta tags, and auto-generated sitemap
- 📊 **Google Analytics**: Built-in GA4 integration
- 🎯 **No Ads**: Clean interface focused on user experience
- 💼 **Backend Script Sales**: Integrated pricing display for backend scraping script

## Supported Content Types

- ✅ **Reels** - Short video content
- ✅ **Posts** - Single images or videos
- ✅ **Carousels** - Multiple images/videos in one post
- ✅ **IGTV** - Long-form video content

## Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **UI Library**: shadcn/ui
- **Styling**: Tailwind CSS 4
- **Validation**: Zod
- **HTTP Client**: Axios
- **Package Manager**: pnpm
- **SEO**: next-sitemap
- **Analytics**: Google Analytics 4

### Backend
- **API**: FastAPI (Python)
- **Running on**: http://127.0.0.1:8000

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 10+
- FastAPI server running on localhost:8000

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd insta
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and configure:
- `SITE_URL`: Your production domain (default: https://igx.onetools.app)
- `NEXT_PUBLIC_GA_ID`: Your Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX)
- `NEXT_PUBLIC_API_URL`: FastAPI backend URL (default: http://127.0.0.1:8000)

Example `.env.local`:
```env
SITE_URL=https://igx.onetools.app
NEXT_PUBLIC_GA_ID=G-ABC123XYZ
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

4. **Start the FastAPI backend** (required):
Make sure your FastAPI server is running on `http://127.0.0.1:8000`

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

Build the app and generate sitemap:

```bash
pnpm build
```

This will:
1. Build the Next.js application
2. Automatically generate `sitemap.xml` with all pages
3. Generate `robots.txt` for SEO

Start the production server:

```bash
pnpm start
```

The sitemap will be available at: `http://localhost:3000/sitemap.xml`

## Project Structure

```
insta/
├── app/
│   ├── api/
│   │   ├── download/
│   │   │   └── route.ts          # API endpoint (Next.js → FastAPI proxy)
│   │   ├── proxy-image/
│   │   │   └── route.ts          # CORS proxy for Instagram images
│   │   └── proxy-download/
│   │       └── route.ts          # CORS proxy for direct downloads
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Dynamic blog post pages
│   │   └── page.tsx              # Blog listing page
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── faq/
│   │   └── page.tsx              # FAQ page
│   ├── how-it-works/
│   │   └── page.tsx              # How it works page
│   ├── layout.tsx                # Root layout with metadata & GA
│   ├── page.tsx                  # Home page with structured data
│   ├── not-found.tsx             # Custom 404 page
│   └── globals.css               # Global styles & theme
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── DownloadForm.tsx          # Main download form
│   ├── VideoPreview.tsx          # Media preview with Suspense
│   ├── ErrorBoundary.tsx         # Error boundary component
│   ├── DownloaderProvider.tsx    # React Context for state
│   ├── Navbar.tsx                # Site navigation
│   ├── Footer.tsx                # Footer with backend script sales info
│   ├── GoogleAnalytics.tsx       # GA4 integration
│   └── StructuredData.tsx        # JSON-LD structured data schemas
├── hooks/
│   └── useDownloader.ts          # Custom hook for downloads
├── lib/
│   ├── instagram.ts              # FastAPI integration
│   ├── validators.ts             # Zod schemas
│   ├── blog-data.ts              # 100+ blog posts data
│   └── utils.ts                  # Utility functions
├── types/
│   └── index.ts                  # TypeScript type definitions
├── next-sitemap.config.js        # Sitemap configuration
└── .env.local.example            # Environment variables template
```

## API Integration

The app integrates with a FastAPI backend running on `localhost:8000`. The backend provides the following endpoints:

### Main Endpoints Used:
- `POST /api/v1/reel` - Fetch Instagram Reels
- `POST /api/v1/post` - Fetch Instagram Posts/Carousels
- `POST /api/v1/igtv` - Fetch IGTV videos

### Request Format:
```json
{
  "url": "https://www.instagram.com/reel/SHORTCODE/"
}
```

### Response Format:
```json
{
  "success": true,
  "shortcode": "DMItvFIxAVe",
  "content_type": "GraphVideo",
  "is_video": true,
  "media_items": [],
  "thumbnail_url": "https://...",
  "caption": "Post caption...",
  "owner_username": "username",
  "owner_id": 12345,
  "likes": 175449,
  "comments": 372,
  "timestamp": "2025-07-15T17:07:27",
  "location": null,
  "tagged_users": [],
  "error_message": null
}
```

**Note:** The current backend returns `thumbnail_url` but may need to provide the actual video download URL separately. The frontend will use the thumbnail URL as a fallback.

## Features Explained

### SEO Optimization
- **Structured Data**: JSON-LD schemas for Organization, WebSite, WebApplication, HowTo, Article, and FAQ
- **Sitemap**: Auto-generated with all 100+ blog posts and pages
- **Meta Tags**: Comprehensive meta tags with focus on "instagram reels downloader without ads"
- **robots.txt**: Automatically generated for search engines
- **Breadcrumbs**: Schema breadcrumb navigation for better SEO

### Google Analytics Integration
- **GA4 Ready**: Built-in Google Analytics 4 support
- **Environment-based**: Only loads when `NEXT_PUBLIC_GA_ID` is set
- **Performance**: Uses Next.js Script component with `afterInteractive` strategy
- **Page Tracking**: Automatic page view tracking

### Custom Hooks
- `useDownloader`: Manages download state, API calls, and error handling with React transitions

### Suspense Boundaries
- Implemented in `VideoPreview` for optimized loading states
- Automatic fallback to skeleton components
- Prevents layout shift during data loading

### Error Handling
- `ErrorBoundary` component catches runtime errors
- API validation with Zod schemas
- User-friendly error messages with toast notifications
- Connection error detection for FastAPI server

### Type Safety
- Full TypeScript coverage across frontend and API integration
- Zod runtime validation for URLs
- Type-safe API responses matching FastAPI schema

### Enhanced Media Display
- Shows engagement stats (likes, comments, plays)
- Displays all carousel items in a grid
- Video/image type detection
- Responsive thumbnail previews
- CORS proxy for seamless image/video display and downloads

### Content Strategy
- **100+ Blog Posts**: SEO-optimized articles about Instagram, Reels, and social media
- **Multiple Pages**: About, FAQ, How It Works pages for better search visibility
- **Backend Script Sales**: Footer section with regional pricing (₹500 for India, $9 for international)

## Environment Variables

```env
# Site Configuration
SITE_URL=https://igx.onetools.app

# Google Analytics
# Get your GA4 Measurement ID from https://analytics.google.com/
# Format: G-XXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# FastAPI Backend URL (for local development)
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

# Optional: Rate limiting
RATE_LIMIT_MAX_REQUESTS=10
RATE_LIMIT_WINDOW_MS=60000
```

### Setting up Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Add it to your `.env.local` file as `NEXT_PUBLIC_GA_ID`
5. Deploy or restart your development server

The Google Analytics script will automatically be included and start tracking page views.

## Troubleshooting

### "API server is not running" Error
Make sure your FastAPI backend is running on `http://127.0.0.1:8000`. You can verify by visiting:
```
http://127.0.0.1:8000/health
```

### CORS Issues
The app includes built-in CORS proxy endpoints (`/api/proxy-image` and `/api/proxy-download`) to handle Instagram CDN CORS restrictions. If you're still experiencing issues in production, ensure your FastAPI backend has proper CORS configuration for your frontend domain.

### Sitemap Not Generating
Make sure `next-sitemap` is installed:
```bash
pnpm add next-sitemap
```

Run the build command which automatically generates the sitemap:
```bash
pnpm build
```

The sitemap will be created in the `public` folder after build.

### Google Analytics Not Working
1. Verify your `NEXT_PUBLIC_GA_ID` is set correctly in `.env.local`
2. Make sure it starts with `G-` (GA4 format)
3. Check browser console for any script loading errors
4. Test in production build (GA scripts may not work in dev mode)
5. Allow 24-48 hours for data to appear in Google Analytics dashboard

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

