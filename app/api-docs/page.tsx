import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Code, Server, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'API Documentation - IGX Instagram Downloader',
  description: 'API documentation for IGX Instagram Downloader. Learn how to integrate Instagram content downloading into your applications.',
  alternates: {
    canonical: '/api-docs',
  },
};

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-primary rounded-2xl">
            <Code className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">API Documentation</h1>
            <p className="text-muted-foreground mt-2">Integrate Instagram downloading into your apps</p>
          </div>
        </div>

        <div className="grid gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-yellow-500" />
                <CardTitle>API Status: Internal Use Only</CardTitle>
              </div>
              <CardDescription>
                Our API is currently for internal use only. Public API access is planned for future release.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm">
                  <strong>Note:</strong> Direct API access is not yet available to the public.
                  Please use our web interface at <Link href="/" className="text-primary hover:underline">igx.onetools.app</Link> for downloading Instagram content.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backend API Endpoints</CardTitle>
              <CardDescription>For internal reference only</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>POST</Badge>
                    <code className="text-sm">/api/v1/post</code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download Instagram posts and carousels
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>POST</Badge>
                    <code className="text-sm">/api/v1/reel</code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download Instagram Reels
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>POST</Badge>
                    <code className="text-sm">/api/v1/profile-picture</code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download profile pictures in high resolution
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>POST</Badge>
                    <code className="text-sm">/api/v1/stories</code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download Instagram Stories (public only)
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>POST</Badge>
                    <code className="text-sm">/api/v1/highlights</code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download Instagram Highlights
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Example Request Format</CardTitle>
              <CardDescription>Internal reference for developers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-2">Request Body:</p>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`{
  "url": "https://www.instagram.com/p/ABC123/"
}`}
                    </code>
                  </pre>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2">Response Format:</p>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`{
  "success": true,
  "shortcode": "ABC123",
  "content_type": "GraphSidecar",
  "is_video": false,
  "media_items": [
    {
      "type": "image",
      "url": "https://...",
      "thumbnail_url": null
    }
  ],
  "caption": "...",
  "owner_username": "example",
  "likes": 1234,
  "comments": 56
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rate Limiting</CardTitle>
              <CardDescription>To prevent abuse and ensure fair usage</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>10 requests per minute</strong> per IP address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>5-minute cache</strong> for repeat requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Temporary blocks</strong> for excessive requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Exponential backoff</strong> recommended for retries</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Interested in Public API Access?</CardTitle>
              <CardDescription>Let us know your use case</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                We're considering offering public API access in the future.
                If you're interested, please contact us with:
              </p>
              <ul className="list-disc list-inside text-sm mb-4 space-y-1">
                <li>Your use case and expected volume</li>
                <li>Type of content you need to download</li>
                <li>Whether you need commercial licensing</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Contact Us About API Access</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frontend Integration</CardTitle>
              <CardDescription>How our frontend works</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Architecture:</strong> Next.js 16 with TypeScript, Server Components (90%), shadcn/ui
                </p>
                <p>
                  <strong>State Management:</strong> React Context API for client-side state
                </p>
                <p>
                  <strong>Caching:</strong> 5-minute in-memory cache + 1-hour ISR revalidation
                </p>
                <p>
                  <strong>Error Handling:</strong> Abort controller, request deduplication, sanitized error messages
                </p>
                <p>
                  <strong>Performance:</strong> Lazy loading, compression, optimized fonts, Server Components
                </p>
                <p className="mt-4">
                  <strong>Open Source:</strong> Frontend code available at{' '}
                  <a href="https://github.com/dhananjaykakade/igx-frontend" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    GitHub
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
