"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { EASE } from "@/components/reveal";

type StatProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay?: number;
  size?: "md" | "lg";
};

/** Editorial stat with an eased count-up on first view. */
export default function Stat({ value, prefix, suffix, label, delay = 0, size = "lg" }: StatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduced) {
      ref.current.textContent = value.toLocaleString("en-US");
      return;
    }
    const controls = animate(0, value, {
      duration: 1.7,
      delay,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString("en-US");
      },
    });
    return () => controls.stop();
  }, [inView, value, delay, reduced]);

  return (
    <div className="flex flex-col gap-2.5">
      <span
        className={`font-display leading-none text-ink ${
          size === "lg" ? "text-6xl md:text-7xl" : "text-5xl md:text-6xl"
        }`}
      >
        {prefix && <span className="text-accent">{prefix}</span>}
        <span ref={ref}>0</span>
        {suffix && <span className="text-accent">{suffix}</span>}
      </span>
      <span className="max-w-[16rem] text-sm leading-relaxed text-ink-dim">{label}</span>
    </div>
  );
}
