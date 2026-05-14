"use client";

import Reveal from "./Reveal";
import "./TechStack.css";

const stack = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "Go"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "Express.js", "Next.js"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Azure VM", "Linux", "Nginx"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Messaging",
    items: ["Kafka"],
  },
];

export default function TechStack() {
  return (
    <section className="stack-section" id="stack">
      <div className="stack-inner">
        <Reveal className="section-label">Tooling</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>
          Technical Stack
        </Reveal>
        <Reveal as="p" className="section-subtitle" delay={100}>
          Tools do not differentiate the work. Responsibilities do.
        </Reveal>

        <div className="stack-grid">
          {stack.map((s, i) => (
            <Reveal className="stack-group" key={s.category} delay={i * 60}>
              <div className="stack-category">{s.category}</div>
              <div className="stack-items">
                {s.items.map((item) => (
                  <span className="stack-item" key={item}>
                    {item}
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
