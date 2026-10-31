# Lab 05: Legacy jQuery Notes

Source: `legacy-feedback.js` (jQuery 3.7.1), ported to `src/feedback.ts`.

## Six jQuery calls and their native equivalents

| jQuery                        | Native JavaScript                                                                                           |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `$(document).ready(fn)`       | `<script type="module">` (modules wait for the page) or `document.addEventListener("DOMContentLoaded", fn)` |
| `$("#name").val()`            | `document.querySelector("#name").value`                                                                     |
| `.after(html)`                | `input.after(element)` with an element built by `document.createElement`                                    |
| `$(".error").remove()`        | `form.querySelectorAll(".error").forEach((el) => el.remove())`                                              |
| `.text(…).hide().fadeIn(400)` | `status.textContent = …` (the fade is dropped; use a CSS transition if needed)                              |
| `$form[0].reset()`            | `form.reset()` (`$form[0]` is just the raw DOM element)                                                     |

## Three legacy smells

1. **`var` for variables.** It is function-scoped and can be re-declared. Modern code uses `const` and `let`.
2. **`$.trim()`.** The native `String.prototype.trim()` replaced it, and jQuery 4 removed `$.trim`, so this script breaks on an upgrade.
3. **HTML built as strings** (`'<span class="error">…</span>'`). Native code creates elements with `createElement` and sets `textContent`, which avoids HTML injection.

Bonus smell: `email.indexOf("@") === -1` is now written as `!email.includes("@")`.
