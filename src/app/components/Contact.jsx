"use client";
import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-inner">
                <div className="section-label">Let&apos;s Talk</div>
                <h2 className="section-title">Get in Touch</h2>
                <p className="contact-cta">
                    Open to backend and platform engineering roles and internships.
                </p>

                <div className="contact-links">
                    <a
                        href="mailto:debashismitra200@gmail.com"
                        className="contact-link contact-link--email"
                    >
                        <span className="contact-link-icon">✉️</span>
                        <div>
                            <div className="contact-link-label">Email</div>
                            <div className="contact-link-value">mdebashis268@gmail.com</div>
                        </div>
                    </a>

                    <a
                        href="https://linkedin.com/in/debashismitra01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link contact-link--linkedin"
                    >
                        <span className="contact-link-icon">💼</span>
                        <div>
                            <div className="contact-link-label">LinkedIn</div>
                            <div className="contact-link-value">linkedin.com/in/debashismitra01</div>
                        </div>
                    </a>

                    <a
                        href="https://github.com/Debashismitra01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link contact-link--github"
                    >
                        <span className="contact-link-icon">🐙</span>
                        <div>
                            <div className="contact-link-label">GitHub</div>
                            <div className="contact-link-value">github.com/Debashismitra01</div>
                        </div>
                    </a>
                </div>

                <div className="contact-footer">
                    <p className="contact-footer-text">
                        Debashis Mitra · Backend &amp; Platform Engineer · Kolkata, India
                    </p>
                </div>
            </div>
        </section>
    );
}
