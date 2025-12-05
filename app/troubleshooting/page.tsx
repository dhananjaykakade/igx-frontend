import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Troubleshooting Guide - IGX Instagram Downloader',
  description: 'Fix common issues with IGX Instagram Downloader. Solutions for download errors, private account problems, slow performance, and more.',
  alternates: {
    canonical: '/troubleshooting',
  },
};

export default function TroubleshootingPage() {
  const issues = [
    {
      problem: '"Private Account" Error',
      severity: 'common',
      solutions: [
        'This content is from a private Instagram account',
        'We can ONLY download public posts - this is by design',
        'Ask the account owner to make their account public temporarily',
        'Or use Instagram\'s built-in bookmark feature instead',
      ],
      prevention: 'Always check if the account is public before attempting download',
    },
    {
      problem: 'Download Button Not Working',
      severity: 'common',
      solutions: [
        'Clear your browser cache (Ctrl+Shift+Del)',
        'Try in incognito/private browsing mode',
        'Disable browser extensions (especially ad blockers)',
        'Check if JavaScript is enabled in your browser',
        'Try a different browser (Chrome, Firefox, Safari)',
      ],
      prevention: 'Keep your browser updated to the latest version',
    },
    {
      problem: 'Carousel Shows Only One Image',
      severity: 'medium',
      solutions: [
        'Refresh the page (F5 or Ctrl+R)',
        'Clear cache and try again',
        'Wait 10 seconds and click Download again',
        'Check if backend is responding (may be rate-limited)',
        'Try downloading individual images instead',
      ],
      prevention: 'Wait a few seconds between download attempts',
    },
    {
      problem: 'Slow Download Speed',
      severity: 'low',
      solutions: [
        'Large videos may take 10-30 seconds depending on your connection',
        'Check your internet speed at speedtest.net',
        'Pause other downloads or streaming',
        'Try downloading during off-peak hours',
        'Close unnecessary browser tabs',
      ],
      prevention: 'Ensure stable internet connection before downloading',
    },
    {
      problem: '"Failed to Fetch" Error',
      severity: 'critical',
      solutions: [
        'Backend API might be temporarily down',
        'Check if Instagram is accessible from your location',
        'Try again in 5-10 minutes',
        'Clear browser cache and cookies',
        'Contact support if issue persists > 1 hour',
      ],
      prevention: 'Wait during Instagram maintenance windows',
    },
    {
      problem: 'Invalid URL Format',
      severity: 'common',
      solutions: [
        'Ensure URL starts with https://www.instagram.com/',
        'Supported formats: /p/, /reel/, /tv/, /stories/',
        'Remove extra parameters (?utm_source=... etc.)',
        'Copy URL from browser address bar, not shortened links',
        'Example: https://www.instagram.com/p/ABC123/',
      ],
      prevention: 'Always copy full URL from Instagram',
    },
    {
      problem: 'Video Has No Sound',
      severity: 'low',
      solutions: [
        'This is normal - some Instagram videos are silent',
        'Original post may not have audio',
        'Check if the original post on Instagram has sound',
        'Download issue is separate from audio issue',
        'Try opening in a video player that supports audio',
      ],
      prevention: 'Verify original post has audio before downloading',
    },
    {
      problem: 'Download Stuck at Loading',
      severity: 'medium',
      solutions: [
        'Wait up to 30 seconds (large files take time)',
        'Refresh page and try again',
        'Check browser console for errors (F12)',
        'Disable VPN/proxy temporarily',
        'Try different network (mobile data vs WiFi)',
      ],
      prevention: 'Ensure stable connection before starting',
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'common': return 'default';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Troubleshooting Guide</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common issues and their solutions. Can't find your problem? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>.
          </p>
        </div>

        <div className="grid gap-6 mb-12">
          {issues.map((issue, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <AlertCircle className="h-6 w-6 text-primary mt-1" />
                    <div className="flex-1">
                      <CardTitle className="mb-2">{issue.problem}</CardTitle>
                      <Badge variant={getSeverityColor(issue.severity) as any}>
                        {issue.severity.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Solutions:
                  </h4>
                  <ul className="space-y-2">
                    {issue.solutions.map((solution, sidx) => (
                      <li key={sidx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm">
                    <strong>Prevention:</strong> {issue.prevention}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Still Having Issues?</CardTitle>
            <CardDescription>Try these general troubleshooting steps</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Clear browser cache and cookies (Ctrl+Shift+Del)</li>
              <li>Try in incognito/private browsing mode</li>
              <li>Disable all browser extensions temporarily</li>
              <li>Update your browser to the latest version</li>
              <li>Try a different browser (Chrome, Firefox, Edge, Safari)</li>
              <li>Check if Instagram.com is accessible from your location</li>
              <li>Restart your browser or device</li>
              <li>Try again in 10-15 minutes</li>
              <li>If all else fails, <Link href="/contact" className="text-primary hover:underline font-semibold">contact our support team</Link></li>
            </ol>

            <div className="mt-6 flex gap-4">
              <Button asChild>
                <Link href="/faq">Visit FAQ</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
