"use client";

import { Check } from "lucide-react";
import Reveal from "./Reveal";
import "./Experience.css";

const experiences = [
  {
    role: "Backend Engineer - Freelance",
    period: "2024 - Present",
    deliverables: [
      "Designed and delivered backend systems for client products from scratch",
      "Integrated transactional email infrastructure with SPF/DKIM and queue-backed delivery",
      "Deployed production APIs on cloud VMs with zero-downtime rollout strategy",
      "Built API key issuance and scoped access control for multi-tenant clients",
      "Set up monitoring and alerting for client-facing services",
    ],
  },
];

export default function Experience() {
  return (
    <section className="exp-section" id="experience">
      <div className="exp-inner">
        <Reveal className="section-label">Experience</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>
          Practical Experience
        </Reveal>
        <Reveal as="p" className="section-subtitle" delay={100}>
          Framed by what was delivered, not job titles.
        </Reveal>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <Reveal className="exp-entry" key={exp.role} delay={i * 80}>
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <div className="exp-badge">Freelance</div>
              </div>
              <ul className="exp-deliverables">
                {exp.deliverables.map((d) => (
                  <li className="exp-item" key={d}>
                    <span className="exp-bullet">
                      <Check size={14} aria-hidden="true" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
