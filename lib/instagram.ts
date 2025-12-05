import axios from 'axios';
import type { InstagramApiResponse, MediaItem } from '@/types';

interface InstagramReelData {
  url: string;
  thumbnail?: string;
  caption?: string;
  username?: string;
  contentType?: string;
  mediaCount?: number;
  allMedia?: MediaItem[];
  isVideo?: boolean;
  stats?: {
    likes?: number;
    comments?: number;
  };
}

// API URL - works on both client and server
const API_BASE_URL = typeof window === 'undefined' 
  ? (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000')
  : (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000');

/**
 * Extracts shortcode from Instagram URL
 */
function extractShortcode(url: string): string {
  const patterns = [
    /instagram\.com\/p\/([A-Za-z0-9_-]+)/,
    /instagram\.com\/reel\/([A-Za-z0-9_-]+)/,
    /instagram\.com\/reels\/([A-Za-z0-9_-]+)/,
    /instagram\.com\/tv\/([A-Za-z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  throw new Error('Invalid Instagram URL format');
}

/**
 * Determines if URL is a Reel
 */
function isReelUrl(url: string): boolean {
  return /instagram\.com\/(reel|reels)\//.test(url);
}

/**
 * Fetches Instagram Reel or Post data from FastAPI backend
 */
export async function fetchInstagramReel(url: string): Promise<InstagramReelData> {
  try {
    const cleanUrl = url.split('?')[0];
    const shortcode = extractShortcode(cleanUrl);
    const isReel = isReelUrl(cleanUrl);

    // Try multiple endpoint variations
    const endpoints = [
      '/api/v1/reel',
      '/api/v1/post', 
      '/reel',
      '/post',
      '/download',
      '/api/download'
    ];
    
    const endpointToTry = isReel ? endpoints[0] : endpoints[1];

    console.log('Fetching from:', `${API_BASE_URL}${endpointToTry}`, 'with URL:', cleanUrl);

    const response = await axios.post<InstagramApiResponse>(
      `${API_BASE_URL}${endpointToTry}`,
      { url: cleanUrl },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 30000,
        validateStatus: (status) => status < 600,
      }
    );

    console.log('API Response Status:', response.status);
    console.log('API Response Data:', JSON.stringify(response.data, null, 2));

    const data = response.data;

    // Handle 404 - backend endpoint might not exist
    if (response.status === 404) {
      throw new Error('Backend endpoint not found. Please check if the FastAPI backend is running and the endpoint path is correct.');
    }

    // Handle backend errors
    if (response.status >= 400 || !data || data.success === false) {
      const errorMsg = data?.error_message || data?.detail || 'Failed to fetch content from Instagram';
      throw new Error(errorMsg);
    }

    if (!data || typeof data !== 'object') {
      throw new Error('Invalid response format from API');
    }

    if (!data.success) {
      throw new Error(data.error_message || 'Failed to fetch content from Instagram');
    }

    // Extract video/image URL from media_items
    const primaryMediaUrl = data.media_items?.[0]?.url || data.thumbnail_url;
    const thumbnailUrl = data.media_items?.[0]?.thumbnail_url || data.thumbnail_url;
    
    if (!primaryMediaUrl) {
      throw new Error('No media URL found in the response');
    }

    // Don't proxy thumbnails here - they'll be proxied in the frontend
    const proxiedThumbnail = thumbnailUrl;

    // Build media items array - don't proxy here
    const allMedia: MediaItem[] = data.media_items && data.media_items.length > 0
      ? data.media_items.map(item => ({
          ...item,
          // Keep original URLs - proxying will happen in frontend
          thumbnail_url: item.thumbnail_url || item.url,
        }))
      : [{
          type: data.is_video ? 'video' : 'image',
          url: primaryMediaUrl,
          thumbnail_url: thumbnailUrl,
        }];

    return {
      url: primaryMediaUrl,
      thumbnail: proxiedThumbnail,
      caption: data.caption || 'Instagram Content',
      username: data.owner_username || 'Unknown',
      contentType: data.content_type,
      mediaCount: data.media_items?.length || 1,
      allMedia: allMedia,
      isVideo: data.is_video,
      stats: {
        likes: data.likes || 0,
        comments: data.comments || 0,
      },
    };
  } catch (error) {
    console.error('fetchInstagramReel error:', error);
    
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
        code: error.code,
      });
      
      if (error.code === 'ECONNREFUSED') {
        throw new Error('API server is not running. Please start the FastAPI server on http://127.0.0.1:8000');
      }
      
      if (error.code === 'ETIMEDOUT' || error.code === 'ECONNABORTED') {
        throw new Error('Request timed out. Instagram might be slow to respond or the content is private.');
      }
      
      if (error.response?.status === 404) {
        throw new Error('Content not found or is private');
      }
      
      if (error.response?.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later');
      }
      
      if (error.response?.status && error.response.status >= 500) {
        const detail = error.response?.data?.error_message || error.response?.data?.detail || error.response?.data?.error;
        throw new Error(`Backend error: ${detail || 'Server error occurred'}. Please check if you need to login to the backend.`);
      }
      
      if (error.response?.data?.error_message) {
        throw new Error(error.response.data.error_message);
      }
      
      if (error.response?.data?.detail) {
        throw new Error(error.response.data.detail);
      }
      
      if (error.response?.data?.error) {
        throw new Error(error.response.data.error);
      }
    }
    
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error('Failed to fetch Instagram content. Please check the URL and try again.');
  }
}
