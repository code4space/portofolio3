"use client";

import { Reveal } from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import Stat from "@/components/stat";
import { enterprise, processSteps } from "@/lib/data";

export default function Enterprise() {
  return (
    <section id="enterprise" className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          index="04"
          eyebrow="Enterprise engineering — Mitraplus"
          lines={[
            <span key="a">Three platforms,</span>,
            <span key="b">
              one <em className="text-accent">modernization</em> arc.
            </span>,
          ]}
          annotation="from a legacy PHP baseline to containerized, typed, CI-gated platforms"
        />

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-ink-dim md:text-xl">
            {enterprise.intro}
          </p>
        </Reveal>

        {/* Evolution rail */}
        <div className="relative mt-14 md:mt-16">
          <span aria-hidden className="absolute inset-x-0 top-[7px] hidden h-px bg-line xl:block" />
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
            {enterprise.stages.map((stage, i) => (
              <Reveal key={stage.name} delay={i * 0.1} className="flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span
                    className={`relative z-10 h-[15px] w-[15px] rounded-full border-2 ${
                      stage.highlight
                        ? "border-accent bg-accent animate-pulse-dot"
                        : stage.legacy
                          ? "border-line bg-bg"
                          : "border-line-strong bg-bg"
                    }`}
                  />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                    {stage.years}
                  </span>
                  {stage.highlight && (
                    <span className="rounded-full border border-accent/50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                      Current
                    </span>
                  )}
                </div>

                <div
                  className={`mt-5 flex flex-1 flex-col border p-6 transition-colors duration-500 md:p-7 ${
                    stage.legacy
                      ? "border-dashed border-line"
                      : stage.highlight
                        ? "border-accent/50 bg-bg-soft/60 hover:border-accent"
                        : "border-line bg-bg-soft/40 hover:border-line-strong"
                  }`}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                    {stage.kind}
                  </span>
                  <h3
                    className={`mt-3 font-display text-3xl tracking-tight ${
                      stage.legacy ? "text-ink-dim line-through decoration-1" : "text-ink"
                    }`}
                  >
                    {stage.name}
                  </h3>
                  <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-ink-dim">
                    {stage.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-line pt-4">
                    {stage.stack.map((tech) => (
                      <span key={tech} className="font-mono text-[11px] text-ink-faint">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Metrics band */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-10 border-y border-line py-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-6">
            {enterprise.metrics.map((metric, i) => (
              <Stat key={metric.label} {...metric} delay={i * 0.12} size="md" />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 font-display text-sm italic text-ink-faint">{enterprise.note}</p>
        </Reveal>

        {/* How I ship */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span className="eyebrow">How I ship</span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div
                key={step.index}
                className="group bg-bg p-7 transition-colors duration-500 hover:bg-bg-soft"
              >
                <Reveal delay={i * 0.07} y={16}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs text-accent">{step.index}</span>
                    <span className="h-px w-8 bg-line transition-all duration-500 group-hover:w-12 group-hover:bg-accent" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-ink-dim">
                    {step.body}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
