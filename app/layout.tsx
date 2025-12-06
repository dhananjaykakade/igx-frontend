import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
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
  metadataBase: new URL('https://igx.onetools.app/'),
  title: {
    default: "IGX - Instagram Reels Downloader Without Ads | Free Download Reels, Posts & Stories",
    template: "%s | IGX - Instagram Downloader Without Ads",
  },
  description: "#1 Instagram Reels Downloader Without Ads. Download Instagram Reels, Posts, IGTV, Stories, and Carousels in HD quality. Free, fast, no watermark, no login required. 100% ad-free experience.",
  applicationName: "IGX",
  referrer: "origin-when-cross-origin",
  keywords: [
    // Primary Keywords
    "instagram reel downloader",
    "instagram reel downloader without ads",
    "instagram video downloader",
    "instagram story downloader",
    "instagram post downloader",
    "download instagram reels hd",
    "instagram reels save online",
    "download instagram reel with music",
    "instagram downloader no watermark",
    "instagram downloader free",
    
    // Secondary Keywords
    "instagram hd downloader",
    "instagram photo downloader full hd",
    "insta highlights downloader",
    "instagram carousel downloader",
    "instagram multi-photo downloader",
    "instagram dp viewer hd",
    "download instagram stories anonymously",
    "instagram private reel downloader",
    "instagram reels online tool",
    "instagram igtv downloader",
    "instagram audio extractor",
    "save instagram music",
    "download instagram reels mp4",
    "instagram reel link downloader",
    "download instagram reels 1080p",
    "instagram profile picture downloader hd",
    
    // LSI Keywords
    "save insta reel",
    "instagram reel save tool",
    "insta reel fetcher",
    "instagram content downloader",
    "reel download kaise kare",
    "instagram se reel kaise download kare",
    "instagram se reel hd me download",
    "download instagram video with sound",
    "save instagram reel on pc",
    "instagram chrome downloader",
    
    // Long-Tail Keywords
    "how to download instagram reels without watermark",
    "best instagram reel downloader tool 2025",
    "download instagram reels on pc",
    "download instagram story without logging in",
    "download private instagram story",
    "instagram reel thumbnail download",
    "download instagram reels with captions",
    "instagram reel downloader fast and free",
    "instagram reels download tool for android",
    "instagram reels download tool for iphone",
    "download instagram video high quality",
    
    // Location Keywords
    "instagram reel downloader india",
    "instagram reel downloader usa",
    "instagram reel downloader uk",
    "instagram reel downloader canada",
    "instagram reel downloader philippines",
    "instagram reel downloader indonesia",
    "instagram reel downloader nigeria",
    
    // Brand
    "IGX",
    "igtv downloader",
    "download reels without watermark",
    "free instagram downloader",
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
    google: 'bwEY7i_-HnrUNQviUlnSRCJ2yXY9wHgCHCIgkQUm1Ek',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background scroll-smooth antialiased`}
        suppressHydrationWarning
      >
        {/* Google Analytics */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-8RSTZPZG47" 
          strategy="afterInteractive" 
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8RSTZPZG47');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PTQ38KKD');
          `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <Suspense>
          <noscript>
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-PTQ38KKD"
              height="0" 
              width="0" 
              style={{display: 'none', visibility: 'hidden'}}
            />
          </noscript>
        </Suspense>

        <GoogleAnalytics />
        <Navbar />
        {children}
        <Footer />
        <ClientToaster />
      </body>
    </html>
  );
}
