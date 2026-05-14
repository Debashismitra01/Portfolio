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

export default function Home() {
  return (
    <main className="page">
      <PillNav
        logo={"/logo.jpg"}
        logoText="DM"
        logoAlt="Debashis Mitra"
        items={[
          { label: "Home", href: "#home" },
          { label: "Work", href: "#upblit" },
          { label: "Writing", href: "#writing" },
          { label: "Stack", href: "#stack" },
          { label: "Contact", href: "#contact" },
        ]}
        activeHref="/"
        className="custom-nav"
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

        {/* 5. Experience */}
        <Experience />

        {/* 6. Engineering Notes */}
        <EngineeringNotes />

        {/* 7. Open Source */}
        <OpenSource />

        {/* 8. Stack */}
        <TechStack />

        {/* 9. Contact */}
        <Contact />
      </div>
    </main>
  );
}
