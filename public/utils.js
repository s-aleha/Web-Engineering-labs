// Returns a promise that resolves after `ms` milliseconds.
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Closure: each counter keeps its own private `count`.
export function makeCounter() {
  let count = 0;
  return () => ++count;
}
