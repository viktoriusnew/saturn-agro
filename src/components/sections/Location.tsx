"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "@/lib/site-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type LocationProps = {
  locale: Locale;
  ui: SiteContent["ui"];
  content: SiteContent["location"];
};

export default function Location({ locale, ui, content }: LocationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const copyWeChatId = () => {
    navigator.clipboard.writeText(content.wechatId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (!contentRef.current) return;

    const elements = contentRef.current.querySelectorAll(".animate-item");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-cream"
      style={{ zIndex: 30 }}
    >
      <div ref={contentRef} className="relative z-10 section-padding py-20 md:py-32">
        <div className="mb-12 w-full text-center">
          <div className="animate-item" style={{ marginTop: "20px" }}>
            <h2 className="text-4xl font-light text-graphite md:text-5xl lg:text-6xl">
              {content.title}
            </h2>
          </div>
        </div>

        <div
          className="animate-item mx-auto w-full max-w-6xl"
          style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "20px" }}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100 shadow-2xl md:aspect-[21/9]">
            <iframe
              src={content.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={content.mapTitle}
              className="absolute inset-0"
            />
          </div>
        </div>

        <div className="animate-item text-center" style={{ marginTop: "20px" }}>
          <div className="inline-block rounded-lg bg-white p-8 shadow-lg md:p-10">
            <h3 className="mb-6 text-xl font-medium text-graphite md:text-2xl">
              {content.contactName}
            </h3>

            <div className="space-y-4 text-lg">
              <p>
                <span className="text-gray-600">{content.phoneLabel} </span>
                <a href="tel:+79166222270" className="text-forest underline transition-colors hover:text-forest/80">
                  {content.phone}
                </a>
              </p>

              <p>
                <span className="text-gray-600">{content.emailLabel} </span>
                <a
                  href={`mailto:${content.email}`}
                  className="text-forest underline transition-colors hover:text-forest/80"
                >
                  {content.email}
                </a>
              </p>

              <div className="flex items-center justify-center gap-3">
                <span className="text-gray-600">{content.wechatLabel} </span>
                <span className="font-medium text-graphite">{content.wechatId}</span>
                <button
                  onClick={copyWeChatId}
                  className="ml-2 rounded bg-forest px-3 py-1.5 text-sm text-white transition-colors hover:bg-forest/90"
                >
                  {copied ? ui.copied : ui.copyId}
                </button>
              </div>

              <div className="flex justify-center" style={{ marginTop: "32px" }}>
                <img src="/images/wechat.png" alt={`WeChat QR ${locale}`} className="w-full max-w-[260px] rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
