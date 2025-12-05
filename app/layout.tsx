import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ClientToaster } from "@/components/ClientToaster";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://igx.onetools.app'),
  title: {
    default: "IGX - Instagram Reels Downloader Without Ads | Free Download Reels, Posts & Stories",
    template: "%s | IGX - Instagram Downloader Without Ads",
  },
  description: "#1 Instagram Reels Downloader Without Ads. Download Instagram Reels, Posts, IGTV, Stories, and Carousels in HD quality. Free, fast, no watermark, no login required. 100% ad-free experience.",
  applicationName: "IGX",
  referrer: "origin-when-cross-origin",
  keywords: [
    "instagram reels downloader without ads",
    "download instagram reels",
    "instagram video downloader",
    "save instagram posts",
    "instagram stories downloader",
    "igtv downloader",
    "download reels without watermark",
    "free instagram downloader",
    "instagram dp downloader",
    "instagram carousel downloader",
    "download instagram audio",
    "IGX",
  ],
  authors: [{ name: "IGX Team", url: "https://igx.onetools.app/about" }],
  creator: "IGX",
  publisher: "IGX",
  category: "Social Media Tools",
  themeColor: "#2563eb",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "IGX - Instagram Reels Downloader Without Ads",
    description: "Download Instagram Reels, Posts, IGTV, Stories & Carousels in HD. 100% Free, No Ads, No Watermarks. The fastest Instagram downloader.",
    url: "https://igx.onetools.app",
    type: "website",
    siteName: "IGX",
    locale: "en_US",
    images: [
      {
        url: "https://igx.onetools.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "IGX - Instagram Downloader Without Ads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IGX - Instagram Reels Downloader Without Ads",
    description: "Download Instagram Reels, Posts, IGTV & Stories in HD. 100% Free, No Ads, No Watermarks.",
    creator: "@IGXapp",
    images: ["https://igx.onetools.app/twitter-image.png"],
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: '/',
  },
};

export const revalidate = 3600; // Revalidate every 1 hour

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8RSTZPZG47" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8RSTZPZG47');
          `
        }} />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PTQ38KKD');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background scroll-smooth antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTQ38KKD"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <GoogleAnalytics />
        <Navbar />
        {children}
        <Footer />
        <ClientToaster />
      </body>
    </html>
  );
}
