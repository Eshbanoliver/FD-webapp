import type { Metadata } from "next";
import Link from "next/link";
import BrandsGrid from "@/components/BrandsGrid";
import PremiumCTA from "@/components/PremiumCTA";
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
    FaGem,
    FaTrophy,
    FaWrench,
    FaStore
} from "react-icons/fa";

export const metadata: Metadata = {
    title: "About Us | FutureX Digital Marketing – Udaipur",
    description:
        "Learn about FutureX Digital Marketing – Udaipur's trusted digital marketing agency specializing in SEO, web development, PPC, and performance marketing since 2020.",
};

const commitments = [
    {
        icon: <FaShieldAlt />,
        title: "ROI-First Strategy",
        desc: "Campaigns driven by measurable sales, qualified leads, and revenue return.",
        bg: "rgba(255, 188, 0, 0.12)",
        accent: "#C49B28"
    },
    {
        icon: <FaHandshake />,
        title: "Customer First",
        desc: "100% transparent client relationships & live performance dashboards.",
        bg: "rgba(45, 223, 209, 0.12)",
        accent: "#1e8a81"
    },
    {
        icon: <FaTrophy />,
        title: "Industry Leader",
        desc: "5+ Years of Proven Digital Growth Leadership in Udaipur.",
        bg: "rgba(76, 175, 80, 0.12)",
        accent: "#2e7d32"
    },
    {
        icon: <FaRocket />,
        title: "AI & Modern Tech",
        desc: "Next.js web applications & 24/7 automated lead capture bots.",
        bg: "rgba(99, 102, 241, 0.12)",
        accent: "#4f46e5"
    },
    {
        icon: <FaWrench />,
        title: "Full-Funnel Expertise",
        desc: "From creative brand design to SEO, ad traffic, and CRM follow-ups.",
        bg: "rgba(255, 77, 77, 0.12)",
        accent: "#dc2626"
    },
    {
        icon: <FaStore />,
        title: "Local Market Mastery",
        desc: "Headquartered at Arvana Mall, Udaipur for direct regional support.",
        bg: "rgba(168, 85, 247, 0.12)",
        accent: "#7c3aed"
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>About Us</span>
                    </div>
                    <h1>About FutureX Digital Marketing</h1>
                    <p>
                        Over 5 years of trust, data-driven strategy, and digital growth leadership in Udaipur.
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section">
                <div className="container">
                    <div className="about-overview">
                        <div className="about-decorative-blob"></div>
                        <div className="about-text-column">
                            <span className="section-label">Our Story</span>
                            <h2 className="section-title">
                                Transforming Businesses Into Digital Leaders
                            </h2>
                            <p className="section-subtitle" style={{ maxWidth: "none" }}>
                                <strong>FutureX Digital Marketing</strong> was founded in 2020 by <strong>Akshay Jain</strong> with a mission to empower businesses in Udaipur and globally with high-impact, transparent digital growth strategies.
                            </p>
                            <p
                                className="section-subtitle"
                                style={{ maxWidth: "none", marginTop: 16 }}
                            >
                                Based on the 5th Floor (Office No. 526) of Arvana Mall in Hathipole, Udaipur, our agency combines creative visual design, full-stack web engineering on Next.js, and data-backed performance advertising.
                            </p>
                            <p
                                className="section-subtitle"
                                style={{ maxWidth: "none", marginTop: 16 }}
                            >
                                Having served over 150+ clients across hospitality, healthcare, e-commerce, real estate, and education, we pride ourselves on a 4.8/5 client satisfaction rating and a 98% long-term client retention rate.
                            </p>
                            <div style={{ marginTop: 32 }}>
                                <Link href="/contact" className="btn btn-primary">
                                    Get a Growth Audit <FaHandshake />
                                </Link>
                            </div>
                        </div>
                        <div className="about-image-column">
                            <div className="about-image-creative-wrapper">
                                <div className="about-img-accent-border"></div>
                                <img
                                    src="/about-agency.png"
                                    alt="FutureX Office Studio"
                                    className="about-main-img-v3"
                                />
                                <div className="floating-experience-badge">
                                    <span>5+</span>
                                    <span>Years Excellence</span>
                                </div>
                                <div className="about-glass-stat">
                                    <div className="stat-item">
                                        <FaGem style={{ color: "var(--teal)" }} />
                                        <span>150+ Clients</span>
                                    </div>
                                    <div className="stat-item">
                                        <FaAward style={{ color: "var(--cherry-red)" }} />
                                        <span>4.8/5 Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== FANCY METRICS ====== */}
            <section className="metrics-section-v2" style={{ padding: '100px 0', background: '#fdfdfd' }}>
                <div className="container">
                    <div className="metrics-row-v2">
                        {[
                            {
                                icon: <FaAward />,
                                value: "5+",
                                title: "Years Leadership",
                                desc: "Half a decade of proven digital excellence and trusted leadership in Udaipur.",
                                color: "card-blue"
                            },
                            {
                                icon: <FaUsers />,
                                value: "150+",
                                title: "Happy Clients",
                                desc: "Vast network of happy business owners, hotels, and brands across Rajasthan.",
                                color: "card-yellow"
                            },
                            {
                                icon: <FaStar />,
                                value: "4.8/5",
                                title: "Aggregate Rating",
                                desc: "Top aggregate score from verified client feedback and project reviews.",
                                color: "card-teal"
                            },
                            {
                                icon: <FaChartLine />,
                                value: "350%",
                                title: "Organic ROI",
                                desc: "Consistent top Google search rankings & sales scale.",
                                color: "card-red"
                            },
                        ].map((m, i) => (
                            <div key={i} className={`metric-card-v2 ${m.color}`}>
                                <div className="metric-icon-v2">{m.icon}</div>
                                <h3>{m.value}</h3>
                                <div className="metric-title">{m.title}</div>
                                <p className="metric-desc">{m.desc}</p>
                                <Link href="/contact" className="read-more-accent">Contact Us</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Growth Methodology */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 54 }}>
                        <span className="section-label">Proven Process</span>
                        <h2 className="section-title">Our Growth Methodology</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "640px" }}>
                            A systematic 4-step execution framework engineered to transform your online presence and scale revenue.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
                        {[
                            {
                                step: "01",
                                title: "Audit & Growth Roadmap",
                                desc: "In-depth technical SEO audit, target keyword research, and competitor benchmark analysis for Udaipur and regional markets.",
                                icon: <FaBullseye />
                            },
                            {
                                step: "02",
                                title: "Funnel & Brand Design",
                                desc: "Designing sub-second Next.js web experiences, high-converting ad copy, visual assets, and high-impact lead forms.",
                                icon: <FaLaptopCode />
                            },
                            {
                                step: "03",
                                title: "Traffic & Ad Execution",
                                desc: "Deploying high-ROAS Meta and Google ads paired with organic local SEO optimization and instant WhatsApp AI lead capture.",
                                icon: <FaRocket />
                            },
                            {
                                step: "04",
                                title: "Analytics & Optimization",
                                desc: "Continuous conversion rate tuning (CRO), A/B testing, audience retargeting, and transparent monthly performance reporting.",
                                icon: <FaChartLine />
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="glass-card" style={{ padding: "36px 28px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: "24px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                                        <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: "rgba(34, 121, 190, 0.1)", color: "var(--teal)", fontSize: "1.4rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            {item.icon}
                                        </div>
                                        <span style={{ fontSize: "1.8rem", fontWeight: 900, color: "rgba(29, 49, 82, 0.15)", fontFamily: "Inter, sans-serif" }}>{item.step}</span>
                                    </div>
                                    <h3 style={{ color: "var(--navy)", fontSize: "1.2rem", fontWeight: 800, marginBottom: "12px" }}>{item.title}</h3>
                                    <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.7", margin: 0 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Commitment */}
            <section className="section section-alt">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <span className="section-label">Our Promise</span>
                        <h2 className="section-title">Agency Commitment</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto" }}>
                            At FutureX Digital Marketing, your revenue growth drives everything we do.
                        </p>
                    </div>
                    <div className="commitments-grid-v3">
                        {commitments.map((c, i) => (
                            <div
                                key={i}
                                className="commitment-card-v3"
                                style={{
                                    '--c-bg': c.bg,
                                    '--c-accent-solid': c.accent
                                } as React.CSSProperties}
                            >
                                <div className="c-card-bg-accent"></div>
                                <div className="c-card-inner">
                                    <div className="c-icon-wrapper">
                                        {c.icon}
                                    </div>
                                    <h3>{c.title}</h3>
                                    <p>{c.desc}</p>
                                    <div className="c-card-footer">
                                        <div className="c-bar" style={{ background: c.accent }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <PremiumCTA />
        </>
    );
}
