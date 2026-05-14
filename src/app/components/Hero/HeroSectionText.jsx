import { ArrowDown, Github, Linkedin } from "lucide-react";
import { FlipWords } from "./FlipWord";
import { HoverBorderGradient } from "./hover-border-gradient";
import "./HeroText.css";

const HeroSectionText = () => {
  const words = ["software engineer", "fullstack developer", "backend engineer", "java developer", "system architect", "infrastructure developer"];

  return (
    <section className="hero">
      <div className="hero-container">

        <p className="hero-intro">Backend systems, platform tooling, APIs</p>

        <div className="hero-title-wrapper">
          <h1 className="hero-title">
           Hi, I&apos;m Debashis Mitra, <br />
            <span>
            <FlipWords words={words} /></span>
               from Kolkata, India
          </h1>
        </div>

        <p className="hero-description">
          I design and implement solutions to problems in society into
          application systems based on website and mobile platforms.
        </p>

        <div className="hero-actions">
          <a href="#upblit" className="hero-button">
            <HoverBorderGradient as="span">
              View work <ArrowDown size={15} aria-hidden="true" />
            </HoverBorderGradient>
          </a>
          <a
            href="https://github.com/Debashismitra01"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social"
            aria-label="GitHub"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/debashismitra01"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSectionText;
