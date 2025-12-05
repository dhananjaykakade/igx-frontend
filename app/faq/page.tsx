import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about downloading Instagram Reels, Posts, IGTV videos, and Stories. Learn about our free, ad-free Instagram downloader, supported formats, download limits, and privacy.',
  keywords: [
    'instagram downloader faq',
    'how to download reels',
    'instagram download questions',
    'free instagram downloader help',
    'download without watermark faq',
  ],
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | IGX',
    description: 'Find answers to common questions about downloading Instagram content.',
    type: 'website',
    url: 'https://igx.com/faq',
  },
  twitter: {
    card: 'summary',
    title: 'FAQ | IGX',
    description: 'Find answers to common questions about downloading Instagram content.',
  },
  alternates: {
    canonical: 'https://igx.com/faq',
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'Is this Instagram downloader free?',
      answer: 'Yes! Our Instagram downloader is 100% free with no hidden fees or premium plans. You can download unlimited Reels, Posts, and Stories.'
    },
    {
      question: 'Do I need to log in to download Instagram content?',
      answer: 'No, you don\'t need to log in or provide any Instagram credentials. Simply paste the URL and download.'
    },
    {
      question: 'Can I download Instagram Reels without watermark?',
      answer: 'Yes, our tool downloads Instagram content in its original quality without adding watermarks.'
    },
    {
      question: 'What Instagram content can I download?',
      answer: 'You can download Instagram Reels, regular Posts, IGTV videos, Carousel posts (multiple images), and Stories.'
    },
    {
      question: 'Is it legal to download Instagram videos?',
      answer: 'Downloading public Instagram content for personal use is generally acceptable. However, respect copyright and don\'t redistribute content without permission.'
    },
    {
      question: 'Why is my download not working?',
      answer: 'Ensure the post is public and the URL is correct. Private accounts require you to be following them. Try refreshing and pasting the URL again.'
    },
    {
      question: 'Does this work on mobile devices?',
      answer: 'Yes! Our Instagram downloader works on all devices including mobile phones, tablets, and desktop computers.'
    },
    {
      question: 'Do you store downloaded videos?',
      answer: 'No, we don\'t store any videos or images. Files are downloaded directly from Instagram\'s servers to your device.'
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
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">Everything you need to know about our Instagram downloader</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
