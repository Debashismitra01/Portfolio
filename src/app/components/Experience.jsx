"use client";
import "./Experience.css";

const experiences = [
    {
        role: "Backend Engineer — Freelance",
        period: "2024 — Present",
        deliverables: [
            "Designed and delivered backend systems for client products from scratch",
            "Integrated transactional email infrastructure (SPF/DKIM, queue-backed delivery)",
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
                <div className="section-label">Experience</div>
                <h2 className="section-title">Practical Experience</h2>
                <p className="section-subtitle">
                    Framed by what was delivered, not job titles.
                </p>

                <div className="exp-list">
                    {experiences.map((exp, i) => (
                        <div className="exp-entry" key={i}>
                            <div className="exp-header">
                                <div>
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <span className="exp-period">{exp.period}</span>
                                </div>
                                <div className="exp-badge">Freelance</div>
                            </div>
                            <ul className="exp-deliverables">
                                {exp.deliverables.map((d, j) => (
                                    <li className="exp-item" key={j}>
                                        <span className="exp-bullet">▸</span>
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
