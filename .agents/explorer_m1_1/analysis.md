# Analysis and Implementation Design: Derecho Médico Informational Components

## 1. Executive Summary
This document designs the implementation strategy for the first milestone of the "Derecho Médico" course landing page. Specifically, it provides detailed design specifications and code proposals for the following three subcomponents:
- `FAQDerecho.jsx`
- `SocialProofDerecho.jsx`
- `SyllabusDerecho.jsx`

These components will be created in `src/components/derecho/` and must replicate the exact layout, styling, and GSAP animations of the corresponding components in `src/components/escaneo/` (`FAQEscaneo.jsx`, `SocialProofEscaneo.jsx`, `SyllabusEscaneo.jsx`).

---

## 2. Technical Stack and Configuration
The project is built on the following technologies:
- **React 19.x** (Vite 8.x): Components must use modern React patterns, specifically standard hooks like `useState`, `useRef`, and `useEffect`.
- **Tailwind CSS v3.4**: Utilizing specific custom colors and fonts defined in `tailwind.config.js`:
  - **Colors**:
    - `primary`: `#2C3E50` (Azul Pizarra Oscuro)
    - `accent`: `#0A84FF` (Azul Médico/Zafiro)
    - `background`: `#F8F9FA` (Blanco/Gris Claro)
    - `dark`: `#1C1C1E` (Carbón)
  - **Fonts**:
    - `font-sans`: `"Plus Jakarta Sans"`, `sans-serif`
    - `font-serif`: `"Playfair Display"`, `serif` (used for premium headers, italics, and accents)
    - `font-mono`: `"JetBrains Mono"`, `monospace`
- **GSAP v3.15** with `ScrollTrigger`: Animations must be scoped using `gsap.context()` inside `useEffect` and cleaned up with `ctx.revert()` to prevent memory leaks and duplicate triggers in React's StrictMode.
- **Lucide React v1.23**: Vector icons used for UI controls and visual accents.

---

## 3. Component-by-Component Specifications

### A. FAQDerecho.jsx
- **Source Model**: `src/components/escaneo/FAQEscaneo.jsx`
- **Target File**: `src/components/derecho/FAQDerecho.jsx`
- **Design Intent**: Interactive FAQ accordion with a clean border, subtle shadow on active state, and smooth height expansion. GSAP scroll-triggered stagger animation on load.
- **Proposed FAQ Data**:
  1. **Q**: "¿Es necesario tener conocimientos jurídicos previos para asistir al curso?"
     - **A**: "No. El curso está diseñado específicamente para odontólogos y profesionales de la salud. Explicaremos los términos y conceptos legales de manera clara, práctica y aplicada a la consulta diaria."
  2. **Q**: "¿Debo llevar algún material o computador al curso?"
     - **A**: "No es estrictamente necesario, ya que el enfoque es práctico y analizaremos casos reales proyectados. Sin embargo, te recomendamos traer una libreta de notas o tu laptop si deseas registrar apuntes detallados."
  3. **Q**: "¿Cuáles son los métodos de pago aceptados?"
     - **A**: "Aceptamos transferencias bancarias y pagos electrónicos. Al hacer clic en el botón de reservar, nuestro equipo te enviará por WhatsApp los datos de la cuenta o el enlace de pago seguro para separar tu cupo."
  4. **Q**: "¿Se entrega algún tipo de certificación?"
     - **A**: "Sí, todos los participantes que completen el entrenamiento recibirán un certificado formal de asistencia avalado por C&P Smile Academy y sus mentores."

#### Proposed Code Structure
```jsx
import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQDerecho() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  const faqs = [
    {
      q: "¿Es necesario tener conocimientos jurídicos previos para asistir al curso?",
      a: "No. El curso está diseñado específicamente para odontólogos y profesionales de la salud. Explicaremos los términos y conceptos legales de manera clara, práctica y aplicada a la consulta diaria."
    },
    {
      q: "¿Debo llevar algún material o computador al curso?",
      a: "No es estrictamente necesario, ya que el enfoque es práctico y analizaremos casos reales proyectados. Sin embargo, te recomendamos traer una libreta de notas o tu laptop si deseas registrar apuntes detallados."
    },
    {
      q: "¿Cuáles son los métodos de pago aceptados?",
      a: "Aceptamos transferencias bancarias y pagos electrónicos. Al hacer clic en el botón de reservar, nuestro equipo te enviará por WhatsApp los datos de la cuenta o el enlace de pago seguro para separar tu cupo."
    },
    {
      q: "¿Se entrega algún tipo de certificación?",
      a: "Sí, todos los participantes que completen el entrenamiento recibirán un certificado formal de asistencia avalado por C&P Smile Academy y sus mentores."
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.faq-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white relative z-10 border-t border-black/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl text-primary tracking-tight mb-4">Preguntas Frecuentes</h2>
          <p className="font-sans text-dark/60 text-lg">Resolvemos tus dudas antes de que tomes la decisión final.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-primary shadow-md' : 'border-black/5 hover:border-black/10'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between focus:outline-none bg-white"
                >
                  <h3 className={`font-sans font-bold text-left md:text-lg transition-colors pr-4 ${isOpen ? 'text-primary' : 'text-dark'}`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-dark/60'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out bg-gray-50/50 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="font-sans text-dark/70 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

### B. SocialProofDerecho.jsx
- **Source Model**: `src/components/escaneo/SocialProofEscaneo.jsx`
- **Target File**: `src/components/derecho/SocialProofDerecho.jsx`
- **Design Intent**: A dark blue banner strip (`bg-primary`) displaying key statistical highlights in 3 columns. Animates the columns sequentially using GSAP ScrollTrigger.
- **Proposed Stats**:
  1. **Stat**: `+16`
     - **Label**: "Años de Experiencia Clínica"
  2. **Stat**: `100%`
     - **Label**: "Respaldo Legal y Ético"
  3. **Stat**: `2`
     - **Label**: "Universidades (Docencia)"

#### Proposed Code Structure
```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SocialProofDerecho() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.stat-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "+16", label: "Años de Experiencia Clínica" },
    { number: "100%", label: "Respaldo Legal y Ético" },
    { number: "2", label: "Universidades (Docencia)" },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-primary relative z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item flex flex-col items-center justify-center py-4 md:py-0 text-center">
              <span className="font-serif italic text-4xl md:text-5xl text-white mb-2">{stat.number}</span>
              <span className="font-sans text-white/70 uppercase tracking-widest text-xs font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### C. SyllabusDerecho.jsx
- **Source Model**: `src/components/escaneo/SyllabusEscaneo.jsx`
- **Target File**: `src/components/derecho/SyllabusDerecho.jsx`
- **Design Intent**: Premium curriculum layout utilizing a rounded card structure (`rounded-[3rem]`), custom icon containers, module indexes, and an expandable list of topics. Expandable section animates smoothly. GSAP is used to trigger entry animations on load.
- **Proposed Modules & Lucide Icons**:
  1. **Módulo 1**: "Marco Legal y Responsabilidad Odontológica" (Icon: `Scale` - representing law and balance)
     - *Responsabilidad Civil*: "Tipos de responsabilidad en la práctica odontológica y consecuencias legales."
     - *Consentimiento Informado*: "Requisitos legales, redacción y validez del consentimiento en tratamientos diagnósticos."
     - *Historia Clínica*: "Aspectos legales de la documentación de casos y custodia de la información médica."
  2. **Módulo 2**: "La Imagen Diagnóstica como Prueba Judicial" (Icon: `FileText` - representing documentation and evidence)
     - *Valor Probatorio*: "Validez jurídica de radiografías, tomografías y fotografías clínicas en un juicio."
     - *Alteración y Metadatos*: "Autenticidad de archivos digitales y riesgos de la manipulación de imágenes."
     - *Cadena de Custodia*: "Preservación de la evidencia digital desde la captura hasta el proceso legal."
  3. **Módulo 3**: "Normativa Sanitaria y Habilitación" (Icon: `Shield` - representing compliance and protection)
     - *Radioprotección*: "Normas legales vigentes sobre radiación ionizante y habilitación de equipos."
     - *Habilitación de Consultorios*: "Requisitos de las secretarías de salud para operar equipos de rayos X y escáneres."
     - *Protección de Datos*: "Normativa de Habeas Data aplicada a las imágenes de los pacientes."
  4. **Módulo 4**: "El Peritaje Odontológico" (Icon: `Gavel` - representing courts and judgements)
     - *El Rol del Perito*: "Funciones del odontólogo forense y perito en procesos por presunta mala práctica."
     - *Dictamen Pericial*: "Estructura, redacción y sustentación de un informe pericial basado en imágenes."
     - *Defensa en Juicio*: "Cómo sustentar la conducta profesional apoyándose en la evidencia diagnóstica."
  5. **Módulo 5**: "Análisis de Casos y Jurisprudencia" (Icon: `BookOpen` - representing study and cases)
     - *Fallas de Diagnóstico*: "Estudio de sentencias reales por errores de interpretación de imágenes."
     - *Demandas por Tratamiento*: "Análisis de casos donde la radiografía pre y postoperatoria salvó al profesional."
     - *Taller Práctico*: "Simulación de audiencia y defensa legal con casos reales presentados."

#### Proposed Code Structure
```jsx
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Scale, FileText, Shield, Gavel, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    id: 1,
    icon: Scale,
    title: "Marco Legal y Responsabilidad Odontológica",
    topics: [
      { name: "Responsabilidad Civil", desc: "Tipos de responsabilidad en la práctica odontológica y consecuencias legales." },
      { name: "Consentimiento Informado", desc: "Requisitos legales, redacción y validez del consentimiento en tratamientos diagnósticos." },
      { name: "Historia Clínica", desc: "Aspectos legales de la documentación de casos y custodia de la información médica." }
    ]
  },
  {
    id: 2,
    icon: FileText,
    title: "La Imagen Diagnóstica como Prueba Judicial",
    topics: [
      { name: "Valor Probatorio", desc: "Validez jurídica de radiografías, tomografías y fotografías clínicas en un juicio." },
      { name: "Alteración y Metadatos", desc: "Autenticidad de archivos digitales y riesgos de la manipulación de imágenes." },
      { name: "Cadena de Custodia", desc: "Preservación de la evidencia digital desde la captura hasta el proceso legal." }
    ]
  },
  {
    id: 3,
    icon: Shield,
    title: "Normativa Sanitaria y Habilitación",
    topics: [
      { name: "Radioprotección", desc: "Normas legales vigentes sobre radiación ionizante y habilitación de equipos." },
      { name: "Habilitación de Consultorios", desc: "Requisitos de las secretarías de salud para operar equipos de rayos X y escáneres." },
      { name: "Protección de Datos", desc: "Normativa de Habeas Data aplicada a las imágenes de los pacientes." }
    ]
  },
  {
    id: 4,
    icon: Gavel,
    title: "El Peritaje Odontológico",
    topics: [
      { name: "El Rol del Perito", desc: "Funciones del odontólogo forense y perito en procesos por presunta mala práctica." },
      { name: "Dictamen Pericial", desc: "Estructura, redacción y sustentación de un informe pericial basado en imágenes." },
      { name: "Defensa en Juicio", desc: "Cómo sustentar la conducta profesional apoyándose en la evidencia diagnóstica." }
    ]
  },
  {
    id: 5,
    icon: BookOpen,
    title: "Análisis de Casos y Jurisprudencia",
    topics: [
      { name: "Fallas de Diagnóstico", desc: "Estudio de sentencias reales por errores de interpretación de imágenes." },
      { name: "Demandas por Tratamiento", desc: "Análisis de casos donde la radiografía pre y postoperatoria salvó al profesional." },
      { name: "Taller Práctico", desc: "Simulación de audiencia y defensa legal con casos reales presentados." }
    ]
  }
];

export default function SyllabusDerecho() {
  const [openId, setOpenId] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.syll-el', 
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="temario" ref={sectionRef} className="py-24 px-6 bg-white relative z-10 rounded-[3rem] shadow-sm -mt-8 border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 syll-el">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Curriculum
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-primary tracking-tight mb-4">
            Temario del Curso
          </h2>
          <p className="font-sans text-dark/60 text-lg max-w-2xl mx-auto">
            Blinda tu ejercicio profesional y domina los aspectos legales de la imagenología diagnóstica.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((mod, index) => {
            const isOpen = openId === mod.id;
            const Icon = mod.icon;
            return (
              <div 
                key={mod.id} 
                className={`syll-el border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary shadow-lg bg-white' : 'border-black/5 bg-gray-50/50 hover:border-black/10 hover:bg-gray-50'}`}
              >
                <button 
                  onClick={() => setOpenId(isOpen ? null : mod.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-white text-primary border border-black/5 shadow-sm'}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-dark/40 uppercase font-bold tracking-widest mb-1">Módulo {index + 1}</p>
                      <h3 className={`font-sans font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-primary' : 'text-dark'}`}>
                        {mod.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-dark/40 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <div className="pl-16 space-y-4">
                      {mod.topics.map((topic, i) => (
                        <div key={i} className="relative">
                          <div className="absolute -left-6 top-2 w-2 h-2 rounded-full bg-accent/30"></div>
                          <h4 className="font-sans font-bold text-dark text-sm md:text-base mb-1">{topic.name}</h4>
                          <p className="font-sans text-dark/60 text-sm leading-relaxed">{topic.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

## 4. Implementation Recommendations & Verification
1. **File Locations**: Ensure components are created in:
   - `src/components/derecho/FAQDerecho.jsx`
   - `src/components/derecho/SocialProofDerecho.jsx`
   - `src/components/derecho/SyllabusDerecho.jsx`
2. **Layout Integrity**: Maintain strict styling using Tailwind utility classes as mapped from reference components to match the layout exactly (e.g., specific padding, margins, flex/grid layouts, borders, and margins).
3. **Animations**: Double check the use of `gsap.context()` inside the `useEffect` block, and verify that the cleanup function reverts the context.
4. **No-Modify constraint**: In this exploration phase, do not create or modify files in `src/`. Let the implementation agent carry out the actual code creation.
