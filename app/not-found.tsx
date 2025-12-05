import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <div className="text-9xl font-bold text-primary">
              404
            </div>
          </div>
          <CardTitle className="text-3xl">Page Not Found</CardTitle>
          <CardDescription className="text-lg">
            Oops! The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-center text-muted-foreground">
              Don't worry, you can still download Instagram Reels, Posts, and Stories from our homepage.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Link href="/" className="w-full">
                <Button variant="default" className="w-full" size="lg">
                  <Home className="mr-2 h-4 w-4" />
                  Go to Homepage
                </Button>
              </Link>
              <Link href="/blog" className="w-full">
                <Button variant="outline" className="w-full" size="lg">
                  <Search className="mr-2 h-4 w-4" />
                  Browse Blog
                </Button>
              </Link>
            </div>

            <div className="pt-6 border-t mt-6">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Popular pages you might be looking for:
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link href="/how-it-works">
                  <Button variant="ghost" size="sm">How It Works</Button>
                </Link>
                <Link href="/faq">
                  <Button variant="ghost" size="sm">FAQ</Button>
                </Link>
                <Link href="/about">
                  <Button variant="ghost" size="sm">About Us</Button>
                </Link>
                <Link href="/blog">
                  <Button variant="ghost" size="sm">Blog</Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
