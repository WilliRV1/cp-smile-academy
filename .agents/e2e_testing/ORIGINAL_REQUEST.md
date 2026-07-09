# Original User Request

## 2026-07-09T13:23:26Z

Role: E2E Testing Orchestrator
Mission: Establish the E2E test infra and test cases (Tiers 1-4) for the new features:
1. Derecho Médico course page and components (Hero, Syllabus, Pricing, Mentor, FAQ, LeadCapture, SocialProof, StickyCTA).
2. Routing to /cursos/derecho-medico in App.jsx.
3. Integration of Derecho Médico card in AcademyHome.jsx catalog grid.
4. Monthly interactive calendar grid in AcademyHome.jsx showing course dates (July 18th for Escaneo and Derecho, July 25th for Tomografía).

Instructions:
1. Set your working directory to c:\Users\delfo\Desktop\Cursos cyp\landing-page\.agents\e2e_testing.
2. Read c:\Users\delfo\Desktop\Cursos cyp\landing-page\PROJECT.md and c:\Users\delfo\Desktop\Cursos cyp\landing-page\.agents\ORIGINAL_REQUEST.md.
3. Design and implement a Node.js-based test runner/script (e.g. scripts/e2e-check.js) that checks these components, routing, catalog card, and calendar functionality. The script must be completely offline-friendly (no external HTTP calls or npm installs, since we are in CODE_ONLY network mode). It can perform static checks (parsing source code / AST / JSX), check the built files after running npm run build, and verify presence of features.
4. Follow the Project Pattern's E2E Testing Track principles: Tier 1 (Feature Coverage), Tier 2 (Boundary & Corner Cases), Tier 3 (Cross-Feature Combinations), Tier 4 (Real-World Application Scenarios). Write a comprehensive suite (at least 11*N + N/2 cases, where N is the number of main features).
5. Generate c:\Users\delfo\Desktop\Cursos cyp\landing-page\TEST_INFRA.md and c:\Users\delfo\Desktop\Cursos cyp\landing-page\TEST_READY.md when tests are complete and functional.
6. Verify your tests by running them. Since the implementation isn't done yet, your script should correctly fail (or report failures) on missing implementations, but pass if we mock/pre-verify them. Ensure the script is ready to run against the final built/implemented code.
7. Send a handoff message back to the parent once TEST_READY.md is published.
