import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  metadataBase: new URL('https://futurexdigitalmarketing.com'),
  title: {
    default: "FutureX Digital Marketing | Digital Marketing Agency in Udaipur",
    template: "%s | FutureX Digital Marketing"
  },
  description:
    "FutureX Digital Marketing is Udaipur's premier digital marketing agency specializing in local SEO, Next.js web development, performance marketing, PPC ads, and AI lead automation.",
  keywords: [
    "Digital Marketing in Udaipur",
    "Digital Marketing Agency in Udaipur",
    "SEO Services in Udaipur",
    "Web Development in Udaipur",
    "IT Company in Udaipur",
    "Software Company in Udaipur",
    "FutureX Digital Marketing",
    "PPC Ads Agency Udaipur",
    "Social Media Marketing Udaipur"
  ],
  authors: [{ name: "Akshay Jain" }],
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "FutureX Digital Marketing - Leading Digital Marketing Agency in Udaipur",
    description: "Growth-driven digital agency in Udaipur specializing in Search Engine Optimization, Web Development, Meta & Google Ads, and AI Automation.",
    url: "https://www.futurexdigitalmarketing.com",
    siteName: "FutureX Digital Marketing",
    images: [
      {
        url: "/hero-1.png",
        width: 1200,
        height: 630,
        alt: "FutureX Digital Marketing Agency Udaipur"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "FutureX Digital Marketing Agency Udaipur",
    description: "Scale your revenue with Udaipur's trusted SEO, web development & digital marketing agency.",
    images: ["/hero-1.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#2279be",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://futurexdigitalmarketing.com/#organization",
    "name": "FutureX Digital Marketing",
    "image": "https://futurexdigitalmarketing.com/logo.png",
    "url": "https://futurexdigitalmarketing.com",
    "telephone": "+917733977227",
    "email": "futurexdigitalmarketing@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5th Floor, Office No. 526, Arvana Mall, Hathipole",
      "addressLocality": "Udaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "313001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.5854",
      "longitude": "73.7125"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Udaipur"
    },
    "founder": {
      "@type": "Person",
      "name": "Akshay Jain"
    },
    "foundingDate": "2020",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
