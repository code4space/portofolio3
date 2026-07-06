"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EASE, Reveal } from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { archive, featured, type CaseStudy } from "@/lib/data";

function CaseStudyBlock({ cs, flip }: { cs: CaseStudy; flip: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <article ref={ref} className="relative grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
      {/* Ghost numeral bleeding off the composition */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-28 z-0 hidden select-none font-display text-[13rem] font-light leading-none lg:block ${
          flip ? "-right-8" : "-left-8"
        }`}
        style={{ WebkitTextStroke: "1px var(--line-strong)", color: "transparent" }}
      >
        {cs.index}
      </span>

      {/* Visual */}
      <Reveal
        className={`relative z-10 lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
        y={40}
      >
        <a
          href={cs.link}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor
          className="group relative block overflow-hidden border border-line bg-bg-soft"
        >
          <div className="relative aspect-16/11 overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-y-[-8%] inset-x-0">
              <Image
                src={cs.image}
                alt={cs.alt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-bg/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
          <span className="absolute bottom-5 left-5 flex translate-y-3 items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-bg opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Visit live <ArrowUpRight size={13} />
          </span>
        </a>
      </Reveal>

      {/* Case study */}
      <div className={`relative z-10 lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <Reveal y={24}>
          <div className="flex items-baseline gap-4 font-mono text-xs text-ink-faint">
            <span className="text-accent">({cs.index})</span>
            <span>{cs.year}</span>
            <span aria-hidden>·</span>
            <span className="uppercase tracking-[0.14em]">{cs.role}</span>
          </div>
          <h3 className="mt-5 font-display text-4xl tracking-tight text-ink md:text-5xl">
            {cs.title}
          </h3>
          <p className="mt-4 text-pretty leading-relaxed text-ink-dim">{cs.tagline}</p>
        </Reveal>

        <Reveal y={24} delay={0.08}>
          <dl className="mt-9">
            {[
              ["Problem", cs.problem],
              ["Approach", cs.approach],
              ["Impact", cs.impact],
            ].map(([label, text]) => (
              <div
                key={label}
                className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-line py-4"
              >
                <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                  {label}
                </dt>
                <dd className="text-sm leading-relaxed text-ink-dim">{text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal y={16} delay={0.14}>
          <div className="mt-6 flex flex-wrap gap-2">
            {cs.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function Archive() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [finePointer, setFinePointer] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const px = useSpring(x, { stiffness: 240, damping: 26 });
  const py = useSpring(y, { stiffness: 240, damping: 26 });

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  return (
    <div
      className="relative mt-20 md:mt-28"
      onMouseMove={(e) => {
        x.set(e.clientX + 24);
        y.set(e.clientY - 110);
      }}
    >
      <Reveal>
        <div className="mb-8 flex items-center gap-4">
          <span className="eyebrow">More from the workshop</span>
          <span className="h-px flex-1 bg-line" />
        </div>
      </Reveal>

      {archive.map((project, i) => (
        <Reveal key={project.title} delay={i * 0.06} y={16}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="group flex items-baseline justify-between gap-6 border-b border-line py-7 transition-all duration-500 first-of-type:border-t hover:pl-4"
          >
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <span className="font-display text-2xl tracking-tight text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
                {project.title}
              </span>
              <span className="hidden text-sm text-ink-faint md:inline">
                {project.description}
              </span>
            </div>
            <div className="flex shrink-0 items-center gap-6">
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint lg:inline">
                {project.stack}
              </span>
              <span className="font-mono text-xs text-ink-faint">{project.year}</span>
              <ArrowUpRight
                size={18}
                className="text-ink-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </div>
          </a>
        </Reveal>
      ))}

      {/* Cursor-chasing preview — desktop only */}
      {finePointer && (
        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              className="pointer-events-none fixed left-0 top-0 z-70 w-72 overflow-hidden border border-line shadow-2xl"
              style={{ x: px, y: py }}
              initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <Image
                src={archive[hovered].image}
                alt=""
                width={288}
                height={200}
                className="h-48 w-72 object-cover object-top"
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-352">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          lines={[
            <span key="a">Projects, treated</span>,
            <span key="b">
              like <em className="text-accent">products.</em>
            </span>,
          ]}
          annotation="public work you can click — the enterprise evidence follows below"
        />

        <div className="mt-14 flex flex-col gap-24 md:mt-20 md:gap-36">
          {featured.map((cs, i) => (
            <CaseStudyBlock key={cs.id} cs={cs} flip={i % 2 === 1} />
          ))}
        </div>

        <Archive />
      </div>
    </section>
  );
}
