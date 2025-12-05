import Script from 'next/script'

interface StructuredDataProps {
  data: Record<string, any>
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Predefined structured data templates
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IGX',
  description: 'Instagram Reels Downloader Without Ads - Download Instagram Reels, Posts, IGTV & Stories for free',
  url: 'https://igx.onetools.app',
  logo: 'https://igx.onetools.app/logo.png',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'trinityconsultancyofficial@gmail.com',
    contactType: 'Customer Service',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'IGX',
  description: 'Instagram Reels Downloader Without Ads',
  url: 'https://igx.onetools.app',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://igx.onetools.app/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'IGX - Instagram Reels Downloader',
  description: 'Download Instagram Reels without ads. Free Instagram downloader for Reels, Posts, IGTV videos, and Stories.',
  url: 'https://igx.onetools.app',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Download Instagram Reels without ads',
    'Download Instagram Posts',
    'Download Instagram Stories',
    'Download IGTV videos',
    'No watermarks',
    'No registration required',
    'Fast download speed',
    'HD quality downloads',
  ],
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const articleSchema = (article: {
  title: string
  description: string
  slug: string
  datePublished: string
  author?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  url: `https://igx.onetools.app/blog/${article.slug}`,
  datePublished: article.datePublished,
  dateModified: article.datePublished,
  author: {
    '@type': 'Organization',
    name: article.author || 'IGX Team',
  },
  publisher: {
    '@type': 'Organization',
    name: 'IGX',
    logo: {
      '@type': 'ImageObject',
      url: 'https://igx.onetools.app/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://igx.onetools.app/blog/${article.slug}`,
  },
})

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const howToSchema = (steps: Array<{ name: string; text: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Download Instagram Reels',
  description: 'Step-by-step guide to download Instagram Reels without ads using IGX',
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
})
