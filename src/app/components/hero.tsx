import { HeroContent } from "./hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full bg-black">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-60vh] left-0 w-full h-full object-cover z-auto brightness-60 "
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
