"use client";

import { useEffect, useRef, useState } from "react";

/** Custom scrollbar: a hairline gold rail that appears while scrolling,
    fades away at rest, and supports click-and-drag. Replaces the native
    scrollbar (hidden in globals.css) across all browsers. */
export default function ScrollRail() {
  const [visible, setVisible] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [thumb, setThumb] = useState({ height: 0, top: 0 });
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      const doc = document.documentElement;
      const track = window.innerHeight - 24; // rail inset
      const ratio = window.innerHeight / doc.scrollHeight;
      if (ratio >= 1) {
        setThumb({ height: 0, top: 0 });
        return;
      }
      const height = Math.max(44, track * ratio);
      const progress =
        doc.scrollHeight <= window.innerHeight
          ? 0
          : window.scrollY / (doc.scrollHeight - window.innerHeight);
      setThumb({ height, top: 12 + progress * (track - height) });
    };

    const wake = () => {
      measure();
      setVisible(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setVisible(false), 1100);
    };

    measure();
    window.addEventListener("scroll", wake, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", wake);
      window.removeEventListener("resize", measure);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => {
      const doc = document.documentElement;
      const track = window.innerHeight - 24 - thumb.height;
      if (track <= 0) return;
      const progress = Math.min(1, Math.max(0, (e.clientY - 12 - thumb.height / 2) / track));
      window.scrollTo({ top: progress * (doc.scrollHeight - window.innerHeight) });
    };
    const stop = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", stop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", stop);
    };
  }, [dragging, thumb.height]);

  if (thumb.height === 0) return null;
  const active = visible || dragging || hovered;

  return (
    <div
      ref={railRef}
      aria-hidden
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onPointerDown={(e) => {
        setDragging(true);
        const doc = document.documentElement;
        const track = window.innerHeight - 24 - thumb.height;
        if (track > 0) {
          const progress = Math.min(1, Math.max(0, (e.clientY - 12 - thumb.height / 2) / track));
          window.scrollTo({ top: progress * (doc.scrollHeight - window.innerHeight) });
        }
      }}
      className={`fixed right-0 top-0 z-[95] hidden h-full w-3.5 cursor-grab transition-opacity duration-500 md:block ${
        active ? "opacity-100" : "opacity-0"
      } ${dragging ? "cursor-grabbing" : ""}`}
    >
      <div
        className={`absolute right-[5px] rounded-full transition-[width,background-color] duration-300 ${
          hovered || dragging ? "w-[5px] bg-accent" : "w-[3px] bg-accent/60"
        }`}
        style={{ height: thumb.height, top: thumb.top }}
      />
    </div>
  );
}
