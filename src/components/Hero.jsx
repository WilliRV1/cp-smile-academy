import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-el',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full flex flex-col justify-end overflow-hidden bg-primary">
      {/* Background Image (User can replace src) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2500&auto=format&fit=crop" 
          alt="Clínica dental premium" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32 flex flex-col items-start">
        <h1 className="flex flex-col text-white">
          <span className="hero-el font-sans font-bold text-2xl md:text-4xl tracking-tight mb-2 opacity-90">
            La precisión diagnóstica es el
          </span>
          <span className="hero-el font-serif italic text-7xl md:text-9xl leading-[0.9] tracking-tighter text-white/95">
            futuro.
          </span>
        </h1>
        <p className="hero-el font-mono text-white/70 mt-6 max-w-md text-sm leading-relaxed">
          Curso de Interpretación de Tomografía Oral. Domina el CBCT con expertos de primer nivel.
        </p>
        <div className="hero-el mt-8 flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/573136336446?text=Hola,%20me%20gustar%C3%ADa%20inscribirme%20al%20Curso%20de%20Tomograf%C3%ADa." target="_blank" rel="noopener noreferrer" className="magnetic-button bg-accent text-white px-8 py-4 rounded-[2rem] font-sans font-bold text-lg inline-flex items-center justify-center shadow-xl">
            <span className="relative z-10">Inscribirse Ahora — $450.000 COP</span>
          </a>
        </div>
      </div>
    </section>
  );
}
