import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getBlogPost, getRelatedPosts, blogPosts } from '@/lib/blog-data';
import { Clock, Calendar, ArrowLeft, Share2 } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [...post.tags, 'instagram tips', 'social media marketing', 'IGX blog'],
    authors: [{ name: "IGX Team" }],
    category: post.category,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["IGX Team"],
      tags: post.tags,
      url: `https://igx.com/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://igx.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Article */}
        <article>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <Badge>{post.category}</Badge>
                {post.tags.slice(0, 3).map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              <CardTitle className="text-3xl md:text-4xl">{post.title}</CardTitle>
              <CardDescription className="text-lg">{post.description}</CardDescription>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min read
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>{post.content}</p>
                <p className="mt-4">
                  This comprehensive guide covers everything you need to know about {post.title.toLowerCase()}. 
                  Whether you're a beginner or an experienced Instagram user, you'll find valuable insights and 
                  actionable strategies to improve your results.
                </p>
                <h2 className="mt-8">Key Takeaways</h2>
                <ul>
                  <li>Understand the fundamentals and best practices</li>
                  <li>Learn from real-world examples and case studies</li>
                  <li>Implement proven strategies for better results</li>
                  <li>Stay updated with the latest trends and features</li>
                </ul>
              </div>
              <div className="mt-8 pt-8 border-t">
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share This Article
                </Button>
              </div>
            </CardContent>
          </Card>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">{relatedPost.category}</Badge>
                      <CardTitle className="text-lg line-clamp-2">{relatedPost.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {relatedPost.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
