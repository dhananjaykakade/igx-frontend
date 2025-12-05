import { NextRequest, NextResponse } from 'next/server';
import { downloadRequestSchema } from '@/lib/validators';
import { fetchInstagramReel } from '@/lib/instagram';
import type { DownloadResponse } from '@/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validationResult = downloadRequestSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json<DownloadResponse>(
        {
          success: false,
          error: validationResult.error.issues[0]?.message || 'Invalid request',
        },
        { status: 400 }
      );
    }

    const { url } = validationResult.data;

    // Fetch Instagram Reel data
    const reelData = await fetchInstagramReel(url);

    return NextResponse.json<DownloadResponse>(
      {
        success: true,
        data: reelData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Download error:', error);
    
    // Determine appropriate status code based on error type
    let statusCode = 500;
    let errorMessage = 'An unexpected error occurred';
    
    if (error instanceof Error) {
      const msg = error.message.toLowerCase();
      
      // Private account / Forbidden errors
      if (msg.includes('forbidden') || msg.includes('private') || msg.includes('403')) {
        statusCode = 403;
        errorMessage = 'This post is from a private account or is restricted';
      }
      // Not found errors
      else if (msg.includes('not found') || msg.includes('404')) {
        statusCode = 404;
        errorMessage = 'Post not found';
      }
      // Rate limiting
      else if (msg.includes('rate limit') || msg.includes('429') || msg.includes('too many requests')) {
        statusCode = 429;
        errorMessage = 'Too many requests. Please try again later';
      }
      // JSON parsing errors (likely Instagram blocking or private account)
      else if (msg.includes('expecting value') || msg.includes('fetching post metadata failed')) {
        statusCode = 403;
        errorMessage = 'Unable to fetch post. This might be a private account or Instagram is blocking the request';
      }
      else {
        errorMessage = error.message;
      }
    }
    
    return NextResponse.json<DownloadResponse>(
      {
        success: false,
        error: errorMessage,
      },
      { status: statusCode }
    );
  }
}
