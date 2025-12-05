'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DownloadForm } from '@/components/DownloadForm';
import { VideoPreview } from '@/components/VideoPreview';
import { DownloaderProvider } from '@/components/DownloaderProvider';

export function DownloaderSection() {
  return (
    <DownloaderProvider>
      <div className="w-full max-w-2xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Download Instagram Content</CardTitle>
            <CardDescription>
              Paste any Instagram Reel, Post, Carousel, or IGTV URL below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DownloadForm />
          </CardContent>
        </Card>

        <VideoPreview />
      </div>
    </DownloaderProvider>
  );
}
