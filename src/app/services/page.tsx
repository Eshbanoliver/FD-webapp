"use client";

import Link from "next/link";
import { serviceCategories } from "../data/services";
import {
    FaArrowRight,
    FaHome,
    FaPhoneAlt,
    FaChevronRight,
    FaCheckCircle
} from "react-icons/fa";

export default function ServicesPage() {
    return (
        <>
            {/* ====== PAGE HEADER ====== */}
            <section className="page-header" style={{ padding: "120px 0 60px", background: "#0B0F19", borderBottom: "1px solid rgba(6, 182, 212, 0.2)" }}>
                <div className="container">
                    <div className="breadcrumb" style={{ display: "flex", gap: "10px", alignItems: "center", color: "#94A3B8", fontSize: "0.9rem", marginBottom: "16px" }}>
                        <Link href="/" style={{ color: "#06B6D4", textDecoration: "none" }}>
                            <FaHome />
                        </Link>
                        <FaChevronRight style={{ fontSize: "0.75rem" }} />
                        <span>Services</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#F8FAFC", marginBottom: "16px" }}>
                        Our Digital Marketing Solutions
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "#94A3B8", maxWidth: "720px", lineHeight: "1.8" }}>
                        From dominant Local SEO in Udaipur to custom Next.js web applications, high-ROAS paid ad campaigns, and AI lead automation.
                    </p>
                </div>
            </section>

            {/* ====== SERVICES CATALOG ====== */}
            <section className="section" style={{ padding: "100px 0", background: "#0B0F19" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 60 }}>
                        <span className="section-label" style={{ color: "#06B6D4" }}>AGENCY CAPABILITIES</span>
                        <h2 className="section-title" style={{ color: "#F8FAFC" }}>Full-Spectrum Digital Services</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto", color: "#94A3B8" }}>
                            Select any service to explore detailed deliverables, technical workflows, and client FAQs.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px" }}>
                        {serviceCategories.map((cat, i) => (
                            <div key={i} style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.25)", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                                <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
                                    <img src={cat.image} alt={cat.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>
                                <div style={{ padding: "30px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <div>
                                        <h3 style={{ color: "#F8FAFC", fontSize: "1.35rem", fontWeight: 700, marginBottom: "12px" }}>{cat.title}</h3>
                                        <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px" }}>{cat.shortDesc}</p>

                                        {cat.keyPoints && (
                                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
                                                {cat.keyPoints.slice(0, 3).map((point, idx) => (
                                                    <li key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#F8FAFC", fontSize: "0.88rem", marginBottom: "8px" }}>
                                                        <FaCheckCircle style={{ color: "#06B6D4", flexShrink: 0 }} />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <Link href={`/services/${cat.slug}`} className="btn btn-primary" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", border: "none", borderRadius: "100px", textDecoration: "none", width: "100%", justifyContent: "center" }}>
                                        Explore Service Details <FaArrowRight />
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
