"use client";

import { GitPullRequest, PenLine, Users } from "lucide-react";
import Threads from "@/components/Threads";
import { useInteractiveBackground } from "@/lib/useInteractiveBackground";
import Reveal from "./Reveal";
import "./OpenSource.css";

const stats = [
  { value: "11k+", label: "Users" },
  { value: "40+", label: "Contributors" },
  { value: "120+", label: "Forks" },
  { value: "60+", label: "Issues Resolved" },
];

const cards = [
  {
    icon: GitPullRequest,
    title: "Hacktoberfest Contributor & Maintainer",
    desc: "Reviewed pull requests, triaged issues, mentored first-time contributors, and kept community submissions production-minded.",
  },
  {
    icon: Users,
    title: "Community Building",
    desc: "Grew a project to 11k users organically with contributor onboarding, clear guidelines, and steady issue triage.",
  },
  {
    icon: PenLine,
    title: "Issues & Code Review",
    desc: "Resolved 60+ issues and reviewed public patches while maintaining backward compatibility across a public API.",
  },
];

export default function OpenSource() {
  const showBackground = useInteractiveBackground();

  return (
    <section className="oss-section" id="open-source">
      {showBackground && (
        <div className="oss-bg" aria-hidden="true">
          <Threads amplitude={1.4} distance={0} enableMouseInteraction />
        </div>
      )}

      <div className="oss-inner">
        <Reveal className="section-label">Community</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>
          Open Source &amp; Community Work
        </Reveal>

        <div className="oss-stats">
          {stats.map((s, i) => (
            <Reveal className="oss-stat" key={s.label} delay={i * 60}>
              <div className="oss-stat-value">{s.value}</div>
              <div className="oss-stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>

        <div className="oss-cards">
          {cards.map((card, i) => (
            <Reveal className="oss-card" key={card.title} delay={i * 80}>
              <div className="oss-card-icon">
                <card.icon size={23} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="oss-card-title">{card.title}</h3>
              <p className="oss-card-desc">{card.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
