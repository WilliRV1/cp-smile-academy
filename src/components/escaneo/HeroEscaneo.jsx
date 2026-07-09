import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Calendar, Clock, ChevronRight, ScanFace } from 'lucide-react';

export default function HeroEscaneo() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-el',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const whatsappMessage = "Hola, me gustaría inscribirme al Curso de Escaneo Digital Intraoral.";
  const whatsappLink = `https://wa.me/19293430985?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section ref={heroRef} className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden bg-background pt-24 pb-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        {/* Abstract 3D shape representation */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="hero-el inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary border border-primary/10 rounded-full text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Curso Presencial Intensivo
          </div>
          
          <h1 className="flex flex-col text-primary mb-6">
            <span className="hero-el font-sans font-bold text-4xl md:text-5xl tracking-tight mb-2">
              Flujo Digital:
            </span>
            <span className="hero-el font-serif italic text-5xl md:text-7xl leading-tight text-accent drop-shadow-sm">
              Escaneo Intraoral.
            </span>
          </h1>
          
          <p className="hero-el font-sans text-dark/70 mt-4 max-w-xl text-lg leading-relaxed mb-8">
            Domina las herramientas tecnológicas que están transformando la odontología. Aprende desde los fundamentos hasta el manejo de tejidos, estrategias de escaneo y envío al laboratorio.
          </p>

          <div className="hero-el grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs text-dark/50 uppercase font-bold tracking-wider">Fecha</p>
                <p className="font-sans font-bold text-dark">18 de Julio</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs text-dark/50 uppercase font-bold tracking-wider">Horario</p>
                <p className="font-sans font-bold text-dark">8:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>

          <div className="hero-el flex flex-wrap gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="magnetic-button bg-primary text-white px-8 py-4 rounded-full font-sans font-bold text-lg inline-flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group">
              <span className="relative z-10 flex items-center gap-2">Inscribirme Ahora <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
            </a>
            <a href="#temario" className="px-8 py-4 rounded-full font-sans font-bold text-lg inline-flex items-center justify-center text-primary bg-white border border-primary/10 shadow-sm hover:bg-primary/5 transition-colors">
              Ver Temario
            </a>
          </div>
        </div>

        <div className="hero-el relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-[3rem] -rotate-3 scale-105"></div>
          <div className="relative bg-white p-2 rounded-[3rem] shadow-2xl border border-white">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative bg-slate-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop" alt="Escaneo Intraoral Digital" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white">
                  <div className="flex items-center gap-4 mb-4">
                     <img src="https://cypsmile.online/doctor/IMG_0582rojo.jpg" alt="Dr. John Freddy Prado Giraldo" className="w-16 h-16 rounded-full object-cover border-2 border-white/50" />
                     <div>
                       <p className="text-xs uppercase tracking-widest text-white/70 font-bold mb-1">Mentor Principal</p>
                       <p className="font-sans font-bold text-lg leading-tight">Dr. John Freddy Prado</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <ScanFace size={16} className="text-accent" />
                    <span>Odontólogo Integral & MSc. Derecho Médico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
