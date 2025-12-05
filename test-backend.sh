#!/bin/bash

# Test script to check backend API endpoints

BACKEND_URL="https://instagram-api-35b6.onrender.com"
TEST_URL="https://www.instagram.com/p/DQ7q-WXj8Nl/"

echo "🔍 Testing Backend API Endpoints"
echo "================================="
echo "Backend: $BACKEND_URL"
echo "Test Instagram URL: $TEST_URL"
echo ""

# Test different endpoints
endpoints=(
  "/api/v1/reel"
  "/api/v1/post"
  "/reel"
  "/post"
  "/download"
  "/api/download"
  "/"
  "/docs"
  "/health"
)

for endpoint in "${endpoints[@]}"; do
  echo "Testing: $BACKEND_URL$endpoint"
  
  # Try GET first
  status=$(curl -s -o /dev/null -w "%{http_code}" "$BACKEND_URL$endpoint")
  echo "  GET: $status"
  
  # Try POST with JSON
  status=$(curl -s -o /dev/null -w "%{http_code}" \
    -X POST "$BACKEND_URL$endpoint" \
    -H "Content-Type: application/json" \
    -d "{\"url\":\"$TEST_URL\"}")
  echo "  POST: $status"
  echo ""
done

echo "================================="
echo "💡 Checking API documentation"
echo "Visit: $BACKEND_URL/docs"
