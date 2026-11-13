"use client";

import { Check } from "lucide-react";
import Reveal from "./Reveal";
import "./Experience.css";

const experiences = [
  {
    role: "Backend Engineer - Freelance",
    period: "2024 - Present",
    type: "Freelance",
    description:
      "Designing and delivering backend systems for client products, from initial architecture through production operations.",
    deliverables: [
      "Integrated transactional email infrastructure with SPF/DKIM and queue-backed delivery",
      "Deployed production APIs on cloud VMs with zero-downtime rollout strategy",
      "Built API key issuance and scoped access control for multi-tenant clients",
      "Set up monitoring and alerting for client-facing services",
    ],
  },
  {
    role: "OpenTelemetry Java SDK - Contributor",
    period: "Open Source Contribution",
    type: "Open Source",
    description:
      "Contributed reliability, lifecycle management, and compatibility improvements to a widely used observability ecosystem.",
    deliverables: [
      "Fixed OkHttp client mTLS handling when using the platform's default trust store",
      "Added shutdown lifecycle support for resource-owning Samplers, allowing executors and connections to be released during SDK shutdown",
      "Implemented SDK self-observability version gating for PeriodicMetricReader",
      "Worked within an established Java codebase, following existing design conventions and project contribution standards",
    ],
  },
  {
    role: "Shipd - Project Olympus",
    period: "Mar 2026 - Present",
    type: "Paid Engineering Contributor",
    description:
      "Contribute to real-world software engineering challenges used to train and evaluate AI coding models.",
    deliverables: [
      "Translate practical software engineering problems into clear, self-contained, reproducible coding challenges",
      "Design behavior-focused tests to validate expected functionality and catch incorrect implementations",
      "Build isolated Docker-based environments with the required dependencies and execution setup",
      "Use the Olympus CLI, prechecks, and verification workflows to validate challenge quality and reproducibility",
      "Identify edge cases, ambiguous requirements, and environment issues that could affect evaluation reliability",
      "Focus on making engineering tasks realistic, deterministic, and technically meaningful",
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
                <div className="exp-badge">{exp.type}</div>
              </div>
              <p className="exp-description">{exp.description}</p>
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
