"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaChevronRight, FaChevronDown, FaPhoneAlt, FaArrowRight } from "react-icons/fa";

const faqCategories = [
    {
        category: "Local SEO & Search Rankings",
        items: [
            { q: "Why is Local SEO critical for Udaipur businesses?", a: "Local SEO ensures your business appears in Google Maps and local 3-pack search results whenever residents or tourists in Udaipur search for your services, driving direct phone calls and foot traffic." },
            { q: "How long does it take for SEO campaigns to rank on Page 1 of Google?", a: "Initial keyword ranking improvements usually start showing within 60 to 90 days. Competitive high-volume keywords reach top Page 1 positions within 3 to 6 months." },
            { q: "What is included in FutureX's SEO services?", a: "Our SEO services cover technical audits, Google Business Profile management, local citation building, keyword optimization, high-authority link outreach, and transparent monthly performance reporting." }
        ]
    },
    {
        category: "Web Development & Technology",
        items: [
            { q: "Why does FutureX build custom websites using Next.js?", a: "Next.js provides sub-second page loading speeds, superior mobile user experience, server-side rendering for instant Google indexation, and maximum protection against cybersecurity threats." },
            { q: "Can I edit and update content on my website after launch?", a: "Yes! We integrate easy-to-use content management interfaces so your team can effortlessly upload new blogs, images, products, and landing page content." },
            { q: "Do you provide hosting and maintenance support?", a: "Yes, we handle SSL certificates, cloud server hosting, automated daily backups, and technical maintenance." }
        ]
    },
    {
        category: "Paid Ads & Performance Marketing",
        items: [
            { q: "What is the recommended budget for Google & Meta Ads?", a: "We design tailored ad campaigns starting from modest regional test budgets up to large-scale multi-channel ad spend, focusing strictly on Cost Per Lead (CPL) and Return On Ad Spend (ROAS)." },
            { q: "How quickly can paid ad campaigns generate leads?", a: "Paid search and social ads start driving qualified lead form inquiries within 24 to 48 hours of campaign launch." },
            { q: "Who writes the ad copy and designs the visuals?", a: "Our in-house copywriters and graphic designers create all ad banners, video reels, and headline copy." }
        ]
    },
    {
        category: "AI Automation & CRM Integration",
        items: [
            { q: "How does WhatsApp API automation work for lead generation?", a: "When a potential client submits an inquiry form on your website or social media ad, an automated instant WhatsApp message with your service catalog or booking link is sent immediately." },
            { q: "Can AI chatbots operate 24/7 without manual intervention?", a: "Yes, our custom AI chatbots handle visitor questions, filter qualified prospects, and collect contact details 24 hours a day, 7 days a week." }
        ]
    }
];

function FAQAccordionItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
            <button
                onClick={() => setOpen(!open)}
                style={{ width: "100%", padding: "22px 24px", background: "none", border: "none", color: "#F8FAFC", fontSize: "1.1rem", fontWeight: 700, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
                <span>{q}</span>
                <span style={{ color: "#06B6D4", transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }}>
                    <FaChevronDown />
                </span>
            </button>
            {open && (
                <div style={{ padding: "0 24px 22px", color: "#94A3B8", fontSize: "0.98rem", lineHeight: "1.7", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "16px" }}>
                    {a}
                </div>
            )}
        </div>
    );
}

export default function FAQPage() {
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
                        <span>Frequently Asked Questions</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#F8FAFC", marginBottom: "16px" }}>
                        Frequently Asked Questions
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "#94A3B8", maxWidth: "750px", lineHeight: "1.8" }}>
                        Everything you need to know about partnering with FutureX Digital Marketing in Udaipur.
                    </p>
                </div>
            </section>

            {/* FAQ Accordions */}
            <section className="section" style={{ padding: "100px 0", background: "#0B0F19" }}>
                <div className="container" style={{ maxWidth: "900px" }}>
                    {faqCategories.map((cat, idx) => (
                        <div key={idx} style={{ marginBottom: "50px" }}>
                            <h2 style={{ color: "#06B6D4", fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "24px" }}>
                                {cat.category}
                            </h2>
                            {cat.items.map((item, itemIdx) => (
                                <FAQAccordionItem key={itemIdx} q={item.q} a={item.a} />
                            ))}
                        </div>
                    ))}

                    <div style={{ textAlign: "center", background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "24px", padding: "40px", marginTop: "60px" }}>
                        <h3 style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, marginBottom: "12px" }}>Have More Questions?</h3>
                        <p style={{ color: "#94A3B8", fontSize: "1.05rem", marginBottom: "24px" }}>Our digital strategists in Udaipur are ready to assist you.</p>
                        <Link href="/contact" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", border: "none", borderRadius: "100px", padding: "16px 36px" }}>
                            Contact Agency Direct <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
