import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";

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

  title: "ATC Fulfillment",
  description:
    "Discover premium products made in the USA and Vietnam. Trusted fulfillment and sourcing solutions for businesses worldwide.",

  openGraph: {
    title: "ATC Fulfillment",
    description:
      "Discover premium products made in the USA and Vietnam.",
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
    title: "ATC Fulfillment",
    description:
      "Discover premium products made in the USA and Vietnam.",
    images: ["/images/2aOboQaz7kj8UAqPWzsVxOxj7TC9XPXGuxAv2iQ4.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
