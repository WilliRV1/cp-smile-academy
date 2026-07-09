import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Scale, Shield, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    id: 1,
    icon: FileText,
    title: "Marco Legal y Documentación Clínica",
    topics: [
      { name: "La Historia Clínica", desc: "Marco legal y normativo aplicable al diligenciamiento y custodia del expediente clínico." },
      { name: "El Consentimiento Informado", desc: "Requisitos éticos y legales para un consentimiento válido y específico en diagnóstico e intervenciones." },
      { name: "Garantía de Privacidad", desc: "Manejo de datos personales sensibles y almacenamiento seguro de imágenes diagnósticas y modelos 3D." }
    ]
  },
  {
    id: 2,
    icon: Scale,
    title: "La Imagen Diagnóstica como Prueba Judicial",
    topics: [
      { name: "Valor Probatorio", desc: "La validez jurídica de radiografías, tomografías (CBCT) y archivos de escaneo intraoral (STL/PLY)." },
      { name: "Requisitos de Calidad", desc: "Estándares clínicos y técnicos mínimos exigidos por peritos para que una imagen sirva como defensa." },
      { name: "Hallazgos Incidentales", desc: "Responsabilidad legal del odontólogo frente al diagnóstico y reporte de patologías no sospechadas." }
    ]
  },
  {
    id: 3,
    icon: Shield,
    title: "Prevención de Riesgos y Defensa Legal",
    topics: [
      { name: "Responsabilidad Profesional", desc: "Análisis de casos reales de demandas originadas por errores de diagnóstico u omisión en imágenes." },
      { name: "Protocolo ante Reclamaciones", desc: "Cómo actuar de forma inmediata y legal ante una queja de la Secretaría de Salud o demanda judicial." },
      { name: "Blindaje Contractual", desc: "Contratos de prestación de servicios y pólizas de responsabilidad civil para la protección del ejercicio profesional." }
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
            Aprende a blindar legal y éticamente tu práctica profesional mediante el uso correcto de las imágenes diagnósticas.
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
