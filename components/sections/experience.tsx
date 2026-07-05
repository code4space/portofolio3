"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { milestones } from "@/lib/data";

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });

  return (
    <section id="experience" className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          index="05"
          eyebrow="Experience"
          lines={[
            <span key="a">
              The road <em className="text-accent">so far.</em>
            </span>,
          ]}
          annotation="from retouching pixels to running platforms"
        />

        <ol ref={listRef} className="relative mt-14 md:mt-20">
          {/* Rail */}
          <span aria-hidden className="absolute bottom-0 left-[5px] top-0 w-px bg-line md:left-1/2" />
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="absolute bottom-0 left-[5px] top-0 w-px origin-top bg-accent md:left-1/2"
          />

          {milestones.map((m, i) => {
            const left = i % 2 === 0;
            return (
              <li key={`${m.org}-${m.role}`} className="relative pb-12 pl-10 last:pb-0 md:pb-18 md:pl-0">
                {/* Node */}
                <span
                  aria-hidden
                  className="absolute left-0 top-2 grid h-[11px] w-[11px] place-items-center md:left-1/2 md:-translate-x-1/2"
                >
                  <span
                    className={`h-[11px] w-[11px] rounded-full border-2 ${
                      m.current
                        ? "border-accent bg-accent animate-pulse-dot"
                        : "border-line-strong bg-bg"
                    }`}
                  />
                </span>

                <div className="md:grid md:grid-cols-2 md:gap-16">
                  {/* Ghost year on the opposite side */}
                  <div
                    className={`hidden select-none items-start md:flex ${
                      left ? "order-2 justify-start pl-16" : "order-1 justify-end pr-16"
                    }`}
                    aria-hidden
                  >
                    <Reveal y={20} delay={0.05}>
                      <span
                        className="font-display text-8xl font-light leading-none lg:text-9xl"
                        style={{ WebkitTextStroke: "1px var(--line-strong)", color: "transparent" }}
                      >
                        {m.year}
                      </span>
                    </Reveal>
                  </div>

                  {/* Entry */}
                  <div className={left ? "order-1 md:pr-16 md:text-right" : "order-2 md:pl-16"}>
                    <Reveal y={24}>
                      <div
                        className={`flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint ${
                          left ? "md:justify-end" : ""
                        }`}
                      >
                        <span className={m.current ? "text-accent" : ""}>{m.period}</span>
                        <span className="rounded-full border border-line px-2.5 py-0.5 text-[10px]">
                          {m.kind}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                        {m.role}
                      </h3>
                      <div className="mt-1 font-display italic text-ink-dim">{m.org}</div>
                      <p
                        className={`mt-4 max-w-md text-pretty text-sm leading-relaxed text-ink-dim ${
                          left ? "md:ml-auto" : ""
                        }`}
                      >
                        {m.summary}
                      </p>
                    </Reveal>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
