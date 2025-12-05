'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useDownloader } from '@/hooks/useDownloader';
import type { DownloadStatus } from '@/types';

interface DownloaderContextType extends DownloadStatus {
  downloadReel: (url: string) => Promise<void>;
  reset: () => void;
}

const DownloaderContext = createContext<DownloaderContextType | undefined>(undefined);

export function DownloaderProvider({ children }: { children: ReactNode }) {
  const downloader = useDownloader();

  return (
    <DownloaderContext.Provider value={downloader}>
      {children}
    </DownloaderContext.Provider>
  );
}

export function useDownloaderContext() {
  const context = useContext(DownloaderContext);
  if (context === undefined) {
    throw new Error('useDownloaderContext must be used within a DownloaderProvider');
  }
  return context;
}
