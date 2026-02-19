"use client";
import "./OtherSystems.css";

const systems = [
    {
        name: "AutoRAG",
        label: "Business Chatbot Automation",
        desc: "Automated customer-facing chatbot pipelines for businesses — retrieval-augmented generation over proprietary documents without vendor lock-in.",
        challenge: "The hard part: chunking documents intelligently so context windows stayed useful and latency stayed low under concurrent queries.",
        tags: ["RAG", "Python", "Vector DB", "LLM"],
        github: "https://github.com/Debashismitra01/AutoRAG",
    },
    {
        name: "AlgoNest",
        label: "Competitive Programming Platform",
        desc: "A LeetCode-like platform where users solve algorithmic problems, track personal progress, and see solution histories across sessions.",
        challenge: "The hard part: sandboxed code execution — user submissions run in isolated containers with time and memory limits enforced at the OS level.",
        tags: ["Spring Boot", "Docker", "PostgreSQL", "Java"],
        github: "https://github.com/Debashismitra01/AlgoNest",
    },
];

export default function OtherSystems() {
    return (
        <section className="other-section" id="other-systems">
            <div className="other-inner">
                <div className="section-label">Portfolio</div>
                <h2 className="section-title">Other Systems I&apos;ve Built</h2>
                <p className="section-subtitle">
                    The flagship carries weight. These show consistency.
                </p>

                <div className="other-grid">
                    {systems.map((s, i) => (
                        <div className="other-card" key={i}>
                            <div className="other-card-header">
                                <div>
                                    <div className="other-name">{s.name}</div>
                                    <div className="other-label">{s.label}</div>
                                </div>
                                <a
                                    href={s.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="other-link"
                                >
                                    GitHub →
                                </a>
                            </div>
                            <p className="other-desc">{s.desc}</p>
                            <div className="other-challenge">
                                <span className="challenge-badge">Challenge</span> {s.challenge}
                            </div>
                            <div className="other-tags">
                                {s.tags.map((t) => (
                                    <span className="other-tag" key={t}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
