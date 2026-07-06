import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

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
    <main>
      {/* Hero Academy */}
      <section ref={heroRef} className="relative min-h-[90dvh] w-full flex flex-col justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 md:pb-32 flex flex-col items-center text-center">
          <div className="home-el inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Educación Continua Premium
          </div>
          <h1 className="flex flex-col text-primary mb-6">
            <span className="home-el font-sans font-bold text-4xl md:text-6xl tracking-tight mb-2">
              Elevando el estándar de
            </span>
            <span className="home-el font-serif italic text-5xl md:text-8xl leading-tight text-accent">
              la odontología.
            </span>
          </h1>
          <p className="home-el font-sans text-dark/70 mt-4 max-w-2xl text-lg md:text-xl leading-relaxed">
            Formación especializada de alto nivel. Experiencias educativas diseñadas con precisión clínica para profesionales que buscan la excelencia.
          </p>
          <div className="home-el mt-12">
            <a href="#cursos" className="magnetic-button bg-primary text-white px-8 py-4 rounded-[2rem] font-sans font-bold text-lg inline-flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow">
              <span className="relative z-10 flex items-center gap-2">Explorar el Catálogo <ChevronRight size={20} /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section id="pilares" className="py-24 px-6 bg-white relative z-10 rounded-t-[3rem] md:rounded-t-[4rem] shadow-sm -mt-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="font-serif italic text-3xl text-primary mb-4">Metodología</h3>
              <p className="font-sans text-dark/70 leading-relaxed">Enfoque clínico basado en la evidencia. Pasamos de la teoría superficial a la aplicación práctica e inmediata en tus casos diarios.</p>
            </div>
            <div>
              <h3 className="font-serif italic text-3xl text-primary mb-4">Mentores</h3>
              <p className="font-sans text-dark/70 leading-relaxed">Aprende de especialistas con décadas de experiencia clínica y académica, seleccionados por su prestigio internacional.</p>
            </div>
            <div>
              <h3 className="font-serif italic text-3xl text-primary mb-4">Experiencia</h3>
              <p className="font-sans text-dark/70 leading-relaxed">Grupos reducidos en espacios premium. Garantizamos un entorno de inmersión total con la mejor tecnología.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de Cursos */}
      <section id="cursos" className="py-32 px-6 bg-background relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight mb-4 md:mb-0">
              Nuestros Cursos
            </h2>
            <p className="font-mono text-sm text-dark/50 uppercase tracking-widest">Presencial & Virtual</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjeta de Curso: Tomografía */}
            <Link to="/cursos/tomografia" className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-black/5 hover:border-accent/20 hover:-translate-y-2 relative">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop" alt="Tomografía" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">25 Julio</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">Presencial</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-sans font-bold text-2xl text-primary mb-3 group-hover:text-accent transition-colors">Interpretación de Tomografía Oral</h3>
                <p className="font-sans text-dark/60 text-sm mb-8 flex-1">
                  Domina el CBCT con expertos. Navegación, reconstrucciones y anatomía tridimensional maxilofacial.
                </p>
                <div className="flex items-center justify-between border-t border-black/5 pt-6">
                  <span className="font-sans font-bold text-dark text-lg">$450.000 COP</span>
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Placeholder para próximos cursos */}
            <div className="flex flex-col bg-transparent rounded-[2.5rem] border-2 border-dashed border-dark/10 p-8 items-center justify-center text-center min-h-[400px]">
              <div className="w-16 h-16 rounded-full bg-dark/5 flex items-center justify-center mb-6">
                <span className="w-2 h-2 rounded-full bg-dark/20 animate-pulse"></span>
              </div>
              <h3 className="font-sans font-bold text-xl text-primary mb-2">Próximos Cursos</h3>
              <p className="font-sans text-dark/50 text-sm">Estamos diseñando nuevas experiencias presenciales y virtuales.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
