# William Wijaya — Portfolio

An editorial, cinematic personal-brand site for a full-stack engineer & designer.
Built with Next.js 16 (App Router), Tailwind CSS v4, Motion (Framer Motion 12), and Lenis smooth scrolling.

## Design language — “Ink & Gold”

- Warm near-black canvas (dark, default) and warm paper (light), toggleable; preference persists.
- Typography-first: Fraunces (editorial serif) for display, Instrument Sans for body, IBM Plex Mono for technical labels.
- Film grain, hairline rules, ghost numerals, soft gold glows — expensive, not colorful.
- Full reduced-motion support; custom cursor and smooth scroll activate only on fine pointers.

## Structure

| Section | File |
| --- | --- |
| Preloader / nav / cursor / smooth scroll / scroll rail | `components/*.tsx` |
| Hero (masthead name, live Jakarta clock) | `components/sections/hero.tsx` |
| About (dossier card, drop cap, stats) | `components/sections/about.tsx` |
| Capabilities (accordion) | `components/sections/skills.tsx` |
| Selected work (case studies + archive) | `components/sections/projects.tsx` |
| Enterprise engineering (Mitraplus modernization arc) | `components/sections/enterprise.tsx` |
| Experience (scroll-drawn timeline) | `components/sections/experience.tsx` |
| Voices (testimonials) | `components/sections/testimonials.tsx` |
| Contact + footer | `components/sections/contact.tsx` |

Engineering notes: the native scrollbar is hidden and replaced by a custom gold
rail (`scroll-rail.tsx`); the ~3s opening sequence plays on every load
(`preloader.tsx`); `LineReveal` observes its unclipped wrapper — observing the
clipped inner span would deadlock IntersectionObserver (fully clipped elements
never intersect).

## Editing content

**All copy lives in [`lib/data.ts`](lib/data.ts)** — projects, case studies, experience,
skills, testimonials, contact details. Components are presentation only.

> ⚠️ The testimonials in `lib/data.ts` are placeholders modeled on real feedback themes.
> Replace them with verbatim quotes and real attributions before going live.

Assets: project screenshots in `public/projects/`, résumé at `public/resume.pdf`.

## Commands

```bash
pnpm dev     # develop at http://localhost:3000
pnpm build   # production build (static)
pnpm start   # serve the production build
```
