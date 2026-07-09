# Handoff Report - Explorer 3

## 1. Observation

I inspected the following files in the workspace:
- **Reference component (Pricing)**: `src/components/escaneo/PricingEscaneo.jsx`
  - In `PricingEscaneo.jsx`, GSAP is imported and used with `gsap.context()` inside a `useEffect` hook:
    ```jsx
    useEffect(() => {
      let ctx = gsap.context(() => {
        gsap.fromTo('.pricing-card', 
          { y: 60, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            }
          }
        );
        // ...
      }, sectionRef);

      return () => ctx.revert();
    }, []);
    ```
  - The pricing card details:
    - Next edition badge: `Próxima Edición: 18 de Julio`
    - Course Title: `Escaneo Intraoral`
    - Price: `$200.000 COP`
    - Bullet points:
      - `Teórico-Práctico (4 Horas Intensivas)`
      - `Acceso a equipos de escaneo de última tecnología`
      - Address block containing Maps link: `https://maps.app.goo.gl/ArxrDqiW5c6tRnqT7` pointing to `C&P SMILE` in Cali, Valle del Cauca.
    - WhatsApp Link: `https://wa.me/19293430985?text=Hola,%20me%20gustar%C3%ADa%20inscribirme%20al%20Curso%20de%20Escaneo%20Digital.`
    - An embedded Google Maps iframe pointing to the coordinates for `C&P SMILE`.

- **Reference component (Sticky CTA)**: `src/components/escaneo/StickyCTAEscaneo.jsx`
  - This component is a mobile-only fixed button at the bottom of the viewport showing/hiding on scroll.
  - The WhatsApp link points to: `https://wa.me/19293430985?text=Hola,%20me%20gustar%C3%ADa%20inscribirme%20al%20Curso%20de%20Escaneo%20Digital.`

- **Context component for target topic**: `src/components/derecho/HeroDerecho.jsx`
  - WhatsApp message defined as:
    ```jsx
    const whatsappMessage = "Hola, me gustaría inscribirme al Curso de Derecho Médico y la Imagen Diagnóstica.";
    const whatsappLink = `https://wa.me/19293430985?text=${encodeURIComponent(whatsappMessage)}`;
    ```
  - Time schedule defined as: `18 de Julio`, `3:00 PM - 5:00 PM` (which equals 2 hours).

- **Context component for syllabus**: `src/components/derecho/SyllabusDerecho.jsx`
  - Modules listed: Responsabilidad Odontológica, Historia Clínica, Consentimiento Informado, Imagen como Prueba, Análisis de Casos y Peritaje.

- **Vite Project Build/Lint Tools**: `package.json`
  - The build script is `vite build`, and the lint script is `oxlint`.

---

## 2. Logic Chain

1. **Alignment of Component Styling and Animations**:
   To ensure that the style, layout, responsive behavior, and GSAP animations match exactly:
   - The JSX structure, Tailwind classes, and relative elements in the target `PricingDerecho.jsx` and `StickyCTADerecho.jsx` must be kept identical to those in `PricingEscaneo.jsx` and `StickyCTAEscaneo.jsx`.
   - The GSAP animation hook structure with `gsap.context()` inside `useEffect` must be replicated word-for-word in `PricingDerecho.jsx` to guarantee cleanup and identical animations.

2. **Schedule and Pricing Adaptations**:
   - The date for the target components is set to `18 de Julio`, and the time is `3:00 PM - 5:00 PM`.
   - Since this session is 2 hours long, the first bullet point is updated to `Teórico-Práctico (2 Horas Intensivas)` (down from `4 Horas Intensivas` in the Escaneo course).
   - The price must be updated from `$200.000` to `$230.000` COP.

3. **WhatsApp Link Configuration**:
   - The message template must match the message defined in the other Derecho components: `"Hola, me gustaría inscribirme al Curso de Derecho Médico y la Imagen Diagnóstica."`
   - Using JavaScript's template literal dynamic expression `encodeURIComponent` avoids static encoding bugs and handles characters correctly across all platforms.

4. **Syllabus and Location Consistency**:
   - The second bullet point is updated from `Acceso a equipos de escaneo de última tecnología` to a relevant value from the Derecho Médico course syllabus: `Modelos prácticos de consentimiento e historia clínica legal`.
   - The third bullet point (location & maps link) and the embedded maps iframe are kept exactly identical to `PricingEscaneo.jsx` since the physical training venue is the same (`C&P SMILE` clinic in Cali).

---

## 3. Caveats

- **External Packages**: The project uses GSAP `^3.15.0` and Lucide icons. These are already configured and imported in the workspace, so no package modifications are necessary.
- **Vite / build environment**: No browser-specific viewport quirks are assumed; standard Vite styling via Tailwind CSS is utilized.

---

## 4. Conclusion

The target components `PricingDerecho.jsx` and `StickyCTADerecho.jsx` can be implemented with minimal changes to structural markup and layout styles, keeping all GSAP configuration intact. We provide the fully designed proposed templates below:

### Proposed Template for `src/components/derecho/PricingDerecho.jsx`

```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PricingDerecho() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.pricing-card', 
        { y: 60, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );

      gsap.fromTo('.pricing-btn',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const whatsappMessage = "Hola, me gustaría inscribirme al Curso de Derecho Médico y la Imagen Diagnóstica.";
  const whatsappLink = `https://wa.me/19293430985?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="pricing" ref={sectionRef} className="py-32 px-6 bg-background relative z-20 rounded-t-[3rem] -mt-10 border-t border-black/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif italic text-4xl md:text-5xl text-primary mb-6">Empezar el Nivel Superior</h2>
        <p className="font-sans text-dark/70 mb-12 max-w-xl mx-auto text-lg">
          Únete a nuestro grupo intensivo. Domina el marco legal y protege tu práctica clínica con el respaldo de la imagen diagnóstica.
        </p>
        
        <div className="pricing-card bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5 relative overflow-hidden text-left opacity-0 translate-y-8">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Próxima Edición: 18 de Julio
              </div>
              <h3 className="font-sans font-bold text-3xl text-primary mb-2">Derecho Médico</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-sans font-bold text-4xl md:text-5xl text-dark">$230.000</span>
                <span className="font-sans text-dark/50">COP</span>
              </div>
              
              <ul className="space-y-3 font-sans text-sm text-dark/80 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>Teórico-Práctico (2 Horas Intensivas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>Modelos prácticos de consentimiento e historia clínica legal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span>Cl. 52 Nte. #2 DN 05, La Merced, Cali, Valle del Cauca</span>
                    <a href="https://maps.app.goo.gl/ArxrDqiW5c6tRnqT7" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline mt-0.5">Ver en Google Maps</a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex-shrink-0 flex flex-col items-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="pricing-btn magnetic-button w-full md:w-auto bg-primary text-white px-8 py-5 rounded-[2rem] font-sans font-bold text-lg inline-flex items-center justify-center shadow-xl mb-4 hover:shadow-2xl transition-shadow opacity-0">
                <span className="relative z-10">Reservar mi cupo</span>
              </a>
              <p className="font-mono text-xs text-dark/40 text-center">Cupos súper limitados</p>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-black/10 shadow-inner relative z-10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7964.904553234545!2d-76.51143359999999!3d3.4821305999999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a74dea1b9183%3A0x718d1bd2444e9bd5!2sC%26P%20SMILE!5e0!3m2!1ses-419!2sco!4v1783367959885!5m2!1ses-419!2sco" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Proposed Template for `src/components/derecho/StickyCTADerecho.jsx`

```jsx
import { useEffect, useState } from 'react';

export default function StickyCTADerecho() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = "Hola, me gustaría inscribirme al Curso de Derecho Médico y la Imagen Diagnóstica.";
  const whatsappLink = `https://wa.me/19293430985?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-50 p-4 bg-white/90 backdrop-blur-md border-t border-black/10 transform transition-transform duration-300 md:hidden flex justify-center ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <a 
        href={whatsappLink}
        target="_blank" 
        rel="noopener noreferrer" 
        className="magnetic-button w-full bg-primary text-white py-4 rounded-[2rem] font-sans font-bold text-lg text-center shadow-2xl active:scale-95 transition-transform"
      >
        <span className="relative z-10">Reservar mi cupo</span>
      </a>
    </div>
  );
}
```

---

## 5. Verification Method

Once the implementer creates the files `src/components/derecho/PricingDerecho.jsx` and `src/components/derecho/StickyCTADerecho.jsx` and integrates them into the application pages (e.g. `src/pages/Derecho.jsx` or similar), verify as follows:

1. **Syntax and Code Quality checks**:
   Run the project linter:
   ```bash
   npm run lint
   ```
   No syntax or parsing errors should be reported for either component.

2. **Vite Build Verification**:
   Build the project to verify successful compiling and assets bundle creation:
   ```bash
   npm run build
   ```
   Check that Vite compiles successfully with no missing export/import references.

3. **Visual & Behavior Inspections**:
   - Start the local dev server:
     ```bash
     npm run dev
     ```
   - Scroll down through the page and verify that:
     - The pricing card elements fade and slide in from the bottom when `PricingDerecho` is scrolled into view (at top 75% trigger).
     - The fixed sticky CTA container slides up from the bottom of the screen on viewport width `< 768px` (mobile viewport) after scrolling down `300px`, and slides down when scrolling back up.
     - The WhatsApp link in both components successfully directs to `https://wa.me/19293430985` with the prefilled message `"Hola, me gustaría inscribirme al Curso de Derecho Médico y la Imagen Diagnóstica."`.
