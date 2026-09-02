"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { serviceCategories } from "../../data/services";
import PremiumCTA from "@/components/PremiumCTA";
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
            <div style={{ padding: "200px 0", textAlign: "center" }}>
                <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>Service Not Found</h1>
                <Link href="/services" className="btn btn-primary">
                    Back to Services <FaArrowRight />
                </Link>
            </div>
        );
    }

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
                        <Link href="/services">Services</Link>
                        <FaChevronRight />
                        <span>{category.title}</span>
                    </div>
                    <h1>{category.title}</h1>
                    <p>{category.shortDesc}</p>
                </div>
            </section>

            {/* ====== MAIN CONTENT & SIDEBAR ====== */}
            <section className="section section-alt">
                <div className="container">
                    <div className="sub-page-grid">
                        {/* LEFT COLUMN: MAIN CONTENT */}
                        <div className="sub-page-main">
                            <div className="content-block intro-block">
                                <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 20px 0' }}>
                                    Overview of {category.title}
                                </h2>
                                <p className="section-subtitle" style={{ maxWidth: 'none', textAlign: 'left', marginBottom: 30 }}>
                                    {category.longDesc || `FutureX Digital Marketing provides high-impact ${category.title.toLowerCase()} tailored for businesses in Udaipur and globally.`}
                                </p>
                            </div>

                            {category.galleryImages && category.galleryImages.length > 0 && (
                                <div className="content-block gallery-block">
                                    <div className="sub-page-gallery">
                                        {category.galleryImages.map((img, idx) => (
                                            <div key={idx} className="gallery-item-v2">
                                                <img src={img} alt={`${category.title} gallery ${idx + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="content-block key-points-block">
                                <h3 className="h3-modern">Key Benefits &amp; Features</h3>
                                <ul className="key-points-list">
                                    {(category.keyPoints || [
                                        "Data-driven growth execution",
                                        "Transparent monthly ROI analytics",
                                        "Dedicated campaign manager",
                                        "Seamless multi-channel integration",
                                        "Proven track record in Udaipur"
                                    ]).map((point, idx) => (
                                        <li key={idx}>
                                            <FaCheckCircle className="text-teal" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="content-block products-block">
                                <h3 className="h3-modern">Service Modules</h3>
                                <div className="products-grid-v2">
                                    {category.products.map((product, index) => (
                                        <div key={index} className="product-card-v2">
                                            <div className="product-index">{String(index + 1).padStart(2, "0")}</div>
                                            <h3>{product.name}</h3>
                                            <p>{product.desc}</p>
                                            <Link href={`https://wa.me/917733977227?text=I'm interested in ${encodeURIComponent(product.name)} from ${encodeURIComponent(category.title)}`} target="_blank" className="product-enquire-v2">
                                                Enquire on WhatsApp <FaArrowRight />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: SIDEBAR */}
                        <aside className="sub-page-sidebar">
                            {/* Contact Widget */}
                            <div className="sidebar-widget sidebar-contact">
                                <h4>Get in Touch</h4>
                                <div className="sidebar-contact-info">
                                    <div className="contact-item">
                                        <FaPhoneAlt />
                                        <div>
                                            <span>Phone</span>
                                            <p>+91 77339 77227</p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <FaEnvelope />
                                        <div>
                                            <span>Email</span>
                                            <p>futurexdigitalmarketing@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <FaMapMarkerAlt />
                                        <div>
                                            <span>Our Location</span>
                                            <p>Arvana Mall, Udaipur, Rajasthan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Widget */}
                            <div className="sidebar-widget sidebar-faq">
                                <h4>Market Insights &amp; FAQs</h4>
                                <div className="sidebar-faq-list">
                                    {(category.faqs || [
                                        { question: `Why choose FutureX for ${category.title}?`, answer: "We provide ROI-tracked campaigns customized specifically for your target audience." },
                                        { question: "What is the turnaround time?", answer: "Campaign setup takes 48 hours; results scale continuously." }
                                    ]).map((faq, idx) => (
                                        <div key={idx} className="sidebar-faq-item">
                                            <div className="faq-q">
                                                <FaQuestionCircle />
                                                <span>{faq.question}</span>
                                            </div>
                                            <p className="faq-a">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div className="sidebar-cta-box">
                                <h3>Expert Advice</h3>
                                <p>Not sure which service package is right for you? Talk to our strategists.</p>
                                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    Request Call Back
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* ====== CTA ====== */}
            <PremiumCTA isSubPage={true} />
        </>
    );
}
