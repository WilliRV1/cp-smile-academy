# Scope: Derecho Médico Subcomponents Implementation

## Architecture
- React 19 / Vite 8 / Tailwind CSS / GSAP animations with ScrollTrigger.
- Reference implementation: `src/components/escaneo/`
- Target implementation directory: `src/components/derecho/`

## Milestones
| # | Name | Scope | Dependencies | Status | Conversation ID |
|---|---|---|---|---|---|
| M1 | Informational Components | Implement FAQDerecho.jsx, SocialProofDerecho.jsx, and SyllabusDerecho.jsx | None | DONE | 5b1f56bd-7f85-433a-967a-9019447085db, aa374881-9cff-4a0d-b201-2874f4fc2898, 8a640d42-5cf9-44de-abf4-7f321e42e574 |
| M2 | Transactional & Mentor Components | Implement LeadCaptureDerecho.jsx, MentorDerecho.jsx, PricingDerecho.jsx, and StickyCTADerecho.jsx | M1 | IN_PROGRESS | f3331e13-ee3f-4fa9-b732-18efa7bbe3cc, 7aa82e82-4a53-4245-bd52-17669aab6169, 3ff197a8-c3e4-450a-8164-6236063e809b, 5a4ef5b9-9489-48bf-87f8-23d62d1b185f, 4852c3e1-c607-46a2-bb02-a1c036eb756e, 37796fce-1ddc-47ec-b4a9-23f4744ad317, 3fb5625f-83cc-4206-9979-858056f039bc, f7ab3770-42b2-40d6-8835-f2d0ed2d11a8 |

## Interface Contracts
### Components under src/components/derecho/
- `FAQDerecho`: Renders accordion-style FAQ using GSAP.
- `LeadCaptureDerecho`: Leads signup form with specific course fields.
- `MentorDerecho`: Displays Dr. John Freddy Prado as mentor.
- `PricingDerecho`: Price $230.000 COP, 18 de Julio, 3:00 PM - 5:00 PM.
- `SocialProofDerecho`: Testimonials and trust indicators.
- `StickyCTADerecho`: Fixed bottom CTA reflecting current pricing/date.
- `SyllabusDerecho`: Curriculum/agenda details.
