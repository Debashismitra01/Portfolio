
"use client";

import { BgText } from "./BgText";
import HeroSectionText from "./HeroSectionText";
import FloatingLines from "./FloatingLines";
import { useInteractiveBackground } from "@/lib/useInteractiveBackground";

const HeroText = () => {
  const showBackground = useInteractiveBackground();

  return (
    <>
      {showBackground && (
        <div className="hero-lines-bg" aria-hidden="true">
          <FloatingLines
            linesGradient={["#4f4f4f", "#404040", "#c9c9c9"]}
            animationSpeed={0.8}
            interactive
            bendRadius={15.5}
            bendStrength={-0.5}
            mouseDamping={0.06}
            parallax
            parallaxStrength={0.12}
            enabledWaves={["top", "bottom"]}
            lineCount={6}
            lineDistance={70}
          />
        </div>
      )}
      <section className="hero-shell" id="home">
        <HeroSectionText />
        <BgText />
      </section>
    </>
  );
};

export default HeroText;
