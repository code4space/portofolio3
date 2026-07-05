"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { EASE, Reveal } from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="skills" className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          lines={[
            <span key="a">
              What I <em className="text-accent">work</em> with.
            </span>,
          ]}
          annotation="a TypeScript-first stack, hardened on enterprise systems"
        />

        <div className="mt-12 md:mt-16">
          {skillGroups.map((group, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={group.name} delay={i * 0.05} y={16}>
                <div className="border-b border-line first:border-t">
                  <button
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    className="group flex w-full items-center gap-6 py-6 text-left md:py-8"
                  >
                    <span className="font-mono text-xs text-ink-faint">{group.index}</span>
                    <span
                      className={`flex-1 font-display text-3xl tracking-tight transition-all duration-500 md:text-5xl ${
                        open ? "translate-x-2 text-accent" : "text-ink group-hover:translate-x-2 group-hover:text-accent"
                      }`}
                    >
                      {group.name}
                    </span>
                    <span className="hidden font-mono text-xs text-ink-faint md:block">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className={`grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 ${
                        open ? "border-accent text-accent" : "border-line text-ink-dim"
                      }`}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 pb-10 md:grid-cols-12 md:pl-12">
                          <p className="font-display italic leading-relaxed text-ink-dim md:col-span-4 md:text-lg">
                            {group.blurb}
                          </p>
                          <div className="flex flex-wrap content-start gap-2.5 md:col-span-8">
                            {group.items.map((item, j) => (
                              <motion.span
                                key={item}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 + j * 0.04, duration: 0.5, ease: EASE }}
                                className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-ink-dim transition-colors duration-300 hover:border-accent hover:text-accent"
                                data-cursor
                              >
                                {item}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
