"use client";
import "./EngineeringNotes.css";

const notes = [
    {
        date: "Jan 2025",
        title: "Why my first caching strategy failed",
        desc: "I cached at the wrong layer. Data was stale in Redis while the DB had the truth. Here's what I learned about cache invalidation being harder than it looks.",
        tag: "Redis · Caching",
        href: "#",
    },
    {
        date: "Dec 2024",
        title: "Designing token authentication for Upblit's API",
        desc: "Walked through how I designed a dual-token system — short-lived JWTs for sessions and long-lived API keys for SDK consumers with scoped permissions.",
        tag: "Auth · JWT · Security",
        href: "#",
    },
    {
        date: "Nov 2024",
        title: "Deploying Spring Boot with Nginx and SSL on Azure",
        desc: "Step by step from a raw VM to a production service. Reverse proxy config, Let's Encrypt cert renewal, and zero-downtime restart strategy.",
        tag: "DevOps · Azure · Nginx",
        href: "#",
    },
    {
        date: "Oct 2024",
        title: "What broke when I added a second database",
        desc: "Moving from single-DB to multi-DB wasn't just a schema decision. Connection pooling, transaction boundaries, and consistency guarantees all needed rethinking.",
        tag: "Architecture · PostgreSQL · MongoDB",
        href: "#",
    },
    {
        date: "Sep 2024",
        title: "Event-driven vs. request-reply — choosing for the right reason",
        desc: "Kafka adds operational complexity. I explain what finally convinced me it was the right call for Upblit's alert pipeline, and what I'd use if I were starting smaller.",
        tag: "Kafka · System Design",
        href: "#",
    },
];

export default function EngineeringNotes() {
    return (
        <section className="notes-section" id="writing">
            <div className="notes-inner">
                <div className="section-label">Writing</div>
                <h2 className="section-title">Engineering Notes</h2>
                <p className="section-subtitle">
                    Writing proves understanding. Understanding reduces hiring risk.
                </p>

                <div className="notes-list">
                    {notes.map((note, i) => (
                        <a href={note.href} key={i} className="note-item">
                            <div className="note-meta">
                                <span className="note-date">{note.date}</span>
                                <span className="note-tag">{note.tag}</span>
                            </div>
                            <h3 className="note-title">{note.title}</h3>
                            <p className="note-desc">{note.desc}</p>
                            <span className="note-read">Read →</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
