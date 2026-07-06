"use client";

import { Reveal } from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { impact } from "@/lib/data";

/** The 30-second case: four claims a hiring manager can act on,
    each backed by concrete production evidence — not adjectives. */
export default function Impact() {
  return (
    <section id="impact" className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          index="04"
          eyebrow="Why hire me"
          lines={[
            <span key="a">The case,</span>,
            <span key="b">
              in <em className="text-accent">thirty seconds.</em>
            </span>,
          ]}
          annotation="every claim below is backed by production evidence — not adjectives"
        />

        <div className="mt-12 md:mt-16">
          {impact.claims.map(({ index, claim: [pre, accent, post], evidence }, i) => (
            <Reveal key={index} delay={i * 0.06} y={18}>
              <div className="group grid gap-x-10 gap-y-4 border-t border-line py-9 last:border-b md:py-12 lg:grid-cols-12">
                <span className="pt-2 font-mono text-xs text-accent lg:col-span-1">
                  ({index})
                </span>
                <h3 className="font-display text-3xl leading-[1.08] tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-4xl xl:text-[2.75rem] lg:col-span-7">
                  {pre}
                  <em className="text-accent">{accent}</em>
                  {post}
                </h3>
                <div className="lg:col-span-4">
                  <span className="eyebrow flex items-center gap-3">
                    Evidence
                    <span className="h-px w-8 bg-accent/50 transition-all duration-500 group-hover:w-14 group-hover:bg-accent" />
                  </span>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-ink-dim">
                    {evidence}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 font-display text-sm italic text-ink-faint">{impact.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
