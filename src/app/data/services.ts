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
            { question: "How long does it take to see SEO results?", answer: "Most clients start seeing noticeable improvements in keyword rankings and organic traffic within 3 to 6 months of active campaign optimization." }
        ],
        image: "/service-seo.png",
        galleryImages: ["/hero-1.png", "/portfolio-2.png", "/service-ppc.png"],
        products: [
            { name: "Local SEO & Google Business Profile", desc: "Dominate local maps, gain 5-star customer reviews, and rank for 'near me' local searches in Udaipur." },
            { name: "Technical SEO Audits", desc: "Comprehensive technical fixes, speed optimization, and schema markup integration for Google indexing." },
            { name: "On-Page SEO Optimization", desc: "Keyword-rich meta tags, heading structures, content optimization, and internal linking strategies." },
            { name: "High-Authority Link Building", desc: "White-hat backlink outreach, press release distribution, and editorial guest posts for maximum domain authority." }
        ],
    },
    {
        slug: "website-development",
        title: "Website Development",
        shortDesc: "High-performance, mobile-first websites designed for fast loading and high conversion.",
        longDesc: "We build sub-second, custom-designed corporate websites and e-commerce platforms engineered on Next.js, React, and modern web frameworks. Whether you need a corporate showcase or an online store, FutureX Digital Marketing delivers responsive, SEO-ready web design tailored to your brand.",
        keyPoints: [
            "Sub-Second Page Speed & Core Web Vitals 90+",
            "100% Mobile Responsive & Modern UI/UX",
            "SEO-Ready Architecture & Schema Integration",
            "Secure Cloud Hosting & Free SSL Setup"
        ],
        faqs: [
            { question: "Which technology stack do you use?", answer: "We build modern websites using Next.js, React, TypeScript, Tailwind CSS, Node.js, and headless CMS frameworks." },
            { question: "How long does website development take?", answer: "Standard business websites take 2 to 4 weeks depending on features and custom pages required." }
        ],
        image: "/service-webdev.png",
        galleryImages: ["/hero-3.png", "/portfolio-1.png", "/about-agency.png"],
        products: [
            { name: "Corporate & Business Websites", desc: "Sleek multi-page company websites designed to establish authority and capture incoming client leads." },
            { name: "E-Commerce Web Stores", desc: "High-converting online shopping platforms with seamless payment gateways and inventory sync." },
            { name: "High-Converting Landing Pages", desc: "Targeted single-page lead funnels optimized for Google & Meta paid ad campaigns." }
        ],
    },
    {
        slug: "webapp-development",
        title: "Webapp Development",
        shortDesc: "Bespoke SaaS platforms, custom customer portals, and web application solutions.",
        longDesc: "FutureX Digital Marketing specializes in full-stack web application development. We build scalable SaaS platforms, client portals, internal dashboard systems, and interactive web software utilizing Next.js, React, Node.js, and cloud database architectures.",
        keyPoints: [
            "Scalable Full-Stack Architecture",
            "Custom User Dashboards & Portals",
            "REST & GraphQL API Integrations",
            "Enterprise-Grade Security & Authentication"
        ],
        faqs: [
            { question: "What is the difference between a website and a webapp?", answer: "A website focuses on content presentation and lead generation, while a webapp provides dynamic interactive functionality, user accounts, workflows, and database processing." }
        ],
        image: "/service-ai.png",
        galleryImages: ["/service-webdev.png", "/portfolio-1.png"],
        products: [
            { name: "Custom SaaS Web Platforms", desc: "Cloud-native web applications built for subscription revenue models and multi-tenant architectures." },
            { name: "Client & Admin Dashboards", desc: "Interactive management portals for real-time analytics, user roles, and business workflows." },
            { name: "API & Microservices Engineering", desc: "Seamless third-party software, payment gateway, and CRM API integration." }
        ],
    },
    {
        slug: "social-media-management",
        title: "Social Media Management",
        shortDesc: "Grow brand awareness, audience engagement, and follower loyalty across major social networks.",
        longDesc: "Transform your social media presence with strategic content creation, visual reels, story planning, and community management. We manage your Instagram, Facebook, LinkedIn, and YouTube channels to build brand authority and convert followers into paying customers.",
        keyPoints: [
            "Strategic Content Calendar & Post Scheduling",
            "High-Engagement Reels & Video Short Content",
            "Community Interaction & DM Lead Handling",
            "Monthly Analytics & Audience Growth Insights"
        ],
        faqs: [
            { question: "Which social media platforms do you manage?", answer: "We manage Instagram, Facebook, LinkedIn, YouTube Shorts, and Google Business updates." }
        ],
        image: "/service-social.png",
        galleryImages: ["/service-branding.png", "/portfolio-2.png"],
        products: [
            { name: "Instagram & Facebook Management", desc: "End-to-end post creation, graphic design, caption copywriting, hashtag strategy, and scheduling." },
            { name: "Short-Form Reel Production", desc: "Trending video reels and short clips edited to drive organic reach and viral audience engagement." },
            { name: "Executive LinkedIn Branding", desc: "B2B thought leadership content and executive brand positioning for corporate leaders." }
        ],
    },
    {
        slug: "meta-ads",
        title: "Meta Ads",
        shortDesc: "Target prospective buyers on Facebook and Instagram with high-converting paid ad campaigns.",
        longDesc: "Scale your sales funnel rapidly with precision Meta Ads. We create laser-targeted ad audiences, persuasive ad creatives, high-converting lead forms, and dynamic retargeting campaigns on Facebook and Instagram to maximize your Return On Ad Spend (ROAS).",
        keyPoints: [
            "Hyper-Targeted Custom & Lookalike Audiences",
            "High-Converting Ad Copy & Creative Design",
            "Instant Lead Form & WhatsApp Ad Funnels",
            "Continuous A/B Testing & ROAS Optimization"
        ],
        faqs: [
            { question: "How quickly do Meta Ads generate inquiries?", answer: "Meta lead form and traffic campaigns start delivering qualified customer inquiries within 24 to 48 hours of launch." }
        ],
        image: "/service-ppc.png",
        galleryImages: ["/service-social.png", "/portfolio-1.png"],
        products: [
            { name: "Meta Lead Generation Campaigns", desc: "Instant form ads built to collect verified name, phone, and email inquiries directly inside Facebook and Instagram." },
            { name: "Meta Retargeting Funnels", desc: "Re-engage website visitors and past leads with special offers to maximize campaign conversions." },
            { name: "WhatsApp Direct Ad Funnels", desc: "Send prospective clients directly into a WhatsApp chat with your sales team in one tap." }
        ],
    },
    {
        slug: "google-ads",
        title: "Google Ads",
        shortDesc: "Capture high-intent buyers searching on Google with profitable Search, Display, and Shopping ads.",
        longDesc: "Position your business in front of active buyers the exact moment they search on Google. We build, manage, and optimize profitable Google Search, Performance Max, Display, and Shopping campaigns that lower your cost-per-lead and scale ROI.",
        keyPoints: [
            "High-Intent Buyer Keyword Bidding",
            "Negative Keyword Exclusion & Budget Protection",
            "Ad Extension & Copy Optimization",
            "Conversion Tracking & Conversion Rate Tuning"
        ],
        faqs: [
            { question: "What is the recommended Google Ads budget?", answer: "We tailor Google Ads campaigns starting from modest regional daily budgets up to enterprise ad spend based on your target CPL." }
        ],
        image: "/service-seo.png",
        galleryImages: ["/service-ppc.png", "/portfolio-2.png"],
        products: [
            { name: "Google Search Ads", desc: "Rank #1 at the top of Google search results for active buyer keywords in your industry." },
            { name: "Google Performance Max (PMax)", desc: "AI-driven multi-channel ad campaigns running across Search, YouTube, Gmail, and Maps." },
            { name: "Google Shopping & Remarketing Ads", desc: "Product grid ads for e-commerce stores paired with Display banner retargeting." }
        ],
    },
    {
        slug: "pay-per-click",
        title: "Pay-Per-Click (PPC)",
        shortDesc: "Data-driven performance marketing across paid search, social, and display networks.",
        longDesc: "FutureX Digital Marketing offers end-to-end Pay-Per-Click management. We engineer multi-channel PPC strategies designed to capture leads, boost online purchases, and deliver predictable revenue return for every advertising rupee spent.",
        keyPoints: [
            "Multi-Channel PPC Strategy & Execution",
            "Conversion Funnel & Landing Page CRO",
            "Real-Time ROI & CPL Performance Tracking",
            "Dedicated Ad Account Specialist"
        ],
        faqs: [
            { question: "How do you track PPC campaign performance?", answer: "We set up end-to-end conversion tracking for phone calls, lead form fills, WhatsApp taps, and e-commerce sales." }
        ],
        image: "/service-ppc.png",
        galleryImages: ["/service-seo.png", "/hero-1.png"],
        products: [
            { name: "Multi-Channel PPC Strategy", desc: "Unified paid ad allocation combining Google Search, Meta Ads, and Remarketing." },
            { name: "PPC Landing Page Optimization", desc: "High-converting landing page design tailored specifically to match ad intent." }
        ],
    },
    {
        slug: "video-editing",
        title: "Video Editing",
        shortDesc: "Professional video editing for Instagram Reels, YouTube videos, corporate clips, and ad promos.",
        longDesc: "Captivate your audience with high-impact video editing. We transform raw video footage into polished, engaging video reels, YouTube videos, promotional ads, and corporate brand videos with sound design, captions, and motion graphics.",
        keyPoints: [
            "Trending Reels & Shorts Motion Editing",
            "Dynamic Subtitles & Kinetic Typography",
            "Color Grading, Transitions & Sound Design",
            "Corporate Promo & Product Ad Editing"
        ],
        faqs: [
            { question: "What video formats do you deliver?", answer: "We deliver 9:16 vertical reels for Instagram/TikTok/Shorts and 16:9 widescreen videos for YouTube and websites." }
        ],
        image: "/service-branding.png",
        galleryImages: ["/service-social.png", "/portfolio-1.png"],
        products: [
            { name: "Instagram Reels & Shorts Editing", desc: "Fast-paced, hook-driven vertical video editing designed for viral social reach." },
            { name: "YouTube Video Editing", desc: "Long-form YouTube video post-production with intros, lower thirds, and B-roll overlays." },
            { name: "Commercial & Video Ad Editing", desc: "High-converting promotional video ads engineered for Meta, YouTube, and website landing pages." }
        ],
    },
    {
        slug: "graphic-design",
        title: "Graphic Design",
        shortDesc: "Eye-catching visual design for digital banners, social graphics, marketing collaterals, and print.",
        longDesc: "Elevate your visual identity with professional graphic design. Our creative team designs striking social media graphics, digital ad banners, brochures, flyers, posters, and brand collaterals that capture customer attention.",
        keyPoints: [
            "Custom Social Media Banner & Post Designs",
            "Digital Advertising Creative Banners",
            "Print Marketing Collaterals (Flyers, Posters)",
            "High-Resolution Print-Ready Source Files"
        ],
        faqs: [
            { question: "Do you provide source files?", answer: "Yes, we deliver print-ready PDFs, high-res PNG/JPGs, and editable source files (AI, PSD, Figma)." }
        ],
        image: "/service-branding.png",
        galleryImages: ["/portfolio-2.png", "/about-agency.png"],
        products: [
            { name: "Social Media Post Design", desc: "Custom-designed Instagram and Facebook carousel grids and promotional post graphics." },
            { name: "Marketing Collateral Design", desc: "Brochures, flyers, roll-up banners, and corporate presentation decks." },
            { name: "Ad Banner Creative Design", desc: "High-converting ad banners designed for Google Display and Meta Ad campaigns." }
        ],
    },
    {
        slug: "logo-design",
        title: "Logo Design",
        shortDesc: "Memorable, modern logo design and complete visual brand identity packages.",
        longDesc: "Your logo is the cornerstone of your brand identity. We craft unique, timeless logo designs and brand identity packages that reflect your company values, resonate with target clients, and set you apart from competitors.",
        keyPoints: [
            "Multiple Original Logo Concept Options",
            "Full Vector Source Files (AI, SVG, EPS, PNG)",
            "Brand Color Palette & Typography Guidelines",
            "Monochrome & Transparent Logo Variants"
        ],
        faqs: [
            { question: "How many logo concepts do I receive?", answer: "Depending on your package, we provide 3 to 5 distinct initial concepts with unlimited revisions on your chosen concept." }
        ],
        image: "/logo.png",
        galleryImages: ["/service-branding.png", "/about-agency.png"],
        products: [
            { name: "Custom Logo Design Package", desc: "Original logo concept development with full vector files, icon variations, and brand color swatches." },
            { name: "Complete Brand Identity Suite", desc: "Logo design paired with letterhead, business cards, social media kits, and brand guidelines." }
        ],
    },
    {
        slug: "business-card-design",
        title: "Business Card Design",
        shortDesc: "Professional, elegant business card designs that leave a lasting first impression.",
        longDesc: "Make every networking opportunity count with custom-designed business cards. We craft sleek, modern business card layouts with print specifications, spot UV accents, foil options, and QR code integration.",
        keyPoints: [
            "Single & Double-Sided Custom Card Layouts",
            "Print-Ready CMYK 300 DPI Vector Files",
            "Interactive QR Code Integration",
            "Modern Minimalist & Luxury Finishes"
        ],
        faqs: [
            { question: "Can you include a QR code linking to my website or vCard?", answer: "Yes! We integrate custom QR codes linking directly to your website, WhatsApp, digital vCard, or Google map." }
        ],
        image: "/service-branding.png",
        galleryImages: ["/logo.png", "/portfolio-1.png"],
        products: [
            { name: "Premium Executive Business Cards", desc: "Elegant double-sided business card design tailored to corporate executives and business owners." },
            { name: "Digital vCard & QR Code Cards", desc: "Modern business cards featuring instant smartphone QR scanning for contact saving." }
        ],
    },
    {
        slug: "menu-design",
        title: "Menu Design",
        shortDesc: "Attractive, appetite-stimulating menu designs for restaurants, cafes, hotels, and food brands.",
        longDesc: "Stimulate orders and elevate dining experiences with custom menu design. We design mouth-watering food menus, cafe board displays, digital TV menu screens, and QR digital menus for restaurants, hotels, and food outlets in Udaipur and beyond.",
        keyPoints: [
            "Appetizing Visual Layout & Menu Engineering",
            "Print-Ready High Resolution & Lamination Specs",
            "Digital QR Code Menu Integration",
            "TV Screen & Digital Menu Display Files"
        ],
        faqs: [
            { question: "Do you design digital QR menus for restaurants?", answer: "Yes! We design print menus as well as mobile-friendly digital QR menus that customers scan at their table." }
        ],
        image: "/service-branding.png",
        galleryImages: ["/portfolio-2.png", "/about-agency.png"],
        products: [
            { name: "Restaurant & Cafe Print Menus", desc: "Multi-page, tri-fold, and single-sheet food menu designs built with appetite-appealing typography and photos." },
            { name: "Digital QR Code Restaurant Menus", desc: "Sleek mobile menu layouts allowing guests to browse food items on their smartphones." },
            { name: "Digital TV Screen Menu Boards", desc: "Widescreen 16:9 digital display menu animations for counter ordering screens." }
        ],
    },
    {
        slug: "content-writing",
        title: "Content Writing",
        shortDesc: "SEO-optimized website content, persuasive ad copy, blog articles, and sales copy.",
        longDesc: "Words that engage readers and convert visitors into buyers. Our content writing team delivers SEO-driven blog posts, persuasive website sales copy, company profiles, ad scripts, and social media captions designed to rank on search engines and boost sales.",
        keyPoints: [
            "100% Original, Plagiarism-Free Copywriting",
            "SEO Keyword Integration for Google Search",
            "Persuasive Sales Copy & Brand Voice",
            "Blog Articles, Web Pages & Ad Scripts"
        ],
        faqs: [
            { question: "Is your written content optimized for SEO?", answer: "Yes! All website copy and blog articles are researched and written with target buyer keywords to help rank on Google." }
        ],
        image: "/service-seo.png",
        galleryImages: ["/service-webdev.png", "/portfolio-1.png"],
        products: [
            { name: "Website Copywriting", desc: "Compelling landing page, home page, about us, and service page content crafted to convert leads." },
            { name: "SEO Blog Article Writing", desc: "Regular, keyword-optimized blog articles written to drive organic search traffic to your website." },
            { name: "Ad Copy & Scriptwriting", desc: "Persuasive headline copy and short script writing for Meta, Google Ads, and video reels." }
        ],
    },
    {
        slug: "business-plan",
        title: "Business Plan",
        shortDesc: "Comprehensive business plans, financial projections, and investor pitch deck documentation.",
        longDesc: "Turn your vision into a structured, executable business plan. We craft detailed business plans covering executive summaries, market research, competitor analysis, marketing strategies, and financial projections tailored for investors, bank loans, and strategic growth.",
        keyPoints: [
            "Structured Executive Summary & Company Profile",
            "In-Depth Market Research & Industry Analysis",
            "Digital Marketing & Sales Expansion Strategy",
            "Financial Modeling & Revenue Projections"
        ],
        faqs: [
            { question: "Who is the business plan designed for?", answer: "Our business plans are crafted for startups, local business expansions, investor pitches, bank loan applications, and strategic alignment." }
        ],
        image: "/about-agency.png",
        galleryImages: ["/hero-1.png", "/portfolio-2.png"],
        products: [
            { name: "Investor & Bank Loan Business Plan", desc: "Comprehensive business documentation detailing operational models, financial forecasts, and growth roadmaps." },
            { name: "Digital Strategy & Market Entry Plan", desc: "Focused marketing expansion plan tailored to capturing market share in Rajasthan and online markets." }
        ],
    },
    {
        slug: "instagram-facebook-ads",
        title: "Instagram and Facebook Ads",
        shortDesc: "High-ROI paid social advertising campaigns engineered for sales and qualified lead growth.",
        longDesc: "Reach prospective customers on Instagram and Facebook with targeted social advertising. We build custom ad creatives, carousel ads, story ads, lead form funnels, and dynamic retargeting campaigns optimized to lower CPL and scale sales.",
        keyPoints: [
            "Instagram Reel & Story Ad Campaigns",
            "Facebook In-Feed & Marketplace Ads",
            "Custom Audience & Interest Targeting",
            "Daily Ad Budget Optimization & Scaling"
        ],
        faqs: [
            { question: "Can I run ads on both Instagram and Facebook simultaneously?", answer: "Yes! Meta Ads Manager allows synchronized ad deployment across Instagram, Facebook, Stories, and Reels." }
        ],
        image: "/service-ppc.png",
        galleryImages: ["/service-social.png", "/portfolio-1.png"],
        products: [
            { name: "Instagram Story & Reel Ads", desc: "Mobile-first vertical video ad campaigns designed to capture immediate attention and swipe-ups." },
            { name: "Facebook Lead Form Ads", desc: "Seamless lead generation forms that collect verified user details directly inside Facebook." }
        ],
    },
    {
        slug: "email-marketing",
        title: "Email Marketing",
        shortDesc: "Automated email sequences, promotional newsletters, and lead nurturing campaigns.",
        longDesc: "Nurture customer relationships and generate recurring sales with strategic email marketing. We design beautiful HTML email templates, write engaging newsletter copy, and set up automated drip sequences, cart abandonment triggers, and welcome series.",
        keyPoints: [
            "Custom Responsive Email Template Design",
            "Automated Drip Sequences & Customer Onboarding",
            "High Deliverability & Inbox Placement",
            "Subscriber List Segmentation & Analytics"
        ],
        faqs: [
            { question: "Which email platforms do you work with?", answer: "We build and manage campaigns on Mailchimp, Klaviyo, HubSpot, Brevo, and custom SMTP servers." }
        ],
        image: "/service-ai.png",
        galleryImages: ["/service-seo.png", "/portfolio-2.png"],
        products: [
            { name: "Automated Lead Nurturing Workflows", desc: "Set-and-forget email sequences that guide prospect leads from initial inquiry to closed sale." },
            { name: "E-Commerce Abandoned Cart Emails", desc: "Automated recovery email triggers that bring shoppers back to complete their purchases." },
            { name: "Promotional Newsletter Campaigns", desc: "Monthly and weekly email newsletters sharing special offers, new products, and company news." }
        ],
    },
    {
        slug: "digital-marketing",
        title: "Digital Marketing",
        shortDesc: "360-degree full-funnel digital marketing services driving total business growth.",
        longDesc: "FutureX Digital Marketing is your complete 360-degree growth agency. We combine Search Engine Optimization (SEO), web app development, Meta/Google paid ads, social media branding, content strategy, and AI lead automation into one unified performance package.",
        keyPoints: [
            "Unified 360-Degree Growth Strategy",
            "Multi-Channel Lead & Revenue Scaling",
            "Dedicated Account Manager & Weekly Updates",
            "Complete End-to-End Campaign Execution"
        ],
        faqs: [
            { question: "Why hire FutureX as a 360-degree digital marketing partner?", answer: "Instead of managing multiple separate freelancers, FutureX provides a dedicated full-service team handling SEO, web dev, graphics, ads, and copywriting under one roof." }
        ],
        image: "/about-agency.png",
        galleryImages: ["/hero-1.png", "/hero-3.png", "/portfolio-1.png"],
        products: [
            { name: "360-Degree Growth Retainer", desc: "Complete digital marketing takeover including SEO, paid ads, web management, graphics, and social content." },
            { name: "Performance Marketing & Funnel Build", desc: "High-speed conversion funnel design paired with aggressive multi-channel ad scaling." }
        ],
    },
    {
        slug: "nfc-smart-cards",
        title: "NFC Smart Business Cards",
        shortDesc: "Contactless digital business cards that instant-share your contact, social links & website with one tap.",
        longDesc: "Upgrade your professional networking with FutureX NFC Smart Business Cards. Crafted with premium matte PVC, brushed metal, or eco-friendly wood, our contactless NFC cards allow you to instantly share your vCard contact details, social media handles, website, brochure, and payment links with a single tap on any smartphone—no app required.",
        keyPoints: [
            "One-Tap Instant Contact Sharing (No App Required)",
            "Custom Metallic, Matte & Wooden Card Finishes",
            "Dynamic Real-Time Profile Updates via Cloud Dashboard",
            "Eco-Friendly & Lifetime Reusable — No More Paper Waste",
            "Embedded QR Code Backup for Universal Compatibility"
        ],
        faqs: [
            { question: "Do recipient phones need an app to read NFC cards?", answer: "No! All modern iPhones and Android smartphones read NFC cards natively upon tap." },
            { question: "Can I update my phone number or links after buying?", answer: "Yes! Your NFC card is linked to your online profile, allowing real-time cloud updates anytime without replacing the card." }
        ],
        image: "/service-nfc-card.png",
        galleryImages: ["/service-nfc-standy.png", "/service-webdev.png"],
        products: [
            { name: "Custom Branded NFC Cards", desc: "Personalized matte or glossy PVC NFC business cards customized with your company logo and design." },
            { name: "Luxury Metallic & Wood NFC Cards", desc: "Ultra-premium stainless steel, black metal, or natural bamboo NFC cards designed for executives and founders." },
            { name: "Digital Business Profile Cloud Setup", desc: "Cloud-hosted mobile digital business card landing page with tap-to-call, WhatsApp, and social buttons." }
        ],
    },
    {
        slug: "nfc-smart-standees",
        title: "NFC Review Standys & Displays",
        shortDesc: "Instant Google review & social follow counter standees for restaurants, retail shops & offices.",
        longDesc: "Boost your Google Maps reviews, Instagram followers, and customer engagement on autopilot with FutureX NFC Smart Standys. Place our high-durability acrylic contactless counter displays at your cash counter or tables to let customers tap their smartphone and leave a 5-star Google review or follow your Instagram page in under 3 seconds.",
        keyPoints: [
            "Instant 1-Tap Google Reviews & Instagram Follows",
            "High-Quality Custom Acrylic & Metal Counter Displays",
            "Boosts Local SEO & Google Maps Rank Automatically",
            "Custom QR Code Backup & Vibrant Branding",
            "Zero Monthly Fees — Buy Once, Collect Unlimited Reviews"
        ],
        faqs: [
            { question: "How do NFC Standys help increase Google Reviews for my shop or restaurant in Udaipur?", answer: "Instead of customers typing your business name on Google, they tap their phone on your counter standy and are immediately taken directly to your Google review rating box!" }
        ],
        image: "/service-nfc-standy.png",
        galleryImages: ["/service-nfc-card.png", "/portfolio-2.png"],
        products: [
            { name: "Google Review NFC Acrylic Counter Standy", desc: "Sleek acrylic counter standy pre-programmed to open your Google Business review form upon phone tap." },
            { name: "Instagram & Social Follow NFC Displays", desc: "Interactive desk displays configured to boost Instagram followers and Wi-Fi password access for cafes & salons." },
            { name: "Custom Table Top NFC Menu & Payment Blocks", desc: "Durable wooden or acrylic table displays for restaurants with digital NFC menu tap and UPI payment QR codes." }
        ],
    },
    {
        slug: "saas-development",
        title: "SaaS Software Development",
        shortDesc: "Custom SaaS applications, cloud software platforms, multi-tenant architectures & API integration.",
        longDesc: "Turn your business idea into a scalable, revenue-generating Cloud Software as a Service (SaaS). At FutureX Digital Marketing, we engineer robust multi-tenant SaaS platforms, subscription billing engines, customer portals, and enterprise Web APIs powered by Next.js, React, Node.js, PostgreSQL, and AWS/Vercel cloud infrastructure.",
        keyPoints: [
            "Multi-Tenant Architecture & Cloud Scalability",
            "Automated Stripe / Razorpay Subscription Billing",
            "Role-Based User Permissions & Security",
            "Interactive Real-Time Analytics & Admin Portals",
            "RESTful & GraphQL API Integration"
        ],
        faqs: [
            { question: "Can FutureX handle full-cycle SaaS product development from MVP to launch?", answer: "Yes! We build complete SaaS solutions including UI/UX wireframing, frontend React/Next.js interfaces, database models, payment gateways, and cloud deployment." }
        ],
        image: "/service-saas-dev.png",
        galleryImages: ["/service-webdev.png", "/service-ai.png"],
        products: [
            { name: "Full-Cycle SaaS MVP Build", desc: "Rapid 6-to-8 week SaaS product development to launch your software idea to early adopters." },
            { name: "Custom Client & Admin Portals", desc: "Secure customer management dashboards with real-time analytics, user roles, and reporting toolkits." },
            { name: "Subscription & Micro-SaaS Platforms", desc: "Cloud platforms built with automated recurring billing, user authentication, and API webhooks." }
        ],
    }
];
