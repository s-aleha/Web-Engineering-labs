# Web Engineering Lab

This repository contains all lab work for the Web Engineering course.

---

## Lab 01: Introduction to Web Development

**Topics covered:**

- Basic HTML structure
- CSS styling
- JavaScript greeting logic
- Git and GitHub setup
- VS Code + Live Server workflow

**Files:**

- `public/index.html` — Main page
- `public/styles.css` — Styles
- `script.js` — Greeting logic

---

## Lab 02: Semantic HTML and Accessibility Foundations

**Topics covered:**

- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`)
- Correct heading hierarchy (h1 → h2 → h2)
- Accessible data tables with `<caption>`, `<thead>`, `scope`, and `<time>`
- Decorative vs informative graphics (`aria-hidden`, `role="img"`, `<title>`)
- Accessible forms with `<label>`, `<fieldset>`, `<legend>`
- Keyboard operability and visible focus indicators
- ARIA best practices (only where semantic HTML is not enough)
- Automated testing with **axe DevTools** and **Lighthouse**

**Key features implemented:**

### 1. Semantic Structure

- Skip to main content link (first focusable element)
- Landmark elements: `header`, `nav`, `main`, `footer`
- Exactly one `<main id="main-content">`
- Sequential heading hierarchy

### 2. Accessible Table

- `<caption>Weekly office hours</caption>`
- `<thead>` with `scope="col"` headers
- `<tbody>` with data rows
- `<time datetime="...">` for machine-readable times

### 3. Graphics Accessibility

| Graphic            | Treatment                                       |
| ------------------ | ----------------------------------------------- |
| Decorative divider | `aria-hidden="true"` (silent to screen readers) |
| Location pin icon  | `role="img"` + `<title>` (accessible name)      |

### 4. Accessible Form

- Every control has a `<label for>` + `id` pair
- Radio group wrapped in `<fieldset>` + `<legend>`
- Hint text linked with `aria-describedby`
- Real `<button type="submit">`

### 5. Keyboard Operability

- 8 tab stops from skip link to submit button
- Visible focus: `outline: 3px solid #0b5fff`
- Skip link revealed on first Tab press
- Radio group is a single tab stop (arrow keys navigate)

### 6. ARIA Usage

| Attribute                 | Where           | Why                      |
| ------------------------- | --------------- | ------------------------ |
| `aria-hidden`             | Decorative SVG  | Hide from AT             |
| `role="img"` + `<title>`  | Location pin    | Provide name             |
| `aria-describedby`        | Email input     | Link hint text           |
| `aria-current="location"` | Active nav link | Indicate current section |

**No redundant ARIA** — no `role="navigation"` on `<nav>`.

---

## 🧪 Testing Results

### axe DevTools Scan
