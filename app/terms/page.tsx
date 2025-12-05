import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - IGX Instagram Downloader',
  description: 'Terms of Service for IGX Instagram Downloader. Understand the rules and guidelines for using our Instagram content download service.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
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
            <FileText className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground mt-2">Last updated: December 5, 2025</p>
          </div>
        </div>

        <Card>
          <CardContent className="prose dark:prose-invert max-w-none pt-6">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using IGX Instagram Downloader, you agree to these Terms of Service.
              If you do not agree, please do not use our service.
            </p>

            <h2>2. Service Description</h2>
            <p>
              IGX provides a free tool to download publicly available Instagram content:
            </p>
            <ul>
              <li>Reels and videos</li>
              <li>Photos and carousels</li>
              <li>IGTV videos</li>
              <li>Stories (if publicly accessible)</li>
              <li>Profile pictures</li>
            </ul>

            <h2>3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li><strong>Use only public content:</strong> Do not attempt to download private account content</li>
              <li><strong>Respect copyright:</strong> Only download content you have rights to or for personal use</li>
              <li><strong>No automation:</strong> Do not use bots or scripts to abuse our service</li>
              <li><strong>No resale:</strong> Do not redistribute or resell downloaded content without permission</li>
              <li><strong>Follow Instagram ToS:</strong> Comply with Instagram's Terms of Service</li>
            </ul>

            <h2>4. Prohibited Uses</h2>
            <p>You may NOT use our service to:</p>
            <ul>
              <li>Download content from private Instagram accounts</li>
              <li>Violate copyright or intellectual property rights</li>
              <li>Harass, stalk, or impersonate other users</li>
              <li>Scrape or mass-download content for commercial purposes</li>
              <li>Bypass Instagram's security measures</li>
              <li>Upload malicious content or spam</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              All downloaded content belongs to its respective owners:
            </p>
            <ul>
              <li>IGX does not claim ownership of any downloaded content</li>
              <li>Users are responsible for obtaining proper licenses</li>
              <li>Fair use applies: downloads should be for personal, educational, or review purposes</li>
            </ul>

            <h2>6. Service Availability</h2>
            <p>
              We strive for 99% uptime but cannot guarantee:
            </p>
            <ul>
              <li>Uninterrupted service access</li>
              <li>Error-free operation</li>
              <li>Compatibility with all Instagram formats</li>
              <li>Access to private or restricted content</li>
            </ul>

            <h2>7. Disclaimer of Warranties</h2>
            <p>
              IGX is provided "as is" without warranties:
            </p>
            <ul>
              <li>We do not guarantee download quality or success rate</li>
              <li>We are not responsible for Instagram API changes</li>
              <li>We do not warrant accuracy of metadata (captions, usernames)</li>
            </ul>

            <h2>8. Limitation of Liability</h2>
            <p>
              IGX and its operators are not liable for:
            </p>
            <ul>
              <li>Damages from service use or inability to use</li>
              <li>Copyright infringement by users</li>
              <li>Data loss or corruption</li>
              <li>Third-party claims related to downloaded content</li>
            </ul>

            <h2>9. Rate Limiting</h2>
            <p>
              To prevent abuse:
            </p>
            <ul>
              <li>Maximum 10 downloads per minute per IP</li>
              <li>Temporary blocks for suspicious activity</li>
              <li>Cache system to reduce Instagram server load</li>
            </ul>

            <h2>10. Privacy</h2>
            <p>
              See our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for details on data handling.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms. Continued use after changes
              constitutes acceptance.
            </p>

            <h2>12. Termination</h2>
            <p>
              We may suspend or terminate access for:
            </p>
            <ul>
              <li>Violation of these terms</li>
              <li>Abusive or fraudulent behavior</li>
              <li>Excessive automated requests</li>
            </ul>

            <h2>13. Governing Law</h2>
            <p>
              These terms are governed by applicable laws. Disputes will be resolved
              through binding arbitration.
            </p>

            <h2>14. Contact</h2>
            <p>
              Questions about these terms? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>.
            </p>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className="font-semibold mb-2">⚠️ Important Reminders:</p>
              <ul className="space-y-1 text-sm">
                <li>✅ Only download public content</li>
                <li>✅ Respect copyright and creators' rights</li>
                <li>✅ Use for personal purposes only</li>
                <li>✅ Do not abuse or automate downloads</li>
                <li>✅ Follow Instagram's Terms of Service</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
