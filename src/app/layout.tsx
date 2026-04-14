import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Optima — AI Chatbot for Gym Owners",
  description:
    "Stop losing leads. Your AI chatbot answers member questions 24/7, captures leads automatically, and deploys in 48 hours. Built for gyms.",
  keywords:
    "AI chatbot gym, gym lead capture, fitness chatbot, gym website chatbot, 24/7 gym assistant",
  openGraph: {
    title: "Optima — AI Chatbot for Gym Owners",
    description:
      "Stop losing leads. AI chatbot that answers member questions 24/7.",
    url: "https://[YOUR_DOMAIN]",
    siteName: "Optima",
    images: [
      {
        url: "https://[YOUR_DOMAIN]/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  robots: "index, follow",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Optima",
  description:
    "AI chatbot and landing page service for gym owners. 24/7 lead capture and member support.",
  brand: { "@type": "Brand", name: "Optima" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "200",
    highPrice: "350",
    offerCount: "2",
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
      className={`${inter.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-dark text-text-primary font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
