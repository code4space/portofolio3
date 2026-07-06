"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import Stat from "@/components/stat";
import { about, site } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          index="01"
          eyebrow="About"
          lines={[
            <span key="a">From pixels</span>,
            <span key="b">
              to <em className="text-accent">production.</em>
            </span>,
          ]}
          annotation="an engineer with a designer’s reflexes"
        />

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12">
          {/* Portrait + index card — sticky on large screens */}
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <figure className="group relative overflow-hidden border border-line">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/me_black_white.png"
                    alt="Portrait of William Wijaya"
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ objectPosition: "50% 30%" }}
                  />
                  {/* Warm the blacks into the canvas */}
                  <div aria-hidden className="absolute inset-0 bg-accent/10 mix-blend-soft-light" />
                  <div aria-hidden className="absolute inset-0 bg-linear-to-t from-bg/40 via-transparent to-transparent" />
                </div>
                <figcaption className="flex items-center justify-between border-t border-line px-4 py-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                    fig. 00 — the engineer
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" aria-hidden />
                </figcaption>
              </figure>

              <dl className="mt-5 border border-line bg-bg-soft/60 p-7 backdrop-blur-sm">
                <div className="eyebrow mb-5">Dossier</div>
                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 border-t border-line py-3.5 last:pb-0"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                      {fact.label}
                    </dt>
                    <dd className="text-right text-sm text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="text-pretty font-display text-2xl leading-snug tracking-tight text-ink first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-accent md:text-3xl md:first-letter:text-7xl">
                {about.lead}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <blockquote className="my-10 border-l-2 border-accent pl-7 md:my-12 md:pl-10">
                <p className="font-display text-2xl italic leading-snug tracking-tight text-ink md:text-4xl">
                  “{about.pullQuote}”
                </p>
              </blockquote>
            </Reveal>

            {about.body.map((paragraph, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p className="mb-5 max-w-prose text-pretty leading-relaxed text-ink-dim md:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap gap-6">
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 border border-line px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  View résumé
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-line self-center font-mono text-xs uppercase tracking-[0.18em] text-ink-dim hover:text-ink"
                >
                  GitHub ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-10 border-t border-line pt-10 sm:grid-cols-3 md:mt-20">
          {about.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} y={16}>
              <Stat {...stat} delay={i * 0.12} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
