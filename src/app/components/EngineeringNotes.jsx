"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import "./EngineeringNotes.css";
import { HoverBorderGradient } from "./Hero/hover-border-gradient";

const notes = [
  {
    date: "Jan 2025",
    title: "Why my first caching strategy failed",
    desc: "I cached at the wrong layer. Data was stale in Redis while the DB had the truth, and that changed how I think about invalidation.",
    tag: "Redis / Caching",
    href: "#",
  },
  {
    date: "Dec 2024",
    title: "Designing token authentication for Upblit's API",
    desc: "A walkthrough of a dual-token system: short-lived JWTs for sessions and long-lived API keys for SDK consumers with scoped permissions.",
    tag: "Auth / JWT / Security",
    href: "#",
  },
  {
    date: "Nov 2024",
    title: "Deploying Spring Boot with Nginx and SSL on Azure",
    desc: "From a raw VM to production service: reverse proxy config, Let's Encrypt renewal, and a zero-downtime restart strategy.",
    tag: "DevOps / Azure / Nginx",
    href: "#",
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
