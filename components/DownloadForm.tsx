'use client';

import { useState, useTransition } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Download, Loader2 } from 'lucide-react';
import { useDownloaderContext } from '@/components/DownloaderProvider';

export function DownloadForm() {
  const [url, setUrl] = useState('');
  const [isPending, startTransition] = useTransition();
  const { downloadReel, isLoading } = useDownloaderContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      downloadReel(url);
    });
  };

  const loading = isLoading || isPending;

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-2">
        <Label htmlFor="url" className="text-sm font-medium">
          Instagram URL
        </Label>
        <Input
          id="url"
          type="url"
          placeholder="https://www.instagram.com/reel/... or /p/... or /tv/..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={loading}
          className="w-full"
          required
        />
        <p className="text-xs text-muted-foreground">
          Supports Reels, Posts, Carousels, and IGTV
        </p>
      </div>
      
      <Button
        type="submit"
        className="w-full"
        disabled={loading || !url}
        size="lg"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Fetching...
          </>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" />
            Get Media
          </>
        )}
      </Button>
    </form>
  );
}
