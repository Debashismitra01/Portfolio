import HeroText from "./components/Hero/HeroText";
import PillNav from "./components/Navbar/PillNav";
import "./home.css";
import  Hero  from "./components/hero-final";

export default function Home() {
  return (
    <main className="page">
      <PillNav
  logo="./vercel.svg"
  logoAlt="Company Logo"
  items={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
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
        
        <HeroText />
        <Hero/>
      </div>
    </main>
  );
}
