# FastAPI Backend Setup Instructions

## Current Status
The Next.js frontend is configured to connect to your FastAPI backend at `http://localhost:8000`.

## Backend Issues Detected

Based on testing, the FastAPI backend is returning errors:

```
POST /api/v1/reel → 500 Internal Server Error
Error: 'dict' object has no attribute 'is_video'

POST /api/v1/post → 500 Internal Server Error  
Error: Failed to fetch post: Fetching Post metadata failed.
```

## Required Steps

### 1. Check Backend Authentication

According to your Postman collection, the API might require login. Try logging in first:

```bash
curl -X POST http://localhost:8000/api/v1/login \
  -H "Content-Type: application/json" \
  -d '{
    "cookie_header": "sessionid=YOUR_SESSION_ID; ds_user_id=YOUR_USER_ID; csrftoken=YOUR_CSRF_TOKEN",
    "username": "your_instagram_username"
  }'
```

**To get Instagram cookies:**
1. Open Instagram in Chrome
2. Press F12 → Application → Cookies → instagram.com
3. Copy: sessionid, ds_user_id, csrftoken, mid, ig_did

### 2. Test Backend Endpoints

Once logged in, test if the endpoints work:

```bash
# Test Reel endpoint
curl -X POST http://localhost:8000/api/v1/reel \
  -H "Content-Type: application/json" \
  -d '{"url":"https://www.instagram.com/reel/DMItvFIxAVe/"}'

# Test Post endpoint  
curl -X POST http://localhost:8000/api/v1/post \
  -H "Content-Type: application/json" \
  -d '{"url":"https://www.instagram.com/p/C0vUyJkRzGc/"}'
```

### 3. Check Backend Logs

Look at your FastAPI server logs for detailed error messages. Common issues:

- **Missing Instagram authentication** - Backend needs valid Instagram session
- **Instagram blocking requests** - May need proxies or rate limiting
- **Code bugs** - The `'dict' object has no attribute 'is_video'` suggests a backend code issue

### 4. Verify Backend Health

```bash
curl http://localhost:8000/health
```

Should return:
```json
{
  "status": "healthy",
  "timestamp": "...",
  "pool_size": 24,
  "cache_stats": {...}
}
```

## Frontend Configuration

The frontend is ready and will work once the backend returns proper responses. It expects:

### Expected Response Format

```json
{
  "success": true,
  "content_type": "reel",
  "username": "user",
  "caption": "Post caption",
  "media_count": 1,
  "media": [
    {
      "type": "video",
      "url": "https://...",
      "thumbnail_url": "https://..."
    }
  ],
  "like_count": 1234,
  "comment_count": 56,
  "play_count": 5678
}
```

## Troubleshooting

### Error: "API server is not running"
- Make sure FastAPI is running on port 8000
- Check `http://localhost:8000/health`

### Error: "Backend error: ..."
- Check if backend requires authentication
- Verify Instagram cookies are valid
- Check backend logs for detailed errors

### Error: "No media found in response"
- Backend might be returning `success: false`
- Check if content is private/blocked
- Try a different public Instagram URL

## Testing Workflow

1. **Start FastAPI backend** (port 8000)
2. **Login to backend** (if required)
3. **Test endpoint manually** with curl
4. **Once backend works**, the frontend will work automatically
5. **Visit** http://localhost:3001

## Next.js Frontend

The frontend is production-ready and includes:
- ✅ Error handling for all backend error types
- ✅ Detailed error messages for users
- ✅ Timeout handling (30s)
- ✅ Console logging for debugging
- ✅ Support for Reels, Posts, Carousels, IGTV

Just fix the backend issues and it will work perfectly!
