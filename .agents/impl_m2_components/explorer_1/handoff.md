# Handoff Report: Lead Capture Derecho Component Design

This report contains the analysis of `src/components/escaneo/LeadCaptureEscaneo.jsx` and outlines the design and proposed code template for `src/components/derecho/LeadCaptureDerecho.jsx`.

---

## 1. Observation

### Reference Component File Details
* **File Path**: `src/components/escaneo/LeadCaptureEscaneo.jsx`
* **Content**:
```jsx
import { FileText } from 'lucide-react';

export default function LeadCaptureEscaneo() {
  return (
    <section className="py-20 px-6 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/escaneo-hero-new.jpg?v=1')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-serif italic text-3xl md:text-4xl mb-4">¿Aún lo estás pensando?</h2>
        <p className="font-sans text-white/80 mb-8 text-lg">
          Descarga el temario completo en PDF, conoce los detalles del flujo digital que cubriremos y recibe una sorpresa especial.
        </p>
        <a 
          href="https://wa.me/19293430985?text=Hola,%20me%20gustar%C3%ADa%20recibir%20el%20temario%20en%20PDF%20del%20curso%20de%20Escaneo%20Digital." 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
        >
          <FileText className="w-5 h-5" />
          <span>Quiero el temario en PDF</span>
        </a>
      </div>
    </section>
  );
}
```

### Contextual Components and Animation Standards
* **Observation 1**: `FAQDerecho.jsx`, `HeroDerecho.jsx`, `SocialProofDerecho.jsx`, and `SyllabusDerecho.jsx` exist in the `src/components/derecho/` folder.
* **Observation 2**: Components like `HeroDerecho.jsx` and `SocialProofDerecho.jsx` use GSAP ScrollTrigger animations with cleanup implemented via `gsap.context()` inside a `useEffect` hook. For example, `SocialProofDerecho.jsx` lines 10-18:
```jsx
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.stat-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);
```
* **Observation 3**: The background image utilized in the Derecho-related sections is `/derecho-hero.jpg` (observed in `HeroDerecho.jsx`, line 85).
* **Observation 4**: The WhatsApp URL message format for the Derecho course uses `"Derecho Médico y la Imagen Diagnóstica"` (observed in `HeroDerecho.jsx`, line 19).

---

## 2. Logic Chain

1. **Tailwind and Layout Style Mapping**: To preserve identical layout styling, `LeadCaptureDerecho.jsx` must mirror the Tailwind utility classes used in the `LeadCaptureEscaneo.jsx` component exactly (e.g. `py-20 px-6 bg-primary text-white relative overflow-hidden` for the main `<section>` element).
2. **Dynamic Background Adaptation**: Based on the observed assets, while the Escaneo component uses `/escaneo-hero-new.jpg?v=1`, the Derecho counterpart should feature `/derecho-hero.jpg` for its background overlay div class `bg-[url('/derecho-hero.jpg')]`.
3. **Copywriting & Link Customization**: 
   * The text in `<p>` should reference "aspectos legales" or "detalles legales" (i.e. *"Descarga el temario completo en PDF, conoce los detalles legales que cubriremos y recibe una sorpresa especial."*).
   * The WhatsApp contact link must request the temario for "Derecho Médico" instead of "Escaneo Digital". The URL-encoded message should be: `Hola,%20me%20gustar%C3%ADa%20recibir%20el%20temario%20en%20PDF%20del%20curso%20de%20Derecho%20M%C3%A9dico.`
4. **GSAP Animation Implementation**: To satisfy the guidelines for GSAP animations and guarantee resource cleanup, the proposed code must implement `gsap.context()` inside a React `useEffect` hook, with a cleanup function returning `ctx.revert()`. The elements to be animated (`h2`, `p`, and `a` button) will be targeted using the class `.lead-el` inside `sectionRef` to stagger their entrance nicely as the user scrolls them into view.

---

## 3. Caveats

* **Animation Presence**: The reference component `LeadCaptureEscaneo.jsx` does not actually use GSAP or ScrollTrigger animations. However, adding them to the proposed template for `LeadCaptureDerecho.jsx` aligns the component with the guidelines and standardizes it with other interactive sections on the page.
* **Asset Availability**: The design assumes that `/derecho-hero.jpg` is present in the public folder and is accessible as a background image, which is supported by its usage in `HeroDerecho.jsx`.

---

## 4. Conclusion

The proposed implementation for `src/components/derecho/LeadCaptureDerecho.jsx` successfully adapts the layout, Tailwind CSS configuration, and content structure from the reference `LeadCaptureEscaneo.jsx`, while introducing high-performance, safe GSAP ScrollTrigger animations with proper React lifecycle cleanups.

### Proposed Code Template

```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function LeadCaptureDerecho() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.lead-el',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/derecho-hero.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="lead-el font-serif italic text-3xl md:text-4xl mb-4">
          ¿Aún lo estás pensando?
        </h2>
        <p className="lead-el font-sans text-white/80 mb-8 text-lg">
          Descarga el temario completo en PDF, conoce los detalles legales que cubriremos y recibe una sorpresa especial.
        </p>
        <a 
          href="https://wa.me/19293430985?text=Hola,%20me%20gustar%C3%ADa%20recibir%20el%20temario%20en%20PDF%20del%20curso%20de%20Derecho%20M%C3%A9dico." 
          target="_blank" 
          rel="noopener noreferrer"
          className="lead-el inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
        >
          <FileText className="w-5 h-5" />
          <span>Quiero el temario en PDF</span>
        </a>
      </div>
    </section>
  );
}
```

---

## 5. Verification Method

To verify the design and code template:
1. **Source Inspection**: Compare the Tailwind class list on the `<section>`, background `div`, container `div`, headings, paragraphs, and anchor elements between `LeadCaptureEscaneo.jsx` and the proposed `LeadCaptureDerecho.jsx` above.
2. **GSAP Integration**: Confirm that `gsap.registerPlugin(ScrollTrigger)` is called once at module scope, `sectionRef` is attached to the `<section>`, and `gsap.context()` returns a cleanup function that calls `ctx.revert()` in `useEffect`.
3. **Compilation Check**: When the implementer creates the file at `src/components/derecho/LeadCaptureDerecho.jsx`, they can run:
   ```bash
   npm run build
   ```
   to confirm the file compiles cleanly with no syntax or React hook rule errors.
