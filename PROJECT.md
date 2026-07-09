# Project: C&P Smile Academy Landing Page Expansion

## Architecture
- **Frontend Framework**: React 19.x with Vite 8.x
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Animations**: GSAP (GreenSock Animation Platform) with ScrollTrigger
- **Routing**: React Router DOM (v7)
- **Icons**: Lucide React
- **Data Flow**: Component-level state with modularized subcomponents under `src/components/` and `src/components/derecho/`.
- **Pages**: `src/pages/AcademyHome.jsx` is the catalog and calendar view, while `src/pages/CourseDerecho.jsx` serves as the course landing page.

## Code Layout
- `src/App.jsx` - Routing and layout wrapper
- `src/pages/` - Top-level page views (AcademyHome, CourseEscaneo, CourseTomografia, CourseDerecho)
- `src/components/` - Global components (Hero, Features, Philosophy, Pricing, Mentors, Syllabus, TargetAndDeliverables, Protocol, StickyCTA, TopBar, WhatsAppBubble, Footer)
- `src/components/escaneo/` - Escaneo course components
- `src/components/derecho/` - Derecho course components
- `public/` - Public assets (images, videos)

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| M1 | E2E Test Suite | Design and build E2E validation suite for new features and routes | None | DONE (0bc6f408) |
| M2 | Derecho Course Components | Create missing derecho subcomponents (FAQ, LeadCapture, Mentor, Pricing, SocialProof, StickyCTA, Syllabus) | None | IN_PROGRESS (caadfff4) |
| M3 | Page & Route Registration | Create CourseDerecho.jsx page and register routing in App.jsx | M2 | PLANNED |
| M4 | Course Catalog Card | Add Derecho course card to AcademyHome.jsx | M3 | PLANNED |
| M5 | Course Calendar Grid | Design and implement monthly interactive course calendar in AcademyHome.jsx | M4 | PLANNED |
| M6 | Final Verification & Audit | Pass 100% of E2E test suite and run adversarial coverage hardening | M1, M5 | PLANNED |

## Interface Contracts
### Route: `/cursos/derecho-medico`
- Render component: `<CourseDerecho />`
- Page scroll: `window.scrollTo(0, 0)` on mount

### Course Card in `AcademyHome.jsx`
- Target path: `/cursos/derecho-medico`
- Title: "Derecho Médico y la Imagen Diagnóstica"
- Price: "$230.000 COP"
- Date: "18 de Julio"
- Image source: `/derecho-hero.jpg`

### Interactive Calendar Grid in `AcademyHome.jsx`
- Render month: July 2026 (based on course dates)
- Dates to highlight: 
  - July 18th (Escaneo & Derecho Médico courses)
  - July 25th (Tomografía course)
- Interaction: Clicking/hovering on a date reveals course details (Name, Price, Time, Link to course page)
