"use client";

import React from "react";

const platforms = [
    "Google Ads",
    "Meta Ads",
    "Next.js",
    "React",
    "Shopify",
    "Google Analytics 4",
    "HubSpot CRM",
    "Semrush",
    "Figma",
    "WhatsApp API",
];

export default function BrandsGrid() {
    return (
        <div className="brands-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px" }}>
            {platforms.map((platform, i) => (
                <div key={i} className="glass-card brand-card" style={{ background: "#0F172A", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "16px", padding: "20px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem" }}>{platform}</span>
                </div>
            ))}
        </div>
    );
}
