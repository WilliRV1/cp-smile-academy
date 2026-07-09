# Analysis & Implementation Strategy: "Derecho Médico" Subcomponents
*Author: explorer_m1_3*
*Date: July 9, 2026*

This report outlines the analysis of existing components in `src/components/escaneo/` and proposes the implementation strategy for their corresponding variants in `src/components/derecho/`.

---

## 1. Architectural & Animation Overview
The landing page application is built using:
- **React 19.x & Vite 8.x**
- **Tailwind CSS** with custom configuration:
  - `primary` color: `#2C3E50` (Slate Blue)
  - `accent` color: `#0A84FF` (Medical Blue)
  - `dark` color: `#1C1C1E` (Charcoal)
  - `background` color: `#F8F9FA` (Off-white)
  - Fonts: `sans` (Plus Jakarta Sans), `serif` (Playfair Display), `mono` (JetBrains Mono)
- **GSAP (GreenSock Animation Platform) + ScrollTrigger** for scroll-driven entry animations.
- **Lucide React** for iconography.

All `derecho` components will follow the styling patterns of the `escaneo` variants. Animations must utilize a standard `gsap.context()` wrapper to ensure correct cleanup on component unmount (reverting animations via `ctx.revert()`).

---

## 2. Component-by-Component Analysis & Blueprint

### A. FAQEscaneo.jsx → FAQDerecho.jsx
#### 1. Structure & Layout
- A single-column layout centered in a `max-w-3xl` container.
- Uses local state `openIndex` to manage the expanded accordion item.
- Styling elements: rounded containers (`rounded-2xl`), subtle borders (`border-black/5` or `border-primary` when open), custom transitions.

#### 2. GSAP Animations
- Animates each `.faq-item` using `gsap.fromTo` with a scroll trigger:
  - Initial: `{ y: 20, opacity: 0 }`
  - Target: `{ y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }`
  - ScrollTrigger: `trigger: sectionRef.current`, `start: 'top 75%'`.

#### 3. Proposed Adaptations for `FAQDerecho.jsx`
- Replace Escaneo-centric questions with medical-legal FAQs:
  1. **Q**: `¿Es necesario tener conocimientos legales previos?`
     - **A**: `No. El curso está diseñado para odontólogos, especialistas y profesionales de la salud sin formación en leyes. Se explicarán los conceptos jurídicos de forma práctica, directa y aplicable a tu ejercicio diario.`
  2. **Q**: `¿El curso incluye análisis de casos reales?`
     - **A**: `Sí, analizaremos casos reales de demandas y procesos de responsabilidad civil médica en odontología para comprender cómo la historia clínica y las imágenes actúan como pruebas decisivas.`
  3. **Q**: `¿Cuáles son los métodos de pago aceptados?`
     - **A**: `Aceptamos transferencias bancarias y pagos electrónicos. Al hacer clic en el botón de reservar, nuestro equipo te enviará por WhatsApp los datos de la cuenta o el enlace de pago seguro para separar tu cupo.`
  4. **Q**: `¿Se entrega algún tipo de certificación?`
     - **A**: `Sí, todos los participantes que completen el entrenamiento recibirán un certificado formal de asistencia avalado por C&P Smile Academy y firmado por el Dr. John Freddy Prado (MSc. Derecho Médico).`

---

### B. SocialProofEscaneo.jsx → SocialProofDerecho.jsx
#### 1. Structure & Layout
- Horizontal stats banner inside a `py-12 bg-primary` section.
- Grid with `grid-cols-1 md:grid-cols-3` and white/20 divider borders (`divide-y md:divide-y-0 md:divide-x`).
- Displays three key numeric statistics with labels.

#### 2. GSAP Animations
- Animates `.stat-item` using `gsap.fromTo`:
  - Initial: `{ y: 30, opacity: 0 }`
  - Target: `{ y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }`
  - ScrollTrigger: `trigger: sectionRef.current`, `start: 'top 85%'`.

#### 3. Proposed Adaptations for `SocialProofDerecho.jsx`
- Adapt stats to reflect Dr. John Freddy Prado's legal-medical profile:
  1. Stat 1: `+16` / `Años de Experiencia Clínica` (Matches MentorEscaneo and HeroDerecho)
  2. Stat 2: `100%` / `Enfoque Práctico y Preventivo` (Highlights applicability to legal defense)
  3. Stat 3: `2` / `Universidades (Docencia)` (Reference to Univalle & USC from his bio)

---

### C. SyllabusEscaneo.jsx → SyllabusDerecho.jsx
#### 1. Structure & Layout
- A premium-themed accordion component within a `max-w-4xl` container.
- Features modules that expand to show sub-topics.
- Uses `ChevronDown` for expand indicators and custom module icons from `lucide-react`.

#### 2. GSAP Animations
- Animates `.syll-el` using `gsap.fromTo`:
  - Initial: `{ y: 50, opacity: 0 }`
  - Target: `{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }`
  - ScrollTrigger: `trigger: sectionRef.current`, `start: 'top 75%'`.

#### 3. Proposed Adaptations for `SyllabusDerecho.jsx`
- Use Lucide icons: `Scale` (Module 1), `FileText` (Module 2), `FileSignature` (Module 3), `Image` (Module 4), `ChevronDown` (Accordion toggle).
- Replace Escaneo modules with 4 core Derecho Médico modules:
  1. **Módulo 1: Responsabilidad Civil en Odontología** (Icon: `Scale`)
     - *Temas*:
       - `Marco legal y normativo`: Deberes y obligaciones jurídicas del odontólogo en la práctica clínica.
       - `Tipos de culpa médica`: Impericia, imprudencia, negligencia e inobservancia de reglamentos.
       - `Daño y nexo causal`: Cómo se configuran las reclamaciones de pacientes y demandas de responsabilidad civil.
  2. **Módulo 2: La Historia Clínica como Documento Legal** (Icon: `FileText`)
     - *Temas*:
       - `Requisitos de validez`: Diligenciamiento correcto, veracidad, completitud y custodia segura.
       - `Normatividad de archivo`: Tiempos de conservación legal y acceso a la historia clínica.
       - `Consecuencias de omisión`: El impacto legal de registros incompletos o mal elaborados en un proceso jurídico.
  3. **Módulo 3: Consentimiento Informado Expreso** (Icon: `FileSignature`)
     - *Temas*:
       - `Definición y alcance`: Autonomía del paciente, deber de información y límites del consentimiento.
       - `Redacción y personalización`: Diseño de formatos de consentimiento adaptados a tratamientos específicos.
       - `Validez ante litigios`: Por qué un formato genérico no te protege y cómo firmarlo adecuadamente.
  4. **Módulo 4: La Imagen Diagnóstica como Prueba Judicial** (Icon: `Image`)
     - *Temas*:
       - `Valor probatorio`: Radiografías, tomografías y fotografías clínicas ante un juez.
       - `Custodia e integridad`: Formatos no editables y aseguramiento de la cadena de custodia de la imagen.
       - `Defensa judicial efectiva`: Cómo sustentar técnicamente tus decisiones clínicas basadas en imágenes.

---

## 3. Recommended Code Structures

Here are the complete structures to be used by the implementer when writing the code.

### FAQDerecho.jsx Structure Sketch
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
      q: "¿Es necesario tener conocimientos legales previos?",
      a: "No. El curso está diseñado para odontólogos, especialistas y profesionales de la salud sin formación en leyes. Se explicarán los conceptos jurídicos de forma práctica, directa y aplicable a tu ejercicio diario."
    },
    {
      q: "¿El curso incluye análisis de casos reales?",
      a: "Sí, analizaremos casos reales de demandas y de responsabilidad civil médica en odontología para comprender cómo la historia clínica y las imágenes actúan como pruebas decisivas."
    },
    {
      q: "¿Cuáles son los métodos de pago aceptados?",
      a: "Aceptamos transferencias bancarias y pagos electrónicos. Al hacer clic en reservar, nuestro equipo te enviará por WhatsApp los datos de la cuenta o el enlace de pago seguro para separar tu cupo."
    },
    {
      q: "¿Se entrega algún tipo de certificación?",
      a: "Sí, todos los participantes que completen el entrenamiento recibirán un certificado formal de asistencia avalado por C&P Smile Academy y firmado por el Dr. John Freddy Prado (MSc. Derecho Médico)."
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

### SocialProofDerecho.jsx Structure Sketch
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
    { number: "100%", label: "Enfoque Práctico y Preventivo" },
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

### SyllabusDerecho.jsx Structure Sketch
```jsx
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Scale, FileText, FileSignature, Image } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    id: 1,
    icon: Scale,
    title: "Responsabilidad Civil en Odontología",
    topics: [
      { name: "Marco legal y normativo", desc: "Deberes y obligaciones jurídicas del odontólogo en la práctica clínica." },
      { name: "Tipos de culpa médica", desc: "Impericia, imprudencia, negligencia e inobservancia de reglamentos." },
      { name: "Daño y nexo causal", desc: "Cómo se configuran las reclamaciones de pacientes y demandas de responsabilidad civil." }
    ]
  },
  {
    id: 2,
    icon: FileText,
    title: "La Historia Clínica como Documento Legal",
    topics: [
      { name: "Requisitos de validez", desc: "Diligenciamiento correcto, veracidad, completitud y custodia segura." },
      { name: "Normatividad de archivo", desc: "Tiempos de conservación legal y acceso a la historia clínica." },
      { name: "Consecuencias de omisión", desc: "El impacto legal de registros incompletos o mal elaborados en un proceso jurídico." }
    ]
  },
  {
    id: 3,
    icon: FileSignature,
    title: "Consentimiento Informado Expreso",
    topics: [
      { name: "Definición y alcance", desc: "Autonomía del paciente, deber de información y límites del consentimiento." },
      { name: "Redacción y personalización", desc: "Diseño de formatos de consentimiento adaptados a tratamientos específicos." },
      { name: "Validez ante litigios", desc: "Por qué un formato genérico no te protege y cómo firmarlo adecuadamente." }
    ]
  },
  {
    id: 4,
    icon: Image,
    title: "La Imagen Diagnóstica como Prueba Judicial",
    topics: [
      { name: "Valor probatorio", desc: "Radiografías, tomografías y fotografías clínicas ante un juez." },
      { name: "Custodia e integridad", desc: "Formatos no editables y aseguramiento de la cadena de custodia de la imagen." },
      { name: "Defensa judicial efectiva", desc: "Cómo sustentar técnicamente tus decisiones clínicas basadas en imágenes." }
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
            Aprende a proteger legalmente tu ejercicio profesional fundamentando tus decisiones clínicas en la imagen diagnóstica.
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
