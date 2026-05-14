"use client";

import { Github } from "lucide-react";
import Reveal from "./Reveal";
import "./OtherSystems.css";

const systems = [
  {
    name: "AutoRAG",
    label: "Business Chatbot Automation",
    desc: "Automated customer-facing chatbot pipelines for businesses using retrieval-augmented generation over proprietary documents without vendor lock-in.",
    challenge:
      "The hard part: chunking documents intelligently so context windows stayed useful and latency stayed low under concurrent queries.",
    tags: ["RAG", "Python", "Vector DB", "LLM"],
    github: "https://github.com/Debashismitra01/AutoRAG",
  },
  {
    name: "AlgoNest",
    label: "Competitive Programming Platform",
    desc: "A LeetCode-like platform where users solve algorithmic problems, track personal progress, and review solution histories across sessions.",
    challenge:
      "The hard part: sandboxed code execution in isolated containers with time and memory limits enforced at the OS level.",
    tags: ["Spring Boot", "Docker", "PostgreSQL", "Java"],
    github: "https://github.com/Debashismitra01/AlgoNest",
  },
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
