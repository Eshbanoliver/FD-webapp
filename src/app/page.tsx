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
  FaBullhorn,
  FaRobot,
  FaChevronLeft,
  FaChevronRight,
  FaCubes,
  FaCog,
} from "react-icons/fa";
import { serviceCategories } from "./data/services";
import PremiumCTA from "@/components/PremiumCTA";

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

/* ------- FAQ Item V3 ------- */
function FAQItemV3({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item-v3 ${open ? "open" : ""}`}>
      <button className="faq-question-v3" onClick={() => setOpen(!open)}>
        {q}
        <span className="faq-icon-v3">
          {open ? <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>-</span> : <FaChevronDown />}
        </span>
      </button>
      <div className="faq-answer-v3">
        <div className="faq-answer-content-v3">{a}</div>
      </div>
    </div>
  );
}

const heroSlides = ["/hero-1.png", "/hero-2.png", "/hero-3.png"];

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
  { title: "Dominant Local SEO in Udaipur", desc: "Rank #1 on Google for high-intent search keywords in Udaipur and Rajasthan.", image: "/service-seo.png" },
  { title: "High-ROAS Ad Campaigns", desc: "Data-backed Google & Meta ads optimized for low cost-per-lead.", image: "/service-ppc.png" },
  { title: "Sub-Second Next.js Web Performance", desc: "Lightning fast, mobile-first custom web applications engineered for high conversion.", image: "/service-webdev.png" },
  { title: "AI-Powered Automated Sales Funnels", desc: "Instant 24/7 WhatsApp and Chatbot lead capture that never misses an inquiry.", image: "/service-ai.png" },
  { title: "Creative Branding & Visual Reels", desc: "High-aesthetic social media graphics, video reels, and brand positioning.", image: "/service-branding.png" },
  { title: "Dedicated Agency Support", desc: "Direct access to digital strategy experts and fast turnaround times.", image: "/about-agency.png" },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ====== MODERN HERO SLIDER (Original Template Style) ====== */}
      <section className="hero-modern">
        <div className="hero-modern-bg">
          {heroSlides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            />
          ))}
        </div>
        <div className="container">
          <AnimateOnScroll>
            <div className="hero-badge-modern">
              <FaRocket /> Premier Digital Marketing Agency
            </div>
            <h1 className="hero-title-modern">
              Scale Your Business With <span>Future-Ready Digital Marketing</span>
            </h1>
            <p className="hero-subtitle-modern">
              Your trusted growth partner for high-ranking SEO, custom web development, precision PPC campaigns, and AI lead automation in Udaipur since 2020.
            </p>
            <div className="hero-actions-modern">
              <Link href="/services" className="btn btn-primary">
                Explore Services <FaArrowRight />
              </Link>
              <div className="btn-play">
                <a href="tel:+917733977227" style={{ color: 'inherit' }}><FaPhoneAlt /></a>
              </div>
            </div>
            {/* Slider Dots */}
            <div className="slider-dots" style={{ display: 'flex', gap: '10px', marginTop: '40px' }}>
              {heroSlides.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: currentSlide === index ? 'var(--teal-light)' : 'rgba(255,255,255,0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== FEATURES OVERLAP (Original Template Style) ====== */}
      <section className="features-overlap">
        <div className="container">
          <AnimateOnScroll>
            <div className="features-grid-modern">
              <div className="feature-card-modern">
                <div className="feature-icon-modern">
                  <FaSearch />
                </div>
                <h3>Local SEO Udaipur</h3>
                <p>Rank #1 on Google maps &amp; search for buyers in Udaipur &amp; Rajasthan.</p>
              </div>
              <div className="feature-card-modern">
                <div className="feature-icon-modern">
                  <FaLaptopCode />
                </div>
                <h3>Web Development</h3>
                <p>Sub-second speed corporate platforms and high-converting online stores.</p>
              </div>
              <div className="feature-card-modern">
                <div className="feature-icon-modern">
                  <FaBullhorn />
                </div>
                <h3>High-ROAS Ads</h3>
                <p>Precision Google &amp; Meta ad funnels engineered for maximum ROI.</p>
              </div>
              <div className="feature-card-modern">
                <div className="feature-icon-modern">
                  <FaRobot />
                </div>
                <h3>AI Automation</h3>
                <p>Instant WhatsApp &amp; Chatbot workflows capturing leads 24/7.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== MODERN ABOUT US (Original Template Style) ====== */}
      <section className="about-modern-section">
        <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title">About Us</h2>
          <div style={{ width: '60px', height: '3px', background: 'var(--teal)', margin: '0 auto' }}></div>
        </div>

        <div className="container">
          {/* Row 1 */}
          <AnimateOnScroll>
            <div className="about-row">
              <div className="about-card-modern blue">
                <div className="about-card-image">
                  <img src="/about-agency.png" alt="FutureX Agency Studio" />
                </div>
                <div className="about-card-text">
                  <h3>Udaipur’s Premier Digital Growth Partner</h3>
                  <p>
                    Founded in 2020 by Akshay Jain, FutureX Digital Marketing provides performance SEO, web development, and digital marketing for hospitality, e-commerce, and regional businesses across Rajasthan.
                  </p>
                </div>
              </div>
              <div className="about-cta-modern">
                <p>Explore detailed information about our growth strategy and agency history.</p>
                <Link href="/about" className="btn-modern-outline">View More</Link>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Row 2 */}
          <AnimateOnScroll>
            <div className="about-row reverse">
              <div className="about-card-modern dark">
                <div className="about-card-text">
                  <h3>Data-Driven Digital Campaigns &amp; High ROAS</h3>
                  <p>
                    Specializing in high-converting ad funnels and full-stack Next.js web applications.
                    We bridge the gap between creative visual storytelling and hardcore analytical performance.
                  </p>
                </div>
                <div className="about-card-image">
                  <img src="/portfolio-1.png" alt="Digital Marketing Campaign" />
                </div>
              </div>
              <div className="about-cta-modern">
                <p>Check out our proven case studies and client ROI benchmarks.</p>
                <Link href="/portfolio" className="btn-modern-outline">Get Price</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== FANCY METRICS (Original Template Style) ====== */}
      <section className="metrics-section-v2">
        <div className="container">
          <AnimateOnScroll>
            <div className="metrics-row-v2">
              {[
                {
                  icon: <FaAward />,
                  value: "5+",
                  title: "Years Experience",
                  desc: "Half a decade of proven digital excellence and trusted leadership in Udaipur.",
                  color: "card-blue"
                },
                {
                  icon: <FaUsers />,
                  value: "150+",
                  title: "Clients Served",
                  desc: "Vast network of happy business owners, hotels, and brands across Rajasthan.",
                  color: "card-yellow"
                },
                {
                  icon: <FaStar />,
                  value: "4.8/5",
                  title: "Aggregate Rating",
                  desc: "Top aggregate score from verified client feedback and project reviews.",
                  color: "card-teal"
                },
                {
                  icon: <FaChartLine />,
                  value: "350%",
                  title: "Organic Traffic ROI",
                  desc: "Consistent keyword ranking gains and lead generation increases.",
                  color: "card-red"
                },
              ].map((m, i) => (
                <div key={i} className={`metric-card-v2 ${m.color}`}>
                  <div className="metric-icon-v2">{m.icon}</div>
                  <h3>{m.value}</h3>
                  <div className="metric-title">{m.title}</div>
                  <p className="metric-desc">{m.desc}</p>
                  <Link href="/services" className="read-more-accent">Read More</Link>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== SERVICES SECTION V2 (Original Template Style) ====== */}
      <section className="services-v2-container" id="services">
        <div className="container">
          <AnimateOnScroll>
            <div className="services-v2-header">
              <div className="services-v2-title-area">
                <span className="section-label-v2">OUR SERVICES</span>
                <h2 className="section-title-v2">Our Excellent Solutions</h2>
              </div>
              <div className="services-v2-nav">
                <button
                  className="nav-btn"
                  onClick={() => {
                    const grid = document.getElementById('services-grid-v2');
                    if (grid) grid.scrollBy({ left: -344, behavior: 'smooth' });
                  }}
                  aria-label="Previous"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="nav-btn"
                  onClick={() => {
                    const grid = document.getElementById('services-grid-v2');
                    if (grid) grid.scrollBy({ left: 344, behavior: 'smooth' });
                  }}
                  aria-label="Next"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="services-v2-grid" id="services-grid-v2">
            <div className="services-v2-track">
              {serviceCategories.map((cat, i) => (
                <Link href={`/services/${cat.slug}`} key={i} className="service-card-v2">
                  <div className="service-card-v2-image">
                    <img src={cat.image} alt={cat.title} />
                    <div className="service-card-v2-icon">
                      <FaCubes />
                    </div>
                  </div>
                  <div className="service-card-v2-content">
                    <h3>{cat.title}</h3>
                    <p>{cat.shortDesc}</p>
                    <div className="service-card-btn-wrapper">
                      <span className="service-card-btn">
                        Discover more <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/services" className="btn btn-primary" style={{ background: 'var(--teal)', borderColor: 'var(--teal)' }}>
                View All Services <FaArrowRight />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== MISSION & VISION (Original Template Style) ====== */}
      <section className="mv-section-creative">
        <div className="mv-bg-decorative">
          <div className="mv-circle circle-1"></div>
          <div className="mv-circle circle-2"></div>
        </div>

        <div className="container">
          <AnimateOnScroll>
            <div className="mv-grid-creative">
              <div className="mv-text-content">
                <span className="mv-badge">Strategic Path</span>
                <h2 className="mv-main-title">
                  Defining Our <span>Core Purpose</span>
                </h2>
                <p className="mv-main-desc">
                  We are committed to excellence in every digital campaign we manage, driven by a clear mission
                  and a bold vision for the future of digital marketing in Rajasthan.
                </p>
                <Link href="/about" className="btn btn-primary">
                  Learn Our Story <FaArrowRight />
                </Link>
              </div>

              <div className="mv-cards-creative-stack">
                <div className="card-v3 mission">
                  <div className="card-v3-number">01</div>
                  <div className="card-v3-gradient"></div>
                  <div className="card-v3-icon">
                    <FaBullseye />
                  </div>
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is to provide performance-driven SEO, custom web development, and digital marketing solutions that deliver measurable ROI, leads, and long-term brand equity to our clients.
                  </p>
                </div>

                <div className="card-v3 vision">
                  <div className="card-v3-number">02</div>
                  <div className="card-v3-gradient"></div>
                  <div className="card-v3-icon">
                    <FaEye />
                  </div>
                  <h3>Our Vision</h3>
                  <p>
                    Our vision is to become Rajasthan's most trusted digital marketing and software development agency, known for cutting-edge technology, transparent reporting, and exceptional client growth.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== CORE VALUES (Original Template Style) ====== */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label">Our Principles</span>
              <h2 className="section-title">Core Values</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                The principles that guide everything we do at FutureX Digital Marketing.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="premium-values-grid">
              {coreValues.map((v, i) => (
                <div key={i} className="premium-value-card-v2">
                  <div className="value-icon-v3">{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                  <Link href="/about" className="value-cta-v2">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== WHY CHOOSE US (Original Template Style) ====== */}
      <section className="section section-navy section-boxed-bg">
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label">Our Advantages</span>
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Discover what sets FutureX Digital Marketing apart from generic agencies.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {whyChoose.map((w, i) => (
                <div key={i} className="glass-card why-item-card" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)", padding: "0", overflow: "hidden", borderRadius: "20px" }}>
                  <div style={{ height: "190px", overflow: "hidden", position: "relative" }}>
                    <img src={w.image} alt={w.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
                    <div style={{ position: "absolute", top: "14px", right: "14px", background: "var(--teal)", color: "#fff", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}>
                      <FaCheckCircle />
                    </div>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <h4 style={{ color: "var(--white)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>{w.title}</h4>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== TESTIMONIALS (Original Template Style) ====== */}
      <section className="testimonial-section-creative">
        <div className="testimonial-bg-blob"></div>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="mv-badge">What People Say</span>
              <h2 className="mv-main-title">Customer <span>Reviews</span></h2>
              <p className="mv-main-desc" style={{ margin: "0 auto", maxWidth: 600 }}>
                Hear from satisfied business owners and marketing leaders who trust FutureX for their digital growth.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="testimonial-marquee-container" id="homepage-testimonials-marquee">
          <div className="testimonial-marquee-track">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className={`testimonial-card-v3 outline-variant-${(i % 3) + 1}`}>
                <div className="testimonial-giant-quote">&ldquo;</div>
                <div className="testimonial-stars-v3">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} />
                  ))}
                </div>
                <p className="testimonial-text-v3">{t.text}</p>
                <div className="testimonial-author-v3">
                  <div className="testimonial-avatar-v3">{t.initials}</div>
                  <div className="testimonial-info-v3">
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginTop: 60 }}>
              <Link href="/testimonials" className="btn btn-primary" style={{ padding: '20px 40px', borderRadius: '100px' }}>
                View All Success Stories <FaArrowRight />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== FAQ (Original Template Style) ====== */}
      <section className="faq-section-v3">
        <div className="container">
          <div className="faq-grid-v3">
            <div className="faq-content-v3">
              <AnimateOnScroll>
                <span className="faq-badge-v3">F. A. Q</span>
                <h2 className="faq-title-v3">Frequently Asked Questions</h2>
                <p className="faq-desc-v3">
                  Find answers to common questions about our SEO campaigns, Next.js web applications,
                  and performance advertising solutions.
                </p>
                <div className="faq-accent-line"></div>
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

      {/* ====== CTA (Original Template Style) ====== */}
      <PremiumCTA />
    </>
  );
}
