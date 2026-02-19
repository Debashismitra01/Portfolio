"use client";
import "./WhatIDo.css";
import DotGrid from "@/components/DotGrid";

const capabilities = [
    {
        icon: "⚙️",
        title: "Backend Systems",
        desc: "Designing and operating REST APIs with Spring Boot, applying DTO validation, security chains, OAuth2, and JWT. Building services that handle real traffic.",
        tags: ["Spring Boot", "REST APIs", "OAuth2", "JWT"],
    },
    {
        icon: "🔀",
        title: "Distributed & Data",
        desc: "Event-driven architecture with Kafka, multi-database design (relational + document + cache), and systems that stay consistent under load.",
        tags: ["Kafka", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
        icon: "☁️",
        title: "Cloud & Operations",
        desc: "Deploying and operating services on Azure VMs with Docker, Nginx, SSL termination, secrets management, and uptime monitoring.",
        tags: ["Docker", "Azure VM", "Nginx", "SSL"],
    },
    {
        icon: "🛠️",
        title: "Developer Tooling",
        desc: "Building SDKs, CLI tools, and internal platforms that other developers rely on. Integration-first thinking — reduce friction, increase reliability.",
        tags: ["SDKs", "CLI", "Integrations", "Internal Platforms"],
    },
];

export default function WhatIDo() {
    return (
        <>    
        <section className="whatido-section" id="capabilities">
            <div style={{ width: '100%', height: '100vh', position: 'absolute'}}>
  <DotGrid
    dotSize={5}
    gap={15}
    baseColor="#202020"
    activeColor="#b1b1b1"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
</div>
            <div className="whatido-inner">
                <div className="section-label">Capabilities</div>
                <h2 className="section-title">What I Work On</h2>
                <p className="section-subtitle">
                    Not a skills list. These are the responsibilities I take on.
                </p>

                <div className="whatido-grid">
                    {capabilities.map((cap, i) => (
                        <div className="whatido-card" key={i}>
                            <div className="whatido-icon">{cap.icon}</div>
                            <h3 className="whatido-card-title">{cap.title}</h3>
                            <p className="whatido-card-desc">{cap.desc}</p>
                            <div className="whatido-tags">
                                {cap.tags.map((tag) => (
                                    <span className="whatido-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
