'use client';

import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Download, User, Heart, MessageCircle, Play, Image as ImageIcon } from 'lucide-react';
import { useDownloaderContext } from '@/components/DownloaderProvider';

function VideoContent() {
  const { data } = useDownloaderContext();

  if (!data) return null;

  const handleDownload = async () => {
    if (!data.url) return;

    try {
      // Set filename based on content type
      const extension = data.isVideo ? 'mp4' : 'jpg';
      const filename = `instagram_${data.username || 'content'}_${Date.now()}.${extension}`;
      
      // Use proxy endpoint to download the file
      const proxyUrl = `/api/proxy-download?url=${encodeURIComponent(data.url)}&filename=${encodeURIComponent(filename)}`;
      
      // Create a link and trigger download
      const a = document.createElement('a');
      a.href = proxyUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to opening in new tab
      window.open(data.url, '_blank');
    }
  };

  const isVideo = data.isVideo || data.contentType === 'GraphVideo' || data.contentType === 'reel';
  const hasMultipleMedia = (data.mediaCount || 0) > 1;

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          <span className="truncate flex-1">{data.caption || 'Instagram Content'}</span>
          <div className="flex gap-2 flex-shrink-0">
            {hasMultipleMedia && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <ImageIcon className="h-3 w-3" />
                {data.mediaCount}
              </Badge>
            )}
            <Badge variant="default">
              {data.contentType === 'GraphVideo' ? 'Video' : 
               data.contentType === 'GraphSidecar' ? 'Carousel' : 
               data.contentType === 'GraphImage' ? 'Image' : 
               data.contentType || 'Post'}
            </Badge>
          </div>
        </CardTitle>
        {data.username && (
          <CardDescription className="flex items-center gap-2">
            <User className="h-4 w-4" />
            @{data.username}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        {data.thumbnail && (
          <div className="relative aspect-[9/16] max-h-[400px] mx-auto overflow-hidden rounded-lg bg-muted">
            <img
              src={`/api/proxy-image?url=${encodeURIComponent(data.thumbnail)}`}
              alt="Content thumbnail"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {isVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="bg-white/90 rounded-full p-4">
                  <Play className="h-8 w-8 text-black" />
                </div>
              </div>
            )}
          </div>
        )}
        
        {data.stats && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {data.stats.likes !== undefined && (
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>{data.stats.likes.toLocaleString()}</span>
              </div>
            )}
            {data.stats.comments !== undefined && (
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                <span>{data.stats.comments.toLocaleString()}</span>
              </div>
            )}
          </div>
        )}

        {hasMultipleMedia && data.allMedia && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">All Media Items ({data.mediaCount}):</p>
              <Badge variant="secondary" className="text-xs">Click to download</Badge>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {data.allMedia.map((media, idx) => {
                const handleMediaDownload = (e: React.MouseEvent) => {
                  e.preventDefault();
                  const extension = media.type === 'video' ? 'mp4' : 'jpg';
                  const filename = `${data.username}_${idx + 1}_${Date.now()}.${extension}`;
                  const proxyUrl = `/api/proxy-download?url=${encodeURIComponent(media.url)}&filename=${encodeURIComponent(filename)}`;
                  
                  const a = document.createElement('a');
                  a.href = proxyUrl;
                  a.download = filename;
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                };

                return (
                  <div
                    key={idx}
                    className="relative group"
                  >
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-muted border hover:border-primary transition-colors">
                      <img
                        src={`/api/proxy-image?url=${encodeURIComponent(media.thumbnail_url || media.url || '')}`}
                        alt={`Media ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {media.type === 'video' && (
                        <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1.5">
                          <Play className="h-3 w-3 text-white" />
                        </div>
                      )}
                      {/* Always visible download button for better UX */}
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                        <Button
                          onClick={handleMediaDownload}
                          size="sm"
                          variant="secondary"
                          className="w-full h-7 text-xs"
                        >
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-1.5 font-medium">
                      {idx + 1} of {data.mediaCount}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button onClick={handleDownload} className="w-full" size="lg">
          <Download className="mr-2 h-4 w-4" />
          Download {isVideo ? 'Video' : 'Image'}
        </Button>
      </CardFooter>
    </Card>
  );
}

function VideoSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2 mt-2" />
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="aspect-[9/16] max-h-[400px] mx-auto rounded-lg" />
        <Skeleton className="h-4 w-20" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
}

export function VideoPreview() {
  return (
    <Suspense fallback={<VideoSkeleton />}>
      <VideoContent />
    </Suspense>
  );
}
