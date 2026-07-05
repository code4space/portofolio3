"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/components/reveal";
import { navLinks, site } from "@/lib/data";
import { introDelay } from "@/lib/preload";
import { scrollToId, startScroll, stopScroll } from "@/lib/scroll";

function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className={`grid h-9 w-9 place-items-center rounded-full border border-line text-ink-dim transition-colors duration-300 hover:border-accent hover:text-accent ${className ?? ""}`}
    >
      <Sun size={15} className="only-dark" />
      <Moon size={15} className="only-light" />
    </button>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const [intro, setIntro] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setIntro(true), introDelay() * 1000);
    return () => clearTimeout(t);
  }, []);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const delta = y - lastY.current;
      if (y > 560 && delta > 6) setHidden(true);
      else if (delta < -6 || y <= 560) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      stopScroll();
      document.documentElement.style.overflow = "hidden";
    } else {
      startScroll();
      document.documentElement.style.overflow = "";
    }
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // Let the overlay start closing before the page glides away.
    setTimeout(() => scrollToId(id), open ? 350 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{
          y: !intro || (hidden && !open) ? -88 : 0,
          opacity: intro ? 1 : 0,
        }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ${
          scrolled && !open
            ? "border-b border-line bg-bg/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <motion.span
          className="absolute inset-x-0 top-0 h-px origin-left bg-accent"
          style={{ scaleX: progress }}
        />
        <nav className="mx-auto flex h-16 max-w-[88rem] items-center justify-between px-6 md:h-[4.5rem] md:px-10">
          <button
            onClick={() => go("hero")}
            className="font-display text-lg italic tracking-tight text-ink"
            aria-label="Back to top"
          >
            William&nbsp;Wijaya
            <span className="text-accent">.</span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className={`u-line font-mono text-[11px] uppercase tracking-[0.24em] transition-colors duration-300 ${
                  active === link.href ? "text-accent" : "text-ink-dim hover:text-ink"
                }`}
              >
                <sup className="mr-1 text-[9px] text-accent">{link.index}</sup>
                {link.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[75] flex flex-col justify-between bg-bg px-6 pb-10 pt-28"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className="group flex items-baseline gap-4 py-2 text-left"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: EASE }}
                >
                  <span className="font-mono text-xs text-accent">{link.index}</span>
                  <span className="font-display text-5xl tracking-tight text-ink transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </div>

            <motion.div
              className="flex flex-col gap-4 border-t border-line pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
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
                    className="flex items-center gap-1 font-mono text-sm text-ink-dim"
                  >
                    {label} <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
              <span className="font-mono text-xs text-ink-faint">{site.email}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
