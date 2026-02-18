
import { BgText } from "./BgText";
import HeroSectionText from "./HeroSectionText";
import FloatingLines from './FloatingLines';

const HeroText = () => {
  return (
    <>
    <div style={{ width: '100%', height: '100vh',  position: 'absolute' }}>
      <FloatingLines 
    enabledWaves={["top","bottom"]}
    // Array - specify line count per wave; Number - same count for all waves
    lineCount={14}
    // Array - specify line distance per wave; Number - same distance for all waves
    lineDistance={29.5}
    bendRadius={10}
    bendStrength={50}
    interactive={true}
    parallax={true}
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
