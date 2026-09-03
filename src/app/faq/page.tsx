"use client";

import { useState } from "react";
import Link from "next/link";
import PremiumCTA from "@/components/PremiumCTA";
import { FaHome, FaChevronRight, FaChevronDown, FaArrowRight } from "react-icons/fa";

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

const allFaqs = faqCategories.flatMap(c => c.items);

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
        }
    }))
};

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
            "name": "FAQ",
            "item": "https://futurexdigitalmarketing.com/faq"
        }
    ]
};

function FAQAccordionItem({ q, a, num }: { q: string; a: string; num: number }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`faq-item-v3 ${open ? "open" : ""}`}>
            <button className="faq-question-v3" onClick={() => setOpen(!open)} aria-expanded={open}>
                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <span className="faq-num-badge">{num < 10 ? `0${num}` : num}</span>
                    <span>{q}</span>
                </div>
                <div className="faq-icon-v3">
                    <FaChevronDown />
                </div>
            </button>
            <div className="faq-answer-wrapper">
                <div className="faq-answer-inner">
                    <div className="faq-answer-content-v3">{a}</div>
                </div>
            </div>
        </div>
    );
}

export default function FAQPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <nav aria-label="breadcrumb" className="breadcrumb">
                        <Link href="/">
                            <FaHome />
                        </Link>
                        <FaChevronRight aria-hidden="true" />
                        <span>Frequently Asked Questions</span>
                    </nav>
                    <h1>Digital Marketing FAQ | FutureX Udaipur</h1>
                    <p>
                        Everything you need to know about partnering with FutureX Digital Marketing in Udaipur.
                    </p>
                </div>
            </section>

            {/* FAQ Accordions */}
            <section className="section bg-light">
                <div className="container" style={{ maxWidth: "900px" }}>
                    {faqCategories.map((cat, idx) => (
                        <div key={idx} style={{ marginBottom: "50px" }}>
                            <h2 id={`category-${idx + 1}`} style={{ color: "var(--navy)", fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "24px" }}>
                                {cat.category}
                            </h2>
                            {cat.items.map((item, itemIdx) => (
                                <FAQAccordionItem key={itemIdx} num={itemIdx + 1} q={item.q} a={item.a} />
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <PremiumCTA />
        </>
    );
}
