import type { Metadata } from "next";
import Link from "next/link";
import {
    FaAward,
    FaUsers,
    FaChartLine,
    FaStar,
    FaShieldAlt,
    FaHandshake,
    FaRocket,
    FaLaptopCode,
    FaBullseye,
    FaEye,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt
} from "react-icons/fa";

export const metadata: Metadata = {
    title: "About Us | FutureX Digital Marketing – Udaipur",
    description:
        "Learn about FutureX Digital Marketing – Udaipur's trusted digital marketing agency specializing in SEO, web development, PPC, and performance marketing since 2020.",
};

const commitments = [
    {
        icon: <FaChartLine />,
        title: "ROI-First Strategy",
        desc: "Campaigns driven by measurable sales, phone calls, and revenue return.",
        bg: "rgba(6, 182, 212, 0.12)",
        accent: "#06B6D4"
    },
    {
        icon: <FaLaptopCode />,
        title: "Sub-Second Web Tech",
        desc: "Cutting-edge Next.js and React web app architecture.",
        bg: "rgba(99, 102, 241, 0.12)",
        accent: "#6366F1"
    },
    {
        icon: <FaHandshake />,
        title: "100% Transparency",
        desc: "Live analytics dashboards and detailed monthly ROI reporting.",
        bg: "rgba(16, 185, 129, 0.12)",
        accent: "#10B981"
    },
    {
        icon: <FaRocket />,
        title: "AI Automation",
        desc: "Smart 24/7 lead capture chatbots and WhatsApp API workflows.",
        bg: "rgba(245, 158, 11, 0.12)",
        accent: "#F59E0B"
    },
    {
        icon: <FaShieldAlt />,
        title: "Local Market Mastery",
        desc: "Deep domain expertise in Udaipur & Rajasthan commercial markets.",
        bg: "rgba(236, 72, 153, 0.12)",
        accent: "#EC4899"
    },
    {
        icon: <FaUsers />,
        title: "Dedicated Agency Support",
        desc: "Direct access to lead digital strategists and creative designers.",
        bg: "rgba(14, 165, 233, 0.12)",
        accent: "#0EA5E9"
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ padding: "120px 0 60px", background: "#0B0F19", borderBottom: "1px solid rgba(6, 182, 212, 0.2)" }}>
                <div className="container">
                    <div className="breadcrumb" style={{ display: "flex", gap: "10px", color: "#94A3B8", fontSize: "0.9rem", marginBottom: "16px" }}>
                        <Link href="/" style={{ color: "#06B6D4", textDecoration: "none" }}>Home</Link>
                        <span>/</span>
                        <span>About Us</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#F8FAFC", marginBottom: "16px" }}>
                        About FutureX Digital Marketing
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "#94A3B8", maxWidth: "700px", lineHeight: "1.8" }}>
                        Udaipur’s leading performance marketing agency driving revenue, organic search rankings, and brand authority since 2020.
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section" style={{ padding: "100px 0", background: "#0B0F19" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "50px", alignItems: "center" }}>
                        <div>
                            <span className="section-label" style={{ color: "#06B6D4" }}>OUR STORY &amp; FOUNDATION</span>
                            <h2 style={{ fontSize: "2.3rem", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.25, margin: "16px 0 24px" }}>
                                Transforming Digital Footprints Into High-Performing Sales Engines
                            </h2>
                            <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 20 }}>
                                Founded in 2020 by <strong>Akshay Jain</strong>, FutureX Digital Marketing was established with a singular mission: to empower businesses in Udaipur and globally with high-impact, transparent digital growth strategies.
                            </p>
                            <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 20 }}>
                                Based on the 5th Floor (Office No. 526) of Arvana Mall in Hathipole, Udaipur, our agency combines creative visual design, full-stack web engineering on Next.js, and data-backed performance advertising.
                            </p>
                            <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 30 }}>
                                Having served over 150+ clients across hospitality, healthcare, e-commerce, real estate, and education, we pride ourselves on a 4.8/5 client satisfaction rating and a 98% long-term client retention rate.
                            </p>

                            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", border: "none", borderRadius: "100px", padding: "16px 36px" }}>
                                    Partner With Us <FaHandshake />
                                </Link>
                                <Link href="tel:+917733977227" className="btn btn-secondary" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#F8FAFC", borderRadius: "100px", padding: "16px 32px" }}>
                                    <FaPhoneAlt style={{ color: "#06B6D4" }} /> Call Founder Direct
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(6, 182, 212, 0.3)", boxShadow: "0 25px 60px rgba(0,0,0,0.6)", position: "relative" }}>
                                <img
                                    src="/about-agency.png"
                                    alt="FutureX Office in Arvana Mall Udaipur"
                                    style={{ width: "100%", height: "auto", display: "block" }}
                                />
                                <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px", background: "rgba(11, 15, 25, 0.85)", backdropFilter: "blur(15px)", border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "16px", padding: "20px", display: "flex", gap: "16px", alignItems: "center" }}>
                                    <div style={{ width: "45px", height: "45px", borderRadius: "12px", background: "linear-gradient(135deg, #06B6D4, #6366F1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontSize: "1.2rem", flexShrink: 0 }}>
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 style={{ color: "#F8FAFC", fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>Headquarters in Udaipur</h4>
                                        <span style={{ color: "#94A3B8", fontSize: "0.85rem" }}>Office 526, 5th Floor, Arvana Mall, Hathipole</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Mission & Vision */}
            <section style={{ padding: "100px 0", background: "#0F172A" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
                        <div style={{ background: "#0B0F19", border: "1px solid rgba(6, 182, 212, 0.25)", borderRadius: "24px", padding: "40px" }}>
                            <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "rgba(6, 182, 212, 0.15)", color: "#06B6D4", fontSize: "1.8rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                                <FaBullseye />
                            </div>
                            <h3 style={{ color: "#F8FAFC", fontSize: "1.5rem", fontWeight: 800, marginBottom: "16px" }}>Our Mission</h3>
                            <p style={{ color: "#94A3B8", fontSize: "1rem", lineHeight: "1.8" }}>
                                To engineer predictable, scalable revenue funnels for businesses using custom web technology, local SEO mastery, high-ROAS paid ads, and automated AI lead capture systems.
                            </p>
                        </div>

                        <div style={{ background: "#0B0F19", border: "1px solid rgba(99, 102, 241, 0.25)", borderRadius: "24px", padding: "40px" }}>
                            <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "rgba(99, 102, 241, 0.15)", color: "#6366F1", fontSize: "1.8rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                                <FaEye />
                            </div>
                            <h3 style={{ color: "#F8FAFC", fontSize: "1.5rem", fontWeight: 800, marginBottom: "16px" }}>Our Vision</h3>
                            <p style={{ color: "#94A3B8", fontSize: "1rem", lineHeight: "1.8" }}>
                                To become India’s most trusted performance marketing agency, recognized for transparent analytics, cutting-edge AI integrations, and setting industry benchmarks in digital growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics */}
            <section style={{ padding: "80px 0", background: "#0B0F19", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
                        {[
                            { icon: <FaAward />, value: "5+ Years", title: "Experience", desc: "Dedicated growth leadership in Udaipur since 2020." },
                            { icon: <FaUsers />, value: "150+", title: "Happy Clients", desc: "Across Udaipur, Rajasthan, and international markets." },
                            { icon: <FaStar />, value: "4.8 / 5", title: "Client Rating", desc: "Top aggregate score from verified client feedback." },
                            { icon: <FaChartLine />, value: "350%", title: "Organic ROI", desc: "Consistent top Google search rankings & sales scale." },
                        ].map((m, i) => (
                            <div key={i} style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "20px", padding: "30px", textAlign: "center" }}>
                                <div style={{ fontSize: "2rem", color: "#06B6D4", marginBottom: "12px" }}>{m.icon}</div>
                                <h3 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#F8FAFC", marginBottom: "6px" }}>{m.value}</h3>
                                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#6366F1", marginBottom: "10px" }}>{m.title}</div>
                                <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: "1.6" }}>{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Commitments */}
            <section style={{ padding: "100px 0", background: "#0F172A" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 50 }}>
                        <span className="section-label" style={{ color: "#06B6D4" }}>OUR PROMISE</span>
                        <h2 className="section-title" style={{ color: "#F8FAFC" }}>Agency Core Commitments</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto", color: "#94A3B8" }}>
                            What sets FutureX Digital Marketing apart from generic agencies.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
                        {commitments.map((c, i) => (
                            <div key={i} style={{ background: "#0B0F19", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "30px" }}>
                                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: c.bg, color: c.accent, fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                                    {c.icon}
                                </div>
                                <h3 style={{ color: "#F8FAFC", fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>{c.title}</h3>
                                <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.6" }}>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
