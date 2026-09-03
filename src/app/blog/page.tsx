import type { Metadata } from "next";
import Link from "next/link";
import PremiumCTA from "@/components/PremiumCTA";
import { FaHome, FaChevronRight, FaCalendarAlt, FaTag, FaWhatsapp, FaShareAlt } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Digital Marketing Blog & Insights | FutureX Agency Udaipur",
    description:
        "Actionable guides on Local SEO in Udaipur, Next.js web development, Google & Meta Ads ROI, and AI marketing automation from FutureX Digital Marketing.",
    keywords: [
        "Digital Marketing Blog",
        "Local SEO Udaipur Guide",
        "Next.js vs WordPress",
        "Meta Ads ROI strategy",
        "FutureX Digital Marketing blog"
    ],
    alternates: {
        canonical: "https://futurexdigitalmarketing.com/blog",
    },
    openGraph: {
        title: "Digital Marketing Blog & Insights | FutureX Udaipur",
        description: "Actionable growth guides on Local SEO, Next.js web development, and performance PPC.",
        url: "https://futurexdigitalmarketing.com/blog",
        type: "website",
        images: [{ url: "/hero-1.png", width: 1200, height: 630, alt: "FutureX Digital Marketing Blog" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Marketing Blog & Insights | FutureX Udaipur",
        description: "SEO, Web Dev & Advertising ROI guides.",
        images: ["/hero-1.png"]
    }
};

const blogPosts = [
    {
        title: "Top 7 Local SEO Strategies for Udaipur Businesses in 2026",
        slug: "local-seo-udaipur-strategies-2026",
        date: "September 2026",
        category: "SEO Strategy",
        image: "/service-seo.png",
        excerpt: "Learn how to optimize your Google Business Profile, target localized search queries in Udaipur, and dominate local map rankings to generate high-intent customer phone calls.",
    },
    {
        title: "Why Next.js Outperforms Legacy WordPress for E-Commerce & Agencies",
        slug: "nextjs-vs-wordpress-web-development",
        date: "August 2026",
        category: "Web Development",
        image: "/service-webdev.png",
        excerpt: "Sub-second load times, core web vitals optimization, and server-side rendering make Next.js the modern gold standard for high-converting commercial websites.",
    },
    {
        title: "How to Achieve a 4x ROAS on Meta & Google Ads Campaigns",
        slug: "maximize-roas-meta-google-ads",
        date: "August 2026",
        category: "Performance PPC",
        image: "/service-ppc.png",
        excerpt: "A deep dive into lead form funnels, audience retargeting vectors, persuasive ad copy, and conversion rate optimization (CRO) strategies.",
    },
    {
        title: "Integrating WhatsApp API & AI Chatbots to Automate 24/7 Lead Capture",
        slug: "ai-whatsapp-lead-automation-guide",
        date: "July 2026",
        category: "AI Automation",
        image: "/service-ai.png",
        excerpt: "Never lose an online inquiry again. Learn how automated WhatsApp workflows convert casual website visitors into confirmed appointments.",
    },
];

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://futurexdigitalmarketing.com"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://futurexdigitalmarketing.com/blog"
        }
    ]
};

const articlesJsonLd = blogPosts.map(post => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://futurexdigitalmarketing.com${post.image}`,
    "author": {
        "@type": "Person",
        "name": "Akshay Jain",
        "jobTitle": "Managing Director"
    },
    "publisher": {
        "@type": "Organization",
        "name": "FutureX Digital Marketing",
        "logo": {
            "@type": "ImageObject",
            "url": "https://futurexdigitalmarketing.com/logo.png"
        }
    },
    "datePublished": "2026-08-01T10:00:00+05:30",
    "dateModified": "2026-09-01T10:00:00+05:30",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://futurexdigitalmarketing.com/blog`
    },
    "keywords": post.category
}));

export default function BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesJsonLd) }}
            />
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <nav aria-label="breadcrumb" className="breadcrumb">
                        <Link href="/">
                            <FaHome />
                        </Link>
                        <FaChevronRight aria-hidden="true" />
                        <span>Insights &amp; Blog</span>
                    </nav>
                    <h1>Digital Marketing Insights &amp; SEO Guides</h1>
                    <p>
                        Expert analysis, SEO growth guides, web development trends, and ad scaling strategies from FutureX Digital Marketing.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                        {blogPosts.map((post, idx) => (
                            <article key={idx} className="glass-card" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                                <div style={{ height: "220px", overflow: "hidden" }}>
                                    <img src={post.image} alt={`FutureX Blog - ${post.title}`} width={400} height={220} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>
                                <div style={{ padding: "30px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <div>
                                        <div style={{ display: "flex", gap: "16px", color: "var(--text-secondary)", fontSize: "0.82rem", marginBottom: "12px" }}>
                                            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><FaTag style={{ color: "var(--teal)" }} /> {post.category}</span>
                                            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><FaCalendarAlt style={{ color: "var(--navy)" }} /> {post.date}</span>
                                        </div>
                                        <h3 style={{ color: "var(--navy)", fontSize: "1.3rem", fontWeight: 700, lineHeight: 1.4, marginBottom: "12px" }}>{post.title}</h3>
                                        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px" }}>{post.excerpt}</p>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "16px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                                        <Link href="/contact" style={{ color: "var(--teal)", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                                            Read Full Article &rarr;
                                        </Link>
                                        <div style={{ display: "flex", gap: "10px" }}>
                                            <a
                                                href={`https://wa.me/?text=${encodeURIComponent(post.title + " - https://futurexdigitalmarketing.com/blog")}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Share on WhatsApp"
                                                style={{ color: "#25D366", fontSize: "1.1rem" }}
                                            >
                                                <FaWhatsapp />
                                            </a>
                                            <a
                                                href="https://futurexdigitalmarketing.com/blog"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Share article"
                                                style={{ color: "var(--navy)", fontSize: "1.1rem" }}
                                            >
                                                <FaShareAlt />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <PremiumCTA />
        </>
    );
}
