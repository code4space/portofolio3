"use client";

import type { ReactNode } from "react";
import { LineReveal, Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  /** One node per display line — each gets its own clipped reveal. */
  lines: ReactNode[];
  /** Small italic aside set against the heading (editorial margin note). */
  annotation?: ReactNode;
  className?: string;
};

/** Editorial section opener: hairline, mono index, oversized serif title. */
export default function SectionHeading({
  index,
  eyebrow,
  lines,
  annotation,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Reveal y={0}>
        <div className="flex items-center gap-4 border-t border-line pt-5">
          <span className="font-mono text-xs text-accent">({index})</span>
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <div className="mt-7 flex flex-wrap items-end justify-between gap-x-12 gap-y-6 md:mt-9">
        <h2 className="font-display text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[1.0] tracking-tight text-ink">
          {lines.map((line, i) => (
            <LineReveal key={i} delay={0.08 * i}>
              {line}
            </LineReveal>
          ))}
        </h2>
        {annotation && (
          <Reveal delay={0.25} y={12} className="pb-2">
            <p className="max-w-[15rem] border-l border-accent/60 pl-4 font-display text-sm italic leading-relaxed text-ink-dim">
              {annotation}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
