# Test Infrastructure Documentation (TEST_INFRA.md)

This document provides the overview, design methodology, inventory, and execution commands for the end-to-end (E2E) testing suite implemented for the C&P Smile Academy Landing Page.

## Test Methodology

The testing infrastructure uses a lightweight, offline-friendly, and high-precision static analysis framework (`scripts/e2e-check.js`) written in native Node.js. It requires no external dependencies (runs with built-in modules like `fs`, `path`, `readline`, etc.), which ensures it operates efficiently and securely in offline environments.

### Analysis Tiers

1. **Source Code Static Checks**: Parses JSX files under `src/` to verify existence, default/named exports, import paths, layout structure, state hooks usage, responsive Tailwind CSS styling, and validation controls.
2. **Sequential Ordering Check**: Verifies that components are imported and rendered in the exact logical and sequential DOM order defined in the UI design spec.
3. **Build Output Verification**: Scans the compiled production bundle directories (`dist/`) for final transpiled variables and contents, ensuring that built assets are updated and not corrupted or truncated.

---

## Feature Inventory & Test Cases

The test suite covers **49 distinct test cases** divided across 4 primary features:

### Feature 1: Derecho Médico Course Page & Components (16 cases)
* **Tier 1: Feature Coverage**
  1. `CourseDerecho.jsx` exists and is a React component.
  2. `HeroDerecho` component exists and contains the title "Derecho Médico y la Imagen Diagnóstica".
  3. `SyllabusDerecho` component exists and defines the syllabus.
  4. `PricingDerecho` component exists and displays price "$230.000 COP".
  5. `MentorDerecho` component exists and displays mentor name "Dr. John Freddy Prado".
  6. `FAQDerecho` component exists and contains the FAQ list.
  7. `LeadCaptureDerecho` component exists and has a registration/lead capture form.
  8. `SocialProofDerecho` component exists and shows testimonials.
  9. `StickyCTADerecho` component exists and has a floating button.
* **Tier 2: Boundary & Corner Cases**
  10. `CourseDerecho` resets scroll on mount via `window.scrollTo(0, 0)`.
  11. `PricingDerecho` displays correct price formats (including COP and $, no invalid numbers).
  12. `LeadCaptureDerecho` form validation checks for email and phone input fields (`type="email"` and `type="tel"`).
  13. `SyllabusDerecho` handles minimal or empty syllabus lists without crashing (uses defensive programming).
  14. `FAQDerecho` supports question/answer toggle state (`useState` + toggling logic).
  15. `StickyCTADerecho` is visible on scroll (checks styling classes or fixed attributes).
* **Tier 3 & 4: Combinations & Real-World**
  16. `CourseDerecho` correctly renders all 8 subcomponents in the sequential DOM order: `HeroDerecho` &rarr; `SyllabusDerecho` &rarr; `PricingDerecho` &rarr; `MentorDerecho` &rarr; `FAQDerecho` &rarr; `LeadCaptureDerecho` &rarr; `SocialProofDerecho` &rarr; `StickyCTADerecho`.

### Feature 2: Routing to `/cursos/derecho-medico` (11 cases)
* **Tier 1: Feature Coverage**
  17. Route `/cursos/derecho-medico` is registered in `App.jsx`.
  18. Route maps to the `CourseDerecho` component.
  19. `App.jsx` imports `CourseDerecho` from `./pages/CourseDerecho`.
  20. React Router DOM (v7) syntax is used (e.g. `<Routes>` and `<Route>`).
  21. Base path routing renders `AcademyHome.jsx` correctly.
* **Tier 2: Boundary & Corner Cases**
  22. Fallback route (404 handler) works correctly in `App.jsx` using `path="*"`.
  23. Route with trailing slash `/cursos/derecho-medico/` is handled gracefully.
  24. Routing is robust to query parameters (e.g. `?ref=ad`) because route matching patterns are clean.
  25. Links targeting `/cursos/derecho-medico` exist and are well-formed in navigation.
  26. Route path structure is a well-formed absolute path (starts with `/`).
* **Tier 3 & 4: Combinations & Real-World**
  27. Routing works in combination with other courses (Escaneo, Tomografía).

### Feature 3: Card Integration in `AcademyHome.jsx` (11 cases)
* **Tier 1: Feature Coverage**
  28. `AcademyHome.jsx` contains a course catalog grid.
  29. Course card for Derecho Médico exists in the catalog.
  30. The card links to `/cursos/derecho-medico`.
  31. The card displays title "Derecho Médico y la Imagen Diagnóstica".
  32. The card displays price "$230.000 COP".
  33. The card displays course date "18 de Julio".
  34. The card contains image source `/derecho-hero.jpg`.
* **Tier 2: Boundary & Corner Cases**
  35. The card layout is responsive (Tailwind classes).
  36. Image element has an alt tag for accessibility.
  37. Pricing is formatted correctly without corruption or truncation.
* **Tier 3 & 4: Combinations & Real-World**
  38. Catalog grid correctly displays all three course cards (Escaneo, Tomografía, Derecho) simultaneously.

### Feature 4: Interactive Calendar Grid in `AcademyHome.jsx` (11 cases)
* **Tier 1: Feature Coverage**
  39. `AcademyHome.jsx` renders a monthly interactive calendar grid.
  40. Calendar renders July 2026 as the target month.
  41. July 18th is highlighted as an active date.
  42. July 25th is highlighted as an active date.
  43. Interaction (click/hover) on July 18th displays details for Escaneo and Derecho Médico.
  44. Interaction on July 25th displays details for Tomografía.
  45. Details show course name, price, time, and link to the course.
* **Tier 2: Boundary & Corner Cases**
  46. Non-course dates (e.g. July 1st, 17th, 19th) are not highlighted as active.
  47. Month navigation is restricted or updates correctly without breaking the layout.
  48. Grid handles multiple courses on a single day (July 18th) without layout overlapping.
* **Tier 3 & 4: Combinations & Real-World**
  49. Clicking on a course link in the calendar details navigates to the correct course page.

---

## Runner Commands

### 1. Execute E2E Suite
Run the following command from the project root directory:
```bash
node scripts/e2e-check.js
```

### 2. Exit Codes
* **`0`**: All 49 test cases passed.
* **`1`**: One or more test cases failed. Details are logged to stdout with the test number, title, and the failure reason.
