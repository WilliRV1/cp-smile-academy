import { useState, useRef, useEffect } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Syllabus() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  const modules = [
    {
      title: "Módulo 1: Fundamentos de Tomografía Cone Beam",
      content: [
        "Historia de la tomografía",
        "Formación de la imagen e isometría",
        "Principios físicos: Kilovoltaje y Miliamperaje",
        "Píxel vs Vóxel",
        "Manejo de FOV (Campo de visión) y tamaño de vóxel"
      ]
    },
    {
      title: "Módulo 2: Anatomía Normal en 3D",
      content: [
        "Reconocimiento de la anatomía del maxilar superior",
        "Senos maxilares, cornetes y fosas nasales",
        "Conducto naso-palatino",
        "Anatomía de la mandíbula: conducto dentario inferior",
        "Variantes anatómicas y foramen mentoniano"
      ]
    },
    {
      title: "Módulo 3: Interpretación y Patología",
      content: [
        "Lesiones radiolúcidas, radiopacas y mixtas",
        "Límites, márgenes y corticalización de lesiones",
        "Sistematización de la lectura: cómo no omitir detalles",
        "Artefactos y errores comunes en interpretación",
        "Navegación e identificación en los 3 cortes del espacio"
      ]
    },
    {
      title: "Módulo 4: Aplicaciones Clínicas y Taller",
      content: [
        "Endodoncia: evaluación radicular y fracturas",
        "Periodoncia e implantología: densidad y mediciones",
        "Cirugía: Ubicación 3D de terceros molares",
        "Workshop en software Blue Sky 4 (Traer archivo DICOM)"
      ]
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.syllabus-header', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
      gsap.fromTo('.accordion-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="syllabus-header text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="font-serif italic text-4xl md:text-5xl text-primary mb-6">Plan de Estudios Detallado</h2>
          <p className="font-sans text-dark/70 text-lg max-w-2xl mx-auto">
            Un recorrido clínico y analítico profundo. Aprenderás a ir más allá de lo evidente y dominarás el diagnóstico tridimensional avanzado.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((mod, idx) => (
            <div 
              key={idx} 
              className={`accordion-item border border-black/5 rounded-2xl overflow-hidden bg-white transition-all duration-300 ${openIndex === idx ? 'shadow-lg' : 'hover:shadow-md'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className={`font-sans font-bold text-lg md:text-xl transition-colors ${openIndex === idx ? 'text-accent' : 'text-primary'}`}>
                  {mod.title}
                </h3>
                <ChevronDown className={`w-6 h-6 text-dark/40 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-accent' : ''}`} />
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: openIndex === idx ? '500px' : '0', opacity: openIndex === idx ? 1 : 0 }}
              >
                <div className="px-6 pb-6 pt-2">
                  <ul className="space-y-3">
                    {mod.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-sans text-dark/70">
                        <span className="text-accent/50 text-sm mt-1">■</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
