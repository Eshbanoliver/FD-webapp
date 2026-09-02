"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { serviceCategories } from "../../data/services";
import {
    FaArrowRight,
    FaChevronRight,
    FaHome,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaQuestionCircle,
    FaCheckCircle,
} from "react-icons/fa";

export default function ServiceCategoryPage() {
    const params = useParams();
    const slug = params.slug as string;
    const category = serviceCategories.find((c) => c.slug === slug);

    if (!category) {
        return (
            <div style={{ padding: "200px 0", textAlign: "center", background: "#0B0F19", minHeight: "80vh", color: "#F8FAFC" }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: 20 }}>Service Not Found</h1>
                <p style={{ color: "#94A3B8", marginBottom: 30 }}>The requested digital marketing service does not exist or has been relocated.</p>
                <Link href="/services" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", border: "none", borderRadius: "100px" }}>
                    Back to All Services <FaArrowRight />
                </Link>
            </div>
        );
    }

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
                        <Link href="/services" style={{ color: "#06B6D4", textDecoration: "none" }}>Services</Link>
                        <FaChevronRight style={{ fontSize: "0.75rem" }} />
                        <span>{category.title}</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#F8FAFC", marginBottom: "16px" }}>{category.title}</h1>
                    <p style={{ fontSize: "1.15rem", color: "#94A3B8", maxWidth: "750px", lineHeight: "1.8" }}>{category.shortDesc}</p>
                </div>
            </section>

            {/* ====== MAIN CONTENT & SIDEBAR ====== */}
            <section className="section" style={{ padding: "100px 0", background: "#0B0F19" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "flex-start" }}>
                        {/* LEFT COLUMN: MAIN CONTENT */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                            {/* Visual & Overview */}
                            <div style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.25)", borderRadius: "24px", overflow: "hidden", padding: "40px" }}>
                                <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "30px", border: "1px solid rgba(255,255,255,0.1)" }}>
                                    <img src={category.image} alt={category.title} style={{ width: "100%", height: "auto", display: "block" }} />
                                </div>
                                <h2 style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800, marginBottom: "16px" }}>
                                    Strategic Overview
                                </h2>
                                <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: "1.8", margin: 0 }}>
                                    {category.longDesc || `FutureX Digital Marketing provides high-impact ${category.title.toLowerCase()} engineered to maximize return on ad spend and drive organic customer acquisition in Udaipur and beyond.`}
                                </p>
                            </div>

                            {/* Key Benefits */}
                            <div style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.25)", borderRadius: "24px", padding: "40px" }}>
                                <h3 style={{ color: "#F8FAFC", fontSize: "1.5rem", fontWeight: 800, marginBottom: "24px" }}>Key Deliverables &amp; Business Benefits</h3>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                                    {(category.keyPoints || [
                                        "Data-driven growth execution",
                                        "Transparent monthly ROI analytics",
                                        "Dedicated campaign manager",
                                        "Seamless multi-channel integration",
                                        "Proven track record in Udaipur"
                                    ]).map((point, idx) => (
                                        <div key={idx} style={{ background: "#0B0F19", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "18px", display: "flex", alignItems: "center", gap: "12px" }}>
                                            <FaCheckCircle style={{ color: "#06B6D4", flexShrink: 0, fontSize: "1.2rem" }} />
                                            <span style={{ color: "#F8FAFC", fontSize: "0.95rem", fontWeight: 600 }}>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sub-Products / Modules */}
                            <div style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.25)", borderRadius: "24px", padding: "40px" }}>
                                <h3 style={{ color: "#F8FAFC", fontSize: "1.5rem", fontWeight: 800, marginBottom: "24px" }}>Service Components &amp; Modules</h3>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                                    {category.products.map((product, index) => (
                                        <div key={index} style={{ background: "#0B0F19", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                            <div>
                                                <span style={{ color: "#06B6D4", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "1px" }}>MODULE #{String(index + 1).padStart(2, "0")}</span>
                                                <h4 style={{ color: "#F8FAFC", fontSize: "1.15rem", fontWeight: 700, margin: "8px 0" }}>{product.name}</h4>
                                                <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "20px" }}>{product.desc}</p>
                                            </div>
                                            <Link href={`https://wa.me/917733977227?text=Hi%20FutureX%20Team,%20I'm%20interested%20in%20${encodeURIComponent(product.name)}%20for%20my%20business.`} target="_blank" style={{ color: "#06B6D4", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                                                Inquire via WhatsApp &rarr;
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: SIDEBAR */}
                        <aside style={{ display: "flex", flexDirection: "column", gap: "30px", position: "sticky", top: "100px" }}>
                            {/* Contact Widget */}
                            <div style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "24px", padding: "30px" }}>
                                <h4 style={{ color: "#F8FAFC", fontSize: "1.2rem", fontWeight: 700, marginBottom: "20px" }}>Get Direct Agency Quote</h4>
                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#94A3B8" }}>
                                        <FaPhoneAlt style={{ color: "#06B6D4" }} />
                                        <div>
                                            <span style={{ fontSize: "0.75rem", display: "block", color: "#64748B" }}>Call Agency Hotline</span>
                                            <a href="tel:+917733977227" style={{ color: "#F8FAFC", fontWeight: 700, textDecoration: "none" }}>+91 77339 77227</a>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#94A3B8" }}>
                                        <FaEnvelope style={{ color: "#06B6D4" }} />
                                        <div>
                                            <span style={{ fontSize: "0.75rem", display: "block", color: "#64748B" }}>Email Strategy Team</span>
                                            <a href="mailto:futurexdigitalmarketing@gmail.com" style={{ color: "#F8FAFC", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>futurexdigitalmarketing@gmail.com</a>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#94A3B8" }}>
                                        <FaMapMarkerAlt style={{ color: "#06B6D4" }} />
                                        <div>
                                            <span style={{ fontSize: "0.75rem", display: "block", color: "#64748B" }}>Visit Our Office</span>
                                            <span style={{ color: "#F8FAFC", fontSize: "0.85rem" }}>Office 526, Arvana Mall, Udaipur</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Service FAQs */}
                            <div style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "24px", padding: "30px" }}>
                                <h4 style={{ color: "#F8FAFC", fontSize: "1.2rem", fontWeight: 700, marginBottom: "20px" }}>Service FAQs</h4>
                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {(category.faqs || [
                                        { question: `Why choose FutureX for ${category.title}?`, answer: "We provide ROI-tracked campaigns customized specifically for your target audience." },
                                        { question: "What is the turnaround time?", answer: "Campaign setup takes 48 hours; results scale continuously." }
                                    ]).map((faq, idx) => (
                                        <div key={idx} style={{ background: "#0B0F19", borderRadius: "12px", padding: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                            <div style={{ color: "#06B6D4", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                                                <FaQuestionCircle />
                                                <span>{faq.question}</span>
                                            </div>
                                            <p style={{ color: "#94A3B8", fontSize: "0.85rem", margin: 0, lineHeight: "1.5" }}>{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", borderRadius: "24px", padding: "30px", color: "#FFF", textAlign: "center" }}>
                                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "10px" }}>Book Growth Audit</h3>
                                <p style={{ fontSize: "0.9rem", opacity: 0.9, marginBottom: "20px" }}>Get a free 30-min strategy call with our digital growth team.</p>
                                <Link href="/contact" className="btn btn-primary" style={{ background: "#FFF", color: "#0B0F19", fontWeight: 800, border: "none", borderRadius: "100px", width: "100%", justifyContent: "center", textDecoration: "none" }}>
                                    Schedule Call Now
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
