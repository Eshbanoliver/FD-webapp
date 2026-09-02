import type { Metadata } from "next";
import Link from "next/link";
import { FaHome, FaChevronRight, FaStar, FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Client Reviews & Testimonials | FutureX Digital Marketing",
    description:
        "Read verified client reviews and feedback for FutureX Digital Marketing - Udaipur's trusted SEO, web development, and performance advertising agency.",
};

const reviews = [
    {
        quote: "FutureX Digital Marketing completely transformed our online presence in Udaipur. Our organic Google leads quadrupled in just 4 months!",
        author: "Vikramaditya Singh",
        role: "CEO, Hospitality Group Udaipur",
        rating: 5,
        service: "Local SEO & Google Business Profile"
    },
    {
        quote: "The web development team delivered a blazing fast Next.js website that doubled our online booking conversions within weeks.",
        author: "Pooja Mehta",
        role: "Founder, Luxury Lifestyle Brand",
        rating: 5,
        service: "Next.js Web Development"
    },
    {
        quote: "Their Meta and Google Ads campaigns consistently deliver a 4.5x ROAS for our e-commerce store. Truly the best digital agency in Rajasthan.",
        author: "Siddharth Jain",
        role: "Marketing Director",
        rating: 5,
        service: "Performance PPC Advertising"
    },
    {
        quote: "The AI WhatsApp lead automation setup has saved us dozens of hours weekly. Inquiries get answered in seconds even outside business hours.",
        author: "Dr. Ananya Sharma",
        role: "Healthcare Clinic Founder",
        rating: 5,
        service: "AI Lead Automation & WhatsApp API"
    },
    {
        quote: "Outstanding creative brand strategy! They elevated our visual identity and designed short-form video reels that gained 1.2 million organic views.",
        author: "Manish Trivedi",
        role: "Real Estate Developer",
        rating: 5,
        service: "Social Media & Brand Identity"
    }
];

export default function TestimonialsPage() {
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
                        <span>Client Reviews</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#F8FAFC", marginBottom: "16px" }}>
                        Client Reviews &amp; Testimonials
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "#94A3B8", maxWidth: "750px", lineHeight: "1.8" }}>
                        See what business owners and marketing executives say about working with FutureX Digital Marketing.
                    </p>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="section" style={{ padding: "100px 0", background: "#0B0F19" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
                        {reviews.map((r, idx) => (
                            <div key={idx} style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div>
                                    <div style={{ display: "flex", color: "#F59E0B", gap: "4px", marginBottom: "16px" }}>
                                        {[...Array(r.rating)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <p style={{ color: "#F8FAFC", fontSize: "1.05rem", lineHeight: "1.7", fontStyle: "italic", marginBottom: "24px" }}>&ldquo;{r.quote}&rdquo;</p>
                                </div>
                                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
                                    <h4 style={{ color: "#F8FAFC", fontSize: "1.1rem", fontWeight: 700, margin: "0 0 4px 0" }}>{r.author}</h4>
                                    <span style={{ color: "#06B6D4", fontSize: "0.85rem", display: "block", fontWeight: 600 }}>{r.role}</span>
                                    <span style={{ color: "#94A3B8", fontSize: "0.8rem", display: "block", marginTop: "4px" }}>Service: {r.service}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: "center", marginTop: "60px" }}>
                        <Link href="/contact" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", border: "none", borderRadius: "100px", padding: "16px 36px" }}>
                            Become Our Next Success Story <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
