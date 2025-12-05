export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export const blogCategories = [
  'Instagram Tips',
  'Social Media Marketing',
  'Content Creation',
  'Instagram Reels',
  'Growth Strategies',
  'Analytics & Insights',
  'Instagram Stories',
  'Business Tips',
  'Influencer Marketing',
  'Photography',
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'how-to-download-instagram-reels-2025',
    title: 'How to Download Instagram Reels in 2025: Complete Guide',
    description: 'Learn the easiest ways to download Instagram Reels without watermarks in 2025. Step-by-step guide with tips and tricks.',
    content: 'Instagram Reels have become one of the most popular features on the platform...',
    category: 'Instagram Reels',
    tags: ['reels', 'download', 'tutorial'],
    publishedAt: '2025-01-15',
    readTime: 5,
  },
  {
    id: '2',
    slug: 'instagram-reels-best-practices-2025',
    title: '10 Instagram Reels Best Practices for Maximum Engagement',
    description: 'Discover proven strategies to create viral Instagram Reels that drive engagement and grow your audience.',
    content: 'Creating engaging Instagram Reels requires understanding the algorithm and audience preferences...',
    category: 'Instagram Reels',
    tags: ['engagement', 'strategy', 'viral'],
    publishedAt: '2025-01-20',
    readTime: 7,
  },
  {
    id: '3',
    slug: 'save-instagram-videos-without-watermark',
    title: 'How to Save Instagram Videos Without Watermark',
    description: 'Remove watermarks from Instagram videos easily. Learn professional techniques for clean downloads.',
    content: 'Watermarks can be distracting when sharing content. Here are the best methods to download clean videos...',
    category: 'Instagram Tips',
    tags: ['watermark', 'download', 'video'],
    publishedAt: '2025-01-25',
    readTime: 4,
  },
  {
    id: '4',
    slug: 'instagram-marketing-strategy-2025',
    title: 'Ultimate Instagram Marketing Strategy for 2025',
    description: 'Build a winning Instagram marketing strategy with our comprehensive guide covering all essential tactics.',
    content: 'Instagram marketing has evolved significantly. Success requires a multi-faceted approach...',
    category: 'Social Media Marketing',
    tags: ['marketing', 'strategy', 'business'],
    publishedAt: '2025-02-01',
    readTime: 10,
  },
  {
    id: '5',
    slug: 'grow-instagram-followers-organically',
    title: 'How to Grow Instagram Followers Organically in 2025',
    description: 'Proven strategies to increase your Instagram followers naturally without buying fake followers.',
    content: 'Organic growth is the foundation of a successful Instagram presence...',
    category: 'Growth Strategies',
    tags: ['followers', 'growth', 'organic'],
    publishedAt: '2025-02-05',
    readTime: 8,
  },
  {
    id: '6',
    slug: 'instagram-reels-algorithm-explained',
    title: 'Instagram Reels Algorithm Explained: How to Go Viral',
    description: 'Understand how the Instagram Reels algorithm works and optimize your content for maximum reach.',
    content: 'The Instagram Reels algorithm prioritizes several key factors for content distribution...',
    category: 'Instagram Reels',
    tags: ['algorithm', 'viral', 'reach'],
    publishedAt: '2025-02-10',
    readTime: 6,
  },
  {
    id: '7',
    slug: 'best-time-post-instagram-reels',
    title: 'Best Time to Post Instagram Reels for Maximum Views',
    description: 'Discover optimal posting times for Instagram Reels based on data and audience behavior analysis.',
    content: 'Timing is crucial for Reels success. Research shows specific patterns in user engagement...',
    category: 'Instagram Tips',
    tags: ['timing', 'engagement', 'reels'],
    publishedAt: '2025-02-15',
    readTime: 5,
  },
  {
    id: '8',
    slug: 'instagram-content-creation-tools',
    title: 'Top 15 Instagram Content Creation Tools for 2025',
    description: 'Explore the best tools for creating stunning Instagram content that stands out and engages followers.',
    content: 'Professional content creation requires the right tools. Here are the industry favorites...',
    category: 'Content Creation',
    tags: ['tools', 'content', 'design'],
    publishedAt: '2025-02-20',
    readTime: 9,
  },
  {
    id: '9',
    slug: 'instagram-stories-vs-reels',
    title: 'Instagram Stories vs Reels: Which Should You Use?',
    description: 'Compare Instagram Stories and Reels to determine the best format for your content strategy.',
    content: 'Both Stories and Reels serve different purposes in your Instagram strategy...',
    category: 'Instagram Tips',
    tags: ['stories', 'reels', 'comparison'],
    publishedAt: '2025-02-25',
    readTime: 6,
  },
  {
    id: '10',
    slug: 'instagram-analytics-guide',
    title: 'Complete Guide to Instagram Analytics in 2025',
    description: 'Master Instagram analytics to track performance, understand your audience, and improve results.',
    content: 'Analytics provide crucial insights into what works and what doesn\'t on Instagram...',
    category: 'Analytics & Insights',
    tags: ['analytics', 'metrics', 'data'],
    publishedAt: '2025-03-01',
    readTime: 11,
  },
  {
    id: '11',
    slug: 'download-instagram-carousel-posts',
    title: 'How to Download Instagram Carousel Posts',
    description: 'Save all images from Instagram carousel posts easily with our step-by-step tutorial.',
    content: 'Carousel posts contain multiple images that require special handling for download...',
    category: 'Instagram Tips',
    tags: ['carousel', 'download', 'photos'],
    publishedAt: '2025-03-05',
    readTime: 4,
  },
  {
    id: '12',
    slug: 'instagram-hashtag-strategy',
    title: 'Instagram Hashtag Strategy: Ultimate Guide for 2025',
    description: 'Learn how to use hashtags effectively to increase reach and engagement on Instagram.',
    content: 'Hashtags remain a powerful tool for discovery and reach on Instagram...',
    category: 'Social Media Marketing',
    tags: ['hashtags', 'reach', 'strategy'],
    publishedAt: '2025-03-10',
    readTime: 7,
  },
  {
    id: '13',
    slug: 'create-viral-instagram-reels',
    title: '7 Secrets to Creating Viral Instagram Reels',
    description: 'Discover proven techniques that creators use to make their Instagram Reels go viral.',
    content: 'Viral Reels share common characteristics that you can replicate in your content...',
    category: 'Instagram Reels',
    tags: ['viral', 'reels', 'secrets'],
    publishedAt: '2025-03-15',
    readTime: 8,
  },
  {
    id: '14',
    slug: 'instagram-business-account-setup',
    title: 'How to Set Up Instagram Business Account in 2025',
    description: 'Complete walkthrough for setting up and optimizing your Instagram business account.',
    content: 'A business account unlocks powerful features for brands and creators...',
    category: 'Business Tips',
    tags: ['business', 'setup', 'account'],
    publishedAt: '2025-03-20',
    readTime: 6,
  },
  {
    id: '15',
    slug: 'instagram-influencer-marketing-guide',
    title: 'Instagram Influencer Marketing: Complete Guide',
    description: 'Everything you need to know about influencer marketing on Instagram, from finding to working with influencers.',
    content: 'Influencer marketing has become essential for brands on Instagram...',
    category: 'Influencer Marketing',
    tags: ['influencer', 'marketing', 'collaboration'],
    publishedAt: '2025-03-25',
    readTime: 12,
  },
  {
    id: '16',
    slug: 'instagram-photography-tips',
    title: '20 Instagram Photography Tips for Stunning Posts',
    description: 'Improve your Instagram photography with professional tips and techniques.',
    content: 'Great photography is the foundation of successful Instagram content...',
    category: 'Photography',
    tags: ['photography', 'tips', 'visual'],
    publishedAt: '2025-03-30',
    readTime: 9,
  },
  {
    id: '17',
    slug: 'instagram-engagement-rate-boost',
    title: 'How to Boost Your Instagram Engagement Rate',
    description: 'Proven tactics to increase likes, comments, and shares on your Instagram posts.',
    content: 'Engagement rate is a key metric that determines your content\'s success...',
    category: 'Growth Strategies',
    tags: ['engagement', 'boost', 'tactics'],
    publishedAt: '2025-04-05',
    readTime: 7,
  },
  {
    id: '18',
    slug: 'download-instagram-igtv-videos',
    title: 'How to Download Instagram IGTV Videos',
    description: 'Save IGTV videos from Instagram with our easy-to-follow guide.',
    content: 'IGTV videos offer longer-form content that\'s often valuable to save...',
    category: 'Instagram Tips',
    tags: ['igtv', 'download', 'video'],
    publishedAt: '2025-04-10',
    readTime: 4,
  },
  {
    id: '19',
    slug: 'instagram-caption-writing-guide',
    title: 'Instagram Caption Writing: The Ultimate Guide',
    description: 'Master the art of writing engaging Instagram captions that drive action.',
    content: 'Captions are your opportunity to connect with your audience beyond visuals...',
    category: 'Content Creation',
    tags: ['captions', 'writing', 'engagement'],
    publishedAt: '2025-04-15',
    readTime: 8,
  },
  {
    id: '20',
    slug: 'instagram-stories-ideas-2025',
    title: '50 Instagram Stories Ideas for 2025',
    description: 'Get inspired with creative Instagram Stories ideas to keep your audience engaged.',
    content: 'Fresh Stories content keeps your followers interested and engaged...',
    category: 'Instagram Stories',
    tags: ['stories', 'ideas', 'creative'],
    publishedAt: '2025-04-20',
    readTime: 10,
  },
  // Continue with more blog posts...
];

// Generate 80 more blog posts dynamically
const additionalTopics = [
  'Instagram Video Editing Tips', 'Monetize Instagram Account', 'Instagram Shopping Features',
  'Instagram Live Best Practices', 'Instagram Profile Optimization', 'Instagram Growth Hacks',
  'Instagram Content Calendar', 'Instagram Competitor Analysis', 'Instagram Ad Campaign Guide',
  'Instagram Story Highlights', 'Instagram Bio Ideas', 'Instagram Feed Aesthetics',
  'Instagram Collaboration Tips', 'Instagram Audio Trends', 'Instagram SEO Optimization',
  'Instagram Community Building', 'Instagram Crisis Management', 'Instagram Brand Guidelines',
  'Instagram User Generated Content', 'Instagram Accessibility Features', 'Instagram Dark Mode Tips',
  'Instagram Security Best Practices', 'Instagram Copyright Guide', 'Instagram Contest Ideas',
  'Instagram Giveaway Strategy', 'Instagram Poll Ideas', 'Instagram Quiz Features',
  'Instagram Music Integration', 'Instagram Filter Creation', 'Instagram AR Effects',
  'Instagram Shopping Tags', 'Instagram Product Launches', 'Instagram Customer Service',
  'Instagram Testimonials Strategy', 'Instagram Case Studies', 'Instagram ROI Measurement',
  'Instagram Budget Planning', 'Instagram Team Management', 'Instagram Workflow Optimization',
  'Instagram Automation Tools', 'Instagram Scheduling Apps', 'Instagram Cross-Posting',
  'Instagram Multi-Account Management', 'Instagram Recovery Tips', 'Instagram Archive Features',
  'Instagram Highlights Covers', 'Instagram Link in Bio', 'Instagram Swipe Up Alternative',
  'Instagram DM Automation', 'Instagram Chat Features', 'Instagram Video Call Tips',
  'Instagram Broadcast Channels', 'Instagram Notes Feature', 'Instagram Threads Integration',
  'Instagram Meta Business Suite', 'Instagram Creator Studio', 'Instagram Insights Deep Dive',
  'Instagram Audience Demographics', 'Instagram Content Performance', 'Instagram Peak Times',
  'Instagram Seasonal Strategies', 'Instagram Holiday Content', 'Instagram Trend Forecasting',
  'Instagram Niche Selection', 'Instagram Personal Branding', 'Instagram Portfolio Building',
  'Instagram Behind Scenes Content', 'Instagram Tutorial Creation', 'Instagram Educational Content',
  'Instagram Entertainment Strategy', 'Instagram News Content', 'Instagram Evergreen Posts',
  'Instagram Time-Sensitive Content', 'Instagram Flash Sales', 'Instagram Limited Offers',
  'Instagram Subscriber Benefits', 'Instagram Exclusive Content', 'Instagram VIP Programs',
  'Instagram Loyalty Rewards', 'Instagram Referral Programs', 'Instagram Partnership Deals',
  'Instagram Sponsorship Guide', 'Instagram Media Kit Creation', 'Instagram Rate Negotiation',
];

additionalTopics.forEach((topic, index) => {
  const id = (21 + index).toString();
  const slug = topic.toLowerCase().replace(/\s+/g, '-');
  const categories = ['Instagram Tips', 'Social Media Marketing', 'Content Creation', 'Growth Strategies', 'Business Tips'];
  const category = categories[index % categories.length];
  
  blogPosts.push({
    id,
    slug,
    title: `${topic}: Complete Guide for 2025`,
    description: `Comprehensive guide on ${topic.toLowerCase()} with expert tips, strategies, and best practices for success.`,
    content: `Learn everything about ${topic.toLowerCase()} in this detailed guide covering strategies, tools, and techniques...`,
    category,
    tags: [topic.split(' ')[0].toLowerCase(), 'guide', '2025'],
    publishedAt: new Date(2025, 0, 1 + index).toISOString().split('T')[0],
    readTime: 5 + (index % 8),
  });
});

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return blogPosts.slice(0, limit);
  
  const related = blogPosts.filter(post => 
    post.slug !== currentSlug && 
    (post.category === currentPost.category || 
     post.tags.some(tag => currentPost.tags.includes(tag)))
  );
  
  return related.slice(0, limit);
}
