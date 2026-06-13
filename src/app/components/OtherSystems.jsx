"use client";

import { Github } from "lucide-react";
import Reveal from "./Reveal";
import "./OtherSystems.css";

const systems = [
  {
  name: "Codily",
  label: "High-Performance Async Job Relay",
  desc: "A multitenant distributed job processing platform built with Go, PostgreSQL, and Redis, featuring priority queues, retries with exponential backoff, scheduling, webhooks, RBAC, and an operations dashboard.",
  challenge:
    "The hardest part was designing a fault-tolerant worker architecture with reliable retries, delayed scheduling, tenant isolation, and low-latency job dispatch while maintaining consistency between PostgreSQL and Redis.",
  tags: [
    "Go",
    "PostgreSQL",
    "Redis",
    "Distributed Systems",
    "Worker Queues",
    "RBAC"
  ],
  github: "https://github.com/Debashismitra01/Codily",
}
];

export default function OtherSystems() {
  return (
    <section className="other-section" id="other-systems">
      <div className="other-inner">
        <Reveal className="section-label">Portfolio</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>
          Other Systems I&apos;ve Built
        </Reveal>
        <Reveal as="p" className="section-subtitle" delay={100}>
          The flagship carries weight. These show consistency.
        </Reveal>

        <div className="other-grid">
          {systems.map((s, i) => (
            <Reveal className="other-card" key={s.name} delay={i * 80}>
              <div className="other-card-header">
                <div>
                  <div className="other-name">{s.name}</div>
                  <div className="other-label">{s.label}</div>
                </div>
                <a
                  href={s.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="other-link"
                >
                  <Github size={14} aria-hidden="true" />
                  GitHub
                </a>
              </div>
              <p className="other-desc">{s.desc}</p>
              <div className="other-challenge">
                <span className="challenge-badge">Challenge</span> {s.challenge}
              </div>
              <div className="other-tags">
                {s.tags.map((t) => (
                  <span className="other-tag" key={t}>
                    {t}
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
