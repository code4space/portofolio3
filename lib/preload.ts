/* Coordinates the intro: the preloader plays a ~3s cinematic sequence,
   and the hero times its entrance to land as the veil lifts. */

/** Second marks for the preloader timeline. */
export const INTRO = {
  counter: 2.3, // counter run time
  exit: 2.75, // content starts leaving
  curtain: 3.05, // veil starts lifting
};

/** Delay (s) for hero intro animations, timed to the lifting veil. */
export function introDelay(extra = 0): number {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return 0.2 + extra;
  }
  return INTRO.curtain + 0.15 + extra;
}
