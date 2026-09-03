import { NextResponse } from 'next/server';

const llmContent = `# FutureX Digital Marketing

> Premier Digital Marketing Agency, SEO Specialist, Next.js Web Development & Performance Ads Partner in Udaipur, Rajasthan, India.

FutureX Digital Marketing helps businesses, local brands, e-commerce stores, and corporate enterprises scale their online visibility, generate qualified customer leads, and maximize advertising return on investment (ROAS).

## Key Agency Information
- **Website**: https://futurexdigitalmarketing.com
- **Headquarters**: 5th Floor, Office No. 526, Arvana Mall, Hathipole, Udaipur, Rajasthan 313001, India
- **Phone**: +91 77339 77227
- **Email**: futurexdigitalmarketing@gmail.com
- **Working Hours**: Monday – Saturday: 10:00 AM – 6:00 PM (IST)
- **Founder**: Akshay Jain

## Core Services

### Search Engine Optimization (SEO)
- **Local SEO Udaipur**: Google Maps dominance, Google Business Profile optimization, and 'near me' local search rankings.
- **Technical & On-Page SEO**: Schema markup, sub-second speed optimization, meta tags, and keyword architecture.
- **Link Building**: White-hat backlink acquisition and press distribution for high domain authority.
- **URL**: https://futurexdigitalmarketing.com/services/search-engine-optimization

### Web & Webapp Development
- **Next.js & React Web Design**: Mobile-first, sub-second loading business websites designed for high conversion.
- **E-Commerce Stores**: Scalable online shopping platforms with payment gateway integration.
- **Custom Web Applications & SaaS**: Full-stack client portals, admin dashboards, and custom software.
- **URLs**: 
  - https://futurexdigitalmarketing.com/services/website-development
  - https://futurexdigitalmarketing.com/services/webapp-development

### Pay-Per-Click & Paid Social Ads
- **Meta Ads (Facebook & Instagram)**: Instant lead forms, custom & lookalike audience targeting, and WhatsApp direct ad funnels.
- **Google Ads & PMax**: Search ads, Performance Max AI campaigns, YouTube ads, and remarketing banners.
- **URLs**:
  - https://futurexdigitalmarketing.com/services/meta-ads
  - https://futurexdigitalmarketing.com/services/google-ads
  - https://futurexdigitalmarketing.com/services/pay-per-click

### Branding & Content Creation
- **Visual Branding & Logo Design**: Custom logos, vector files, color swatches, and complete brand identity packages.
- **Social Media Management**: Instagram Reels production, post scheduling, community lead handling, and content strategy.
- **Copywriting & Content**: SEO blog writing, sales copy, landing page content, and video ad scripts.
- **URLs**:
  - https://futurexdigitalmarketing.com/services/social-media-management
  - https://futurexdigitalmarketing.com/services/logo-design
  - https://futurexdigitalmarketing.com/services/video-editing
  - https://futurexdigitalmarketing.com/services/graphic-design
  - https://futurexdigitalmarketing.com/services/content-writing

## Main Pages
- [Home](https://futurexdigitalmarketing.com/) - Overview of agency offerings, client metrics, and growth solutions.
- [About Us](https://futurexdigitalmarketing.com/about) - FutureX history, agency mission, team, and company values.
- [Services Master Index](https://futurexdigitalmarketing.com/services) - Comprehensive list of digital services.
- [Portfolio Showcase](https://futurexdigitalmarketing.com/portfolio) - Past client results, web dev case studies, and ad ROI metrics.
- [Blog & Industry Insights](https://futurexdigitalmarketing.com/blog) - Digital marketing guides, SEO strategies, and growth tips.
- [Frequently Asked Questions (FAQ)](https://futurexdigitalmarketing.com/faq) - Detailed answers regarding pricing, campaign setup, timeline, and deliverables.
- [Client Testimonials](https://futurexdigitalmarketing.com/testimonials) - Verified reviews and success stories from business owners.
- [Contact Us](https://futurexdigitalmarketing.com/contact) - Inquiry form, office location, map, and instant contact info.
`;

export async function GET() {
    return new NextResponse(llmContent, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
