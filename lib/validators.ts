import { z } from 'zod';

export const downloadRequestSchema = z.object({
  url: z.string().url('Invalid URL format').refine(
    (url) => {
      const instagramPatterns = [
        /instagram\.com\/reels?\//,
        /instagram\.com\/p\//,
        /instagram\.com\/reel\//,
        /instagram\.com\/tv\//,
      ];
      return instagramPatterns.some(pattern => pattern.test(url));
    },
    { message: 'URL must be a valid Instagram Reel, Post, or IGTV URL' }
  ),
});

export type DownloadRequest = z.infer<typeof downloadRequestSchema>;
