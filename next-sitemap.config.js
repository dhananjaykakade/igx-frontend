/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://igx.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Home page gets highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }

    // Blog posts get high priority
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    // Main pages
    if (['/blog', '/about', '/faq', '/how-it-works'].includes(path)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }

    // Default transform
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
  additionalPaths: async (config) => {
    const result = []

    // Add tools page URLs
    const toolSlugs = [
      'download-instagram-reel-from-private-account',
      'download-reels-without-watermark',
      'dp-downloader-full-hd',
      'download-instagram-audio',
      'instagram-profile-photo-full-size',
      'reel-downloader-by-link',
      'download-instagram-story',
      'download-instagram-highlights',
      'download-instagram-video',
      'instagram-carousel-downloader',
    ]

    toolSlugs.forEach(slug => {
      result.push({
        loc: `/tools/${slug}`,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      })
    })

    // Add tools index page
    result.push({
      loc: '/tools',
      changefreq: 'weekly',
      priority: 0.95,
      lastmod: new Date().toISOString(),
    })

    // Add all blog post URLs from blog-data.ts
    const blogSlugs = [
      'instagram-reels-best-practices-2025',
      'how-to-download-instagram-reels',
      'instagram-reels-vs-tiktok',
      'instagram-marketing-strategies',
      'viral-reels-tips',
      'instagram-algorithm-2025',
      'content-creation-instagram',
      'instagram-analytics-guide',
      'reels-engagement-tactics',
      'instagram-growth-hacks',
      'video-editing-for-reels',
      'instagram-business-tips',
      'influencer-marketing-instagram',
      'instagram-story-strategies',
      'social-media-trends-2025',
      'instagram-hashtag-guide',
      'reels-monetization',
      'instagram-live-streaming',
      'content-planning-instagram',
      'instagram-advertising-guide',
      'reels-music-selection',
      'instagram-captions-tips',
      'user-generated-content',
      'instagram-shopping-features',
      'social-media-management',
      'instagram-collaboration-tips',
      'video-content-strategy',
      'instagram-brand-building',
      'reels-transitions-guide',
      'instagram-audience-targeting',
      'content-repurposing-instagram',
      'instagram-profile-optimization',
      'reels-ideas-inspiration',
      'instagram-community-building',
      'social-media-analytics',
      'instagram-stories-vs-reels',
      'video-marketing-instagram',
      'instagram-influencer-tips',
      'reels-format-guide',
      'instagram-engagement-rate',
      'content-calendar-instagram',
      'instagram-reach-optimization',
      'reels-editing-apps',
      'instagram-business-account',
      'social-media-posting-times',
      'instagram-competitor-analysis',
      'video-storytelling-tips',
      'instagram-creator-fund',
      'reels-length-optimization',
      'instagram-follower-growth',
      'content-quality-instagram',
      'instagram-trends-analysis',
      'reels-thumbnail-design',
      'instagram-cross-promotion',
      'social-media-strategy',
      'instagram-bio-optimization',
      'video-equipment-guide',
      'instagram-content-series',
      'reels-call-to-action',
      'instagram-comment-strategy',
      'social-media-automation',
      'instagram-aesthetic-guide',
      'video-lighting-tips',
      'instagram-save-rate',
      'reels-pacing-timing',
      'instagram-share-strategy',
      'content-diversity-instagram',
      'instagram-niche-selection',
      'video-hook-strategies',
      'instagram-insights-guide',
      'reels-sound-design',
      'instagram-collab-posts',
      'social-media-consistency',
      'instagram-carousel-posts',
      'video-scripting-tips',
      'instagram-dm-strategy',
      'reels-trend-analysis',
      'instagram-link-in-bio',
      'content-batching-instagram',
      'instagram-guides-feature',
      'video-thumbnail-tips',
      'instagram-highlights-strategy',
      'reels-filters-effects',
      'instagram-tag-strategy',
      'social-media-branding',
      'instagram-verification-guide',
      'video-description-tips',
      'instagram-engagement-pods',
      'reels-voiceover-tips',
      'instagram-sponsored-content',
      'content-authenticity-instagram',
      'instagram-location-tags',
      'video-repurposing-guide',
      'instagram-close-friends',
      'reels-text-overlay',
      'instagram-quiz-stickers',
      'social-media-roi',
      'instagram-archive-feature',
      'video-aspect-ratios',
      'instagram-polls-engagement',
      'reels-b-roll-usage',
      'instagram-question-stickers'
    ]

    blogSlugs.forEach(slug => {
      result.push({
        loc: `/blog/${slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      })
    })

    return result
  },
}
