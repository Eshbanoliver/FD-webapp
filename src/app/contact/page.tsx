"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaInstagram,
    FaClock,
    FaPaperPlane,
    FaChevronRight,
    FaHome,
    FaEnvelope
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
        title: "Our Address",
        content: "5th Floor, Office No. 526, Arvana Mall, Hathipole, Udaipur – 313001, Rajasthan",
    },
    {
        icon: <FaPhoneAlt />,
        title: "Phone Number",
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
        title: "Business Hours",
        content: "Mon – Sat: 10:00 AM – 6:00 PM",
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
            "name": "Contact",
            "item": "https://futurexdigitalmarketing.com/contact"
        }
    ]
};

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", phone: "", email: "", message: "" });
    };

    return (
        <div className="contact-page-wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {/* ====== PAGE HEADER ====== */}
            <section className="page-header">
                <div className="container">
                    <nav aria-label="breadcrumb" className="breadcrumb">
                        <Link href="/">
                            <FaHome />
                        </Link>
                        <FaChevronRight aria-hidden="true" />
                        <span>Contact</span>
                    </nav>
                    <h1>Contact FutureX Digital Marketing Udaipur</h1>
                    <p>
                        Have a question about our services or need a professional growth audit?
                        Our team in Udaipur is here to provide expert guidance.
                    </p>
                </div>
            </section>

            {/* ====== CONTACT SECTION V2 ====== */}
            <section className="contact-page-v2" id="contact-info">
                <div className="contact-blobs">
                    <div className="contact-blob blob-1"></div>
                    <div className="contact-blob blob-2"></div>
                </div>

                <div className="container">
                    <div className="contact-grid-v2">
                        {/* Left Side: Info */}
                        <div className="contact-info-v2">
                            <AnimateOnScroll>
                                <span className="section-label-v2">Contact Us</span>
                                <h2 className="section-title-v2" style={{ color: 'var(--navy)', marginTop: '10px' }}>
                                    Let&apos;s Scale Your Revenue <span>Together</span>
                                </h2>
                                <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.7, marginTop: '20px' }}>
                                    Visit our flagship office in Arvana Mall, Udaipur or reach out via the communication channels below.
                                </p>
                            </AnimateOnScroll>

                            <div className="info-cards-v2">
                                {contactInfo.map((c, i) => (
                                    <AnimateOnScroll key={i}>
                                        <div className="info-card-v2">
                                            <div className="info-icon-v2">{c.icon}</div>
                                            <div>
                                                <h4>{c.title}</h4>
                                                {c.href ? (
                                                    <a href={c.href}>
                                                        {c.content}
                                                    </a>
                                                ) : (
                                                    <p>{c.content}</p>
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
                                <div className="form-container-v2">
                                    <h3 className="form-title-v2">Send Message</h3>
                                    <p style={{ color: '#94a3b8', marginBottom: '35px' }}>
                                        Complete the form and we&apos;ll get back to you within 24 hours.
                                    </p>

                                    {submitted && (
                                        <div style={{
                                            padding: "16px 24px",
                                            background: "rgba(40, 167, 69, 0.1)",
                                            borderLeft: "4px solid #28a745",
                                            borderRadius: "8px",
                                            color: "#1e4620",
                                            fontWeight: 700,
                                            marginBottom: '25px',
                                        }}>
                                            ✓ Message sent! We&apos;ll contact you soon.
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group-v2">
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-row-v2">
                                            <div className="form-group-v2">
                                                <label>Phone</label>
                                                <input
                                                    type="tel"
                                                    placeholder="+91"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group-v2">
                                                <label>Email</label>
                                                <input
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group-v2">
                                            <label>How can we help?</label>
                                            <textarea
                                                rows={4}
                                                placeholder="Briefly describe your requirements..."
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>
                                        <button type="submit" className="btn-submit-v2">
                                            <span>Submit Inquiry</span>
                                            <FaPaperPlane />
                                        </button>
                                    </form>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== MAP SECTION ====== */}
            <section className="map-section-v2" id="location-map" style={{ padding: '0 0 100px' }}>
                <div className="container">
                    <AnimateOnScroll>
                        <div style={{
                            borderRadius: '40px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                            border: '10px solid #fff'
                        }}>
                            <iframe
                                src="https://maps.google.com/maps?q=Arvana%20Mall,%20Hathipole,%20Udaipur,%20Rajasthan%20313001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="550"
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
