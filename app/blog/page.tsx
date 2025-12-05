import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts, blogCategories } from '@/lib/blog-data';
import { Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Instagram Tips & Tricks Blog - Expert Guides',
  description: 'Expert guides on Instagram Reels, Stories, marketing strategies, and content creation. 100+ articles on how to grow your Instagram presence, download content, and master social media without ads.',
  keywords: [
    'instagram blog',
    'instagram tips',
    'reels guide',
    'instagram marketing',
    'social media strategy',
    'instagram growth',
    'content creation tips',
    'download instagram reels',
    'instagram best practices',
  ],
  openGraph: {
    title: 'Instagram Tips & Tricks Blog | IGX',
    description: 'Expert guides on Instagram Reels, Stories, marketing, and content creation. 100+ articles.',
    type: 'website',
    url: 'https://igx.onetools.app/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Tips & Tricks Blog | IGX',
    description: 'Expert guides on Instagram Reels, Stories, marketing, and content creation.',
  },
  alternates: {
    canonical: 'https://igx.onetools.app/blog',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Instagram Tips & Guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice on Instagram Reels, marketing, growth strategies, and content creation
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {blogCategories.map(category => (
            <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} min read
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
