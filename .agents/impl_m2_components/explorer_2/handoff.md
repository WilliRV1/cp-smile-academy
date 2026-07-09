# Handoff Report: Proposed Implementation for `src/components/derecho/MentorDerecho.jsx`

## 1. Observation
I analyzed the reference component `src/components/escaneo/MentorEscaneo.jsx` which contains:
- Structural markup (Tailwind classes for a single-mentor card layout).
- A GSAP context-based ScrollTrigger animation that reveals `.mentor-card` elements when the section enters the viewport.
- The details of the mentor, which were:
  - Name: `Dr. John Freddy Prado Giraldo`
  - Credentials/Pill: `Odontólogo Integral & MSc. Derecho Médico`
  - Image: `https://cypsmile.online/doctor/IMG_0582rojo.jpg`

Verbatim details from `src/components/escaneo/MentorEscaneo.jsx`:
- Line 2: `import gsap from 'gsap';`
- Line 3: `import { ScrollTrigger } from 'gsap/ScrollTrigger';`
- Line 5: `gsap.registerPlugin(ScrollTrigger);`
- Lines 10-26 (GSAP context inside `useEffect`):
```javascript
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.mentor-card',
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
```
- Line 29 (section element classes): `className="py-32 px-6 bg-white relative z-10 border-b border-black/5"`
- Line 41 (mentor card classes): `className="mentor-card group flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-12 max-w-4xl"`
- Line 46 (image URL): `src="https://cypsmile.online/doctor/IMG_0582rojo.jpg"`
- Line 53-55 (badge): 
```javascript
<div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
  Odontólogo Integral & MSc. Derecho Médico
</div>
```
- Line 56 (name heading): `<h3 className="font-serif italic text-3xl md:text-4xl text-primary mb-4">Dr. John Freddy Prado Giraldo</h3>`

Additionally, I inspected `src/components/derecho/HeroDerecho.jsx`:
- Line 94 (Name used): `Dr. John Freddy Prado`
- Line 100 (Credentials used): `Odontólogo Integral & MSc. Derecho Médico`
- Line 91 (Image URL used): `https://cypsmile.online/doctor/IMG_0582rojo.jpg`

## 2. Logic Chain
1. The target component `src/components/derecho/MentorDerecho.jsx` needs to mirror the exact structure, animations, and Tailwind styling of the reference component `src/components/escaneo/MentorEscaneo.jsx`.
2. The mentor's name needs to be modified from `"Dr. John Freddy Prado Giraldo"` to `"Dr. John Freddy Prado"`.
3. The credentials pill/badge `"Odontólogo Integral & MSc. Derecho Médico"` matches the credentials currently referenced in `HeroDerecho.jsx`, and is retained for consistency.
4. The GSAP animation hook must utilize `gsap.context()` inside a `useEffect` return cleanup block to match the clean resource disposal logic exactly.
5. In compliance with the rules, no files under `src/` should be modified, only a template for `src/components/derecho/MentorDerecho.jsx` must be designed and documented.

## 3. Caveats
- No other code files in `src/` have been modified. An implementer agent will need to write the target file `src/components/derecho/MentorDerecho.jsx` and import/render it inside the corresponding Derecho course page (when created).
- The image source uses the existing hosted image `https://cypsmile.online/doctor/IMG_0582rojo.jpg` as in the reference, which features Dr. John Freddy Prado.

## 4. Conclusion
The proposed target component `src/components/derecho/MentorDerecho.jsx` has been designed to exactly match the styling, layout, responsive behavior, and GSAP animations of `src/components/escaneo/MentorEscaneo.jsx`, while updating the mentor name to `Dr. John Freddy Prado`.

### Proposed Code Template for `src/components/derecho/MentorDerecho.jsx`
```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MentorDerecho() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.mentor-card',
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-white relative z-10 border-b border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight mb-4">
            Aprende del <span className="font-serif italic text-accent">Experto.</span>
          </h2>
          <p className="font-sans text-dark/60 max-w-2xl mx-auto text-lg">
            Un perfil interdisciplinario que garantiza el máximo nivel de detalle técnico y precisión digital.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="mentor-card group flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-12 max-w-4xl">
            {/* Image Container with premium frame */}
            <div className="relative w-56 h-56 md:w-80 md:h-80 flex-shrink-0 rounded-[2rem] overflow-hidden shadow-2xl border border-black/5">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img 
                src="https://cypsmile.online/doctor/IMG_0582rojo.jpg" 
                alt="Dr. John Freddy Prado" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col items-center md:items-start justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Odontólogo Integral & MSc. Derecho Médico
              </div>
              <h3 className="font-serif italic text-3xl md:text-4xl text-primary mb-4">Dr. John Freddy Prado</h3>
              <p className="font-sans text-dark/70 leading-relaxed mb-6">
                Docente universitario con más de 16 años de trayectoria. Combina su experticia en odontología restaurativa y tecnología digital con una sólida formación legal para garantizar la máxima seguridad, ética y precisión en cada flujo de trabajo.
              </p>
              
              <ul className="space-y-2 text-sm font-sans text-dark/80 text-left">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> 16+ Años de experiencia</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Docente Universitario (Univalle & USC)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Experto en Odontología Restaurativa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 5. Verification Method
- **Static Verification**:
  1. Inspect the written template code. Confirm that it defines `MentorDerecho` and exports it as default.
  2. Verify that `gsap.context` is registered inside `useEffect` and returned as `() => ctx.revert()`.
  3. Verify that the name inside the `alt` and `<h3>` tags is exactly `Dr. John Freddy Prado`.
  4. Verify that the credentials badge remains `Odontólogo Integral & MSc. Derecho Médico`.
- **Runtime Verification**:
  Once the Implementer writes this component to `src/components/derecho/MentorDerecho.jsx`:
  1. Run `npm run lint` in `landing-page` directory to check for syntax/linting errors (via `oxlint`).
  2. Run `npm run build` to verify compiling success.
