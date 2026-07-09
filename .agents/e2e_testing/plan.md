# E2E Test Execution Plan

## Objectives
1. Implement a Node.js-based test runner (`scripts/e2e-check.js`) that operates completely offline.
2. Define and execute 49 test cases covering 4 tiers of E2E verification for the new Derecho Médico course page, routing, catalog card, and interactive calendar.
3. Validate tests on the current codebase (expected to fail) and with temporary mocks (expected to pass).
4. Publish `TEST_INFRA.md` and `TEST_READY.md` in the project root.

## Detailed Test Cases (49 cases)

### Feature 1: Derecho Médico Course Page & Components (16 cases)
- **Tier 1: Feature Coverage (9 cases)**
  1. `CourseDerecho.jsx` exists and is a React component.
  2. `HeroDerecho` component exists and contains title "Derecho Médico y la Imagen Diagnóstica".
  3. `SyllabusDerecho` component exists and defines syllabus.
  4. `PricingDerecho` component exists and displays price "$230.000 COP".
  5. `MentorDerecho` component exists and displays mentor name "Dr. John Freddy Prado".
  6. `FAQDerecho` component exists and contains FAQ list.
  7. `LeadCaptureDerecho` component exists and has a registration/lead capture form.
  8. `SocialProofDerecho` component exists and shows testimonials.
  9. `StickyCTADerecho` component exists and has a floating button.
- **Tier 2: Boundary & Corner Cases (6 cases)**
  10. `CourseDerecho` resets scroll on mount via `window.scrollTo(0, 0)`.
  11. `PricingDerecho` displays correct price formats (including COP and $, no invalid numbers).
  12. `LeadCaptureDerecho` form validation checks for email and phone input fields.
  13. `SyllabusDerecho` handles minimal or empty syllabus lists without crashing.
  14. `FAQDerecho` supports question/answer toggle state.
  15. `StickyCTADerecho` is visible on scroll (checks styling classes or attributes).
- **Tier 3 & 4: Combinations & Real-World (1 case)**
  16. Page correctly combines all 8 subcomponents in sequential DOM order.

### Feature 2: Routing to /cursos/derecho-medico (11 cases)
- **Tier 1: Feature Coverage (5 cases)**
  17. Route `/cursos/derecho-medico` is registered in `App.jsx`.
  18. Route maps to `CourseDerecho` component.
  19. `App.jsx` imports `CourseDerecho` from `./pages/CourseDerecho`.
  20. React Router DOM (v7) syntax is used (e.g. `<Route path="..." element={...}>`).
  21. Base path routing renders `AcademyHome.jsx` correctly.
- **Tier 2: Boundary & Corner Cases (5 cases)**
  22. Fallback route (404 handler) works correctly in `App.jsx`.
  23. Route with trailing slash `/cursos/derecho-medico/` is handled gracefully.
  24. Routing is robust to query parameters (e.g. `?ref=ad`).
  25. Links targeting `/cursos/derecho-medico` exist and are well-formed.
  26. Route path structure is a well-formed absolute path.
- **Tier 3 & 4: Combinations & Real-World (1 case)**
  27. Routing works in combination with other courses (Escaneo, Tomografía).

### Feature 3: Card Integration in AcademyHome.jsx (11 cases)
- **Tier 1: Feature Coverage (7 cases)**
  28. `AcademyHome.jsx` contains a course catalog grid.
  29. Course card for Derecho Médico exists in the catalog.
  30. The card links to `/cursos/derecho-medico`.
  31. The card displays title "Derecho Médico y la Imagen Diagnóstica".
  32. The card displays price "$230.000 COP".
  33. The card displays course date "18 de Julio".
  34. The card contains image source `/derecho-hero.jpg`.
- **Tier 2: Boundary & Corner Cases (3 cases)**
  35. The card layout is responsive (Tailwind classes).
  36. Image element has an alt tag for accessibility.
  37. Pricing is formatted correctly without corruption or truncation.
- **Tier 3 & 4: Combinations & Real-World (1 case)**
  38. Catalog grid correctly displays all three course cards (Escaneo, Tomografía, Derecho) simultaneously.

### Feature 4: Interactive Calendar Grid in AcademyHome.jsx (11 cases)
- **Tier 1: Feature Coverage (7 cases)**
  39. `AcademyHome.jsx` renders a monthly interactive calendar grid.
  40. Calendar renders July 2026 as the target month.
  41. July 18th is highlighted as an active date.
  42. July 25th is highlighted as an active date.
  43. Interaction (click/hover) on July 18th displays details for Escaneo and Derecho Médico.
  44. Interaction on July 25th displays details for Tomografía.
  45. Details show course name, price, time, and link to the course.
- **Tier 2: Boundary & Corner Cases (3 cases)**
  46. Non-course dates (e.g. July 1st, 17th, 19th) are not highlighted as active.
  47. Month navigation is restricted or updates correctly without breaking the layout.
  48. Grid handles multiple courses on a single day (July 18th) without layout overlapping.
- **Tier 3 & 4: Combinations & Real-World (1 case)**
  49. Clicking on a course link in the calendar details navigates to the correct course page.

## Execution Sequence
1. Dispatch Worker to build `scripts/e2e-check.js`.
2. Worker runs script, capturing failure output (as features are not yet implemented).
3. Worker backs up `src/App.jsx` and `src/pages/AcademyHome.jsx`.
4. Worker creates temporary mock components/files for Derecho page and updates App/AcademyHome.
5. Worker runs `npm run build` and runs `scripts/e2e-check.js` to verify all pass.
6. Worker cleans up: restores `src/App.jsx` and `src/pages/AcademyHome.jsx`, and deletes mock Derecho files.
7. Worker creates `TEST_INFRA.md` and `TEST_READY.md`.
8. Worker reports results and files.
9. Orchestrator reports completion to parent.
