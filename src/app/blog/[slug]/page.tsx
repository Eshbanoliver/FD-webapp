import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../data/blogs";
import PremiumCTA from "@/components/PremiumCTA";
import {
    FaHome,
    FaChevronRight,
    FaCalendarAlt,
    FaUser,
    FaClock,
    FaTag,
    FaWhatsapp,
    FaArrowRight,
    FaCheckCircle,
    FaShareAlt,
} from "react-icons/fa";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found | FutureX Digital Marketing",
        };
    }

    return {
        title: `${post.title} | FutureX Udaipur`,
        description: post.excerpt,
        keywords: [
            post.targetKeyword,
            "digital marketing company in udaipur",
            "Website development company in udaipur",
            "IT Company in udaipur",
            "Software Company in udaipur",
            "best seo services in udaipur",
            "FutureX Digital Marketing"
        ],
        alternates: {
            canonical: `https://futurexdigital.in/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://futurexdigital.in/blog/${post.slug}`,
            type: "article",
            publishedTime: "2026-09-01T10:00:00+05:30",
            modifiedTime: "2026-09-03T10:00:00+05:30",
            authors: [post.author.name],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
        other: {
            "geo.region": post.geo.region,
            "geo.placename": post.geo.placename,
            "geo.position": post.geo.position,
            "ICBM": post.geo.icbm,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
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
                "name": "Blog",
                "item": "https://futurexdigital.in/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://futurexdigital.in/blog/${post.slug}`
            }
        ]
    };

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": `https://futurexdigital.in${post.image}`,
        "author": {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.role,
            "url": "https://futurexdigital.in/about"
        },
        "publisher": {
            "@type": "Organization",
            "name": "FutureX Digital Marketing",
            "logo": {
                "@type": "ImageObject",
                "url": "https://futurexdigital.in/logo.png"
            }
        },
        "datePublished": "2026-09-01T10:00:00+05:30",
        "dateModified": "2026-09-03T10:00:00+05:30",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://futurexdigital.in/blog/${post.slug}`
        },
        "keywords": post.targetKeyword
    };

    const faqJsonLd = post.faqs ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faqs.map(f => ({
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}

            {/* ====== HEADER ====== */}
            <section className="page-header">
                <div className="container">
                    <nav aria-label="breadcrumb" className="breadcrumb">
                        <Link href="/">
                            <FaHome />
                        </Link>
                        <FaChevronRight aria-hidden="true" />
                        <Link href="/blog">Blog</Link>
                        <FaChevronRight aria-hidden="true" />
                        <span>{post.category}</span>
                    </nav>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.25, maxWidth: '950px', margin: '0 auto 20px' }}>
                        {post.title}
                    </h1>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaUser style={{ color: 'var(--teal-light)' }} /> By <strong>{post.author.name}</strong>
                        </span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaCalendarAlt /> {post.date}
                        </span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaClock style={{ color: 'var(--teal-light)' }} /> {post.readTime}
                        </span>
                    </div>
                </div>
            </section>

            {/* ====== MAIN ARTICLE CONTENT ====== */}
            <section className="section bg-light" style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '48px', alignItems: 'start' }}>
                        
                        {/* LEFT COLUMN: ARTICLE BODY */}
                        <article className="blog-single-body" style={{ background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(29,49,82,0.04)' }}>
                            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '36px', height: '360px' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Table of Contents */}
                            {post.toc && post.toc.length > 0 && (
                                <nav aria-label="Article Table of Contents" style={{ background: 'var(--background)', padding: '24px 28px', borderRadius: '16px', marginBottom: '40px', border: '1px solid rgba(34, 121, 190, 0.15)' }}>
                                    <h4 style={{ color: 'var(--navy)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '14px' }}>Table of Contents</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {post.toc.map((item, idx) => (
                                            <li key={idx}>
                                                <a href={`#${item.id}`} style={{ color: 'var(--teal)', fontWeight: 600, fontSize: '0.94rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <span style={{ color: 'var(--navy)', opacity: 0.6 }}>0{idx + 1}.</span> {item.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}

                            {/* Article Body HTML */}
                            <div
                                className="blog-article-html"
                                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                            />

                            {/* FAQs Section inside Article */}
                            {post.faqs && post.faqs.length > 0 && (
                                <div style={{ marginTop: '50px', paddingTop: '40px', borderTop: '2px dashed rgba(34, 121, 190, 0.2)' }}>
                                    <h3 id="faqs" style={{ color: 'var(--navy)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '24px' }}>
                                        Frequently Asked Questions
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        {post.faqs.map((f, i) => (
                                            <div key={i} style={{ background: 'rgba(34, 121, 190, 0.04)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(34, 121, 190, 0.12)' }}>
                                                <h4 style={{ color: 'var(--navy)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '10px' }}>
                                                    {f.question}
                                                </h4>
                                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                                                    {f.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Author EEAT Box */}
                            <div style={{ marginTop: '50px', padding: '30px', background: 'radial-gradient(circle at 0% 0%, #1d3152 0%, #122036 100%)', color: '#fff', borderRadius: '20px', display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                                <img
                                    src={post.author.image}
                                    alt={post.author.name}
                                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--teal)' }}
                                />
                                <div style={{ flexGrow: 1 }}>
                                    <span style={{ color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Written by Industry Expert</span>
                                    <h4 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800, margin: '4px 0 8px' }}>{post.author.name}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>{post.author.bio}</p>
                                </div>
                            </div>
                        </article>

                        {/* RIGHT SIDEBAR */}
                        <aside style={{ position: 'sticky', top: '120px' }}>
                            {/* Growth Audit Widget */}
                            <div style={{ background: '#fff', padding: '28px', borderRadius: '24px', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(29,49,82,0.05)', marginBottom: '30px' }}>
                                <h4 style={{ color: 'var(--navy)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px' }}>Free Growth Audit</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.6 }}>
                                    Get a personalized technical SEO and digital marketing audit for your Udaipur business.
                                </p>
                                <Link href="https://wa.me/917733977227?text=Hi%20FutureX%2C%20I%20read%20your%20article%20and%20would%20like%20a%20free%20growth%20audit" target="_blank" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}>
                                    Claim Free Audit <FaArrowRight />
                                </Link>
                            </div>

                            {/* GEO & Location Badge Widget */}
                            <div style={{ background: 'rgba(34, 121, 190, 0.05)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(34, 121, 190, 0.15)' }}>
                                <h4 style={{ color: 'var(--navy)', fontSize: '1rem', fontWeight: 800, marginBottom: '12px' }}>Agency Headquarters</h4>
                                <p style={{ color: 'var(--navy)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                                    <strong>FutureX Digital Marketing</strong><br />
                                    Office No. 526, 5th Floor, Arvana Mall, Hathipole, Udaipur, Rajasthan 313001
                                </p>
                                <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    <span style={{ background: '#fff', border: '1px solid var(--border)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--teal)' }}>
                                        📍 Udaipur, IN-RJ
                                    </span>
                                    <span style={{ background: '#fff', border: '1px solid var(--border)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)' }}>
                                        🌐 Geo 24.5854, 73.7125
                                    </span>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            <PremiumCTA />
        </>
    );
}
