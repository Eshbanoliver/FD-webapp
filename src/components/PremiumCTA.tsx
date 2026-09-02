"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { FaPhoneAlt, FaArrowRight, FaRocket, FaHandshake, FaBoxes } from "react-icons/fa";

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

export default function PremiumCTA({ isSubPage = false }: { isSubPage?: boolean }) {
    return (
        <section
            className={isSubPage ? "premium-cta-v3 sub-page-cta" : "premium-cta-v3"}
            style={{
                margin: '40px auto 100px',
                width: 'calc(100% - 40px)',
                maxWidth: '1050px',
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

            <div style={{ position: 'absolute', top: '12%', left: '8%', opacity: 0.03, fontSize: '8rem', transform: 'rotate(-15deg)', pointerEvents: 'none' }}><FaRocket /></div>
            <div style={{ position: 'absolute', bottom: '12%', right: '8%', opacity: 0.03, fontSize: '10rem', transform: 'rotate(15deg)', pointerEvents: 'none' }}><FaHandshake /></div>

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
                                READY TO ACCELERATE YOUR REVENUE?
                            </span>
                            <span style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, lineHeight: 1.2, color: '#F8FAFC' }}>
                                Scale Your Business With FutureX Digital Marketing
                            </span>
                        </h2>
                        <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.8, marginBottom: '40px' }}>
                            Join 150+ satisfied client brands who trust FutureX for SEO rankings, Next.js web development, and high-ROAS paid advertising in Udaipur and globally.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            {isSubPage ? (
                                <Link href="/services"
                                    style={{
                                        padding: '18px 40px',
                                        borderRadius: '100px',
                                        background: 'linear-gradient(135deg, #06B6D4, #6366F1)',
                                        color: '#FFF',
                                        fontWeight: 800,
                                        fontSize: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        textDecoration: 'none'
                                    }}>
                                    <FaBoxes /> View All Services
                                </Link>
                            ) : (
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
                            )}
                            <Link href="/contact"
                                style={{
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
                                Book Strategy Audit <FaArrowRight />
                            </Link>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
