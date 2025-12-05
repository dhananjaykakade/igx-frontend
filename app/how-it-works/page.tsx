import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Copy, Download, Link2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works - Download Instagram in 3 Steps',
  description: 'Learn how to download Instagram Reels, Posts, Stories, and IGTV in 3 simple steps. Copy URL, paste in IGX, download in HD. Fast, free, no login required.',
  keywords: [
    'how to download instagram',
    'download reels tutorial',
    'instagram downloader guide',
    'download instagram videos',
    'step by step instagram download',
  ],
  openGraph: {
    title: 'How It Works - Download Instagram in 3 Steps | IGX',
    description: 'Learn how to download Instagram content in 3 simple steps.',
    type: 'website',
    url: 'https://igx.com/how-it-works',
  },
  twitter: {
    card: 'summary',
    title: 'How It Works | IGX',
    description: 'Learn how to download Instagram content in 3 simple steps.',
  },
  alternates: {
    canonical: 'https://igx.com/how-it-works',
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Copy,
      title: 'Copy Instagram URL',
      description: 'Find the Instagram Reel, Post, or Story you want to download. Copy the URL from your browser or the Instagram app.'
    },
    {
      icon: Link2,
      title: 'Paste URL',
      description: 'Paste the copied Instagram URL into our downloader input field on the homepage and click Submit.'
    },
    {
      icon: Download,
      title: 'Download Content',
      description: 'Preview the content and click the Download button. The file will be saved directly to your device.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-lg text-muted-foreground">Download Instagram content in 3 simple steps</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        {step.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground ml-16">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Tips for Best Results</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Make sure the Instagram post is public (private posts can't be downloaded)</li>
              <li>• Use the full URL from Instagram (not shortened links)</li>
              <li>• Check your internet connection if downloads are slow</li>
              <li>• For carousel posts, all images will be available for download</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
