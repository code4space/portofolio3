"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import Clock from "@/components/clock";
import Magnetic from "@/components/magnetic";
import { EASE, LineReveal } from "@/components/reveal";
import { hero, site } from "@/lib/data";
import { introDelay } from "@/lib/preload";
import { scrollToId } from "@/lib/scroll";

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const d = (extra: number) => (reduced ? 0 : introDelay(extra));

  // Cinematic exit: the name lines shear apart as you scroll away.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const lineOneX = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const lineTwoX = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // The gold glow leans gently toward the cursor.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glowX = useSpring(mx, { stiffness: 40, damping: 20 });
  const glowY = useSpring(my, { stiffness: 40, damping: 20 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 70);
      my.set((e.clientY / window.innerHeight - 0.5) * 70);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduced]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden px-6 pt-24 md:px-10"
    >
      {/* Atmosphere */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: glowX,
          y: glowY,
          background: "radial-gradient(circle, var(--glow) 0%, transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-12%] top-[8%] h-[34vmax] w-[34vmax] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 66%)" }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-[88rem] flex-1 flex-col justify-center pb-8"
      >
        {/* Status row */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: d(0.1) }}
        >
          <span className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            {site.availability}
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint sm:block">
            {site.location} — {site.timezoneLabel}
          </span>
        </motion.div>

        {/* The name, set like a masthead */}
        <h1 className="mt-8 md:mt-10">
          <motion.span style={{ x: lineOneX }} className="block">
            <LineReveal onMount delay={d(0.15)}>
              <span className="block font-display text-[clamp(4rem,14.5vw,13rem)] font-medium leading-[0.88] tracking-[-0.03em] text-ink">
                WILLIAM
              </span>
            </LineReveal>
          </motion.span>

          <motion.span
            className="my-1 hidden items-center justify-end gap-5 pr-[3vw] sm:flex md:my-2"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: d(0.55) }}
            aria-hidden
          >
            <motion.span
              className="h-px max-w-[34vw] flex-1 origin-left bg-line-strong"
              initial={reduced ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: d(0.6), ease: EASE }}
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-dim">
              Software engineer <span className="text-accent">·</span> end to end
            </span>
          </motion.span>

          <motion.span style={{ x: lineTwoX }} className="block">
            <LineReveal onMount delay={d(0.3)}>
              <span className="stroke-text block pl-[6vw] font-display text-[clamp(4rem,14.5vw,13rem)] font-light italic leading-[0.92] tracking-[-0.02em]">
                WIJAYA
                <span className="not-italic text-accent" style={{ WebkitTextStroke: "0" }}>
                  .
                </span>
              </span>
            </LineReveal>
          </motion.span>

          <span className="sr-only">
            {site.name} — {site.role}
          </span>
        </h1>

        {/* Statement + CTAs */}
        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
          <motion.p
            className="max-w-lg text-pretty text-base leading-relaxed text-ink-dim md:col-span-6 md:text-lg"
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: d(0.6), ease: EASE }}
          >
            <span className="text-ink">{hero.statement}</span> {hero.sub}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-6 md:col-span-6 md:justify-end"
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: d(0.72), ease: EASE }}
          >
            <Magnetic>
              <button
                onClick={() => scrollToId("work")}
                className="group flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-bg transition-colors duration-500 hover:bg-accent hover:text-accent-ink"
              >
                View selected work
                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </button>
            </Magnetic>
            <button
              onClick={() => scrollToId("contact")}
              className="u-line font-mono text-xs uppercase tracking-[0.18em] text-ink-dim hover:text-ink"
            >
              Get in touch
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Baseline strip — pinned to the hero's bottom edge */}
      <motion.div
        className="relative z-10 mx-auto mt-auto flex w-full max-w-[88rem] items-center justify-between border-t border-line py-4"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: d(0.9) }}
      >
        <button
          onClick={() => scrollToId("about")}
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint transition-colors hover:text-accent"
        >
          Scroll
          <motion.span
            aria-hidden
            animate={reduced ? {} : { y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </button>
        <a
          href={site.mailto}
          className="u-line hidden font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint hover:text-ink md:block"
        >
          {site.email}
        </a>
        <Clock className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint" />
      </motion.div>
    </section>
  );
}
