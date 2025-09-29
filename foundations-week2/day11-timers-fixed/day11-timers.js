// ========================================================
// Day 11: Timers (setTimeout, setInterval) + Async Practice
// ========================================================

// --------------------------------------------------------
// 1. Timers Basics (Theory)
// --------------------------------------------------------
// - JS is single-threaded → executes one thing at a time.
// - Timers don’t block code. Instead, they are scheduled by the browser/Node
//   and pushed back into the event loop once the delay expires.
// - setTimeout(fn, ms):
//     • Schedules fn to run once after ms.
//     • Minimum delay is not guaranteed (depends on event loop load).
// - setInterval(fn, ms):
//     • Repeats fn every ms interval.
//     • If fn takes longer than ms, intervals may drift (delayed).
// - clearTimeout(id) / clearInterval(id):
//     • Always store the returned ID to cancel timers when needed.
// - Delay is in **milliseconds** (1000ms = 1s).
// - Passing extra arguments: setTimeout(fn, ms, arg1, arg2…)
// - Nested setTimeout vs setInterval:
//     • setInterval tries to run at exact intervals (may pile up).
//     • Recursive setTimeout gives more control, avoids drift in heavy code.
// - Common real-world uses:
//     • Countdown timers
//     • Auto-saving drafts
//     • Slideshow image changes
//     • Polling APIs
//     • Auto-logout / session expiry

// Example:
setTimeout(() => console.log("Runs after 2s"), 2000);
const id = setInterval(() => console.log("Repeats every sec"), 1000);
clearInterval(id); // stops it

// --------------------------------------------------------
// 2. 5 Practice Exercises
// --------------------------------------------------------

// Q1: Countdown 10 → 0 (1 sec each)
let count = 10;
const countdownId = setInterval(() => {
  console.log(count);
  count--;
  if (count < 0) {
    clearInterval(countdownId);
    console.log("Time’s up!");
  }
}, 1000);

// Q2: Delayed Alert (5 sec after load)
setTimeout(() => {
  alert("Welcome to my site!");
}, 5000);

// Q3: Multiple Messages (chained timeouts)
setTimeout(() => console.log("Hello"), 2000);
setTimeout(() => console.log("How are you?"), 4000);
setTimeout(() => console.log("Goodbye"), 6000);

// Q4: Auto-stop Counter (1 → 5)
let n = 1;
const counterId = setInterval(() => {
  console.log(n);
  n++;
  if (n > 5) clearInterval(counterId);
}, 1000);

// Q5: Random Quote Reminder
const quotes = [
  "Stay hungry, stay foolish.",
  "Code is like humor — it’s better when it works.",
  "Simplicity is the soul of efficiency.",
  "Don’t watch the clock, do what it does: keep going.",
  "First, solve the problem. Then, write the code."
];
let shown = 0;
const quoteId = setInterval(() => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(random);
  shown++;
  if (shown >= 5) clearInterval(quoteId);
}, 3000);

// --------------------------------------------------------
// 3. Why This Matters for React (Theory)
// --------------------------------------------------------
// - In React, you often use timers for side effects (sliders, auto-refresh).
// - Pattern: useEffect(() => { const id = setInterval(...); return () => clearInterval(id) }, [])
// - Cleanup is crucial → without clearInterval, old timers run even after component unmounts.
// - Understanding async + event loop behavior prevents bugs like:
//   • setTimeout inside loops logging wrong values
//   • Memory leaks from "forgotten" intervals
//   • Unexpected delays due to event loop congestion

// --------------------------------------------------------
// Summary
// --------------------------------------------------------
// ✅ JS timers = async scheduling via event loop
// ✅ setTimeout → once, setInterval → repeat
// ✅ clearTimeout / clearInterval to cancel
// ✅ Delays aren’t exact → affected by main thread load
// ✅ Recursive setTimeout avoids drift in heavy tasks
// ✅ Real-world: countdowns, auto-refresh, reminders, logout
// ✅ Foundation for React useEffect timers + async workflows
// ========================================================
