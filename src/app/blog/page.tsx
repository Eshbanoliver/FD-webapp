import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../data/blogs";
import PremiumCTA from "@/components/PremiumCTA";
import { FaHome, FaChevronRight, FaCalendarAlt, FaTag, FaWhatsapp, FaShareAlt, FaClock, FaUser } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Digital Marketing Blog & Insights | FutureX Agency Udaipur",
    description:
        "Actionable guides on Local SEO in Udaipur, Next.js web development, Google & Meta Ads ROI, IT services, and software engineering from FutureX Digital Marketing.",
    keywords: [
        "best digital marketing agency",
        "Website development company in udaipur",
        "IT Company in udaipur",
        "Software Company in udaipur",
        "best seo services in udaipur",
        "Digital Marketing Blog Udaipur"
    ],
    alternates: {
        canonical: "https://futurexdigitalmarketing.com/blog",
    },
    openGraph: {
        title: "Digital Marketing & Tech Blog | FutureX Agency Udaipur",
        description: "High-authority growth guides on Local SEO, Next.js web development, IT solutions, and custom software in Udaipur.",
        url: "https://futurexdigitalmarketing.com/blog",
        type: "website",
        images: [{ url: "/hero-1.png", width: 1200, height: 630, alt: "FutureX Digital Marketing & Tech Blog" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Marketing & Tech Blog | FutureX Agency Udaipur",
        description: "SEO, Web Dev, IT & Custom Software Engineering guides.",
        images: ["/hero-1.png"]
    }
};

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
        "name": post.author.name,
        "jobTitle": post.author.role
    },
    "publisher": {
        "@type": "Organization",
        "name": "FutureX Digital Marketing",
        "logo": {
            "@type": "ImageObject",
            "url": "https://futurexdigitalmarketing.com/logo.png"
        }
    },
    "datePublished": "2026-09-01T10:00:00+05:30",
    "dateModified": "2026-09-03T10:00:00+05:30",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://futurexdigitalmarketing.com/blog/${post.slug}`
    },
    "keywords": post.targetKeyword
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
                    <h1>Digital Marketing &amp; Technology Insights</h1>
                    <p>
                        High-authority growth blueprints on Local SEO, Next.js web engineering, IT infrastructure, and custom software from FutureX Digital Marketing in Udaipur.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
                        {blogPosts.map((post, idx) => (
                            <article key={idx} className="glass-card" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "24px", border: "1px solid var(--border)" }}>
                                <div style={{ height: "230px", overflow: "hidden", position: "relative" }}>
                                    <img src={post.image} alt={`FutureX Blog - ${post.title}`} width={400} height={230} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    <div style={{ position: "absolute", top: "16px", left: "16px", background: "var(--teal)", color: "#fff", padding: "4px 14px", borderRadius: "100px", fontSize: "0.78rem", fontWeight: 800 }}>
                                        {post.category}
                                    </div>
                                </div>
                                <div style={{ padding: "30px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <div>
                                        <div style={{ display: "flex", gap: "16px", color: "var(--text-muted)", fontSize: "0.82rem", marginBottom: "14px", flexWrap: "wrap" }}>
                                            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><FaUser style={{ color: "var(--teal)" }} /> {post.author.name}</span>
                                            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><FaCalendarAlt style={{ color: "var(--navy)" }} /> {post.date}</span>
                                            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><FaClock style={{ color: "var(--teal-light)" }} /> {post.readTime}</span>
                                        </div>
                                        <h3 style={{ color: "var(--navy)", fontSize: "1.3rem", fontWeight: 800, lineHeight: 1.4, marginBottom: "14px" }}>
                                            <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.65", marginBottom: "24px" }}>{post.excerpt}</p>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "18px", borderTop: "1px solid rgba(34, 121, 190, 0.15)" }}>
                                        <Link href={`/blog/${post.slug}`} style={{ color: "var(--teal)", fontWeight: 800, fontSize: "0.95rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                                            Read Full Blueprint &rarr;
                                        </Link>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <a
                                                href={`https://wa.me/?text=${encodeURIComponent(post.title + " - https://futurexdigitalmarketing.com/blog/" + post.slug)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Share on WhatsApp"
                                                style={{ color: "#25D366", fontSize: "1.15rem" }}
                                            >
                                                <FaWhatsapp />
                                            </a>
                                            <a
                                                href={`https://futurexdigitalmarketing.com/blog/${post.slug}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Share article"
                                                style={{ color: "var(--navy)", fontSize: "1.15rem" }}
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
