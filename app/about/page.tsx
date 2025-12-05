import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - IGX Instagram Downloader',
  description: 'Learn about IGX, the #1 free Instagram Reels downloader without ads. Our mission: provide fast, secure, ad-free Instagram downloads. Download Reels, Posts, Stories, and IGTV safely without watermarks.',
  keywords: [
    'about IGX',
    'instagram downloader',
    'ad-free downloader',
    'safe instagram download',
    'free instagram tools',
  ],
  openGraph: {
    title: 'About Us | IGX - Instagram Reels Downloader Without Ads',
    description: 'Learn about IGX, the #1 free Instagram Reels downloader without ads.',
    type: 'website',
    url: 'https://igx.com/about',
  },
  twitter: {
    card: 'summary',
    title: 'About Us | IGX',
    description: 'Learn about IGX, the #1 free Instagram Reels downloader without ads.',
  },
  alternates: {
    canonical: 'https://igx.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">About Instagram Downloader</CardTitle>
            <CardDescription>Your trusted tool for downloading Instagram content</CardDescription>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <h2>Our Mission</h2>
            <p>
              We provide a free, fast, and reliable Instagram downloader that helps users save their favorite
              Reels, Posts, IGTV videos, and Stories. Our mission is to make content downloading simple and
              accessible to everyone.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
              <li><strong>100% Free:</strong> No hidden fees or premium plans</li>
              <li><strong>No Watermarks:</strong> Download clean, high-quality content</li>
              <li><strong>Fast & Secure:</strong> Lightning-fast downloads with privacy protection</li>
              <li><strong>All Formats:</strong> Support for Reels, Posts, IGTV, Stories, and Carousels</li>
              <li><strong>Easy to Use:</strong> Simple interface, just paste and download</li>
            </ul>

            <h2>How It Works</h2>
            <p>
              Our technology connects to Instagram's public API to fetch content information and provide
              direct download links. We don't store any videos or images on our servers – everything is
              downloaded directly from Instagram's CDN.
            </p>

            <h2>Privacy & Security</h2>
            <p>
              We respect your privacy. We don't track your downloads, store your data, or require any login.
              Your Instagram account credentials are never asked for or needed.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
