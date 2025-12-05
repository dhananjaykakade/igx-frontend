import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, MessageCircle, Github, Twitter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - IGX Instagram Downloader',
  description: 'Get in touch with the IGX team. Report issues, request features, or ask questions about our Instagram downloader service.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or need help? We're here to assist you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>Get help via email</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                For general inquiries, bug reports, or feature requests:
              </p>
              <Button asChild className="w-full">
                <a href="mailto:support@igx.com">
                  support@igx.com
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Quick Help</CardTitle>
                  <CardDescription>Check our FAQ first</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Most questions are answered in our comprehensive FAQ:
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/faq">
                  Visit FAQ
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>GitHub</CardTitle>
                  <CardDescription>Report bugs or contribute</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Found a bug? Open an issue on GitHub:
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="https://github.com/dhananjaykakade/igx-frontend/issues" target="_blank" rel="noopener noreferrer">
                  Open Issue
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Twitter className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Social Media</CardTitle>
                  <CardDescription>Follow us for updates</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Stay updated with the latest features and tips:
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="https://twitter.com/IGXapp" target="_blank" rel="noopener noreferrer">
                  @IGXapp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Before Contacting Us</CardTitle>
            <CardDescription>Help us help you faster</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">For Bug Reports:</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Include the Instagram URL you were trying to download</li>
                <li>Describe the error message or unexpected behavior</li>
                <li>Mention your browser and device (e.g., Chrome on Windows)</li>
                <li>Check if the issue persists in incognito/private mode</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">For Feature Requests:</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Describe the feature and its use case</li>
                <li>Explain how it would benefit other users</li>
                <li>Check if it's already mentioned in our <Link href="/faq" className="text-primary hover:underline">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Common Issues:</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><strong>Private account error:</strong> We can only download public content</li>
                <li><strong>Download fails:</strong> Try clearing cache or different browser</li>
                <li><strong>Slow downloads:</strong> Large files may take time depending on your connection</li>
                <li><strong>Missing carousel images:</strong> Refresh the page and try again</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="font-semibold mb-2">📧 Response Time:</p>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24-48 hours on business days.
                For urgent issues, please mark your email as "Urgent".
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
