"use client";

import { Cloud, GitBranch, ServerCog, Wrench } from "lucide-react";
import DotGrid from "@/components/DotGrid";
import { useInteractiveBackground } from "@/lib/useInteractiveBackground";
import Reveal from "./Reveal";
import "./WhatIDo.css";

const capabilities = [
  {
    icon: ServerCog,
    title: "Backend Systems",
    desc: "Designing and operating REST APIs with Spring Boot, applying DTO validation, security chains, OAuth2, and JWT. Building services that handle real traffic.",
    tags: ["Spring Boot", "REST APIs", "OAuth2", "JWT"],
  },
  {
    icon: GitBranch,
    title: "Distributed & Data",
    desc: "Event-driven architecture with Kafka, multi-database design (relational + document + cache), and systems that stay consistent under load.",
    tags: ["Kafka", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: Cloud,
    title: "Cloud & Operations",
    desc: "Deploying and operating services on Azure VMs with Docker, Nginx, SSL termination, secrets management, and uptime monitoring.",
    tags: ["Docker", "Azure VM", "Nginx", "SSL"],
  },
  {
    icon: Wrench,
    title: "Developer Tooling",
    desc: "Building SDKs, CLI tools, and internal platforms that other developers rely on. Integration-first thinking means less friction and more reliability.",
    tags: ["SDKs", "CLI", "Integrations", "Internal Platforms"],
  },
];

export default function WhatIDo() {
  const showBackground = useInteractiveBackground();

  return (
    <section className="whatido-section" id="capabilities">
      {showBackground && (
        <div className="whatido-bg" aria-hidden="true">
          <DotGrid
            dotSize={4}
            gap={18}
            baseColor="#202020"
            activeColor="#b1b1b1"
            proximity={110}
            shockRadius={220}
            shockStrength={4}
            resistance={850}
            returnDuration={1.2}
          />
        </div>
      )}

      <div className="whatido-inner">
        <Reveal className="section-label">Capabilities</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>
          What I Work On
        </Reveal>
        <Reveal as="p" className="section-subtitle" delay={100}>
          Not a skills list. These are the responsibilities I take on.
        </Reveal>

        <div className="whatido-grid">
          {capabilities.map((cap, i) => (
            <Reveal className="whatido-card" key={cap.title} delay={i * 70}>
              <div className="whatido-icon">
                <cap.icon size={24} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="whatido-card-title">{cap.title}</h3>
              <p className="whatido-card-desc">{cap.desc}</p>
              <div className="whatido-tags">
                {cap.tags.map((tag) => (
                  <span className="whatido-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
