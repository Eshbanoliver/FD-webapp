import type { Metadata } from "next";
import Link from "next/link";
import PremiumCTA from "@/components/PremiumCTA";
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
            <section className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">
                            <FaHome />
                        </Link>
                        <FaChevronRight />
                        <span>Client Reviews</span>
                    </div>
                    <h1>Client Reviews &amp; Testimonials</h1>
                    <p>
                        See what business owners and marketing executives say about working with FutureX Digital Marketing.
                    </p>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
                        {reviews.map((r, idx) => (
                            <div key={idx} className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div>
                                    <div style={{ display: "flex", color: "#F59E0B", gap: "4px", marginBottom: "16px" }}>
                                        {[...Array(r.rating)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: "1.7", fontStyle: "italic", marginBottom: "24px" }}>&ldquo;{r.quote}&rdquo;</p>
                                </div>
                                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
                                    <h4 style={{ color: "var(--navy)", fontSize: "1.1rem", fontWeight: 700, margin: "0 0 4px 0" }}>{r.author}</h4>
                                    <span style={{ color: "var(--teal)", fontSize: "0.85rem", display: "block", fontWeight: 600 }}>{r.role}</span>
                                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block", marginTop: "4px" }}>Service: {r.service}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: "center", marginTop: "60px" }}>
                        <Link href="/contact" className="btn btn-primary">
                            Become Our Next Success Story <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            <PremiumCTA />
        </>
    );
}
