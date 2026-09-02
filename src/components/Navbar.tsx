"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaChevronDown } from "react-icons/fa";
import { serviceCategories } from "@/app/data/services";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services", hasMega: true },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
];

function MegaMenu() {
    return (
        <div className="mega-menu-wrapper">
            <div className="mega-bubble" style={{ background: "rgba(15, 23, 42, 0.95)", border: "1px solid rgba(6, 182, 212, 0.3)" }}>
                <div className="mega-grid">
                    {serviceCategories.map((cat) => (
                        <Link key={cat.slug} href={`/services/${cat.slug}`} className="mega-bubble-item">
                            <div className="bubble-icon">
                                <img src={cat.image} alt={cat.title} style={{ borderRadius: "8px", objectFit: "cover" }} />
                            </div>
                            <div className="bubble-text">
                                <h6 style={{ color: "#F8FAFC" }}>{cat.title}</h6>
                                <span style={{ color: "#94A3B8" }}>{cat.shortDesc.split('.')[0]}</span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mega-footer" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <Link href="/services" className="view-all-bubble" style={{ color: "#06B6D4" }}>
                        Explore All Services &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileMegaOpen, setMobileMegaOpen] = useState(false);

    useEffect(() => {
        setMobileOpen(false);
        setMobileMegaOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <header className="header-main" style={{ background: "rgba(11, 15, 25, 0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(6, 182, 212, 0.2)" }}>
            {/* Top Bar */}
            <div className="top-bar" style={{ background: "#070A10", borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div className="container">
                    <div className="top-bar-info">
                        <div className="top-bar-item">
                            <FiMail style={{ color: "#06B6D4" }} />
                            <a href="mailto:futurexdigitalmarketing@gmail.com" style={{ color: "#94A3B8" }}>futurexdigitalmarketing@gmail.com</a>
                        </div>
                        <div className="top-bar-item">
                            <FiClock style={{ color: "#06B6D4" }} />
                            <span style={{ color: "#94A3B8" }}>Mon - Sat: 10:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                    <div className="top-bar-social">
                        <span style={{ color: "#94A3B8" }}>Follow Us:</span>
                        <a href="https://www.instagram.com/futurexdigitalmarketing/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.facebook.com/profile.php?id=61582411168285" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="https://www.linkedin.com/company/futurex-digital-marketing" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="header-wrapper">
                {/* Logo Section */}
                <div className="header-logo-section">
                    <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                        <img
                            src="/logo.png"
                            alt="FutureX Digital Marketing Logo"
                            style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                        />
                        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.5px' }}>
                            Future<span style={{ color: "#06B6D4" }}>X</span> <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94A3B8', display: 'block', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '-4px' }}>Digital Marketing</span>
                        </span>
                    </Link>
                </div>

                {/* Navigation Section */}
                <div className="header-nav-section">
                    <ul className="nav-links-modern">
                        {navLinks.map((link) => (
                            <li key={link.href} className={link.hasMega ? "has-mega" : ""}>
                                <Link
                                    href={link.href}
                                    className={pathname === link.href ? "active" : ""}
                                    style={{ color: pathname === link.href ? "#06B6D4" : "#F8FAFC" }}
                                >
                                    {link.label}
                                    {link.hasMega && <FaChevronDown className="nav-arrow" />}
                                </Link>
                                {link.hasMega && <MegaMenu />}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Call Action */}
                <div className="header-call-section">
                    <a href="tel:+917733977227" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                        <div className="call-icon-circle" style={{ background: "linear-gradient(135deg, #06B6D4, #6366F1)", color: "#FFF" }}>
                            <FiPhone />
                        </div>
                        <div className="call-text">
                            <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Free Consultation</span>
                            <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#F8FAFC' }}>+91 77339 77227</span>
                        </div>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`nav-toggle ${mobileOpen ? "open" : ""}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle Navigation"
                >
                    <span style={{ background: "#F8FAFC" }} />
                    <span style={{ background: "#F8FAFC" }} />
                    <span style={{ background: "#F8FAFC" }} />
                </button>
            </div>

            {/* Mobile Overlay */}
            <div
                className={`mobile-nav-overlay ${mobileOpen ? "open" : ""}`}
                onClick={() => setMobileOpen(false)}
                style={{ zIndex: 1040 }}
            />

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${mobileOpen ? "open" : ""}`} style={{ zIndex: 1050, background: "#0F172A", borderLeft: "1px solid rgba(6,182,212,0.3)" }}>
                {navLinks.map((link) => (
                    <div key={link.href} className="mobile-nav-item-wrapper">
                        {link.hasMega ? (
                            <>
                                <a
                                    href={link.href}
                                    className={`mobile-nav-link ${pathname === link.href || pathname.startsWith(link.href + '/') ? "active" : ""}`}
                                    onClick={(e) => { e.preventDefault(); setMobileMegaOpen(!mobileMegaOpen); }}
                                    style={{ display: "flex", justifyContent: "space-between", cursor: "pointer", color: "#F8FAFC" }}
                                >
                                    <span>{link.label}</span>
                                    <FaChevronDown style={{ transform: mobileMegaOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
                                </a>
                                <div className={`mobile-mega-menu ${mobileMegaOpen ? "open" : ""}`}>
                                    {serviceCategories.map(cat => (
                                        <Link key={cat.slug} href={`/services/${cat.slug}`} className="mobile-mega-item" style={{ color: "#94A3B8" }}>
                                            {cat.title}
                                        </Link>
                                    ))}
                                    <Link href="/services" className="mobile-mega-item view-all" style={{ color: "#06B6D4" }}>
                                        Explore All Services &rarr;
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <Link
                                href={link.href}
                                className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
                                style={{ color: pathname === link.href ? "#06B6D4" : "#F8FAFC" }}
                            >
                                {link.label}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </header>
    );
}
