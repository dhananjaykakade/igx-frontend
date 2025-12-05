import { Suspense } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { DownloaderSection } from '@/components/DownloaderSection';
import StructuredData, { 
  organizationSchema, 
  websiteSchema, 
  webApplicationSchema,
  howToSchema 
} from '@/components/StructuredData';
import { Instagram } from 'lucide-react';

function PageSkeleton() {
  return (
    <div className="w-full max-w-2xl space-y-6">
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full mt-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-40 w-full" />
        </CardContent>
      </Card>
    </div>
  );
}

export default function Home() {
  const howToSteps = [
    {
      name: 'Copy Instagram URL',
      text: 'Open Instagram app or website and copy the Reel, Post, or Story URL you want to download.',
    },
    {
      name: 'Paste URL',
      text: 'Paste the copied Instagram URL into the input field on IGX downloader.',
    },
    {
      name: 'Download',
      text: 'Click the download button to save the Instagram content to your device without ads or watermarks.',
    },
  ]

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={webApplicationSchema} />
      <StructuredData data={howToSchema(howToSteps)} />

      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col items-center gap-8">
            {/* Hero Section - Pure HTML/CSS for fast LCP */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="p-3 bg-primary rounded-2xl">
                  <Instagram className="h-8 w-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  IGX
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Instagram Reels Downloader Without Ads - Download Reels, Posts, Carousels & IGTV instantly
              </p>
            </div>

          {/* Main Content - Client Component Only Where Needed */}
          <ErrorBoundary>
            <Suspense fallback={<PageSkeleton />}>
              <DownloaderSection />
            </Suspense>
          </ErrorBoundary>

          {/* Footer - Server Component */}
          <div className="mt-12 text-center text-sm text-muted-foreground space-y-2">
            <p>
              Free Instagram Downloader - No Ads, No Watermarks, No Registration Required
            </p>
            <p className="text-xs">
              Download Instagram content safely and quickly
            </p>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}

