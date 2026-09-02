"use client";

import Link from "next/link";
import { serviceCategories } from "../data/services";
import PremiumCTA from "@/components/PremiumCTA";
import {
    FaArrowRight,
    FaHome,
    FaChevronRight,
} from "react-icons/fa";

export default function ServicesPage() {
    return (
        <>
            {/* ====== PAGE HEADER ====== */}
            <section className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">
                            <FaHome />
                        </Link>
                        <FaChevronRight />
                        <span>Services</span>
                    </div>
                    <h1>Our Digital Marketing Solutions</h1>
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
                        <h2 className="section-title">All Categories</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto" }}>
                            Select any service to view specific modules, deliverables, and performance guarantees.
                        </p>
                    </div>

                    <div className="services-master-grid-v2">
                        {serviceCategories.map((cat, i) => (
                            <div key={i} className="service-v2-card">
                                <div className="s-v2-image">
                                    <img src={cat.image} alt={cat.title} />
                                </div>
                                <div className="s-v2-content">
                                    <h3>{cat.title}</h3>
                                    <p>{cat.shortDesc}</p>
                                    <Link href={`/services/${cat.slug}`} className="s-v2-btn">
                                        Discover More <FaArrowRight />
                                    </Link>
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
