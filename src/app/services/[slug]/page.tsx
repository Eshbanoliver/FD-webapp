import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return serviceCategories.map((cat) => ({
        slug: cat.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const category = serviceCategories.find((c) => c.slug === slug);

    if (!category) {
        return {
            title: "Service Not Found | FutureX Digital Marketing",
        };
    }

    return {
        title: `${category.title} Services in Udaipur | FutureX Digital Marketing`,
        description: category.shortDesc,
        keywords: [
            category.title,
            "digital marketing services in udaipur",
            "FutureX Digital Marketing"
        ],
        alternates: {
            canonical: `https://futurexdigital.in/services/${category.slug}`,
        },
        openGraph: {
            title: `${category.title} Services in Udaipur`,
            description: category.shortDesc,
            url: `https://futurexdigital.in/services/${category.slug}`,
            images: [{ url: category.image }],
        },
    };
}

export default async function ServiceCategoryPage({ params }: Props) {
    const { slug } = await params;
    const category = serviceCategories.find((c) => c.slug === slug);

    if (!category) {
        notFound();
    }

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://futurexdigital.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://futurexdigital.in/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": category.title,
                "item": `https://futurexdigital.in/services/${category.slug}`
            }
        ]
    };

    const faqJsonLd = category.faqs ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": category.faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    } : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}
            {/* ====== PAGE HEADER ====== */}
            <section className="page-header">
                <div className="container">
                    <nav aria-label="breadcrumb" className="breadcrumb">
                        <Link href="/">
                            <FaHome />
                        </Link>
                        <FaChevronRight aria-hidden="true" />
                        <Link href="/services">Services</Link>
                        <FaChevronRight aria-hidden="true" />
                        <span>{category.title}</span>
                    </nav>
                    <h1>{category.title} in Udaipur</h1>
                    <p>{category.shortDesc}</p>
                </div>
            </section>

            {/* ====== MAIN CONTENT & SIDEBAR ====== */}
            <section className="section section-alt">
                <div className="container">
                    {/* Table of Contents */}
                    <nav aria-label="Table of Contents" style={{ background: '#fff', padding: '20px 28px', borderRadius: '16px', marginBottom: '40px', border: '1px solid var(--border)' }}>
                        <h4 style={{ color: 'var(--navy)', fontWeight: 800, marginBottom: '10px' }}>Table of Contents</h4>
                        <ul style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
                            <li><a href="#overview" style={{ color: 'var(--teal)', fontWeight: 600 }}>Overview</a></li>
                            {category.galleryImages && category.galleryImages.length > 0 && <li><a href="#gallery" style={{ color: 'var(--teal)', fontWeight: 600 }}>Gallery</a></li>}
                            <li><a href="#benefits" style={{ color: 'var(--teal)', fontWeight: 600 }}>Key Benefits</a></li>
                            <li><a href="#modules" style={{ color: 'var(--teal)', fontWeight: 600 }}>Service Modules</a></li>
                            <li><a href="#faqs" style={{ color: 'var(--teal)', fontWeight: 600 }}>FAQs</a></li>
                        </ul>
                    </nav>

                    <div className="sub-page-grid">
                        {/* LEFT COLUMN: MAIN CONTENT */}
                        <div className="sub-page-main">
                            <div className="content-block intro-block">
                                <h2 className="section-title" id="overview" style={{ textAlign: 'left', margin: '0 0 20px 0' }}>
                                    Overview of {category.title}
                                </h2>
                                <p className="section-subtitle" style={{ maxWidth: 'none', textAlign: 'left', marginBottom: 30 }}>
                                    <strong>FutureX Digital Marketing</strong> provides high-impact <strong>{category.title.toLowerCase()}</strong> tailored for businesses in Udaipur and globally.
                                </p>
                            </div>

                            {category.galleryImages && category.galleryImages.length > 0 && (
                                <div className="content-block gallery-block">
                                    <h3 className="h3-modern" id="gallery">Portfolio Showcase Gallery</h3>
                                    <div className="sub-page-gallery">
                                        {category.galleryImages.map((img, idx) => (
                                            <div key={idx} className="gallery-item-v2">
                                                <img src={img} alt={`${category.title} portfolio sample ${idx + 1}`} width={400} height={260} loading="lazy" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="content-block key-points-block">
                                <h3 className="h3-modern" id="benefits">Key Benefits &amp; Features</h3>
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
                                <h3 className="h3-modern" id="modules">Service Modules</h3>
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
                                <h4 id="faqs">Market Insights &amp; FAQs</h4>
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
