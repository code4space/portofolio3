"use client";

import { motion } from "motion/react";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";
import Clock from "@/components/clock";
import Magnetic from "@/components/magnetic";
import { LineReveal, Reveal } from "@/components/reveal";
import { site } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

function CircularCta() {
  return (
    <Magnetic strength={0.3}>
      <a
        href={site.mailto}
        data-cursor
        className="group relative grid h-44 w-44 place-items-center rounded-full border border-accent/70 text-ink md:h-56 md:w-56"
        aria-label={`Email ${site.name}`}
      >
        {/* Fill sweep */}
        <span className="absolute inset-0 scale-0 rounded-full bg-accent transition-transform duration-500 ease-out group-hover:scale-100" />
        {/* Rotating ring copy — spins faster on hover */}
        <svg
          viewBox="0 0 100 100"
          aria-hidden
          className="absolute -inset-4 animate-spin-slow opacity-70 transition-opacity duration-500 group-hover:opacity-100 group-hover:[animation-duration:9s]"
        >
          <defs>
            <path id="ring" d="M 50,50 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
          </defs>
          <text className="fill-ink-dim font-mono text-[6px] uppercase tracking-[0.32em]">
            <textPath href="#ring">
              open for work — open for collaboration — open for work —
            </textPath>
          </text>
        </svg>
        <span className="relative z-10 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-400 group-hover:text-accent-ink">
          Say hello
          <ArrowUpRight
            size={14}
            className="transition-transform duration-400 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </span>
      </a>
    </Magnetic>
  );
}

function BigEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <a
        href={site.mailto}
        className="u-line max-w-full break-all font-display text-[clamp(1.35rem,3.4vw,3rem)] italic tracking-tight text-ink transition-colors duration-300 hover:text-accent"
      >
        {site.email}
      </a>
      <button
        onClick={copy}
        aria-label="Copy email address"
        className={`flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
          copied
            ? "border-accent text-accent"
            : "border-line text-ink-dim hover:border-accent hover:text-accent"
        }`}
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 pt-20 md:px-10 md:pt-28">
      {/* Closing glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[55vmax] w-[55vmax] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, var(--glow) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 mx-auto max-w-[88rem]">
        <Reveal y={0}>
          <div className="flex items-center gap-4 border-t border-line pt-5">
            <span className="font-mono text-xs text-accent">(07)</span>
            <span className="eyebrow">Contact</span>
            <span className="ml-auto flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
              {site.availability}
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 md:mt-16 lg:grid-cols-12">
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none tracking-tight text-ink lg:col-span-8">
            <LineReveal>Let’s make</LineReveal>
            <LineReveal delay={0.08}>something worth</LineReveal>
            <LineReveal delay={0.16}>
              <em className="text-accent">remembering.</em>
            </LineReveal>
          </h2>

          <div className="flex justify-start lg:col-span-4 lg:justify-center">
            <Reveal delay={0.2} y={20}>
              <CircularCta />
            </Reveal>
          </div>
        </div>

        {/* Direct line */}
        <Reveal delay={0.1}>
          <div className="mt-14 border-t border-line pt-8 md:mt-16">
            <span className="eyebrow">Or write directly</span>
            <div className="mt-4">
              <BigEmail />
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-3 md:mt-12">
          <Reveal y={14}>
            <div className="flex flex-col gap-2.5">
              <span className="eyebrow">Elsewhere</span>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  { label: "GitHub", href: site.github },
                  { label: "LinkedIn", href: site.linkedin },
                  { label: "Résumé", href: site.resume },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-line flex items-center gap-1.5 font-mono text-sm text-ink-dim hover:text-ink"
                  >
                    {label} <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal y={14} delay={0.07}>
            <div className="flex flex-col gap-2.5">
              <span className="eyebrow">Phone</span>
              <span className="font-mono text-sm text-ink-dim">{site.phone}</span>
            </div>
          </Reveal>
          <Reveal y={14} delay={0.14}>
            <div className="flex flex-col gap-2.5">
              <span className="eyebrow">Based in</span>
              <span className="font-mono text-sm text-ink-dim">
                {site.location} · <Clock className="text-ink-faint" />
              </span>
            </div>
          </Reveal>
        </div>

        {/* Footer */}
        <footer className="mt-16 md:mt-20">
          <motion.div
            aria-hidden
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="select-none overflow-hidden text-center"
          >
            <span className="block whitespace-nowrap font-display text-[clamp(4rem,13vw,12rem)] font-medium leading-[0.9] tracking-[-0.03em] text-ink opacity-[0.07]">
              WILLIAM WIJAYA
            </span>
          </motion.div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              © 2026 {site.name} — {site.location}
            </span>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint md:block">
              Designed & built by hand — Next.js · Tailwind · Motion
            </span>
            <button
              onClick={() => scrollToId("hero")}
              className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim transition-colors hover:text-accent"
            >
              Back to top
              <ArrowUp
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
