import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const domainName = process.env.NEXT_PUBLIC_DOMAIN_NAME || "Connection.cv";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://connection.cv";

export const metadata: Metadata = {
  title: `Acquire ${domainName} — Premium Domain for Sale`,
  description: `Own ${domainName} — the definitive digital asset for networking, professional connections, and B2B services. Premium domain with instant brand authority and SEO advantage.`,
  keywords: [
    "premium domain",
    "connection.cv",
    "domain for sale",
    "networking domain",
    "B2B domain",
    "professional connections",
    "Cape Verde domain",
  ],
  authors: [{ name: "imrulo.eth" }],
  openGraph: {
    title: `Acquire ${domainName} — Premium Domain for Sale`,
    description: `Own ${domainName} — the definitive digital asset for networking and professional connections.`,
    url: baseUrl,
    siteName: domainName,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${domainName} Premium Domain`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Acquire ${domainName} — Premium Domain for Sale`,
    description: `Own ${domainName} — the definitive digital asset for networking and professional connections.`,
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: domainName,
              description: `Premium domain for sale: ${domainName}`,
              category: "Digital Asset",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "5000-15000",
                  priceCurrency: "USD",
                },
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

