"use client";

import { animate, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { EASE } from "@/components/reveal";
import { INTRO } from "@/lib/preload";
import { site } from "@/lib/data";

/** Opening sequence (~3s): a hairline draws, the name rises out of a mask
    with a soft blur, a counter climbs, then a two-layer curtain lifts —
    the gold underlayer trailing the ink veil by a beat. */
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false); // content exit
  const [lifting, setLifting] = useState(false); // curtain exit
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = "hidden";

    if (reduced) {
      setLeaving(true);
      setLifting(true);
      return () => {
        root.style.overflow = "";
      };
    }

    const controls = animate(0, 100, {
      duration: INTRO.counter,
      ease: [0.6, 0.05, 0.2, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    });
    const t1 = setTimeout(() => setLeaving(true), INTRO.exit * 1000);
    const t2 = setTimeout(() => setLifting(true), INTRO.curtain * 1000);

    return () => {
      controls.stop();
      clearTimeout(t1);
      clearTimeout(t2);
      root.style.overflow = "";
    };
  }, [reduced]);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  if (done) return null;

  const veilTransition = reduced
    ? { duration: 0.3 }
    : { duration: 0.95, ease: EASE };

  return (
    <>
      {/* Gold underlayer — revealed as the ink veil lifts, then follows it. */}
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[100]"
        style={{ backgroundColor: "var(--accent)" }}
        initial={false}
        animate={lifting ? { y: "-100%" } : { y: "0%" }}
        transition={{ ...veilTransition, delay: reduced ? 0 : 0.12 }}
        onAnimationComplete={() => lifting && setDone(true)}
      />

      {/* Ink veil with the sequence content. */}
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[101] flex flex-col justify-between bg-bg px-6 py-6 md:px-10 md:py-8"
        initial={false}
        animate={lifting ? { y: "-100%" } : { y: "0%" }}
        transition={veilTransition}
      >
        {/* Top frame */}
        <motion.div
          className="flex items-center justify-between"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: leaving ? 0 : 1 }}
          transition={{ duration: leaving ? 0.35 : 0.7, delay: leaving ? 0 : 0.25 }}
        >
          <span className="eyebrow">Portfolio — MMXXVI</span>
          <span className="eyebrow hidden sm:block">{site.location}</span>
        </motion.div>

        {/* Center: hairline + masked name */}
        <motion.div
          className="flex flex-col items-center"
          animate={
            leaving && !reduced
              ? { opacity: 0, y: -34, filter: "blur(5px)" }
              : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          transition={{ duration: 0.5, ease: EASE }}
        >
          <motion.span
            className="mb-8 block h-px w-full max-w-md"
            style={{ backgroundColor: "var(--line-strong)" }}
            initial={reduced ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          />
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="block font-display text-4xl tracking-tight text-ink md:text-6xl"
              initial={reduced ? false : { y: "115%", filter: "blur(6px)" }}
              animate={{ y: "0%", filter: "blur(0px)" }}
              transition={{ duration: 1.15, delay: 0.45, ease: EASE }}
            >
              {site.name}
            </motion.span>
          </span>
          <motion.span
            className="mt-4 font-display text-lg italic text-ink-dim"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15, ease: EASE }}
          >
            full-stack engineer &amp; designer
          </motion.span>
          <motion.span
            className="mt-8 block h-px w-full max-w-md"
            style={{ backgroundColor: "var(--line-strong)" }}
            initial={reduced ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          />
        </motion.div>

        {/* Bottom frame: counter */}
        <motion.div
          className="flex items-end justify-between"
          animate={{ opacity: leaving ? 0 : 1 }}
          transition={{ duration: 0.35 }}
        >
          <span className="eyebrow">Crafted by hand</span>
          <span className="font-mono text-4xl font-normal tabular-nums text-ink md:text-5xl">
            {String(count).padStart(3, "0")}
            <span className="ml-1 text-sm text-ink-faint">%</span>
          </span>
        </motion.div>

        {/* Progress hairline */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-accent"
          style={{ width: `${count}%` }}
        />
      </motion.div>
    </>
  );
}
