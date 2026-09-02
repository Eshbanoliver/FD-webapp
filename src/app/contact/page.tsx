"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaClock,
    FaPaperPlane,
    FaChevronRight,
    FaHome
} from "react-icons/fa";

/* ------- Scroll-in animation hook ------- */
function useAnimateOnScroll() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.15 }
        );
        const el = ref.current;
        if (el) observer.observe(el);
        return () => {
            if (el) observer.unobserve(el);
        };
    }, []);
    return ref;
}

function AnimateOnScroll({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useAnimateOnScroll();
    return (
        <div ref={ref} className={`animate-on-scroll ${className}`}>
            {children}
        </div>
    );
}

const contactInfo = [
    {
        icon: <FaMapMarkerAlt />,
        title: "Our Headquarters",
        content: "5th Floor, Office No. 526, Arvana Mall, Hathipole, Udaipur, Rajasthan 313001",
    },
    {
        icon: <FaPhoneAlt />,
        title: "Direct Agency Line",
        content: "+91 77339 77227",
        href: "tel:+917733977227",
    },
    {
        icon: <FaEnvelope />,
        title: "Email Strategy Team",
        content: "futurexdigitalmarketing@gmail.com",
        href: "mailto:futurexdigitalmarketing@gmail.com",
    },
    {
        icon: <FaClock />,
        title: "Working Hours",
        content: "Mon – Sat: 10:00 AM – 6:00 PM",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "Search Engine Optimization (SEO)",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: "", phone: "", email: "", service: "Search Engine Optimization (SEO)", message: "" });
    };

    return (
        <div className="contact-page-wrapper" style={{ background: "#0B0F19", color: "#F8FAFC" }}>
            {/* ====== PAGE HEADER ====== */}
            <section className="page-header" style={{ padding: "120px 0 60px", background: "#0B0F19", borderBottom: "1px solid rgba(6, 182, 212, 0.2)" }}>
                <div className="container">
                    <div className="breadcrumb" style={{ display: "flex", gap: "10px", alignItems: "center", color: "#94A3B8", fontSize: "0.9rem", marginBottom: "16px" }}>
                        <Link href="/" style={{ color: "#06B6D4", textDecoration: "none" }}>
                            <FaHome />
                        </Link>
                        <FaChevronRight style={{ fontSize: "0.75rem" }} />
                        <span>Contact Us</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#F8FAFC", marginBottom: "16px" }}>
                        Get In Touch With FutureX
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "#94A3B8", maxWidth: "750px", lineHeight: "1.8" }}>
                        Ready to dominate search engine results and scale your business revenue? Visit our office in Arvana Mall, Udaipur or submit a consultation request below.
                    </p>
                </div>
            </section>

            {/* ====== CONTACT SECTION ====== */}
            <section className="contact-page-v2" style={{ padding: "100px 0" }}>
                <div className="container">
                    <div className="contact-grid-v2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "50px" }}>
                        {/* Left Side: Info */}
                        <div className="contact-info-v2">
                            <AnimateOnScroll>
                                <span className="section-label-v2" style={{ color: "#06B6D4", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700 }}>LET'S CONNECT</span>
                                <h2 className="section-title-v2" style={{ color: '#F8FAFC', fontSize: "2.3rem", fontWeight: 800, marginTop: '10px', marginBottom: '20px' }}>
                                    Start Your Digital Growth Journey Today
                                </h2>
                                <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '30px' }}>
                                    Schedule a consultation with founder Akshay Jain and our digital strategists at our flagship office in Hathipole, Udaipur.
                                </p>
                            </AnimateOnScroll>

                            <div className="info-cards-v2" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                {contactInfo.map((c, i) => (
                                    <AnimateOnScroll key={i}>
                                        <div className="info-card-v2" style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "18px", padding: "24px", display: "flex", gap: "20px", alignItems: "center" }}>
                                            <div className="info-icon-v2" style={{ width: "50px", height: "50px", borderRadius: "14px", background: "rgba(6, 182, 212, 0.15)", color: "#06B6D4", fontSize: "1.4rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                                {c.icon}
                                            </div>
                                            <div>
                                                <h4 style={{ color: "#F8FAFC", fontSize: "1.1rem", fontWeight: 700, margin: "0 0 4px 0" }}>{c.title}</h4>
                                                {c.href ? (
                                                    <a href={c.href} style={{ color: "#06B6D4", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>
                                                        {c.content}
                                                    </a>
                                                ) : (
                                                    <p style={{ color: "#94A3B8", margin: 0, fontSize: "0.95rem" }}>{c.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="contact-form-v2">
                            <AnimateOnScroll>
                                <div className="form-container-v2" style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "24px", padding: "40px" }}>
                                    <h3 className="form-title-v2" style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800, marginBottom: "10px" }}>Schedule Strategy Call</h3>
                                    <p style={{ color: '#94A3B8', marginBottom: '30px', fontSize: "0.95rem" }}>
                                        Complete the form below and our agency strategy team will reach out within 2 hours.
                                    </p>

                                    {submitted && (
                                        <div style={{
                                            padding: "16px 24px",
                                            background: "rgba(16, 185, 129, 0.15)",
                                            borderLeft: "4px solid #10B981",
                                            borderRadius: "12px",
                                            color: "#10B981",
                                            fontWeight: 700,
                                            marginBottom: '25px',
                                        }}>
                                            ✓ Thank you! Your growth inquiry has been received. Our team will contact you shortly.
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                        <div className="form-group-v2">
                                            <label style={{ display: "block", color: "#F8FAFC", fontWeight: 600, marginBottom: "8px", fontSize: "0.9rem" }}>Full Name *</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                style={{ width: "100%", padding: "16px 20px", borderRadius: "12px", background: "#0B0F19", border: "1px solid rgba(255,255,255,0.15)", color: "#F8FAFC", fontSize: "0.95rem" }}
                                            />
                                        </div>

                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                                            <div className="form-group-v2">
                                                <label style={{ display: "block", color: "#F8FAFC", fontWeight: 600, marginBottom: "8px", fontSize: "0.9rem" }}>Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    placeholder="+91 77339 77227"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    style={{ width: "100%", padding: "16px 20px", borderRadius: "12px", background: "#0B0F19", border: "1px solid rgba(255,255,255,0.15)", color: "#F8FAFC", fontSize: "0.95rem" }}
                                                />
                                            </div>
                                            <div className="form-group-v2">
                                                <label style={{ display: "block", color: "#F8FAFC", fontWeight: 600, marginBottom: "8px", fontSize: "0.9rem" }}>Email Address</label>
                                                <input
                                                    type="email"
                                                    placeholder="name@business.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    style={{ width: "100%", padding: "16px 20px", borderRadius: "12px", background: "#0B0F19", border: "1px solid rgba(255,255,255,0.15)", color: "#F8FAFC", fontSize: "0.95rem" }}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group-v2">
                                            <label style={{ display: "block", color: "#F8FAFC", fontWeight: 600, marginBottom: "8px", fontSize: "0.9rem" }}>Service Required</label>
                                            <select
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                style={{ width: "100%", padding: "16px 20px", borderRadius: "12px", background: "#0B0F19", border: "1px solid rgba(255,255,255,0.15)", color: "#F8FAFC", fontSize: "0.95rem" }}
                                            >
                                                <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                                                <option value="Web Development & E-Commerce">Web Development &amp; E-Commerce</option>
                                                <option value="Social Media Marketing (SMM)">Social Media Marketing (SMM)</option>
                                                <option value="Performance Marketing & PPC">Performance Marketing &amp; PPC Ads</option>
                                                <option value="Brand Strategy & Visual Identity">Brand Strategy &amp; Visual Identity</option>
                                                <option value="AI Automation & Lead Gen">AI Automation &amp; Lead Gen</option>
                                            </select>
                                        </div>

                                        <div className="form-group-v2">
                                            <label style={{ display: "block", color: "#F8FAFC", fontWeight: 600, marginBottom: "8px", fontSize: "0.9rem" }}>Project Details &amp; Business Goals</label>
                                            <textarea
                                                rows={4}
                                                placeholder="Tell us about your business, current traffic, and growth targets..."
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                style={{ width: "100%", padding: "16px 20px", borderRadius: "12px", background: "#0B0F19", border: "1px solid rgba(255,255,255,0.15)", color: "#F8FAFC", fontSize: "0.95rem" }}
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", border: "none", padding: "18px 36px", borderRadius: "100px", fontWeight: 800, color: "#FFF", width: "100%", justifyContent: "center" }}>
                                            <span>Send Consultation Request</span>
                                            <FaPaperPlane />
                                        </button>
                                    </form>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== MAP SECTION (ARVANA MALL UDAIPUR) ====== */}
            <section className="map-section-v2" style={{ padding: '0 0 100px' }}>
                <div className="container">
                    <AnimateOnScroll>
                        <div style={{ textAlign: "center", marginBottom: "30px" }}>
                            <h3 style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800 }}>Visit Our Flagship Office</h3>
                            <p style={{ color: "#94A3B8" }}>5th Floor, Office No. 526, Arvana Mall, Hathipole, Udaipur, Rajasthan 313001</p>
                        </div>
                        <div style={{
                            borderRadius: '30px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                            border: '1px solid rgba(6, 182, 212, 0.3)'
                        }}>
                            <iframe
                                src="https://maps.google.com/maps?q=Arvana%20Mall,%20Hathipole,%20Udaipur,%20Rajasthan%20313001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </div>
    );
}
