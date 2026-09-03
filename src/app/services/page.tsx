"use client";

import Link from "next/link";
import { serviceCategories } from "../data/services";
import PremiumCTA from "@/components/PremiumCTA";
import {
    FaArrowRight,
    FaHome,
    FaChevronRight,
    FaCheckCircle,
    FaLayerGroup,
    FaRocket,
} from "react-icons/fa";

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
            "name": "Services",
            "item": "https://futurexdigitalmarketing.com/services"
        }
    ]
};

export default function ServicesPage() {
    return (
        <>
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
                        <span>Services</span>
                    </nav>
                    <h1>Digital Marketing Services in Udaipur</h1>
                    <p>
                        Explore our comprehensive range of SEO, web development, PPC advertising,
                        social media growth, and AI automation solutions.
                    </p>
                </div>
            </section>

            {/* ====== ALL CATEGORIES GRID ====== */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 60 }}>
                        <span className="section-label">Service Catalog</span>
                        <h2 className="section-title" id="service-catalog">All Categories</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto" }}>
                            Select any service to view specific modules, deliverables, and performance guarantees.
                        </p>
                    </div>

                    <div className="services-master-grid-v2">
                        {serviceCategories.map((cat, i) => (
                            <div key={i} className="service-v2-card">
                                <div className="s-v2-image">
                                    <img src={cat.image} alt={`FutureX Digital Marketing ${cat.title} Service`} width={400} height={260} loading="lazy" />
                                    
                                    {/* Number Badge */}
                                    <div className="s-v2-num-tag">
                                        {i < 9 ? `0${i + 1}` : i + 1}
                                    </div>

                                    {/* Modules Badge */}
                                    <div className="s-v2-badge">
                                        <FaLayerGroup /> {cat.products?.length || 0} Modules
                                    </div>

                                    {/* Overlapping Floating Icon */}
                                    <div className="s-v2-floating-icon">
                                        <FaRocket />
                                    </div>
                                </div>

                                <div className="s-v2-content">
                                    <h3>{cat.title}</h3>
                                    <p>{cat.shortDesc}</p>

                                    {/* Structured Highlights Box */}
                                    {cat.products && cat.products.length > 0 && (
                                        <div className="s-v2-highlights-box">
                                            <div className="s-v2-highlights-title">Key Modules Included:</div>
                                            <div className="s-v2-highlights-list">
                                                {cat.products.slice(0, 3).map((prod, pIdx) => (
                                                    <div key={pIdx} className="s-v2-pill">
                                                        <div className="s-v2-check-circle">
                                                            <FaCheckCircle />
                                                        </div>
                                                        <span>{prod.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="s-v2-footer">
                                        <Link href={`/services/${cat.slug}`} className="s-v2-btn">
                                            <span>Explore Solutions &amp; Pricing</span> <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== CTA SECTION ====== */}
            <PremiumCTA />
        </>
    );
}
