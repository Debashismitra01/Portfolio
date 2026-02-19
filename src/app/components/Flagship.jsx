"use client";
import "./Flagship.css";
import Waves from "@/components/Waves"

const challenges = [
    {
        title: "Auth & API Key Security",
        desc: "Designed a dual-layer authentication system — user-facing OAuth2/JWT sessions plus API key issuance for programmatic access, each with scoped permissions.",
    },
    {
        title: "Multi-DB Architecture",
        desc: "Separated hot transactional data (PostgreSQL) from document storage (MongoDB) and cached frequently accessed data in Redis — each DB chosen for the query pattern, not habit.",
    },
    {
        title: "Production Deployment & SSL",
        desc: "Deployed on Azure VM with Docker, configured Nginx as reverse proxy, and handled SSL termination with Let's Encrypt — zero-downtime approach.",
    },
    {
        title: "Token-Based Communication",
        desc: "Implemented inter-service token relay so downstream services could authenticate requests without exposing primary credentials.",
    },
];

const tech = ["Java", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "Azure VM", "Nginx", "JWT", "OAuth2"];

export default function Flagship() {
    return (
        <>

        <section className="flagship-section" id="upblit">
            <Waves
  lineColor="#2d2b2b"
  backgroundColor="rgba(0, 0, 0, 0.2)"
  waveSpeedX={0.01}
  waveSpeedY={0.01}
  waveAmpX={40}
  waveAmpY={20}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36}
/>
            <div className="flagship-inner">
                <div className="flagship-grid">
                    {/* Left — narrative */}
                    <div className="flagship-narrative">
                        <div className="section-label">Flagship System</div>
                <h2 className="section-title">Upblit</h2>
                        <div className="flagship-block">
                            <h3 className="flagship-block-title">Problem</h3>
                            <p className="flagship-block-text">
                                Existing monitoring tools were either too expensive or too generic for small product teams.
                                Teams needed a lightweight, self-hosted way to track uptime, get alerts, and expose status
                                pages — without paying enterprise prices or handing their infrastructure data to a third party.
                            </p>
                        </div>

                        <div className="flagship-block">
                            <h3 className="flagship-block-title">What it does</h3>
                            <p className="flagship-block-text">
                                Upblit is a platform-as-a-service for uptime monitoring. Teams register their services,
                                configure check intervals, and get a public status page automatically. When something goes
                                down, alerts fire. When it comes back, the incident is logged. The whole system is
                                API-first — everything is accessible programmatically.
                            </p>
                        </div>

                        <div className="flagship-block">
                            <h3 className="flagship-block-title">Architecture</h3>
                            <div className="arch-diagram">
                                <div className="arch-row">
                                    <div className="arch-box arch-client">Client / SDK</div>
                                    <div className="arch-arrow">→</div>
                                    <div className="arch-box arch-gateway">API Gateway<br /><span>Nginx + SSL</span></div>
                                    <div className="arch-arrow">→</div>
                                    <div className="arch-box arch-service">Spring Boot<br /><span>Core Service</span></div>
                                </div>
                                <div className="arch-row arch-row--dbs">
                                    <div className="arch-box arch-db">PostgreSQL<br /><span>Transactions</span></div>
                                    <div className="arch-box arch-db">MongoDB<br /><span>Docs / Logs</span></div>
                                    <div className="arch-box arch-db">Redis<br /><span>Cache / Queue</span></div>
                                    <div className="arch-box arch-db">Kafka<br /><span>Events</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — challenges + links */}
                    <div className="flagship-right">
                        <div className="flagship-challenges">
                            <h3 className="flagship-block-title">Engineering Challenges Solved</h3>
                            {challenges.map((c, i) => (
                                <div className="challenge-item" key={i}>
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
                                    <span className="tech-chip" key={t}>{t}</span>
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
                                GitHub →
                            </a>
                            <a
                                href="https://upblit.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flagship-link flagship-link--live"
                            >
                                Live →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
