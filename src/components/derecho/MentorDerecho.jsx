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
