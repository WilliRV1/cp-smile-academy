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

  const mentors = [
    {
      name: "Dr. John Freddy Prado",
      title: "Odontólogo Integral & MSc. Derecho Médico",
      bio: "Docente universitario con más de 16 años de trayectoria. Combina su experticia en odontología restaurativa y tecnología digital con una sólida formación legal para garantizar la máxima seguridad, ética y precisión en cada flujo de trabajo.",
      bullets: [
        "16+ Años de experiencia",
        "Docente Universitario (Univalle & USC)",
        "Experto en Odontología Restaurativa"
      ],
      image: "https://cypsmile.online/doctor/IMG_0582rojo.jpg"
    },
    {
      name: "Dra. Angela Patricia Bermúdez",
      title: "Odontóloga & Esp. Gerencia SST",
      bio: "Profesional especializada con experiencia en el sector administrativo, amplio conocimiento en la gestión del riesgo, habilitación en salud y calidad. Docente universitaria y auditora.",
      bullets: [
        "Esp. Administración en Salud",
        "Experiencia en auditoría y habilitación",
        "Docente Universitaria (USC)"
      ],
      image: "https://ui-avatars.com/api/?name=Angela+Patricia+Bermudez&background=0b1f38&color=fff&size=512"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-white relative z-10 border-b border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight mb-4">
            Aprende de los <span className="font-serif italic text-accent">Expertos.</span>
          </h2>
          <p className="font-sans text-dark/60 max-w-2xl mx-auto text-lg">
            Un equipo interdisciplinario que garantiza el máximo nivel de detalle técnico, conocimiento legal y normativo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full">
          {mentors.map((mentor, index) => (
            <div key={index} className="mentor-card group flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8">
              <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0 rounded-[2rem] overflow-hidden shadow-2xl border border-black/5">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col items-center md:items-start justify-center flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  {mentor.title}
                </div>
                <h3 className="font-serif italic text-3xl text-primary mb-3">{mentor.name}</h3>
                <p className="font-sans text-dark/70 text-sm leading-relaxed mb-4">
                  {mentor.bio}
                </p>
                
                <ul className="space-y-1.5 text-xs font-sans text-dark/80 text-left">
                  {mentor.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full"></span> {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
