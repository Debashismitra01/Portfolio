"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import "./EngineeringNotes.css";
import { HoverBorderGradient } from "./Hero/hover-border-gradient";

const notes = [
  {
    date: "May 28, 2026",
    title: "Codily's Redis ZSET Delayed Queue",
    desc: "How I built delayed job scheduling using Redis Sorted Sets, Unix epoch nanosecond scores, and a scheduler goroutine that atomically promotes ready jobs with exponential backoff support.",
    tag: "Redis / Go / Distributed Systems",
    href: "https://blog.debashismitra.me/posts/codily-redis-zset-delayed-queue-deep-dive",
  },
  {
    date: "May 11, 2026",
    title: "What I Learned Deploying 8 Services Across GCP, AWS, Azure, and Cloudflare",
    desc: "An honest reflection on deploying Upblit and Codily across multiple cloud providers, covering networking challenges, secrets management, infrastructure costs, and operational lessons learned as a solo developer.",
    tag: "DevOps / Multi-Cloud",
    href: "https://blog.debashismitra.me/posts/what-i-learned-deploying-8-services-across-gcp-aws-azure-cloudflare",
  },
  {
    date: "May 21, 2026",
    title: "Idempotency Keys in Distributed Job Systems",
    desc: "Why async systems need idempotency, how Codily deduplicates requests with the Idempotency-Key header, and how this prevents duplicate emails, webhooks, and background jobs.",
    tag: "Backend / APIs / Reliability",
    href: "https://blog.debashismitra.me/posts/idempotency-keys-distributed-job-systems-codily",
  },
];

export default function EngineeringNotes() {
  return (
    <section className="notes-section" id="writing">
      <div className="notes-inner">
        <Reveal className="section-label">Writing</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>
          Engineering Notes
        </Reveal>
        <Reveal as="p" className="section-subtitle" delay={100}>
          Writing proves understanding. Understanding reduces hiring risk.
        </Reveal>

        <div className="notes-list">
          {notes.map((note, i) => (
            <Reveal
              as="a"
              href={note.href}
              key={note.title}
              className="note-item"
              delay={i * 70}
            >
              <div className="note-meta">
                <span className="note-date">{note.date}</span>
                <span className="note-tag">{note.tag}</span>
              </div>
              <h3 className="note-title">{note.title}</h3>
              <p className="note-desc">{note.desc}</p>
              <span className="note-read">
                Read <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </Reveal>
          ))}
        </div>
        <a href="https://blog.debashismitra.me" className="hero-button" target="_blank" rel="noopener noreferrer">
                    <HoverBorderGradient as="span">
                      Read More Notes <ArrowRight size={15} aria-hidden="true" />
                    </HoverBorderGradient>
                  </a>
      </div>
    </section>
  );
}
