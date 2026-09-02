"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  FaPhoneAlt,
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaStar,
  FaAward,
  FaUsers,
  FaChartLine,
  FaRocket,
  FaShieldAlt,
  FaSmile,
  FaHandshake,
  FaLaptopCode,
  FaBullseye,
  FaEye,
  FaSearch,
  FaShareAlt,
  FaBullhorn,
  FaRobot,
  FaPalette,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { serviceCategories } from "./data/services";

/* ------- Scroll-in animation hook ------- */
function useAnimateOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);
  return ref;
}

function AnimateOnScroll({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useAnimateOnScroll();
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
}

/* ------- FAQ Item ------- */
function FAQItemV3({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item-v3 ${open ? "open" : ""}`} style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "12px", marginBottom: "12px" }}>
      <button className="faq-question-v3" onClick={() => setOpen(!open)} style={{ color: "#F8FAFC", padding: "20px" }}>
        {q}
        <span className="faq-icon-v3" style={{ color: "#06B6D4" }}>
          {open ? <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>-</span> : <FaChevronDown />}
        </span>
      </button>
      <div className="faq-answer-v3">
        <div className="faq-answer-content-v3" style={{ color: "#94A3B8", padding: "0 20px 20px" }}>{a}</div>
      </div>
    </div>
  );
}

const heroSlides = [
  {
    image: "/hero-1.png",
    badge: "Udaipur's #1 Digital Marketing Agency",
    title: "Scale Your Revenue With Future-Ready Digital Marketing",
    subtitle: "We combine high-ranking SEO, precision PPC campaigns, Next.js web applications, and AI sales automation to grow businesses in Udaipur and globally.",
    cta: "Get Started Now",
  },
  {
    image: "/hero-2.png",
    badge: "Data-Driven Growth Engine",
    title: "Convert Visitors Into Recurring Customers",
    subtitle: "High-speed custom websites and performance ad funnels built for maximum return on ad spend (ROAS) and brand authority.",
    cta: "Explore Our Services",
  },
  {
    image: "/hero-3.png",
    badge: "AI-Powered Marketing Solutions",
    title: "Dominate Google & Social Media Channels",
    subtitle: "Rank on Page 1 of Google search in Udaipur, engage target audiences on Instagram & LinkedIn, and capture leads 24/7.",
    cta: "Get Free Consultation",
  },
];

const testimonials = [
  {
    text: "FutureX Digital Marketing completely transformed our online presence in Udaipur. Our organic Google leads quadrupled in just 4 months!",
    name: "Vikramaditya Singh",
    role: "CEO, Hospitality Group Udaipur",
    initials: "VS",
  },
  {
    text: "The web development team delivered a blazing fast Next.js website that doubled our online booking conversions within weeks.",
    name: "Pooja Mehta",
    role: "Founder, Luxury Lifestyle Brand",
    initials: "PM",
  },
  {
    text: "Their Meta and Google Ads campaigns consistently deliver a 4.5x ROAS for our e-commerce store. Truly the best digital agency in Rajasthan.",
    name: "Siddharth Jain",
    role: "Marketing Director",
    initials: "SJ",
  },
];

const faqs = [
  { q: "What makes FutureX Digital Marketing the best agency in Udaipur?", a: "We combine 5+ years of local market experience in Udaipur with cutting-edge 2026 digital strategies including Next.js web apps, AI automation, and hyper-targeted local SEO." },
  { q: "How long does it take to see results from Digital Marketing & SEO?", a: "PPC ads and web redesigns yield instant leads within 24-48 hours. Organic SEO campaigns deliver substantial rank and traffic increases within 3 to 6 months." },
  { q: "Do you offer customized digital marketing packages?", a: "Yes! Every business has unique goals. We tailor custom strategies according to your target audience, industry, and growth trajectory." },
  { q: "Where is your office located in Udaipur?", a: "Our agency office is located on the 5th Floor, Office No. 526, Arvana Mall, Hathipole, Udaipur, Rajasthan 313001." },
];

const coreValues = [
  { icon: <FaChartLine />, title: "ROI-First Strategy", desc: "Every campaign is tracked against tangible sales, qualified leads, and return on ad spend." },
  { icon: <FaRocket />, title: "Cutting-Edge Tech", desc: "We leverage Next.js, AI automation, and high-tech analytics to outperform competitors." },
  { icon: <FaHandshake />, title: "100% Transparency", desc: "Real-time client analytics dashboards and honest monthly performance reporting." },
  { icon: <FaSmile />, title: "Client Growth Focus", desc: "Your business expansion and long-term brand equity are our primary metrics of success." },
  { icon: <FaShieldAlt />, title: "Local Market Mastery", desc: "Deep expertise in Udaipur & Rajasthan market dynamics paired with global execution standards." },
  { icon: <FaLaptopCode />, title: "Full-Funnel Execution", desc: "From brand design to ad traffic and CRM automated follow-ups, we manage the entire funnel." },
];

const whyChoose = [
  { title: "Dominant Local SEO in Udaipur", desc: "Rank #1 on Google for high-intent search keywords in Udaipur and Rajasthan." },
  { title: "High-ROAS Ad Campaigns", desc: "Data-backed Google & Meta ads optimized for low cost-per-lead." },
  { title: "Sub-Second Next.js Web Performance", desc: "Lightning fast, mobile-first custom web applications engineered for high conversion." },
  { title: "AI-Powered Automated Sales Funnels", desc: "Instant 24/7 WhatsApp and Chatbot lead capture that never misses an inquiry." },
  { title: "Creative Branding & Visual Reels", desc: "High-aesthetic social media graphics, video reels, and brand positioning." },
  { title: "Dedicated Agency Support", desc: "Direct access to digital strategy experts and fast turnaround times." },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ====== HERO SLIDER ====== */}
      <section className="hero-modern" style={{ background: "#0B0F19", position: "relative", minHeight: "85vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div className="hero-modern-bg">
          {heroSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`FutureX Slide ${index + 1}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: currentSlide === index ? 0.35 : 0,
                transition: 'opacity 1s ease-in-out',
                filter: 'brightness(0.7)'
              }}
            />
          ))}
        </div>
        
        {/* Glow overlay */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "450px", height: "450px", background: "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }}></div>

        <div className="container" style={{ position: "relative", zIndex: 10, padding: "120px 24px 80px" }}>
          <AnimateOnScroll>
            <div className="hero-badge-modern" style={{ background: "rgba(6, 182, 212, 0.15)", border: "1px solid rgba(6, 182, 212, 0.4)", color: "#06B6D4", display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 20px", borderRadius: "100px", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "24px" }}>
              <FaRocket /> {heroSlides[currentSlide].badge}
            </div>
            <h1 className="hero-title-modern" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.15, maxWidth: "900px", marginBottom: "24px" }}>
              {heroSlides[currentSlide].title.split("Digital Marketing")[0]}
              <span style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Digital Marketing
              </span>
              {heroSlides[currentSlide].title.split("Digital Marketing")[1]}
            </h1>
            <p className="hero-subtitle-modern" style={{ fontSize: "1.2rem", color: "#94A3B8", maxWidth: "750px", lineHeight: 1.8, marginBottom: "40px" }}>
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="hero-actions-modern" style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", border: "none", padding: "18px 38px", borderRadius: "100px", fontWeight: 800, color: "#FFF" }}>
                {heroSlides[currentSlide].cta} <FaArrowRight />
              </Link>
              <Link href="tel:+917733977227" className="btn btn-secondary" style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", padding: "18px 36px", borderRadius: "100px", fontWeight: 800, color: "#F8FAFC", backdropFilter: "blur(10px)" }}>
                <FaPhoneAlt style={{ color: "#06B6D4" }} /> +91 77339 77227
              </Link>
            </div>

            {/* Slider Navigation Dots */}
            <div className="slider-dots" style={{ display: 'flex', gap: '12px', marginTop: '50px' }}>
              {heroSlides.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: currentSlide === index ? '36px' : '12px',
                    height: '12px',
                    borderRadius: '100px',
                    background: currentSlide === index ? '#06B6D4' : 'rgba(255,255,255,0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== FEATURES OVERLAP ====== */}
      <section className="features-overlap" style={{ marginTop: "-40px", position: "relative", zIndex: 20 }}>
        <div className="container">
          <AnimateOnScroll>
            <div className="features-grid-modern" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
              <div className="feature-card-modern" style={{ background: "rgba(15, 23, 42, 0.9)", border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "20px", padding: "30px", backdropFilter: "blur(20px)" }}>
                <div className="feature-icon-modern" style={{ width: "55px", height: "55px", background: "rgba(6, 182, 212, 0.15)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#06B6D4", fontSize: "1.5rem", marginBottom: "20px" }}>
                  <FaSearch />
                </div>
                <h3 style={{ color: "#F8FAFC", fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>Local SEO in Udaipur</h3>
                <p style={{ color: "#94A3B8", fontSize: "0.95rem" }}>Rank #1 on Google maps &amp; search for buyers in Udaipur &amp; Rajasthan.</p>
              </div>

              <div className="feature-card-modern" style={{ background: "rgba(15, 23, 42, 0.9)", border: "1px solid rgba(99, 102, 241, 0.3)", borderRadius: "20px", padding: "30px", backdropFilter: "blur(20px)" }}>
                <div className="feature-icon-modern" style={{ width: "55px", height: "55px", background: "rgba(99, 102, 241, 0.15)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#6366F1", fontSize: "1.5rem", marginBottom: "20px" }}>
                  <FaLaptopCode />
                </div>
                <h3 style={{ color: "#F8FAFC", fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>Next.js Web Apps</h3>
                <p style={{ color: "#94A3B8", fontSize: "0.95rem" }}>Sub-second speed corporate platforms and high-converting online stores.</p>
              </div>

              <div className="feature-card-modern" style={{ background: "rgba(15, 23, 42, 0.9)", border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "20px", padding: "30px", backdropFilter: "blur(20px)" }}>
                <div className="feature-icon-modern" style={{ width: "55px", height: "55px", background: "rgba(6, 182, 212, 0.15)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#06B6D4", fontSize: "1.5rem", marginBottom: "20px" }}>
                  <FaBullhorn />
                </div>
                <h3 style={{ color: "#F8FAFC", fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>High-ROAS Paid Ads</h3>
                <p style={{ color: "#94A3B8", fontSize: "0.95rem" }}>Precision Google &amp; Meta ad funnels engineered for maximum ROI.</p>
              </div>

              <div className="feature-card-modern" style={{ background: "rgba(15, 23, 42, 0.9)", border: "1px solid rgba(99, 102, 241, 0.3)", borderRadius: "20px", padding: "30px", backdropFilter: "blur(20px)" }}>
                <div className="feature-icon-modern" style={{ width: "55px", height: "55px", background: "rgba(99, 102, 241, 0.15)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#6366F1", fontSize: "1.5rem", marginBottom: "20px" }}>
                  <FaRobot />
                </div>
                <h3 style={{ color: "#F8FAFC", fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>AI Lead Automation</h3>
                <p style={{ color: "#94A3B8", fontSize: "0.95rem" }}>Instant WhatsApp &amp; Chatbot workflows capturing leads 24/7.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== ABOUT AGENCY ====== */}
      <section className="about-modern-section" style={{ padding: "100px 0", background: "#0B0F19" }}>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="section-label" style={{ color: "#06B6D4" }}>ABOUT FUTUREX</span>
              <h2 className="section-title" style={{ color: "#F8FAFC" }}>Udaipur’s Premier Digital Growth Agency</h2>
              <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #06B6D4, #6366F1)', margin: '0 auto' }}></div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
              <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(6, 182, 212, 0.3)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
                <img src="/about-agency.png" alt="FutureX Agency Studio" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>

              <div>
                <h3 style={{ color: "#F8FAFC", fontSize: "2rem", fontWeight: 800, lineHeight: 1.25, marginBottom: "20px" }}>
                  We Help Businesses Scale Revenue Through Performance Marketing
                </h3>
                <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "20px" }}>
                  Founded in 2020 by Akshay Jain, FutureX Digital Marketing has established itself as Rajasthan’s trusted digital growth partner. Operating from our flagship office in Arvana Mall, Udaipur, we have empowered over 150+ brands across hospitality, e-commerce, real estate, healthcare, and professional services.
                </p>
                <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "30px" }}>
                  We bridge the gap between creative visual storytelling and hardcore analytical performance. Whether you need to dominate local search results in Udaipur or scale international ad campaigns, FutureX delivers measurable ROI.
                </p>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <Link href="/about" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", border: "none", borderRadius: "100px" }}>
                    Learn Our Story <FaArrowRight />
                  </Link>
                  <Link href="/portfolio" className="btn btn-secondary" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#F8FAFC", borderRadius: "100px" }}>
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== METRICS & ACHIEVEMENTS ====== */}
      <section className="metrics-section-v2" style={{ padding: "80px 0", background: "#0F172A", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <AnimateOnScroll>
            <div className="metrics-row-v2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
              {[
                { icon: <FaAward />, value: "5+ Years", title: "Industry Leadership", desc: "Proven track record driving growth for businesses in Udaipur since 2020." },
                { icon: <FaUsers />, value: "150+", title: "Clients Served", desc: "Successful growth partnerships across e-commerce, real estate, and hotels." },
                { icon: <FaStar />, value: "4.8 / 5", title: "Client Rating", desc: "Top-rated digital marketing agency based on verified client reviews." },
                { icon: <FaChartLine />, value: "350%", title: "Average Organic ROI", desc: "Consistent keyword ranking gains and lead generation increases." },
              ].map((m, i) => (
                <div key={i} style={{ background: "rgba(11, 15, 25, 0.7)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "20px", padding: "30px", textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", color: "#06B6D4", marginBottom: "12px" }}>{m.icon}</div>
                  <h3 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#F8FAFC", marginBottom: "6px" }}>{m.value}</h3>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#6366F1", marginBottom: "10px" }}>{m.title}</div>
                  <p style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: "1.6" }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== SERVICES DIRECTORY CAROUSEL / GRID ====== */}
      <section className="services-v2-container" style={{ padding: "100px 0", background: "#0B0F19" }} id="services">
        <div className="container">
          <AnimateOnScroll>
            <div className="services-v2-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "50px", flexWrap: "wrap", gap: "20px" }}>
              <div className="services-v2-title-area">
                <span className="section-label-v2" style={{ color: "#06B6D4", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700 }}>OUR CORE SERVICES</span>
                <h2 className="section-title-v2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#F8FAFC" }}>Comprehensive Digital Marketing Solutions</h2>
              </div>
              <div className="services-v2-nav" style={{ display: "flex", gap: "10px" }}>
                <button
                  className="nav-btn"
                  onClick={() => {
                    const grid = document.getElementById('services-grid-v2');
                    if (grid) grid.scrollBy({ left: -340, behavior: 'smooth' });
                  }}
                  style={{ width: "45px", height: "45px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                  aria-label="Previous"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="nav-btn"
                  onClick={() => {
                    const grid = document.getElementById('services-grid-v2');
                    if (grid) grid.scrollBy({ left: 340, behavior: 'smooth' });
                  }}
                  style={{ width: "45px", height: "45px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                  aria-label="Next"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="services-v2-grid" id="services-grid-v2" style={{ overflowX: "auto", paddingBottom: "20px", scrollbarWidth: "none" }}>
            <div className="services-v2-track" style={{ display: "flex", gap: "24px", minWidth: "max-content" }}>
              {serviceCategories.map((cat, i) => (
                <Link href={`/services/${cat.slug}`} key={i} className="service-card-v2" style={{ width: "340px", background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.25)", borderRadius: "24px", overflow: "hidden", textDecoration: "none", display: "flex", flexDirection: "column" }}>
                  <div className="service-card-v2-image" style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                    <img src={cat.image} alt={cat.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="service-card-v2-content" style={{ padding: "24px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ color: "#F8FAFC", fontSize: "1.25rem", fontWeight: 700, marginBottom: "10px" }}>{cat.title}</h3>
                      <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "20px" }}>{cat.shortDesc}</p>
                    </div>
                    <div className="service-card-btn-wrapper" style={{ marginTop: "auto" }}>
                      <span className="service-card-btn" style={{ color: "#06B6D4", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "8px" }}>
                        Explore Service &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/services" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", border: "none", borderRadius: "100px", padding: "16px 36px" }}>
                View All Services &amp; Packages <FaArrowRight />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== CORE VALUES & PRINCIPLES ====== */}
      <section className="section" style={{ padding: "100px 0", background: "#0F172A" }}>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label" style={{ color: "#06B6D4" }}>OUR PRINCIPLES</span>
              <h2 className="section-title" style={{ color: "#F8FAFC" }}>Core Agency Values</h2>
              <p className="section-subtitle" style={{ margin: "0 auto", color: "#94A3B8" }}>
                The core pillars that drive FutureX Digital Marketing's client partnerships.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="premium-values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {coreValues.map((v, i) => (
                <div key={i} className="premium-value-card-v2" style={{ background: "#0B0F19", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "30px" }}>
                  <div className="value-icon-v3" style={{ fontSize: "1.8rem", color: "#06B6D4", marginBottom: "16px" }}>{v.icon}</div>
                  <h4 style={{ color: "#F8FAFC", fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>{v.title}</h4>
                  <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.6" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== WHY CHOOSE FUTUREX ====== */}
      <section className="section section-navy" style={{ padding: "100px 0", background: "linear-gradient(135deg, #0B0F19 0%, #151D2A 100%)" }}>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label" style={{ color: "#06B6D4" }}>AGENCY ADVANTAGES</span>
              <h2 className="section-title" style={{ color: "#F8FAFC" }}>Why Choose FutureX Digital Marketing?</h2>
              <p className="section-subtitle" style={{ margin: "0 auto", color: "#94A3B8" }}>
                Discover how our strategic focus in Udaipur delivers unmatched competitive advantages.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {whyChoose.map((w, i) => (
                <div key={i} className="glass-card why-item" style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(6, 182, 212, 0.2)", padding: "24px", borderRadius: "18px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div className="why-item-check" style={{ color: "#06B6D4", fontSize: "1.3rem", marginTop: "2px" }}>
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 style={{ color: "#F8FAFC", fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}>{w.title}</h4>
                    <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: "1.6" }}>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== PORTFOLIO CASE STUDIES PREVIEW ====== */}
      <section className="section" style={{ padding: "100px 0", background: "#0B0F19" }}>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span className="section-label" style={{ color: "#06B6D4" }}>PROVEN RESULTS</span>
              <h2 className="section-title" style={{ color: "#F8FAFC" }}>Featured Case Studies &amp; Success Stories</h2>
              <p className="section-subtitle" style={{ margin: "0 auto", color: "#94A3B8" }}>
                Real growth results delivered for clients in Udaipur, Rajasthan, and beyond.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px" }}>
              <div style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.25)", borderRadius: "24px", overflow: "hidden" }}>
                <img src="/portfolio-1.png" alt="E-Commerce Redesign Case Study" style={{ width: "100%", height: "240px", objectFit: "cover" }} />
                <div style={{ padding: "30px" }}>
                  <span style={{ color: "#06B6D4", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px" }}>Web Development &amp; E-Commerce</span>
                  <h3 style={{ color: "#F8FAFC", fontSize: "1.35rem", fontWeight: 700, margin: "10px 0" }}>Luxury Retail Store 2.5x Sales Scale</h3>
                  <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px" }}>
                    Redesigned a legacy online store into a Next.js web application with 0.8s load speed, yielding a 140% boost in mobile conversions.
                  </p>
                  <Link href="/portfolio" style={{ color: "#06B6D4", fontWeight: 700, textDecoration: "none" }}>Read Case Study &rarr;</Link>
                </div>
              </div>

              <div style={{ background: "#0F172A", border: "1px solid rgba(99, 102, 241, 0.25)", borderRadius: "24px", overflow: "hidden" }}>
                <img src="/portfolio-2.png" alt="Local SEO Udaipur Case Study" style={{ width: "100%", height: "240px", objectFit: "cover" }} />
                <div style={{ padding: "30px" }}>
                  <span style={{ color: "#6366F1", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px" }}>Local SEO in Udaipur</span>
                  <h3 style={{ color: "#F8FAFC", fontSize: "1.35rem", fontWeight: 700, margin: "10px 0" }}>Udaipur Hospitality Chain #1 Google Rank</h3>
                  <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px" }}>
                    Executed hyper-local SEO and Google Map Optimization, bringing over 450+ direct inbound reservation calls monthly.
                  </p>
                  <Link href="/portfolio" style={{ color: "#6366F1", fontWeight: 700, textDecoration: "none" }}>Read Case Study &rarr;</Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="testimonial-section-creative" style={{ padding: "100px 0", background: "#0F172A" }}>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="mv-badge" style={{ color: "#06B6D4", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700 }}>CLIENT TESTIMONIALS</span>
              <h2 className="mv-main-title" style={{ color: "#F8FAFC", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>What Our Clients Say</h2>
              <p className="mv-main-desc" style={{ margin: "0 auto", maxWidth: 600, color: "#94A3B8" }}>
                Trusted by business owners, founders, and marketing leaders across Udaipur and Rajasthan.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="container">
          <AnimateOnScroll>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{ background: "#0B0F19", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "20px", padding: "30px" }}>
                  <div style={{ display: "flex", color: "#F59E0B", gap: "4px", marginBottom: "16px" }}>
                    {[...Array(5)].map((_, j) => (
                      <FaStar key={j} />
                    ))}
                  </div>
                  <p style={{ color: "#F8FAFC", fontSize: "0.95rem", lineHeight: "1.7", fontStyle: "italic", marginBottom: "20px" }}>&ldquo;{t.text}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(135deg, #06B6D4, #6366F1)", color: "#FFF", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {t.initials}
                    </div>
                    <div>
                      <h4 style={{ color: "#F8FAFC", fontSize: "1rem", fontWeight: 700 }}>{t.name}</h4>
                      <span style={{ color: "#94A3B8", fontSize: "0.85rem" }}>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== FAQ PREVIEW ====== */}
      <section className="faq-section-v3" style={{ padding: "100px 0", background: "#0B0F19" }}>
        <div className="container">
          <div className="faq-grid-v3" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "flex-start" }}>
            <div className="faq-content-v3">
              <AnimateOnScroll>
                <span className="faq-badge-v3" style={{ color: "#06B6D4", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700 }}>FREQUENTLY ASKED</span>
                <h2 className="faq-title-v3" style={{ color: "#F8FAFC", fontSize: "2.2rem", fontWeight: 800, marginTop: "10px", marginBottom: "20px" }}>Have Questions About Digital Growth?</h2>
                <p className="faq-desc-v3" style={{ color: "#94A3B8", lineHeight: "1.8", marginBottom: "30px" }}>
                  Find quick answers about our digital marketing process, local SEO in Udaipur, custom website timelines, and performance advertising contracts.
                </p>
                <Link href="/faq" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", border: "none", borderRadius: "100px" }}>
                  View All FAQs <FaArrowRight />
                </Link>
              </AnimateOnScroll>
            </div>

            <div className="faq-accordion-v3">
              <AnimateOnScroll>
                {faqs.map((f, i) => (
                  <FAQItemV3 key={i} q={f.q} a={f.a} />
                ))}
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ====== HIGH-CONVERTING CTA ====== */}
      <section style={{
        margin: '40px auto 100px',
        width: 'calc(100% - 40px)',
        maxWidth: '1100px',
        padding: '90px 30px',
        background: 'radial-gradient(circle at center, #151D2A 0%, #070A10 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '36px',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.6)'
      }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <AnimateOnScroll>
              <h2 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{
                  color: '#06B6D4',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  marginBottom: '15px',
                  fontWeight: 700
                }}>
                  READY TO SCALE YOUR BUSINESS?
                </span>
                <span style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, lineHeight: 1.2, color: '#F8FAFC' }}>
                  Let’s Build Your Digital Growth Funnel Today
                </span>
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.8, marginBottom: '40px' }}>
                Schedule a free 30-minute strategic consultation with FutureX Digital Marketing. We will audit your current online footprint and present a tailored ROI roadmap.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <Link href="tel:+917733977227" style={{
                  padding: '18px 40px',
                  borderRadius: '100px',
                  background: 'linear-gradient(135deg, #06B6D4, #6366F1)',
                  color: '#FFF',
                  fontWeight: 800,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)',
                  textDecoration: 'none'
                }}>
                  <FaPhoneAlt /> Call +91 77339 77227
                </Link>
                <Link href="/contact" style={{
                  padding: '18px 40px',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#FFF',
                  fontWeight: 800,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  textDecoration: 'none'
                }}>
                  Book Consultation <FaArrowRight />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
