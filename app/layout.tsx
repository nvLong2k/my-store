import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.atcfulfillment.com"),

  title: "ATC Fulfillment - Premium Products Made in USA & Vietnam",
  description:
    "Discover premium products made in the USA and Vietnam. Trusted fulfillment and sourcing solutions for businesses worldwide.",
  keywords: [
    "ATC Fulfillment",
    "Vietnam product sourcing",
    "fulfillment center Vietnam",
    "made in USA Vietnam wholesale",
    "Vietnam sourcing agent",
    "ecommerce fulfillment Vietnam",
    "B2B sourcing Vietnam USA",
    "premium Vietnamese products wholesale",
    "supply chain Vietnam United States",
    "product fulfillment services",
  ],
  authors: [{ name: "ATC Fulfillment" }],
  creator: "ATC Fulfillment",
  publisher: "ATC Fulfillment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "ATC Fulfillment - Premium Products Made in USA & Vietnam",
    description:
      "Discover premium products made in the USA and Vietnam. Trusted fulfillment and sourcing solutions for businesses worldwide.",
    url: "https://www.atcfulfillment.com",
    siteName: "ATC Fulfillment",
    images: [
      {
        url: "/images/2aOboQaz7kj8UAqPWzsVxOxj7TC9XPXGuxAv2iQ4.jpg",
        width: 1200,
        height: 630,
        alt: "ATC Fulfillment",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ATC Fulfillment - Premium Products Made in USA & Vietnam",
    description:
      "Discover premium products made in the USA and Vietnam. Trusted fulfillment and sourcing solutions for businesses worldwide.",
    images: ["/images/2aOboQaz7kj8UAqPWzsVxOxj7TC9XPXGuxAv2iQ4.jpg"],
    creator: "@ATCFulfillment",
  },

  category: "Business",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
