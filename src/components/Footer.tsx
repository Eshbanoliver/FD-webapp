import Link from "next/link";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaAngleDoubleRight,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer-v3" style={{ background: "#070A10", color: "#F8FAFC", borderTop: "1px solid rgba(6, 182, 212, 0.2)" }}>
            <div className="container">
                <div className="footer-top-v3" style={{ padding: "80px 0 40px" }}>
                    <div className="footer-grid-v3">
                        {/* Column 1: Brand & Contact */}
                        <div className="footer-brand-v3">
                            <div className="footer-logo-v3" style={{ marginBottom: "20px" }}>
                                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                                    <img
                                        src="/logo.png"
                                        alt="FutureX Digital Marketing Logo"
                                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                    />
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F8FAFC' }}>
                                        Future<span style={{ color: "#06B6D4" }}>X</span>
                                    </span>
                                </Link>
                            </div>
                            <p className="footer-desc-v3" style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "25px" }}>
                                FutureX Digital Marketing is Udaipur’s premier growth agency. Specializing in Search Engine Optimization (SEO), high-converting web development, performance marketing, and AI automation since 2020.
                            </p>

                            <div className="footer-contact-details" style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "25px" }}>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#94A3B8", fontSize: "0.9rem" }}>
                                    <FaMapMarkerAlt style={{ color: "#06B6D4", marginTop: "4px", flexShrink: 0 }} />
                                    <span>5th Floor, Office No. 526, Arvana Mall, Hathipole, Udaipur, Rajasthan 313001</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#94A3B8", fontSize: "0.9rem" }}>
                                    <FaEnvelope style={{ color: "#06B6D4" }} />
                                    <a href="mailto:futurexdigitalmarketing@gmail.com" style={{ color: "#94A3B8" }}>futurexdigitalmarketing@gmail.com</a>
                                </div>
                            </div>

                            <div className="footer-phone-big-v3" style={{ background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(6,182,212,0.3)" }}>
                                <div className="phone-icon-v3" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", color: "#FFF" }}>
                                    <FaPhoneAlt />
                                </div>
                                <div className="phone-info-v3">
                                    <a href="tel:+917733977227" style={{ color: "#F8FAFC", fontWeight: 800 }}>+91 77339 77227</a>
                                    <span style={{ color: "#94A3B8" }}>Mon - Sat: 10:00 AM - 6:00 PM</span>
                                </div>
                            </div>

                            <div className="footer-socials-v3" style={{ marginTop: "25px" }}>
                                <span className="follow-text" style={{ color: "#94A3B8" }}>Follow Us:</span>
                                <div className="social-links-v3" style={{ display: "flex", gap: "10px" }}>
                                    <a href="https://www.instagram.com/futurexdigitalmarketing/" target="_blank" rel="noopener noreferrer" className="social-btn-v3" aria-label="Instagram"><FaInstagram /></a>
                                    <a href="https://www.facebook.com/profile.php?id=61582411168285" target="_blank" rel="noopener noreferrer" className="social-btn-v3" aria-label="Facebook"><FaFacebookF /></a>
                                    <a href="https://www.linkedin.com/company/futurex-digital-marketing" target="_blank" rel="noopener noreferrer" className="social-btn-v3" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="footer-links-v3">
                            <h4 className="footer-title-v3" style={{ color: "#F8FAFC" }}>Quick Navigation</h4>
                            <div className="title-divider-v3" style={{ background: "#06B6D4" }}></div>

                            <div className="links-subgrid-v3">
                                <ul className="footer-link-list-v3">
                                    <li><Link href="/" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> Home</Link></li>
                                    <li><Link href="/about" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> About Us</Link></li>
                                    <li><Link href="/services" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> Our Services</Link></li>
                                    <li><Link href="/portfolio" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> Case Studies</Link></li>
                                    <li><Link href="/blog" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> Insights &amp; Blog</Link></li>
                                    <li><Link href="/faq" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> FAQ</Link></li>
                                    <li><Link href="/contact" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> Contact Us</Link></li>
                                </ul>
                                <ul className="footer-link-list-v3">
                                    <li><Link href="/services/search-engine-optimization" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> SEO in Udaipur</Link></li>
                                    <li><Link href="/services/web-development" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> Web Development</Link></li>
                                    <li><Link href="/services/social-media-marketing" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> Social Media</Link></li>
                                    <li><Link href="/services/performance-marketing" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> PPC &amp; Google Ads</Link></li>
                                    <li><Link href="/services/brand-strategy-design" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> Brand Strategy</Link></li>
                                    <li><Link href="/services/ai-automation-lead-gen" style={{ color: "#94A3B8" }}><FaAngleDoubleRight style={{ color: "#06B6D4" }} /> AI Automation</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3: Gallery / AI Visuals */}
                        <div className="footer-gallery-v3">
                            <h4 className="footer-title-v3" style={{ color: "#F8FAFC" }}>Agency Capabilities</h4>
                            <div className="title-divider-v3" style={{ background: "#06B6D4" }}></div>

                            <div className="gallery-grid-v3">
                                <div className="gallery-item-v3"><img src="/service-seo.png" alt="SEO Strategy" /></div>
                                <div className="gallery-item-v3"><img src="/service-webdev.png" alt="Web Development" /></div>
                                <div className="gallery-item-v3"><img src="/service-social.png" alt="Social Media" /></div>
                                <div className="gallery-item-v3"><img src="/service-ppc.png" alt="Performance Ads" /></div>
                                <div className="gallery-item-v3"><img src="/service-ai.png" alt="AI Automation" /></div>
                                <div className="gallery-item-v3"><img src="/service-branding.png" alt="Brand Identity" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-v3" style={{ background: "#0B0F19", borderTop: "1px solid rgba(255, 255, 255, 0.05)", padding: "20px 0" }}>
                <div className="container">
                    <div className="bottom-content-v3">
                        <div className="copyright-v3" style={{ width: '100%', textAlign: 'center', color: '#94A3B8', fontSize: '0.9rem' }}>
                            ©️ Copyright 2026 | <Link href="/" style={{ color: '#06B6D4', textDecoration: 'none', fontWeight: 700 }}>FutureX Digital Marketing</Link> | All Rights Reserved | Leading Digital Agency in Udaipur, Rajasthan
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
