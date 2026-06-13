"use client";

import { ExternalLink, Github } from "lucide-react";
import Waves from "@/components/Waves";
import { useInteractiveBackground } from "@/lib/useInteractiveBackground";
import Reveal from "./Reveal";
import "./Flagship.css";

const challenges = [
  {
    title: "Multi-Tenant Isolation",
    desc: "Scoped every query, queue, and metric by tenant_id across six microservices, so one shared Postgres instance safely serves many organizations.",
  },
  {
    title: "Fault-Tolerant Ingestion",
    desc: "Built a Kafka pipeline with dead-letter queues, retries, and circuit breakers — verified recovery across consumer crashes, DB outages, and downstream failures under load.",
  },
  {
    title: "Secrets Separation",
    desc: "Split client-facing credentials (custom Lua-based Secrets Manager) from internal infra secrets (HashiCorp Vault) — a deliberate boundary between product and ops concerns.",
  },
  {
    title: "Multi-Cloud Production Deployment",
    desc: "Shipped eight services (frontend, backend, pinger, ingestor + Codily's frontend, API, worker) across GCP, AWS, Azure, and Cloudflare with Docker and Nginx.",
  },
];

const tech = [
  "Java",
  "Spring Boot",
  "Go",
  "Apache Kafka",
  "Redis",
  "PostgreSQL",
  "MongoDB",
  "HashiCorp Vault",
  "Docker",
  "Kubernetes",
  "Nginx",
  "GCP / AWS / Azure",
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
                Development teams end up stitching together separate tools for
                observability and secrets management, each with its own auth model,
                its own dashboard, and no shared context. Upblit unifies both into
                one multi-tenant platform with a single source of truth.
              </p>
            </Reveal>

            <Reveal className="flagship-block" delay={150}>
              <h3 className="flagship-block-title">What it does</h3>
              <p className="flagship-block-text">
                Teams instrument applications with lightweight SDKs (Express, Python,
                Java, Go) that stream logs, telemetry, and traces into a Kafka
                ingestion pipeline, scoped by tenant, project, organisation, and
                application. The same platform manages client-facing secrets through
                a purpose-built Lua-based manager, while internal infrastructure
                credentials stay isolated in HashiCorp Vault.
              </p>
            </Reveal>

            <Reveal className="flagship-block" delay={200}>
              <h3 className="flagship-block-title">Architecture</h3>
              <div className="arch-diagram">
                <div className="arch-row">
                  <div className="arch-box arch-client">SDKs (Go, Java, Python, Express)</div>
                  <div className="arch-arrow">-&gt;</div>
                  <div className="arch-box arch-gateway">
                    Ingestor
                    <span>Go + Kafka</span>
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
                    <span>Tenants / Core</span>
                  </div>
                  <div className="arch-box arch-db">
                    MongoDB
                    <span>Logs / Traces</span>
                  </div>
                  <div className="arch-box arch-db">
                    Redis
                    <span>Cache / Pub-Sub</span>
                  </div>
                  <div className="arch-box arch-db">
                    Vault + Lua SM
                    <span>Secrets</span>
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
                href="https://github.com/Upblit/Upblit"
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