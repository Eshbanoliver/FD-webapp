import Link from "next/link";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaPhoneAlt,
    FaAngleDoubleRight,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer-v3">
            <div className="container">
                <div className="footer-top-v3">
                    <div className="footer-grid-v3">
                        {/* Column 1: Brand & Contact */}
                        <div className="footer-brand-v3">
                            <div className="footer-logo-v3">
                                <img
                                    src="/logo.png"
                                    alt="FutureX Digital Marketing Logo"
                                    style={{ width: '50px', height: '50px', objectFit: 'contain', marginBottom: '10px' }}
                                />
                                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--white)' }}>FutureX Digital</span>
                            </div>
                            <p className="footer-desc-v3">
                                Udaipur’s premier growth agency. Specializing in Search Engine Optimization (SEO), high-converting web development, performance marketing, and AI lead automation since 2020.
                            </p>

                            <div className="footer-phone-big-v3">
                                <div className="phone-icon-v3">
                                    <FaPhoneAlt />
                                </div>
                                <div className="phone-info-v3">
                                    <a href="tel:+917733977227">+91 77339 77227</a>
                                    <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
                                </div>
                            </div>

                            <div className="footer-socials-v3">
                                <span className="follow-text">Follow On:</span>
                                <div className="social-links-v3">
                                    <a href="https://www.instagram.com/futurexdigitalmarketing/" target="_blank" rel="noopener noreferrer" className="social-btn-v3" aria-label="Instagram"><FaInstagram /></a>
                                    <a href="https://www.facebook.com/profile.php?id=61582411168285" target="_blank" rel="noopener noreferrer" className="social-btn-v3" aria-label="Facebook"><FaFacebookF /></a>
                                    <a href="https://www.linkedin.com/company/futurex-digital-marketing" target="_blank" rel="noopener noreferrer" className="social-btn-v3" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Useful Links */}
                        <div className="footer-links-v3">
                            <h4 className="footer-title-v3">Useful Links</h4>
                            <div className="title-divider-v3"></div>

                            <div className="links-subgrid-v3">
                                <ul className="footer-link-list-v3">
                                    <li><Link href="/"><FaAngleDoubleRight /> Home</Link></li>
                                    <li><Link href="/about"><FaAngleDoubleRight /> About Us</Link></li>
                                    <li><Link href="/services"><FaAngleDoubleRight /> All Services</Link></li>
                                    <li><Link href="/portfolio"><FaAngleDoubleRight /> Portfolio</Link></li>
                                    <li><Link href="/blog"><FaAngleDoubleRight /> Blog Insights</Link></li>
                                    <li><Link href="/faq"><FaAngleDoubleRight /> FAQ</Link></li>
                                    <li><Link href="/contact"><FaAngleDoubleRight /> Contact Us</Link></li>
                                </ul>
                                <ul className="footer-link-list-v3">
                                    <li><Link href="/services/search-engine-optimization"><FaAngleDoubleRight /> SEO Services</Link></li>
                                    <li><Link href="/services/web-development"><FaAngleDoubleRight /> Web Development</Link></li>
                                    <li><Link href="/services/social-media-marketing"><FaAngleDoubleRight /> Social Media</Link></li>
                                    <li><Link href="/services/performance-marketing"><FaAngleDoubleRight /> PPC Ads</Link></li>
                                    <li><Link href="/services/brand-strategy-design"><FaAngleDoubleRight /> Brand Strategy</Link></li>
                                    <li><Link href="/services/ai-automation-lead-gen"><FaAngleDoubleRight /> AI Automation</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3: Gallery */}
                        <div className="footer-gallery-v3">
                            <h4 className="footer-title-v3">Our Gallery</h4>
                            <div className="title-divider-v3"></div>

                            <div className="gallery-grid-v3">
                                <div className="gallery-item-v3"><img src="/service-seo.png" alt="SEO Service" /></div>
                                <div className="gallery-item-v3"><img src="/service-webdev.png" alt="Web Dev" /></div>
                                <div className="gallery-item-v3"><img src="/service-social.png" alt="Social Media" /></div>
                                <div className="gallery-item-v3"><img src="/service-ppc.png" alt="PPC Ads" /></div>
                                <div className="gallery-item-v3"><img src="/service-ai.png" alt="AI Automation" /></div>
                                <div className="gallery-item-v3"><img src="/service-branding.png" alt="Branding" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-v3">
                <div className="bottom-slanted-bg-v3"></div>
                <div className="container">
                    <div className="bottom-content-v3">
                        <div className="copyright-v3" style={{ width: '100%', textAlign: 'center' }}>
                            ©️ Copyright 2026 | <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>FutureX Digital Marketing</Link> | All Rights Reserved | 5th Floor, Office No. 526, Arvana Mall, Hathipole, Udaipur
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
