"use client";

import { useEffect, useState } from "react";

export function useInteractiveBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 769px) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );

    const sync = () => setEnabled(media.matches);
    sync();
    media.addEventListener("change", sync);

    return () => media.removeEventListener("change", sync);
  }, []);

  return enabled;
}
