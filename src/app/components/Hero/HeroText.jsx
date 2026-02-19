
import { BgText } from "./BgText";
import HeroSectionText from "./HeroSectionText";
import FloatingLines from './FloatingLines';

const HeroText = () => {
  return (
    <>
    <div style={{ width: '100%', height: '100vh',  position: 'absolute' }}>
      <FloatingLines
    linesGradient={["#4f4f4f","#404040","#c9c9c9"]}
    animationSpeed={1.1}
    interactive
    bendRadius={15.5}
    bendStrength={-0.5}
    mouseDamping={0.05}
    parallax
    parallaxStrength={0.2}
    enabledWaves={["top","bottom"]}
    lineCount={9}
    lineDistance={62}
  />
</div>
    <section className="pb-20 pt-36">
      <HeroSectionText />
      <BgText />
    </section>
    </>
  );
};

export default HeroText;
