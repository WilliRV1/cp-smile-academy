import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, ScanLine, Syringe, Compass, Layers, Laptop } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    id: 1,
    icon: ScanLine,
    title: "Fundamentos y Tecnología",
    topics: [
      { name: "Tipos de tecnología", desc: "Diferencias entre sistemas de triangulación, video en tiempo real y fotografía multifocal." },
      { name: "Formatos de archivo", desc: "Manejo, exportación y compatibilidad de archivos STL, OBJ y PLY." },
      { name: "Hardware y mantenimiento", desc: "Calibración del escáner, cuidado de las puntas y desinfección." }
    ]
  },
  {
    id: 2,
    icon: Syringe,
    title: "Preparación y Protocolos Clínicos",
    topics: [
      { name: "Manejo de tejidos", desc: "Técnicas de retracción gingival (hilos, pastas) y control de la saliva." },
      { name: "Diseño de preparaciones", desc: "Requisitos geométricos de los dientes tallados para facilitar la lectura del escáner." },
      { name: "Posición del operador", desc: "Ergonomía y ubicación del paciente para un acceso óptimo." }
    ]
  },
  {
    id: 3,
    icon: Compass,
    title: "Estrategias y Técnicas de Escaneo",
    topics: [
      { name: "Ruta de escaneo", desc: "Secuencia correcta de movimientos en el arco superior, inferior y registro oclusal." },
      { name: "Escaneo de tejidos blandos", desc: "Técnicas para capturar zonas edéntulas, paladar y frenillos." },
      { name: "Evitar distorsiones", desc: "Cómo prevenir saltos en la imagen o duplicación de superficies." }
    ]
  },
  {
    id: 4,
    icon: Layers,
    title: "Flujo de Trabajo y Aplicaciones Clínicas",
    topics: [
      { name: "Rehabilitación oral", desc: "Escaneo para coronas, puentes, carillas e incrustaciones." },
      { name: "Implantología", desc: "Uso de cuerpos de escaneo (scanbodies) y transferencia de perfiles de emergencia." },
      { name: "Ortodoncia", desc: "Modelos digitales para alineadores, análisis de espacio y simulación de tratamientos." }
    ]
  },
  {
    id: 5,
    icon: Laptop,
    title: "Software y Conectividad con el Laboratorio",
    topics: [
      { name: "Herramientas de edición", desc: "Recorte de excesos, detección de líneas de margen y análisis de contactos." },
      { name: "Envío de casos", desc: "Uso de plataformas en la nube (ej. Align Cloud, Medit Link) para la comunicación con el laboratorio técnico." }
    ]
  }
];

export default function SyllabusEscaneo() {
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
            Aprende un flujo de trabajo digital predecible, desde el escaneo inicial hasta el envío al laboratorio.
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
