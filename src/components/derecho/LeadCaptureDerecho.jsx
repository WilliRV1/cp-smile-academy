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
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/derecho-hero.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="lead-el font-serif italic text-3xl md:text-4xl mb-4">
          ¿Aún lo estás pensando?
        </h2>
        <p className="lead-el font-sans text-white/80 mb-8 text-lg">
          Descarga el temario completo en PDF, conoce los detalles legales que cubriremos y recibe una sorpresa especial.
        </p>

        <form onSubmit={handleSubmit} className="lead-el max-w-md mx-auto bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl text-left">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">Nombre Completo</label>
            <input 
              type="text" 
              id="name" 
              required
              placeholder="Ej. Dr. John Prado" 
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              required
              placeholder="correo@ejemplo.com" 
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="phone">Número de WhatsApp</label>
            <input 
              type="tel" 
              id="phone" 
              required
              placeholder="+57 300 000 0000" 
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <button 
            type="submit" 
            className="w-full inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
          >
            <FileText className="w-5 h-5" />
            <span>Quiero el temario en PDF</span>
          </button>
        </form>
      </div>
    </section>
  );
}
