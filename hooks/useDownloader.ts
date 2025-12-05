'use client';

import { useState, useCallback, useRef } from 'react';
import { toast } from 'sonner';
import type { DownloadStatus } from '@/types';

// Instagram URL validation regex
const INSTAGRAM_URL_REGEX = /^https?:\/\/(www\.)?(instagram\.com|instagr\.am)\/(p|reel|tv|stories)\/[a-zA-Z0-9_-]+/;

// Standardize error messages for better UX
function sanitizeError(error: unknown, statusCode?: number): string {
  // Handle HTTP status codes first
  if (statusCode === 403) {
    return 'This post is from a private account. Please use a public post URL or make sure the account is not private.';
  }
  if (statusCode === 404) {
    return 'Post not found. The content may have been deleted or the URL is incorrect.';
  }
  if (statusCode === 429) {
    return 'Too many requests. Instagram has rate-limited us. Please wait a few minutes and try again.';
  }
  if (statusCode === 500 || statusCode === 502 || statusCode === 503) {
    return 'Server error. Please try again in a moment.';
  }

  if (error instanceof Error) {
    const msg = error.message.toLowerCase();
    
    // Backend specific error messages
    if (msg.includes('fetching post metadata failed') || msg.includes('post fetch attempt')) {
      return 'Unable to fetch post. This might be a private account or Instagram is blocking the request. Please try a different post.';
    }
    if (msg.includes('queryreturnednotfound') || msg.includes('not found')) {
      return 'Post not found. Please check the URL and try again.';
    }
    if (msg.includes('private') || msg.includes('permission') || msg.includes('forbidden')) {
      return 'This post is from a private account. Please use a public post URL.';
    }
    if (msg.includes('network') || msg.includes('fetch failed')) {
      return 'Network error. Please check your connection and try again.';
    }
    if (msg.includes('rate limit') || msg.includes('throttle') || msg.includes('too many requests')) {
      return 'Too many requests. Please wait a moment and try again.';
    }
    if (msg.includes('expecting value')) {
      return 'Failed to parse response from Instagram. The post might be unavailable or private.';
    }
    
    return error.message;
  }
  
  return 'Failed to download. Please try again.';
}

// Validate Instagram URL format
function isValidInstagramUrl(url: string): boolean {
  return INSTAGRAM_URL_REGEX.test(url.trim());
}

export function useDownloader() {
  const [status, setStatus] = useState<DownloadStatus>({
    isLoading: false,
    error: null,
    data: null,
  });

  // Abort controller to prevent duplicate requests
  const abortControllerRef = useRef<AbortController | null>(null);
  
  // Simple in-memory cache for recent results (max 5 entries)
  const cacheRef = useRef<Map<string, { data: any; timestamp: number }>>(new Map());
  const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  const downloadReel = useCallback(async (url: string) => {
    // Validate URL is not empty
    if (!url || !url.trim()) {
      toast.error('Please enter a valid Instagram URL');
      return;
    }

    const trimmedUrl = url.trim();

    // Validate Instagram URL format (prevents wasted API calls)
    if (!isValidInstagramUrl(trimmedUrl)) {
      toast.error('Please enter a valid Instagram post/reel URL');
      return;
    }

    // Check cache first (instant results for repeat queries)
    const cached = cacheRef.current.get(trimmedUrl);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      setStatus({ isLoading: false, error: null, data: cached.data });
      toast.success('Loaded from cache!');
      return;
    }

    // Abort previous request if still pending
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller for this request
    abortControllerRef.current = new AbortController();

    // Single state update to prevent flicker
    setStatus({ isLoading: true, error: null, data: null });

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: trimmedUrl }),
        signal: abortControllerRef.current.signal,
      });

      const result = await response.json();

      if (!response.ok) {
        // Create error with status code for better error handling
        const error = new Error(result.error || 'Failed to download');
        (error as any).statusCode = response.status;
        throw error;
      }

      if (result.success && result.data) {
        // Cache the successful result
        cacheRef.current.set(trimmedUrl, {
          data: result.data,
          timestamp: Date.now(),
        });

        // Limit cache size to 5 most recent entries
        if (cacheRef.current.size > 5) {
          const firstKey = cacheRef.current.keys().next().value;
          if (firstKey) {
            cacheRef.current.delete(firstKey);
          }
        }

        // Single state update (prevents double render)
        setStatus({ isLoading: false, error: null, data: result.data });
        toast.success('Content fetched successfully!');
      } else {
        throw new Error(result.error || 'Unknown error occurred');
      }
    } catch (error) {
      // Ignore abort errors (user cancelled)
      if (error instanceof Error && error.name === 'AbortError') {
        return;
      }

      // Sanitize error message for better UX (pass status code if available)
      const statusCode = (error as any)?.statusCode;
      const errorMessage = sanitizeError(error, statusCode);
      setStatus({ isLoading: false, error: errorMessage, data: null });
      toast.error(errorMessage);
    } finally {
      // Clear abort controller reference
      abortControllerRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    // Abort any pending request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    
    setStatus({ isLoading: false, error: null, data: null });
  }, []);

  const clearCache = useCallback(() => {
    cacheRef.current.clear();
    toast.success('Cache cleared!');
  }, []);

  return {
    ...status,
    downloadReel,
    reset,
    clearCache,
  };
}
