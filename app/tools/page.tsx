import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { longTailPages } from '@/lib/long-tail-pages'
import { Instagram, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Instagram Downloader Tools - All-in-One IG Tools',
  description: 'Complete collection of 10+ Instagram downloader tools. Download Reels, Stories, DP, Videos, Audio, Highlights, Carousels & more. 100% free, fast, ad-free, no watermark.',
  keywords: [
    'instagram tools',
    'instagram downloader tools',
    'reel downloader',
    'story downloader',
    'dp downloader',
    'instagram audio download',
    'highlights downloader',
    'carousel downloader',
    'private account downloader',
    'IGX tools',
  ],
  openGraph: {
    title: 'Instagram Downloader Tools - All-in-One IG Tools | IGX',
    description: 'Complete collection of 10+ Instagram downloader tools. 100% free, fast, ad-free.',
    type: 'website',
    url: 'https://igx.com/tools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Downloader Tools - All-in-One IG Tools | IGX',
    description: 'Complete collection of 10+ Instagram downloader tools. 100% free, fast, ad-free.',
  },
  alternates: {
    canonical: 'https://igx.com/tools',
  },
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="p-3 bg-primary rounded-2xl">
                <Instagram className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Instagram Tools
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete suite of Instagram downloader tools. All free, fast, and without ads.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary">No Ads</Badge>
              <Badge variant="secondary">HD Quality</Badge>
              <Badge variant="secondary">No Watermark</Badge>
              <Badge variant="secondary">Free Forever</Badge>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {longTailPages.map((page) => (
              <Link key={page.slug} href={`/tools/${page.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {page.h1}
                        </CardTitle>
                        <Badge variant="outline" className="mt-2">
                          {page.keyword}
                        </Badge>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3">
                      {page.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Features Section */}
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-center">Why Choose IGX Tools?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Ad-Free Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">HD</div>
                  <div className="text-sm text-muted-foreground">Highest Quality</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">Fast</div>
                  <div className="text-sm text-muted-foreground">Instant Downloads</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">Free</div>
                  <div className="text-sm text-muted-foreground">Always & Forever</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-foreground">Complete Instagram Downloader Toolkit</h2>
            <p className="text-muted-foreground">
              IGX provides a comprehensive collection of Instagram downloader tools designed to help you save any type of Instagram content. 
              Whether you need to download Reels, Stories, profile pictures, videos, or audio, we have specialized tools for every need.
            </p>
            <p className="text-muted-foreground">
              All our tools are completely free to use, require no registration, and work directly in your browser. Unlike other Instagram 
              downloaders that bombard you with ads and popups, IGX offers a clean, fast, and professional experience focused entirely on 
              providing you with the best download quality and speed.
            </p>
            <h3 className="text-xl font-bold text-foreground mt-6">Our Tools Include:</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>Instagram Reels Downloader - Save trending Reels in HD without watermarks</li>
              <li>Instagram Story Downloader - Download Stories anonymously before they disappear</li>
              <li>Instagram DP Downloader - Get profile pictures in full HD resolution</li>
              <li>Instagram Video Downloader - Save any Instagram video format</li>
              <li>Instagram Audio Extractor - Extract audio from Reels and videos</li>
              <li>Instagram Carousel Downloader - Download all photos/videos from carousel posts</li>
              <li>Instagram Highlights Downloader - Save Story Highlights permanently</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
