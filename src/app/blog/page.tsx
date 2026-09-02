import type { Metadata } from "next";
import Link from "next/link";
import PremiumCTA from "@/components/PremiumCTA";
import { FaHome, FaChevronRight, FaCalendarAlt, FaTag } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Digital Marketing Blog & Insights | FutureX Udaipur",
    description:
        "Actionable guides on Local SEO in Udaipur, Next.js web development, Google & Meta Ads ROI, and AI marketing automation from FutureX Digital Marketing.",
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

export default function BlogPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">
                            <FaHome />
                        </Link>
                        <FaChevronRight />
                        <span>Insights &amp; Blog</span>
                    </div>
                    <h1>Digital Marketing Insights</h1>
                    <p>
                        Expert analysis, SEO growth guides, web development trends, and ad scaling strategies from FutureX Digital Marketing.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px" }}>
                        {blogPosts.map((post, idx) => (
                            <article key={idx} className="glass-card" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                                <div style={{ height: "220px", overflow: "hidden" }}>
                                    <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
                                    <Link href="/contact" style={{ color: "var(--teal)", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                                        Read Full Article &rarr;
                                    </Link>
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
