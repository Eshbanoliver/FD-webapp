import type { Metadata } from "next";
import Link from "next/link";
import PremiumCTA from "@/components/PremiumCTA";
import { FaHome, FaChevronRight, FaArrowRight, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Portfolio & Case Studies | FutureX Digital Marketing Udaipur",
    description:
        "Explore real digital growth case studies, website designs, local SEO wins, and high-ROAS ad campaigns by FutureX Digital Marketing in Udaipur.",
};

const caseStudies = [
    {
        title: "Udaipur Luxury Hotel & Resort Group",
        category: "Local SEO & Google Maps Rank #1",
        image: "/portfolio-2.png",
        metrics: "450+ Direct Inquiries / Month",
        desc: "Optimized local SEO and Google Business Profile for a premier hotel chain in Udaipur, resulting in Page 1 rankings for top tourist keywords.",
        deliverables: ["Google Business Profile Optimization", "Local Citation Building", "Review Automation", "Keyword Strategy"],
    },
    {
        title: "E-Commerce Lifestyle Brand Scale",
        category: "Next.js Web Dev & Performance Ads",
        image: "/portfolio-1.png",
        metrics: "4.5x Return On Ad Spend (ROAS)",
        desc: "Engineered a high-speed Next.js web platform with automated checkout funnels, paired with precision Meta and Google Ads campaigns.",
        deliverables: ["Next.js Web Application", "Conversion Funnel Optimization", "Meta Lead Ads", "Google Shopping Campaigns"],
    },
    {
        title: "Multi-Specialty Healthcare Clinic",
        category: "PPC & Patient Lead Generation",
        image: "/service-ppc.png",
        metrics: "320% Qualified Patient Inquiries",
        desc: "Ran high-intent Google Search campaigns for medical specialists in Udaipur, reducing cost-per-lead (CPL) by 42%.",
        deliverables: ["Google Search Ads", "Landing Page Design", "Call Tracking Integration", "A/B Copy Testing"],
    },
    {
        title: "Real Estate & Architecture Firm",
        category: "Social Media Reels & Brand Identity",
        image: "/service-social.png",
        metrics: "1.2 Million Organic Video Views",
        desc: "Curated cinematic short-form video reels, Instagram aesthetic grids, and executive LinkedIn thought leadership for luxury villa sales.",
        deliverables: ["Short-Form Video Production", "Instagram Reel Curation", "Brand Style Guide", "Lead Capture Automation"],
    },
];

export default function PortfolioPage() {
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
                        <span>Portfolio &amp; Case Studies</span>
                    </div>
                    <h1>Our Work &amp; Client Success Stories</h1>
                    <p>
                        Concrete proof of how FutureX Digital Marketing helps businesses in Udaipur and globally scale traffic, leads, and revenue.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                        {caseStudies.map((item, idx) => (
                            <div key={idx} className="glass-card" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                                <div style={{ height: "240px", overflow: "hidden", position: "relative" }}>
                                    <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    <div style={{ position: "absolute", top: "16px", right: "16px", background: "var(--navy)", color: "var(--white)", fontWeight: 800, padding: "6px 16px", borderRadius: "100px", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                                        {item.metrics}
                                    </div>
                                </div>
                                <div style={{ padding: "30px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <div>
                                        <span style={{ color: "var(--teal)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>{item.category}</span>
                                        <h3 style={{ color: "var(--navy)", fontSize: "1.4rem", fontWeight: 800, margin: "10px 0 14px" }}>{item.title}</h3>
                                        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "20px" }}>{item.desc}</p>

                                        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
                                            {item.deliverables.map((del, dIdx) => (
                                                <li key={dIdx} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.85rem", marginBottom: "8px" }}>
                                                    <FaCheckCircle style={{ color: "var(--teal)" }} />
                                                    <span>{del}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                                        Schedule Growth Audit <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <PremiumCTA />
        </>
    );
}
