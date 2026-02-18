import { FlipWords } from "./FlipWord";
import { HoverBorderGradient } from "./hover-border-gradient";
import "./HeroText.css";

const HeroSectionText = () => {
  const words = ["software engineer", "fullstack developer", "backend engineer", "java developer", "system architect"];

  return (
    <section className="hero">
      <div className="hero-container">

        <p className="hero-intro">
          Let me introduce myself
        </p>

        <div className="hero-title-wrapper">
          <h1 className="hero-title">
           Hi! Debashis this side, I am <br />
            <span>
            <FlipWords words={words} /></span>
               from Kolkata, India
          </h1>
        </div>

        <p className="hero-description">
          I design and implement solutions to problems in society into
          application systems based on website and mobile platforms.
        </p>

        <a href="#about" className="hero-button">
          <HoverBorderGradient>Next</HoverBorderGradient>
        </a>

      </div>
    </section>
  );
};

export default HeroSectionText;
