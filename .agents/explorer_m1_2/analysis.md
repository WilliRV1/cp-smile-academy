# Analysis: Derecho Médico Subcomponents Implementation Strategy

This document outlines the design findings and implementation recommendations for Milestone 1 of the "Derecho Médico" subcomponents: `FAQDerecho.jsx`, `SocialProofDerecho.jsx`, and `SyllabusDerecho.jsx`.

---

## 1. Analysis of Reference Components (src/components/escaneo/)

The existing components in `src/components/escaneo/` establish a premium visual language, interactive layouts, and ScrollTrigger-based GSAP entrance animations.

### A. FAQ Section (`FAQEscaneo.jsx`)
- **Structure**: 
  - Standard container: `<section>` with `py-24 px-6 bg-white z-10 border-t border-black/5`.
  - Header: Centered title "Preguntas Frecuentes" and description.
  - Accordion: A loop mapping through `faqs` state. The open question is tracked by index state (`openIndex`).
- **Interactive Styling**:
  - Main item container: `faq-item border rounded-2xl overflow-hidden transition-colors duration-300`. It highlights with `border-primary shadow-md` when open, or `border-black/5 hover:border-black/10` when closed.
  - Buttons: Toggle header containing the question and Lucide `Plus`/`Minus` icons wrapped in a color-shifting badge.
  - Content container: Tailwind transition-based toggle:
    ```jsx
    className={`transition-all duration-300 ease-in-out bg-gray-50/50 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
    ```
- **GSAP Animations**:
  - Registers `ScrollTrigger`.
  - Runs in `useEffect` with `gsap.context` for target `.faq-item` animations.
  - Animates from `{ y: 20, opacity: 0 }` to `{ y: 0, opacity: 1 }` with a `stagger: 0.1` and `duration: 0.6`.
  - Triggered when section reaches `top 75%` of the viewport.
  - Cleaned up properly using `ctx.revert()` on unmount.

### B. Social Proof Strip (`SocialProofEscaneo.jsx`)
- **Structure**:
  - Full-width dark strip: `py-12 bg-primary relative z-10 border-t border-white/10`.
  - Layout: Grid (`grid-cols-1 md:grid-cols-3 gap-8 md:gap-4`) with vertical borders on mobile and horizontal dividing borders on medium screens (`divide-y md:divide-y-0 md:divide-x divide-white/20`).
  - Stat items: A map through stats array.
- **Styling**:
  - Number: `font-serif italic text-4xl md:text-5xl text-white mb-2`
  - Label: `font-sans text-white/70 uppercase tracking-widest text-xs font-bold`
- **GSAP Animations**:
  - Animates `.stat-item` from `{ y: 30, opacity: 0 }` to `{ y: 0, opacity: 1 }` with `stagger: 0.2` and `duration: 0.8`.
  - Triggered at section `top 85%` viewport.
  - Reverts context on cleanup.

### C. Syllabus Accordion (`SyllabusEscaneo.jsx`)
- **Structure**:
  - Container: `py-24 px-6 bg-white relative z-10 rounded-[3rem] shadow-sm -mt-8 border-t border-black/5`.
  - Header: Includes a custom uppercase tag/badge "Curriculum", a prominent `text-3xl md:text-5xl` title, and a description.
  - Accordion: Multiple modules map through list. Tracks open item using ID state (`openId`).
- **Interactive Styling**:
  - Accordion head: Custom Lucide module icons (`ScanLine`, `Compass`, etc.) inside a colored badge. The active module header shifts to primary color.
  - Chevron icon rotates `180deg` when expanded.
  - Content container: Toggles details using Tailwind classes:
    ```jsx
    className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
    ```
  - Sub-topic listing: Dot bullet points using absolute positioning: `absolute -left-6 top-2 w-2 h-2 rounded-full bg-accent/30`.
- **GSAP Animations**:
  - Targets `.syll-el` (including header and modules).
  - Animates from `{ y: 50, opacity: 0 }` to `{ y: 0, opacity: 1 }` with `stagger: 0.1`, `duration: 0.8`, and `ease: 'power2.out'`.
  - Triggered at section `top 75%` viewport.
  - Reverts context on cleanup.

---

## 2. Recommended Implementation Strategy for Derecho Médico

### A. Directory Placement & Names
- Target Directory: `src/components/derecho/`
- Target Files:
  - `FAQDerecho.jsx`
  - `SocialProofDerecho.jsx`
  - `SyllabusDerecho.jsx`

### B. Consistent Component Structure
The new components must utilize the exact layout grid, Tailwind color utilities (`primary`, `accent`, `dark`, `white`), and same GSAP ScrollTrigger configuration as the references to guarantee a seamless layout transition.

### C. Customized Content Adaptation
1. **FAQDerecho.jsx Content**:
   - Focuses on the legal nature of the course, target audience (dentists), materials (optional history/consent/cases), payment gateways, and certification.
   - Retains 4 items.

2. **SocialProofDerecho.jsx Content**:
   - Leverages Dr. John Freddy Prado's extensive background (+16 years clinical experience, docency in 2 universities).
   - Adapts the middle stat to emphasize legal protection: `100% Enfoque Práctico y Legal`.

3. **SyllabusDerecho.jsx Content**:
   - Organizes the intensive syllabus into 3 specialized modules:
     - **Módulo 1: Marco Legal y Documentación Clínica** (Icon: `FileText`)
       - La Historia Clínica: Normatividad and custody.
       - El Consentimiento Informado: Requirements.
       - Garantía de Privacidad: Sensitive data and storage.
     - **Módulo 2: La Imagen Diagnóstica como Prueba Judicial** (Icon: `Scale`)
       - Valor Probatorio: Legal validity of images.
       - Requisitos de Calidad: Technical standards for defense.
       - Hallazgos Incidentales: Legal responsibility.
     - **Módulo 3: Prevención de Riesgos y Defensa Legal** (Icon: `Shield`)
       - Responsabilidad Profesional: Case studies.
       - Protocolo ante Reclamaciones: Immediate steps.
       - Blindaje Contractual: Contracts and policies.

---

## 3. Reference Implementations Created in Working Directory

For seamless developer handoff, the exact proposed source files have been generated in the working directory:
- `proposed_FAQDerecho.jsx`
- `proposed_SocialProofDerecho.jsx`
- `proposed_SyllabusDerecho.jsx`
