import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ChevronRight, ArrowUpRight, BookOpen, Award, Microscope, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function AcademyHome() {
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.home-el',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-background">
      {/* Hero Academy */}
      <section ref={heroRef} className="relative min-h-[90dvh] w-full flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 md:pb-32 flex flex-col items-center text-center">
          <div className="home-el inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary border border-primary/10 rounded-full text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            El Nuevo Estándar en Educación
          </div>
          <h1 className="flex flex-col text-primary mb-6">
            <span className="home-el font-sans font-bold text-4xl md:text-6xl tracking-tight mb-2">
              Elevando la excelencia de
            </span>
            <span className="home-el font-serif italic text-5xl md:text-8xl leading-tight text-accent drop-shadow-sm">
              la odontología.
            </span>
          </h1>
          <p className="home-el font-sans text-dark/70 mt-4 max-w-2xl text-lg md:text-xl leading-relaxed">
            Formación especializada de alto nivel. Experiencias educativas diseñadas con precisión clínica para profesionales inconformistas.
          </p>
          <div className="home-el mt-12 flex flex-col sm:flex-row items-center gap-4">
            <a href="#cursos" className="magnetic-button bg-primary text-white w-full sm:w-auto px-8 py-4 rounded-full font-sans font-bold text-lg inline-flex items-center justify-center shadow-[0_10px_30px_rgba(33,53,85,0.2)] hover:shadow-[0_15px_40px_rgba(33,53,85,0.3)] transition-all hover:scale-105 group">
              <span className="relative z-10 flex items-center gap-2">Explorar Cursos <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
            </a>
            <a href="#pilares" className="w-full sm:w-auto px-8 py-4 rounded-full font-sans font-bold text-lg inline-flex items-center justify-center text-primary border border-primary/10 hover:bg-primary/5 transition-colors">
              Nuestra Filosofía
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip / Social Proof Global */}
      <section className="home-el border-y border-black/5 bg-white relative z-20 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-2">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-sans font-bold text-dark text-lg">+27 Años</h4>
              <p className="font-sans text-xs text-dark/50 uppercase tracking-wider">De Experiencia Clínica</p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-black/5"></div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center text-accent mb-2">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="font-sans font-bold text-dark text-lg">Práctica Real</h4>
              <p className="font-sans text-xs text-dark/50 uppercase tracking-wider">Metodología 100% Aplicable</p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-black/5"></div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-2">
                <Award size={24} />
              </div>
              <h4 className="font-sans font-bold text-dark text-lg">Cupos Limitados</h4>
              <p className="font-sans text-xs text-dark/50 uppercase tracking-wider">Garantía de Aprendizaje</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Interactivos */}
      <section id="pilares" className="py-32 px-6 bg-background relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-5xl text-primary tracking-tight mb-4">
              La Diferencia C&P Smile
            </h2>
            <p className="font-sans text-dark/60 max-w-2xl mx-auto">
              No hacemos conferencias masivas. Diseñamos inmersiones clínicas donde realmente transformas tu forma de trabajar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>
              <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Microscope size={28} />
              </div>
              <h3 className="font-serif italic text-2xl text-primary mb-3">Evidencia Clínica</h3>
              <p className="font-sans text-dark/70 leading-relaxed text-sm">
                Pasamos de la teoría superficial a la aplicación práctica. Todo lo que enseñamos está respaldado por cientos de casos clínicos reales documentados.
              </p>
            </div>

            <div className="bg-primary rounded-[2rem] p-8 shadow-xl border border-primary-light/20 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                <Award size={28} />
              </div>
              <h3 className="font-serif italic text-2xl text-white mb-3">Mentores Top</h3>
              <p className="font-sans text-white/70 leading-relaxed text-sm">
                Aprende directamente de especialistas con décadas de experiencia clínica y académica, seleccionados por su prestigio y habilidades docentes.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>
              <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <BookOpen size={28} />
              </div>
              <h3 className="font-serif italic text-2xl text-primary mb-3">Inmersión VIP</h3>
              <p className="font-sans text-dark/70 leading-relaxed text-sm">
                Grupos súper reducidos en espacios premium. Garantizamos un entorno donde puedes hacer todas tus preguntas y recibir atención 100% personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de Cursos */}
      <section id="cursos" className="py-32 px-6 bg-white relative z-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight mb-4 md:mb-0">
              Catálogo de Cursos
            </h2>
            <p className="font-mono text-sm text-accent uppercase tracking-widest font-bold">Matrículas Abiertas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjeta de Curso: Tomografía */}
            <Link to="/cursos/tomografia" className="group flex flex-col bg-background rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-black/5 hover:border-accent/30 hover:-translate-y-2 relative">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop" alt="Tomografía" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">25 de Julio</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30">Presencial</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 relative bg-white">
                <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-accent rounded-full text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={24} />
                </div>
                <h3 className="font-sans font-bold text-2xl text-primary mb-3 group-hover:text-accent transition-colors pr-8">Interpretación de Tomografía Oral</h3>
                <p className="font-sans text-dark/60 text-sm mb-8 flex-1">
                  Domina el CBCT con expertos. Navegación, reconstrucciones y anatomía tridimensional maxilofacial para un diagnóstico preciso.
                </p>
                <div className="flex items-center justify-between border-t border-black/5 pt-6">
                  <div className="flex flex-col">
                    <span className="font-sans text-xs text-dark/40 uppercase tracking-wider font-bold">Inversión</span>
                    <span className="font-sans font-black text-dark text-xl">$450.000 COP</span>
                  </div>
                  <span className="font-sans text-sm font-bold text-accent group-hover:underline">Ver detalles</span>
                </div>
              </div>
            </Link>

            {/* Tarjeta de Curso: Escaneo Digital Intraoral */}
            <Link to="/cursos/escaneo-digital" className="group flex flex-col bg-background rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-black/5 hover:border-accent/30 hover:-translate-y-2 relative">
              <div className="h-64 overflow-hidden relative">
                <img src="/escaneo-hero-new.jpg?v=1" alt="Escaneo Intraoral" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">18 de Julio</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30">Presencial</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 relative bg-white">
                <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-accent rounded-full text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={24} />
                </div>
                <h3 className="font-sans font-bold text-2xl text-primary mb-3 group-hover:text-accent transition-colors pr-8">Escaneo Digital Intraoral</h3>
                <p className="font-sans text-dark/60 text-sm mb-8 flex-1">
                  Domina el flujo de trabajo digital, desde el escaneo clínico hasta el envío al laboratorio con tecnología 3D.
                </p>
                <div className="flex items-center justify-between border-t border-black/5 pt-6">
                  <div className="flex flex-col">
                    <span className="font-sans text-xs text-dark/40 uppercase tracking-wider font-bold">Inversión</span>
                    <span className="font-sans font-black text-dark text-xl">$200.000 COP</span>
                  </div>
                  <span className="font-sans text-sm font-bold text-accent group-hover:underline">Ver detalles</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
