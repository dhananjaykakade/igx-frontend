// FastAPI Response Types (matching actual backend)
export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail_url?: string;
  width?: number | null;
  height?: number | null;
  duration?: number;
  view_count?: number;
}

export interface InstagramApiResponse {
  success: boolean;
  shortcode: string;
  content_type: string; // 'GraphVideo', 'GraphImage', 'GraphSidecar'
  is_video: boolean;
  media_items: MediaItem[]; // For carousel posts
  thumbnail_url: string;
  caption: string | null;
  owner_username: string;
  owner_id: number;
  likes: number;
  comments: number;
  timestamp: string;
  location: string | null;
  tagged_users: any[];
  error_message: string | null;
}

export interface DownloadResponse {
  success: boolean;
  data?: {
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
  };
  error?: string;
}

export interface DownloadStatus {
  isLoading: boolean;
  error: string | null;
  data: DownloadResponse['data'] | null;
}
