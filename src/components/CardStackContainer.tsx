"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CardStackContainerProps {
  children: React.ReactNode;
}

export default function CardStackContainer({ children }: CardStackContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll("[data-card-section]");
    
    sections.forEach((section, index) => {
      const sectionEl = section as HTMLElement;
      
      // Skip animation for the first section after Hero
      if (index === 0) return;

      const prevSection = sections[index - 1] as HTMLElement;

      // Create timeline for card stacking effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          end: "top top",
          scrub: 0.5,
        },
      });

      // Check if mobile for simplified animation
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      
      // Animate previous section (scale down, blur, fade)
      if (isMobile) {
        // Simplified mobile animation: no blur, less scale
        tl.to(
          prevSection,
          {
            scale: 0.95,
            filter: "blur(0px)",
            opacity: 0.7,
            ease: "none",
          },
          0
        );
      } else {
        tl.to(
          prevSection,
          {
            scale: 0.92,
            filter: "blur(4px)",
            opacity: 0.6,
            ease: "none",
          },
          0
        );
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
}
