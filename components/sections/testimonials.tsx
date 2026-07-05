"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { EASE, Reveal } from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { testimonials } from "@/lib/data";

const INTERVAL = 7000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearInterval(id);
  }, [paused, count]);

  const current = testimonials[index];

  return (
    <section id="voices" className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          index="06"
          eyebrow="Voices"
          lines={[
            <span key="a">
              What working together <em className="text-accent">feels</em> like.
            </span>,
          ]}
        />

        <Reveal>
          <figure
            className="relative mx-auto mt-12 max-w-4xl md:mt-16"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-4 -top-14 select-none font-display text-[10rem] leading-none text-accent opacity-20 md:-left-16"
            >
              “
            </span>

            <div className="min-h-[16rem] md:min-h-[13rem]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <p className="text-pretty font-display text-2xl italic leading-snug tracking-tight text-ink md:text-4xl">
                    {current.quote}
                  </p>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="h-px w-10 bg-accent" />
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-dim">
                      {current.name}
                      <span className="ml-3 text-ink-faint">{current.context}</span>
                    </span>
                  </figcaption>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-12 flex items-center justify-between border-t border-line pt-6">
              <span className="font-mono text-xs tabular-nums text-ink-faint">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>

              <div className="relative h-px w-32 bg-line md:w-56" aria-hidden>
                <motion.span
                  key={`${index}-${paused}`}
                  className="absolute inset-y-0 left-0 bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: paused ? "0%" : "100%" }}
                  transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setIndex((index - 1 + count) % count)}
                  aria-label="Previous testimonial"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-dim transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <ArrowLeft size={15} />
                </button>
                <button
                  onClick={() => setIndex((index + 1) % count)}
                  aria-label="Next testimonial"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-dim transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
