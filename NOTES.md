# Lab 04 Notes

## Task 10: Event loop prediction

```js
console.log("1 start");
setTimeout(() => console.log("2 timeout"), 0);
Promise.resolve().then(() => console.log("3 promise"));
console.log("4 end");
```

**My prediction:** `1 start`, `4 end`, `3 promise`, `2 timeout`

**Actual output in the DevTools Console:** `1 start`, `4 end`, `3 promise`, `2 timeout` (matches my prediction)

**Explanation**

1. `console.log("1 start")` is plain synchronous code, so it runs first on the call stack.
2. `setTimeout(..., 0)` hands the timer to the browser. Its callback waits in the **task queue** even though the delay is 0 ms.
3. `Promise.resolve().then(...)` puts its callback in the **microtask queue**.
4. `console.log("4 end")` is synchronous, so it runs next. The call stack is now empty.
5. The event loop empties the **microtask queue before** taking the next task, so `3 promise` prints.
6. Only then does the event loop take the timer callback from the task queue, so `2 timeout` prints last.

---

# Lab 05 Notes

## Task 6: Errors from `npm run typecheck` (first run on the plain JavaScript moved to `.ts`)

1. `src/main.ts: error TS18047: 'tbody' is possibly 'null'.`
   `querySelector` returns `Element | null`, so the compiler wants a check before `tbody.addEventListener(...)`. This is the same problem `getRequired()` solves.
2. `src/utils.ts: error TS7006: Parameter 'ms' implicitly has an 'any' type.`
   Under `strict`, every parameter needs a type. Fixed with `ms: number`.

Other errors in the same run: `'event.target' is possibly 'null'` and `Property 'closest' does not exist on type 'EventTarget'`. Both are fixed by `if (!(target instanceof Element)) return;`.

## Task 8: Structural typing

```ts
const booking = { day: "Monday", start: "10:00", end: "11:00", room: "Room 214", id: 1 };
describeSlot(booking);          // accepted: it has every property Slot needs (extra `id` is fine)
describeSlot({ day: "Monday" }); // rejected
```

Error: `TS2739: Type '{ day: string; }' is missing the following properties from type 'Slot': start, end, room`.
TypeScript compares the shape of the value, not its name. These lines were deleted after the test.

## Task 11: Deliberate type error

Changed `delay(1000)` to `delay("1000")` and ran `npm run build`:

`TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.`

Because of `noEmitOnError`, no JavaScript was written to `public/` until I changed it back to `delay(1000)`.
