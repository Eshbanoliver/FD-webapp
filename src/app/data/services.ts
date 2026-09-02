/* ==============================
   FUTUREX DIGITAL MARKETING — SERVICES & SOLUTIONS DATA
   ============================== */

export interface Product {
    name: string;
    desc: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface ServiceCategory {
    slug: string;
    title: string;
    shortDesc: string;
    longDesc?: string;
    keyPoints?: string[];
    image: string;
    galleryImages?: string[];
    products: Product[];
    faqs?: FAQ[];
}

export const serviceCategories: ServiceCategory[] = [
    {
        slug: "search-engine-optimization",
        title: "Search Engine Optimization (SEO)",
        shortDesc: "Dominate Google search results in Udaipur and globally with data-driven SEO strategies.",
        longDesc: "At FutureX Digital Marketing, we engineer high-converting SEO strategies designed to place your business at the top of Google search results. Our comprehensive search engine optimization covers hyper-targeted local SEO in Udaipur, technical audits, keyword research, link authority building, and content optimization that generates qualified, recurring organic leads for your business.",
        keyPoints: [
            "Hyper-Targeted Local SEO for Udaipur & Rajasthan",
            "Technical SEO & Core Web Vitals Optimization",
            "High-Authority Backlink Acquisition",
            "Data-Driven Keyword & Intent Targeting",
            "Transparent Monthly Analytics & ROI Reporting"
        ],
        faqs: [
            { question: "Why is Local SEO important for Udaipur businesses?", answer: "Local SEO ensures your business appears in Google Maps and local search packs whenever potential customers in Udaipur search for your services, driving high-intent phone calls and walk-ins." },
            { question: "How long does it take to see SEO results?", answer: "Most clients start seeing noticeable improvements in keyword rankings and organic traffic within 3 to 6 months of active campaign optimization." },
            { question: "Do you guarantee #1 ranking on Google?", answer: "While no honest agency can guarantee exact rank #1 due to search algorithm dynamics, we guarantee industry best-practice strategies that consistently rank our clients on Page 1." },
            { question: "What is included in your technical SEO audit?", answer: "Our audit evaluates site speed, crawlability, indexation, mobile responsiveness, schema markup, broken links, and site security vulnerabilities." },
            { question: "Do you offer e-commerce SEO?", answer: "Yes! We specialize in Shopify, WooCommerce, and custom Next.js e-commerce SEO to scale online store sales." }
        ],
        image: "/service-seo.png",
        galleryImages: [
            "/hero-1.png",
            "/portfolio-2.png",
            "/service-ppc.png"
        ],
        products: [
            { name: "Local SEO & Google Business Profile", desc: "Dominate local maps, gain 5-star customer reviews, and rank for 'near me' local searches in Udaipur." },
            { name: "Technical SEO Audits", desc: "Comprehensive technical fixes, speed optimization, and schema markup integration for Google indexing." },
            { name: "On-Page SEO Optimization", desc: "Keyword-rich meta tags, heading structures, content optimization, and internal linking strategies." },
            { name: "High-Authority Link Building", desc: "White-hat backlink outreach, press release distribution, and editorial guest posts for maximum domain authority." },
            { name: "E-Commerce SEO", desc: "Product page optimization, schema rich snippets, category structure tuning, and conversion funnel optimization." },
            { name: "Content Strategy & Blogging", desc: "SEO-driven articles and blog posts designed to capture buyer intent keywords and build industry authority." }
        ],
    },
    {
        slug: "web-development",
        title: "Web Development & E-Commerce",
        shortDesc: "High-performance, modern Next.js and custom websites engineered for speed and conversion.",
        longDesc: "Your website is your 24/7 digital storefront. FutureX Digital Marketing builds state-of-the-art web applications, corporate websites, and e-commerce platforms using cutting-edge frameworks like Next.js, React, and Tailwind CSS. We prioritize sub-second page load speeds, mobile responsiveness, stunning visual aesthetics, and conversion-focused UX to turn visitors into paying customers.",
        keyPoints: [
            "Custom Next.js & React App Architecture",
            "Mobile-First Responsive UI/UX Design",
            "Sub-Second Lightning Load Speeds",
            "Integrated Lead Capture & Payment Gateways",
            "SEO-Engineered Code Structure"
        ],
        faqs: [
            { question: "Which technology stack do you use for web development?", answer: "We leverage modern web technologies including Next.js, React, TypeScript, Tailwind CSS, Node.js, and headless CMS frameworks for maximum performance." },
            { question: "Will my website be mobile friendly?", answer: "Absolutely. Every website we build is 100% responsive and optimized for seamless viewing across mobile, tablet, and desktop devices." },
            { question: "Can I manage and update content myself?", answer: "Yes! We integrate user-friendly admin panels and content management systems so your team can easily update text, products, and blogs." },
            { question: "How long does a website development project take?", answer: "Standard corporate websites take 2 to 4 weeks, while complex e-commerce platforms or web apps take 4 to 8 weeks." },
            { question: "Do you provide hosting and maintenance support?", answer: "Yes, we offer ongoing cloud hosting management, SSL security, backups, and technical maintenance." }
        ],
        image: "/service-webdev.png",
        galleryImages: [
            "/hero-2.png",
            "/portfolio-1.png",
            "/about-agency.png"
        ],
        products: [
            { name: "Custom Web Applications", desc: "Bespoke full-stack web applications built on Next.js, React, and Node.js tailored to your business model." },
            { name: "Corporate & Business Websites", desc: "Sleek, modern multi-page company websites designed to establish trust and generate qualified inquiries." },
            { name: "E-Commerce Stores (Shopify & Custom)", desc: "High-converting online shopping platforms with seamless cart checkout, payment gateways, and inventory sync." },
            { name: "High-Converting Landing Pages", desc: "Targeted single-page funnels engineered specifically for high ROI ad campaigns and lead generation." },
            { name: "Website Redesign & Speed Optimization", desc: "Transform outdated legacy websites into fast, modern 2026 digital experiences with 90+ PageSpeed scores." },
            { name: "API Integration & Web Portals", desc: "Custom CRM, payment gateway, WhatsApp API, and third-party SaaS software integrations." }
        ],
    },
    {
        slug: "social-media-marketing",
        title: "Social Media Marketing (SMM)",
        shortDesc: "Engage target audiences, build brand equity, and drive viral engagement across Instagram, Facebook, & LinkedIn.",
        longDesc: "Social media is the heart of modern brand awareness. At FutureX Digital Marketing, we curate dynamic social media strategies that combine aesthetic content creation, short-form video reels, influencer partnerships, and strategic community management. We help Udaipur and global brands build authentic connections and loyal customer followings.",
        keyPoints: [
            "Custom Graphic & Video Content Production",
            "Instagram Reels & Short-Form Video Strategy",
            "Targeted Audience Growth & Engagement",
            "Brand Voice & Aesthetic Consistency",
            "Influencer & Brand Collaboration Campaigns"
        ],
        faqs: [
            { question: "Which social media platforms do you manage?", answer: "We manage Instagram, Facebook, LinkedIn, YouTube, Twitter/X, and Pinterest depending on where your target audience hangs out." },
            { question: "Do you create high-quality graphic posts and video reels?", answer: "Yes! Our in-house creative team designs custom graphics, motion visuals, and produces trending short-form video reels." },
            { question: "How often will you post on our social channels?", answer: "Depending on your selected package, we post 3 to 6 times a week, including interactive stories and video reels." },
            { question: "Can social media marketing generate direct leads for my business?", answer: "Definitely. Through targeted call-to-actions, direct messaging funnels, and landing page links, social media drives qualified leads." }
        ],
        image: "/service-social.png",
        galleryImages: [
            "/hero-3.png",
            "/service-branding.png",
            "/about-agency.png"
        ],
        products: [
            { name: "Instagram & Facebook Management", desc: "End-to-end feed curation, visual branding, storytelling graphics, and daily profile management." },
            { name: "Short-Form Video Reels & Shorts", desc: "Engaging vertical video production, trending audio curation, and cinematic editing designed for viral reach." },
            { name: "LinkedIn B2B Growth Strategy", desc: "Executive personal branding, corporate thought leadership content, and targeted B2B networking." },
            { name: "Social Media Strategy & Calendar", desc: "Data-driven monthly content calendars aligning with seasonal offers, business milestones, and trending topics." },
            { name: "Community Management & DM Automation", desc: "Active response management for comments and direct messages paired with automated lead capture bots." },
            { name: "Influencer Marketing Campaigns", desc: "Connecting your brand with regional Udaipur influencers and niche creators for authentic brand advocacy." }
        ],
    },
    {
        slug: "performance-marketing",
        title: "Performance Marketing & PPC Ads",
        shortDesc: "Maximize return on ad spend (ROAS) with precision-targeted Google Ads & Meta Ads campaigns.",
        longDesc: "Stop guessing and start converting. FutureX Digital Marketing runs data-driven performance marketing campaigns on Google Ads, Meta (Facebook & Instagram) Ads, YouTube, and LinkedIn. Every rupee spent is tracked against clear conversion goals, cost-per-lead (CPL), and return on ad spend (ROAS).",
        keyPoints: [
            "Google Search, Shopping & Display Campaigns",
            "Meta (Instagram & Facebook) High-ROAS Ad Funnels",
            "Precision Audience Demographics & Behavioral Targeting",
            "A/B Split Testing for Ad Creatives & Landing Pages",
            "Real-Time Conversion Tracking & Attribution"
        ],
        faqs: [
            { question: "What budget do I need for Google & Meta Ads?", answer: "We work with businesses of all sizes, starting from modest local ad budgets to enterprise multi-channel ad spend." },
            { question: "How fast can paid advertising deliver results?", answer: "Paid ads deliver immediate traffic and leads within 24 to 48 hours of campaign launch." },
            { question: "How do you measure ad performance?", answer: "We track Cost Per Click (CPC), Cost Per Lead (CPL), Conversion Rate, and Return On Ad Spend (ROAS) in real time." },
            { question: "Do you design the ad copy and creatives?", answer: "Yes! We write compelling ad copy and design high-converting visual ad banners and video ads." }
        ],
        image: "/service-ppc.png",
        galleryImages: [
            "/hero-1.png",
            "/portfolio-2.png",
            "/service-seo.png"
        ],
        products: [
            { name: "Google Search Ads (PPC)", desc: "Capture high-intent buyers searching for your specific products and services on Google." },
            { name: "Meta Lead Generation Ads", desc: "High-converting Instagram and Facebook ad campaigns that generate pre-qualified lead forms directly inside the app." },
            { name: "Remarketing & Retargeting", desc: "Re-engage past website visitors with tailored offers across the web to increase conversion rates." },
            { name: "Google Shopping & Performance Max", desc: "E-commerce catalog advertising that showcases your products directly in Google search shopping feeds." },
            { name: "YouTube Video Advertising", desc: "High-impact video ad placements targeting specific demographics and interested audiences." },
            { name: "Ad Creative & Copywriting", desc: "Persuasive headline writing, visual ad design, and video scriptwriting engineered for maximum CTR." }
        ],
    },
    {
        slug: "brand-strategy-design",
        title: "Brand Strategy & Visual Identity",
        shortDesc: "Establish a memorable, premium brand identity with custom logo design, color systems, and corporate branding.",
        longDesc: "A strong brand builds instant trust and commands premium pricing. FutureX Digital Marketing crafts comprehensive brand identities that resonate with your target market. From logo design and typography guidelines to marketing collateral and digital media kits, we ensure your brand stands out in the crowded market.",
        keyPoints: [
            "Memorable Logo & Visual Emblem Design",
            "Comprehensive Brand Style Guidelines",
            "Typography & Harmonic Color Palette Systems",
            "Corporate Stationery & Digital Media Kits",
            "Rebranding & Market Positioning Strategy"
        ],
        faqs: [
            { question: "What deliverables are included in a brand identity package?", answer: "You receive primary and secondary logo files, brand style guide (PDF), vector source files, font pairings, color codes, and social media branding templates." },
            { question: "Can you help rebrand an existing business in Udaipur?", answer: "Yes! We specialize in modernizing legacy brand identities to help businesses appeal to contemporary audiences." },
            { question: "How long does the logo and brand design process take?", answer: "Typically 1 to 3 weeks, including initial concept exploration, client feedback revisions, and final asset delivery." }
        ],
        image: "/service-branding.png",
        galleryImages: [
            "/portfolio-1.png",
            "/service-social.png",
            "/about-agency.png"
        ],
        products: [
            { name: "Custom Logo Design", desc: "Unique, timeless logo mark and typographic logotype crafted specifically for your business identity." },
            { name: "Brand Style Guide & Manual", desc: "Complete documentation detailing official logo usage, clear space, brand colors (HEX/CMYK/RGB), and typography." },
            { name: "Corporate Stationery Package", desc: "Business card designs, letterheads, email signatures, presentation decks, and invoice templates." },
            { name: "Packaging & Label Design", desc: "Eye-catching product packaging, retail labels, and unboxing design concepts." },
            { name: "Marketing Collateral & Brochures", desc: "Print and digital trifold brochures, product catalogs, company profile PDFs, and banner designs." },
            { name: "Social Media Branding Templates", desc: "Custom editable Canva/Photoshop story and post templates for seamless brand consistency." }
        ],
    },
    {
        slug: "ai-automation-lead-gen",
        title: "AI Automation & Lead Generation",
        shortDesc: "Automate sales funnels, customer inquiries, and lead qualification using smart AI workflows.",
        longDesc: "Scale your revenue without increasing headcount. FutureX Digital Marketing integrates cutting-edge AI chatbots, automated WhatsApp lead nurturing, CRM workflows, and email automation. We turn passive website visitors into appointment bookings and sales opportunities automatically.",
        keyPoints: [
            "AI-Powered Chatbots & Conversational Funnels",
            "Automated WhatsApp Lead Instant Messaging",
            "CRM & Email Nurture Sequence Integration",
            "Automated Lead Scoring & Routing",
            "Seamless Sales Funnel Optimization"
        ],
        faqs: [
            { question: "How does AI automation help my business grow?", answer: "AI automation ensures zero missed customer inquiries, instant 24/7 responses, automated appointment scheduling, and automated lead follow-ups." },
            { question: "Can AI automation connect with WhatsApp?", answer: "Yes! We set up official WhatsApp Business API workflows that send instant lead confirmations, catalog links, and follow-ups." },
            { question: "Is technical knowledge required to manage AI tools?", answer: "No. We build intuitive, fully automated workflows and train your team on how to track incoming leads." }
        ],
        image: "/service-ai.png",
        galleryImages: [
            "/hero-1.png",
            "/service-webdev.png",
            "/portfolio-2.png"
        ],
        products: [
            { name: "AI Chatbot Integration", desc: "Custom AI assistant embedded on your website to answer visitor queries and capture lead contact details 24/7." },
            { name: "WhatsApp Business API Automation", desc: "Automated instant broadcast messages, quick reply flows, and appointment confirmation triggers via WhatsApp." },
            { name: "CRM Setup & Pipeline Management", desc: "Streamlined sales funnel setup in HubSpot, Zoho, or custom dashboards for tracking lead progress." },
            { name: "Email Marketing & Drip Campaigns", desc: "Automated welcome series, abandoned cart recovery emails, and monthly newsletter triggers." },
            { name: "Lead Qualification Workflows", desc: "Smart filtering mechanisms that qualify high-value prospects before handing them to your sales team." },
            { name: "Analytics & Custom Reporting Dashboards", desc: "Unified analytics dashboard pulling real-time metrics from Google Analytics, Meta Ads, and sales CRM." }
        ],
    },
];
