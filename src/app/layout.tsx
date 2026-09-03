import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  metadataBase: new URL('https://futurexdigitalmarketing.com'),
  title: {
    default: "Digital Marketing Company in Udaipur | FutureX Digital Marketing",
    template: "%s | FutureX Digital Marketing"
  },
  description:
    "FutureX Digital Marketing is the best digital marketing company in Udaipur specializing in SEO services, website development, Meta & Google Ads, and AI automation. Hire top IT & software experts today.",
  keywords: [
    "Future X digital marketing",
    "digital marketing services",
    "digital marketing company in udaipur",
    "online marketing company",
    "internet marketing agency",
    "best digital marketing agency",
    "affordable digital marketing agency in udaipur",
    "digital marketing services near me",
    "best seo services in udaipur",
    "social media marketing near me",
    "SEO services in udaipur",
    "Website development company in udaipur",
    "digital marketing in udaipur",
    "IT Company in udaipur",
    "Software Company in udaipur"
  ],
  authors: [{ name: "Akshay Jain" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://futurexdigitalmarketing.com',
  },
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Digital Marketing Company in Udaipur | FutureX Digital Marketing",
    description: "Scale your revenue with Udaipur's premier digital marketing agency. SEO services, website development, Meta & Google Ads, and lead automation.",
    url: "https://futurexdigitalmarketing.com",
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
    title: "Digital Marketing Company in Udaipur | FutureX Digital Marketing",
    description: "Scale your revenue with Udaipur's trusted SEO, web development & digital marketing agency.",
    images: ["/hero-1.png"]
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur, Rajasthan, India",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125"
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
    "sameAs": [
      "https://www.instagram.com/futurexdigitalmarketing/",
      "https://www.facebook.com/profile.php?id=61582411168285",
      "https://www.linkedin.com/company/futurex-digital-marketing"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <html lang="en-IN">
      <head>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="theme-color" content="#2279be" />
        <meta name="msapplication-TileColor" content="#2279be" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Udaipur, Rajasthan, India" />
        <meta name="geo.position" content="24.5854;73.7125" />
        <meta name="ICBM" content="24.5854, 73.7125" />
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
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FUTUREXGA4ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FUTUREXGA4ID');
            `,
          }}
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
