import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DownloadForm } from '@/components/DownloadForm'
import { DownloaderProvider } from '@/components/DownloaderProvider'
import StructuredData, { articleSchema, breadcrumbSchema, howToSchema } from '@/components/StructuredData'
import { longTailPages } from '@/lib/long-tail-pages'
import { CheckCircle2, ArrowRight, Instagram } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  return longTailPages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = longTailPages.find((p) => p.slug === params.slug)
  
  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: page.title,
    description: page.description,
    keywords: [
      page.keyword,
      'IGX',
      'instagram downloader without ads',
      'free instagram tools',
      'no watermark',
      'HD quality download',
      'fast download',
      'online instagram downloader',
    ],
    authors: [{ name: "IGX Team" }],
    category: "Instagram Tools",
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'article',
      url: `https://igx.com/tools/${params.slug}`,
      siteName: "IGX",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    alternates: {
      canonical: `https://igx.com/tools/${params.slug}`,
    },
  }
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const page = longTailPages.find((p) => p.slug === params.slug)

  if (!page) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://igx.com' },
    { name: 'Tools', url: 'https://igx.com/tools' },
    { name: page.h1, url: `https://igx.com/tools/${page.slug}` },
  ]

  const howToSteps = page.content.steps.map((step, idx) => ({
    name: `Step ${idx + 1}`,
    text: step,
  }))

  const articleData = articleSchema({
    title: page.title,
    description: page.description,
    slug: `tools/${page.slug}`,
    datePublished: new Date().toISOString(),
    author: 'IGX Team',
  })

  return (
    <>
      <StructuredData data={articleData} />
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />
      <StructuredData data={howToSchema(howToSteps)} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ArrowRight className="h-4 w-4" />
              <Link href="/tools" className="hover:text-primary transition-colors">
                Tools
              </Link>
              <ArrowRight className="h-4 w-4" />
              <span className="text-foreground">{page.h1}</span>
            </nav>

            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary rounded-2xl">
                  <Instagram className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    {page.h1}
                  </h1>
                  <Badge variant="secondary" className="mt-2">
                    {page.keyword}
                  </Badge>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                {page.description}
              </p>
            </div>

            {/* Download Tool */}
            <Card>
              <CardHeader>
                <CardTitle>Try It Now - Free Download</CardTitle>
                <CardDescription>
                  Paste any Instagram URL below to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DownloaderProvider>
                  <DownloadForm />
                </DownloaderProvider>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {page.content.intro}
                </p>
              </CardContent>
            </Card>

            {/* How-To Steps */}
            <Card>
              <CardHeader>
                <CardTitle>How to {page.h1}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {page.content.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-foreground">{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Features/Benefits/Tips */}
            {(page.content.benefits || page.content.features || page.content.tips || page.content.advantages || page.content.whyUseIGX || page.content.useCases || page.content.supportedFormats) && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    {page.content.benefits ? 'Benefits' : 
                     page.content.features ? 'Key Features' :
                     page.content.tips ? 'Important Tips' :
                     page.content.advantages ? 'Advantages' :
                     page.content.whyUseIGX ? 'Why Use IGX?' :
                     page.content.useCases ? 'Use Cases' :
                     'Supported Formats'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(page.content.benefits || page.content.features || page.content.tips || page.content.advantages || page.content.whyUseIGX || page.content.useCases || page.content.supportedFormats)?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="py-8 text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Download?</h3>
                <p className="text-primary-foreground/90">
                  Fast, free, and no registration required. Start downloading Instagram content now!
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors"
                >
                  Go to IGX Downloader
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>

            {/* SEO Footer Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground">About IGX - Instagram Downloader Without Ads</h2>
              <p className="text-muted-foreground">
                IGX is a premium Instagram downloader that lets you save Reels, Posts, Stories, IGTV, and more without any advertisements. 
                Our platform is completely free, requires no registration, and provides the highest quality downloads available.
              </p>
              <p className="text-muted-foreground">
                Unlike other Instagram downloaders filled with ads and popups, IGX offers a clean, fast, and user-friendly experience. 
                Download Instagram content in HD quality, without watermarks, and save it directly to your device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
