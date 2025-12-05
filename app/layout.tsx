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
  metadataBase: new URL('https://igx.com'),
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
  authors: [{ name: "IGX Team", url: "https://igx.com/about" }],
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
    url: "https://igx.com",
    type: "website",
    siteName: "IGX",
    locale: "en_US",
    images: [
      {
        url: "https://igx.com/og-image.png",
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
    images: ["https://igx.com/twitter-image.png"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background scroll-smooth antialiased`}
      >
        <GoogleAnalytics />
        <Navbar />
        {children}
        <Footer />
        <ClientToaster />
      </body>
    </html>
  );
}
