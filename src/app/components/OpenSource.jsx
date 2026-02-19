"use client";
import "./OpenSource.css";
import Threads from "@/components/Threads"

const stats = [
    { value: "11k+", label: "Users" },
    { value: "40+", label: "Contributors" },
    { value: "120+", label: "Forks" },
    { value: "60+", label: "Issues Resolved" },
];

export default function OpenSource() {
    return (
        <section className="oss-section" id="open-source">
            import Threads from './Threads';

<div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
  <Threads
    amplitude={2}
    distance={0}
    enableMouseInteraction
  />
</div>
            <div className="oss-inner">
                <div className="section-label">Community</div>
                <h2 className="section-title">Open Source &amp; Community Work</h2>

                <div className="oss-stats">
                    {stats.map((s, i) => (
                        <div className="oss-stat" key={i}>
                            <div className="oss-stat-value">{s.value}</div>
                            <div className="oss-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>

                <div className="oss-cards">
                    <div className="oss-card">
                        <div className="oss-card-icon">🎃</div>
                        <h3 className="oss-card-title">Hacktoberfest Contributor &amp; Maintainer</h3>
                        <p className="oss-card-desc">
                            Participated and maintained repos during Hacktoberfest. Reviewed pull requests,
                            triaged issues, mentored first-time contributors, and ensured code quality across
                            community submissions.
                        </p>
                    </div>

                    <div className="oss-card">
                        <div className="oss-card-icon">🤝</div>
                        <h3 className="oss-card-title">Community Building</h3>
                        <p className="oss-card-desc">
                            Grew a project to 11k users organically. Managed contributor onboarding,
                            wrote contributing guidelines, and maintained issue triage hygiene — the operational
                            side of open source most developers skip.
                        </p>
                    </div>

                    <div className="oss-card">
                        <div className="oss-card-icon">📝</div>
                        <h3 className="oss-card-title">Issues &amp; Code Review</h3>
                        <p className="oss-card-desc">
                            60+ issues resolved. Authored and reviewed patches from external contributors.
                            Maintained backwards compatibility while shipping improvements — the discipline of
                            maintaining a public API.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
