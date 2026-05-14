"use client";

import { ExternalLink, Github } from "lucide-react";
import Waves from "@/components/Waves";
import { useInteractiveBackground } from "@/lib/useInteractiveBackground";
import Reveal from "./Reveal";
import "./Flagship.css";

const challenges = [
  {
    title: "Auth & API Key Security",
    desc: "Designed user-facing OAuth2/JWT sessions plus API key issuance for programmatic access, each with scoped permissions.",
  },
  {
    title: "Multi-DB Architecture",
    desc: "Separated transactional data, document storage, cache, and events so each store matches the access pattern.",
  },
  {
    title: "Production Deployment & SSL",
    desc: "Deployed on Azure VM with Docker, Nginx reverse proxy, and Let's Encrypt SSL with a zero-downtime rollout approach.",
  },
  {
    title: "Token-Based Communication",
    desc: "Implemented inter-service token relay so downstream services authenticate requests without exposing primary credentials.",
  },
];

const tech = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "Docker",
  "Azure VM",
  "Nginx",
  "JWT",
  "OAuth2",
];

export default function Flagship() {
  const showBackground = useInteractiveBackground();

  return (
    <section className="flagship-section" id="upblit">
      {showBackground && (
        <Waves
          lineColor="#3030306c"
          backgroundColor="rgba(0, 0, 0, 0.12)"
          waveSpeedX={0.008}
          waveSpeedY={0.008}
          waveAmpX={26}
          waveAmpY={14}
          friction={0.9}
          tension={0.01}
          maxCursorMove={80}
          xGap={16}
          yGap={42}
        />
      )}

      <div className="flagship-inner z-index-10" >
        <div className="flagship-grid">
          <div className="flagship-narrative">
            <Reveal className="section-label">Flagship System</Reveal>
            <Reveal as="h2" className="section-title" delay={60}>
              Upblit
            </Reveal>

            <Reveal className="flagship-block" delay={100}>
              <h3 className="flagship-block-title">Problem</h3>
              <p className="flagship-block-text">
                Existing monitoring tools were either too expensive or too generic for small
                product teams. Upblit gives teams a lightweight, self-hosted way to track
                uptime, send alerts, and publish status pages.
              </p>
            </Reveal>

            <Reveal className="flagship-block" delay={150}>
              <h3 className="flagship-block-title">What it does</h3>
              <p className="flagship-block-text">
                Teams register services, configure check intervals, and get a public status
                page automatically. When something goes down, alerts fire; when it recovers,
                the incident is logged. The system is API-first.
              </p>
            </Reveal>

            <Reveal className="flagship-block" delay={200}>
              <h3 className="flagship-block-title">Architecture</h3>
              <div className="arch-diagram">
                <div className="arch-row">
                  <div className="arch-box arch-client">Client / SDK</div>
                  <div className="arch-arrow">-&gt;</div>
                  <div className="arch-box arch-gateway">
                    API Gateway
                    <span>Nginx + SSL</span>
                  </div>
                  <div className="arch-arrow">-&gt;</div>
                  <div className="arch-box arch-service">
                    Spring Boot
                    <span>Core Service</span>
                  </div>
                </div>
                <div className="arch-row arch-row--dbs">
                  <div className="arch-box arch-db">
                    PostgreSQL
                    <span>Transactions</span>
                  </div>
                  <div className="arch-box arch-db">
                    MongoDB
                    <span>Docs / Logs</span>
                  </div>
                  <div className="arch-box arch-db">
                    Redis
                    <span>Cache / Queue</span>
                  </div>
                  <div className="arch-box arch-db">
                    Kafka
                    <span>Events</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="flagship-right" delay={180}>
            <div className="flagship-challenges">
              <h3 className="flagship-block-title">Engineering Challenges Solved</h3>
              {challenges.map((c, i) => (
                <div className="challenge-item" key={c.title}>
                  <div className="challenge-num">0{i + 1}</div>
                  <div>
                    <div className="challenge-title">{c.title}</div>
                    <div className="challenge-desc">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flagship-tech">
              <h3 className="flagship-block-title">Tech Used</h3>
              <div className="tech-chips">
                {tech.map((t) => (
                  <span className="tech-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flagship-links">
              <a
                href="https://github.com/Debashismitra01/upblit"
                target="_blank"
                rel="noopener noreferrer"
                className="flagship-link flagship-link--github"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://upblit.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flagship-link flagship-link--live"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
