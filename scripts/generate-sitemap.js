const fs = require('fs');
const path = require('path');

// Import blog posts
const blogDataPath = path.join(__dirname, '../lib/blog-data.ts');
const longTailPagesPath = path.join(__dirname, '../lib/long-tail-pages.ts');

// Extract slugs from blog-data.ts (JSON format)
const blogData = fs.readFileSync(blogDataPath, 'utf-8');
const blogSlugs = [];

// Extract from JSON array
const blogPostsMatch = blogData.match(/export const blogPosts: BlogPost\[\] = (\[[\s\S]*?\]);/);
if (blogPostsMatch) {
  const jsonData = blogPostsMatch[1];
  const slugMatches = jsonData.matchAll(/"slug":\s*"([^"]+)"/g);
  for (const match of slugMatches) {
    blogSlugs.push(match[1]);
  }
}

// Extract slugs from long-tail-pages.ts
const longTailData = fs.readFileSync(longTailPagesPath, 'utf-8');
const toolSlugs = [];
const toolMatches = longTailData.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
for (const match of toolMatches) {
  toolSlugs.push(match[1]);
}

const baseUrl = 'https://igx.onetools.app';
const currentDate = new Date().toISOString();

// Static pages
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.9', changefreq: 'weekly' },
  { url: '/how-it-works', priority: '0.9', changefreq: 'weekly' },
  { url: '/faq', priority: '0.9', changefreq: 'weekly' },
  { url: '/blog', priority: '0.9', changefreq: 'daily' },
  { url: '/tools', priority: '0.9', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.7', changefreq: 'monthly' },
  { url: '/terms', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/troubleshooting', priority: '0.8', changefreq: 'weekly' },
  { url: '/api-docs', priority: '0.7', changefreq: 'monthly' },
];

// Generate sitemap XML
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n';

// Add static pages
staticPages.forEach(page => {
  sitemap += `<url><loc>${baseUrl}${page.url}</loc><lastmod>${currentDate}</lastmod><changefreq>${page.changefreq}</changefreq><priority>${page.priority}</priority></url>\n`;
});

// Add blog posts
blogSlugs.forEach(slug => {
  sitemap += `<url><loc>${baseUrl}/blog/${slug}</loc><lastmod>${currentDate}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>\n`;
});

// Add tool pages
toolSlugs.forEach(slug => {
  sitemap += `<url><loc>${baseUrl}/tools/${slug}</loc><lastmod>${currentDate}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>\n`;
});

sitemap += '</urlset>';

// Write sitemap to public folder
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log(`✅ Sitemap generated successfully!`);
console.log(`📊 Total URLs: ${staticPages.length + blogSlugs.length + toolSlugs.length}`);
console.log(`   - Static pages: ${staticPages.length}`);
console.log(`   - Blog posts: ${blogSlugs.length}`);
console.log(`   - Tool pages: ${toolSlugs.length}`);
console.log(`📁 Saved to: ${sitemapPath}`);
