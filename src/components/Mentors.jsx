import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Mentors() {
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

  const mentors = [
    {
      name: "Dr. Jorge Bonilla",
      specialty: "Radiología Oral y Maxilofacial",
      bio: "Especialista por la Universidad de Chile. Docente universitario con 17 años de trayectoria en programas de odontología en la ciudad de Cali. Experto en interpretación diagnóstica avanzada en imágenes orales y CBCT.",
      image: "/jorge_bonilla.png"
    },
    {
      name: "Dr. Héctor Arboleda F.",
      specialty: "Implantología Oral",
      bio: "Odontólogo con más de 10 años de experiencia, Especialista en Implantología Oral y Abogado con Maestría en Derecho Médico. Combina la precisión quirúrgica con un riguroso estándar legal y clínico.",
      image: "/hector_arboleda.png"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-white relative z-10 border-b border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight mb-4">
            Aprende de los <span className="font-serif italic text-accent">Mejores.</span>
          </h2>
          <p className="font-sans text-dark/60 max-w-2xl mx-auto text-lg">
            Un equipo docente de primer nivel internacional que combina excelencia académica, experiencia quirúrgica y visión clínica integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {mentors.map((mentor, idx) => (
            <div key={idx} className="mentor-card group flex flex-col items-center md:items-start text-center md:text-left">
              {/* Image Container with premium frame */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-[2rem] overflow-hidden shadow-xl border border-black/5">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                {mentor.specialty}
              </div>
              <h3 className="font-serif italic text-3xl md:text-4xl text-primary mb-4">{mentor.name}</h3>
              <p className="font-sans text-dark/70 leading-relaxed max-w-md">
                {mentor.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
