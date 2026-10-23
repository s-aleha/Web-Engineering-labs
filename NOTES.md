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
