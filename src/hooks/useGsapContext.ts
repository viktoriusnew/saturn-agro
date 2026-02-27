"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapContext(
  callback: (ctx: gsap.Context) => void,
  scopeRef: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!scopeRef.current) return;

    const ctx = gsap.context((self) => {
      callback(self);
    }, scopeRef);

    return () => ctx.revert();
  }, [callback, scopeRef]);
}
