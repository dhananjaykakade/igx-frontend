import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    
    // Test direct API call
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/reel`,
      { url },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 15000,
      }
    );

    return NextResponse.json({
      raw_response: response.data,
      status: response.status,
      headers: Object.fromEntries(Object.entries(response.headers)),
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json({
        error: error.message,
        response_data: error.response?.data,
        status: error.response?.status,
      }, { status: 500 });
    }
    
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
