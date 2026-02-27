"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VideoPresentation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-graphite">
      <div className="section-padding">
        <SectionHeading
          label="Презентация"
          title="О компании"
          subtitle="Видео-презентация агропромышленного актива ООО «Сатурн-Агро»"
          light
          center
        />
      </div>

      <div className="w-full bg-black aspect-video">
        {isVisible && (
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            src="/video/saturn-agro.mp4"
            poster=""
            controls
            preload="none"
            playsInline
          />
        )}
      </div>
    </section>
  );
}
