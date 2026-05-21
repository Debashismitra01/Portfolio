"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import "./Contact.css";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@debashismitra.me",
    href: "mailto:hello@debashismitra.me",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/debashismitra01",
    href: "https://linkedin.com/in/debashismitra01",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Debashismitra01",
    href: "https://github.com/Debashismitra01",
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <Reveal className="section-label">Let&apos;s Talk</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>
          Get in Touch
        </Reveal>
        <Reveal as="p" className="contact-cta" delay={100}>
          Open to backend and platform engineering roles and internships.
        </Reveal>

        <div className="contact-links">
          {links.map((link, i) => (
            <Reveal
              as="a"
              href={link.href}
              key={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-link"
              delay={i * 70}
            >
              <span className="contact-link-icon">
                <link.icon size={21} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <div className="contact-link-label">{link.label}</div>
                <div className="contact-link-value">{link.value}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="contact-footer">
          <p className="contact-footer-text">
            Debashis Mitra - Backend &amp; Platform Engineer - Kolkata, India 
          </p>
          <p className="contact-footer-text">
            Built with Passion and a cup of coffee 
          </p>
        </div>
      </div>
    </section>
  );
}
