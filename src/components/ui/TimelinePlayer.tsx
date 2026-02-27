"use client";

import { useEffect, useRef } from "react";
import { Player, type PlayerRef } from "@remotion/player";
import { Section01Timeline } from "remotion/Compositions/Section01Timeline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DURATION_FRAMES = 120;

export function TimelinePlayer({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const playerRef = useRef<PlayerRef>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%",
      end: "bottom 50%",
      scrub: 1,
      onUpdate: (self) => {
        const frame = Math.round(self.progress * (DURATION_FRAMES - 1));
        playerRef.current?.seekTo(frame);
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [containerRef]);

  return (
    <Player
      ref={playerRef}
      component={Section01Timeline}
      durationInFrames={DURATION_FRAMES}
      compositionWidth={800}
      compositionHeight={120}
      fps={30}
      style={{ width: "100%", maxWidth: 800, minHeight: 120 }}
    />
  );
}
