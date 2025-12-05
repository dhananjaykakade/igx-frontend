import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - IGX Instagram Downloader',
  description: 'Privacy Policy for IGX Instagram Downloader. Learn how we protect your data and privacy when using our Instagram Reels, Posts, and Stories downloader.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-primary rounded-2xl">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground mt-2">Last updated: December 5, 2025</p>
          </div>
        </div>

        <Card>
          <CardContent className="prose dark:prose-invert max-w-none pt-6">
            <h2>1. Information We Collect</h2>
            <p>
              IGX is designed with privacy in mind. We collect minimal information:
            </p>
            <ul>
              <li><strong>Instagram URLs:</strong> Only the URLs you submit for downloading are processed temporarily</li>
              <li><strong>Usage Data:</strong> Anonymous analytics via Google Analytics (page views, downloads)</li>
              <li><strong>No Personal Data:</strong> We do NOT collect names, emails, or Instagram login credentials</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>The information we collect is used to:</p>
            <ul>
              <li>Process your download requests</li>
              <li>Improve our service performance</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Debug technical issues</li>
            </ul>

            <h2>3. Data Storage</h2>
            <p>
              <strong>We do NOT store your data permanently:</strong>
            </p>
            <ul>
              <li>Instagram URLs are processed in real-time and not saved</li>
              <li>Downloaded content is served directly from Instagram CDN</li>
              <li>No files are stored on our servers</li>
              <li>Cache is cleared automatically after 5 minutes</li>
            </ul>

            <h2>4. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For anonymous usage statistics</li>
              <li><strong>Instagram CDN:</strong> Content is served directly from Instagram's servers</li>
              <li><strong>Vercel:</strong> Hosting and deployment platform</li>
            </ul>

            <h2>5. Cookies</h2>
            <p>
              We use minimal cookies:
            </p>
            <ul>
              <li>Google Analytics cookies for tracking (can be disabled)</li>
              <li>Session cookies for download cache (5-minute expiry)</li>
              <li>No third-party advertising cookies</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Use our service anonymously (no account required)</li>
              <li>Disable analytics cookies in your browser</li>
              <li>Request deletion of any cached data</li>
              <li>Opt-out of Google Analytics tracking</li>
            </ul>

            <h2>7. Children's Privacy</h2>
            <p>
              Our service is not intended for users under 13. We do not knowingly collect
              information from children.
            </p>

            <h2>8. Changes to Privacy Policy</h2>
            <p>
              We may update this policy. Changes will be posted on this page with an updated
              revision date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              For privacy-related questions:
            </p>
            <ul>
              <li>Visit our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link></li>
              <li>Review our <Link href="/faq" className="text-primary hover:underline">FAQ</Link></li>
            </ul>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className="font-semibold mb-2">Summary:</p>
              <ul className="space-y-1 text-sm">
                <li>✅ No personal data collected</li>
                <li>✅ No login required</li>
                <li>✅ No files stored permanently</li>
                <li>✅ Anonymous usage only</li>
                <li>✅ 100% ad-free</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
