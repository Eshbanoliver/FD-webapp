import type { Metadata } from "next";
import Link from "next/link";
import { FaHome, FaChevronRight, FaArrowRight, FaChartLine, FaCheckCircle, FaLaptopCode, FaBullhorn } from "react-icons/fa";

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
            <section className="page-header" style={{ padding: "120px 0 60px", background: "#0B0F19", borderBottom: "1px solid rgba(6, 182, 212, 0.2)" }}>
                <div className="container">
                    <div className="breadcrumb" style={{ display: "flex", gap: "10px", alignItems: "center", color: "#94A3B8", fontSize: "0.9rem", marginBottom: "16px" }}>
                        <Link href="/" style={{ color: "#06B6D4", textDecoration: "none" }}>
                            <FaHome />
                        </Link>
                        <FaChevronRight style={{ fontSize: "0.75rem" }} />
                        <span>Portfolio &amp; Case Studies</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#F8FAFC", marginBottom: "16px" }}>
                        Our Work &amp; Client Success Stories
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "#94A3B8", maxWidth: "750px", lineHeight: "1.8" }}>
                        Concrete, empirical proof of how FutureX Digital Marketing helps businesses in Udaipur and globally scale traffic, leads, and revenue.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="section" style={{ padding: "100px 0", background: "#0B0F19" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "40px" }}>
                        {caseStudies.map((item, idx) => (
                            <div key={idx} style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.25)", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                                <div style={{ height: "240px", overflow: "hidden", position: "relative" }}>
                                    <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    <div style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(6, 182, 212, 0.9)", color: "#0B0F19", fontWeight: 800, padding: "6px 16px", borderRadius: "100px", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                                        {item.metrics}
                                    </div>
                                </div>
                                <div style={{ padding: "30px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <div>
                                        <span style={{ color: "#6366F1", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>{item.category}</span>
                                        <h3 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 800, margin: "10px 0 14px" }}>{item.title}</h3>
                                        <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "20px" }}>{item.desc}</p>

                                        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
                                            {item.deliverables.map((del, dIdx) => (
                                                <li key={dIdx} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#F8FAFC", fontSize: "0.85rem", marginBottom: "8px" }}>
                                                    <FaCheckCircle style={{ color: "#06B6D4" }} />
                                                    <span>{del}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link href="/contact" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", border: "none", borderRadius: "100px", textDecoration: "none", width: "100%", justifyContent: "center" }}>
                                        Schedule Similar Growth Audit <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
