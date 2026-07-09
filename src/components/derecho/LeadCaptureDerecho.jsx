import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function LeadCaptureDerecho() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.lead-el',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = "Hola, me gustaría recibir el temario en PDF del curso de Derecho Médico.";
    const whatsappLink = `https://wa.me/19293430985?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/30 to-primary/30 opacity-50 mix-blend-overlay"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="lead-el font-serif italic text-3xl md:text-4xl mb-4">
          ¿Aún lo estás pensando?
        </h2>
        <p className="lead-el font-sans text-white/80 mb-8 text-lg">
          Descarga el temario completo en PDF, conoce los detalles legales que cubriremos y recibe una sorpresa especial.
        </p>

        <div className="lead-el max-w-md mx-auto mt-8">
          <a 
            href="https://wa.me/19293430985?text=Hola,%20me%20gustar%C3%ADa%20recibir%20el%20temario%20en%20PDF%20del%20curso%20de%20Derecho%20M%C3%A9dico."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all hover:scale-105"
          >
            <FileText className="w-6 h-6 text-accent" />
            <span>Solicitar temario por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
