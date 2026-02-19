import HeroText from "./components/Hero/HeroText";
import PillNav from "./components/Navbar/PillNav";
import WhatIDo from "./components/WhatIDo";
import Flagship from "./components/Flagship";
import OtherSystems from "./components/OtherSystems";
import EngineeringNotes from "./components/EngineeringNotes";
import OpenSource from "./components/OpenSource";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import "./home.css";
import FloatingLines from "./components/Hero/FloatingLines";

export default function Home() {
  return (
    <main className="page">
      <PillNav
        logo="./vercel.svg"
        logoAlt="Debashis Mitra"
        items={[
          { label: "Work", href: "#upblit" },
          { label: "Writing", href: "#writing" },
          { label: "Stack", href: "#stack" },
          { label: "Contact", href: "#contact" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        theme="light"
        initialLoadAnimation={false}
      />
      <div className="page-container">
        {/* 1. Hero */}
        <HeroText />

        {/* 2. Capabilities */}
        <WhatIDo />

        {/* 3. Flagship */}
        <Flagship />

        {/* 4. Other Systems */}
        <OtherSystems />

        {/* 5. Engineering Notes 
        <EngineeringNotes />*/}

        {/* 6. Open Source */}
        <OpenSource />

        {/* 9. Contact */}
        <Contact />
      </div>
    </main>
  );
}
