"use client";
import "./TechStack.css";

const stack = [
    {
        category: "Languages",
        items: ["Java", "JavaScript", "Go"],
    },
    {
        category: "Frameworks",
        items: ["Spring Boot", "Express.js"],
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
                <div className="section-label">Tooling</div>
                <h2 className="section-title">Technical Stack</h2>
                <p className="section-subtitle">
                    At the bottom because tools don&apos;t differentiate you. Responsibilities do.
                </p>

                <div className="stack-grid">
                    {stack.map((s, i) => (
                        <div className="stack-group" key={i}>
                            <div className="stack-category">{s.category}</div>
                            <div className="stack-items">
                                {s.items.map((item) => (
                                    <span className="stack-item" key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
