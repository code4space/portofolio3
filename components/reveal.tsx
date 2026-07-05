"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

/** The house easing — a long, confident settle. */
export const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Fade-and-rise on scroll into view. */
export function Reveal({ children, delay = 0, y = 22, className, once = true }: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

type LineRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Animate on mount (hero) instead of on scroll into view. */
  onMount?: boolean;
};

/** Editorial line reveal — text rises out of a clipped box.
    The in-view sensor watches the UNCLIPPED wrapper: observing the inner
    span would deadlock, since a fully clipped element never intersects. */
export function LineReveal({ children, delay = 0, className, onMount = false }: LineRevealProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6% 0px" });
  const show = onMount || inView;

  return (
    <span
      ref={ref}
      // Extra bottom padding keeps serif descenders (p, j, y) inside the clip box.
      className={`block overflow-hidden pb-[0.25em] -mb-[0.25em] ${className ?? ""}`}
    >
      <motion.span
        className="block will-change-transform"
        initial={reduced ? false : { y: "115%" }}
        animate={show ? { y: "0%" } : undefined}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}
