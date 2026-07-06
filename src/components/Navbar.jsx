import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const location = useLocation();
  const isCoursePage = location.pathname.includes('/cursos');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -100',
        end: 99999,
        toggleClass: { className: 'scrolled', targets: navRef.current },
      });
    }, navRef);

    return () => ctx.revert();
  }, [location.pathname]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <nav
          ref={navRef}
          className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 py-3 md:px-6 md:py-4 rounded-[2rem] transition-all duration-500 bg-transparent text-white border border-transparent [&.scrolled]:bg-background/90 [&.scrolled]:backdrop-blur-xl [&.scrolled]:text-primary [&.scrolled]:border-primary/10 [&.scrolled]:shadow-lg"
        >
          <Link to="/" className="flex items-center gap-3 z-20" onClick={closeMenu}>
            <img src="/logo.svg" alt="C&P Smile Academy" className="h-6 md:h-8 w-auto [&.scrolled]:brightness-0 transition-all duration-500" />
            <span className="font-sans font-bold text-base md:text-lg tracking-tight hidden sm:block">C&P Smile Academy</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium z-20">
            {isCoursePage ? (
              <>
                <a href="#features" className="hover:-translate-y-[1px] transition-transform">Características</a>
                <a href="#protocol" className="hover:-translate-y-[1px] transition-transform">Temario</a>
                <a href="#pricing" className="hover:-translate-y-[1px] transition-transform">Inscripción</a>
              </>
            ) : (
              <>
                <a href="#pilares" className="hover:-translate-y-[1px] transition-transform">Nuestra Filosofía</a>
                <a href="#cursos" className="hover:-translate-y-[1px] transition-transform">Catálogo de Cursos</a>
              </>
            )}
          </div>
          
          <div className="hidden md:block z-20">
            {isCoursePage ? (
              <a href="https://wa.me/573136336446?text=Hola,%20me%20gustar%C3%ADa%20inscribirme%20al%20Curso%20de%20Tomograf%C3%ADa." target="_blank" rel="noopener noreferrer" className="magnetic-button bg-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(10,132,255,0.3)]">
                <span className="relative z-10">Comprar Curso</span>
              </a>
            ) : (
              <a href="#cursos" className="magnetic-button bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-shadow">
                <span className="relative z-10">Explorar Cursos</span>
              </a>
            )}
          </div>

          <button className="md:hidden z-20 p-2 -mr-2" onClick={toggleMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-primary font-sans text-xl font-medium">
          {isCoursePage ? (
            <>
              <a href="#features" onClick={closeMenu}>Características</a>
              <a href="#protocol" onClick={closeMenu}>Temario</a>
              <a href="#pricing" onClick={closeMenu}>Inscripción</a>
              <a href="https://wa.me/573136336446?text=Hola,%20me%20gustar%C3%ADa%20inscribirme%20al%20Curso%20de%20Tomograf%C3%ADa." target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="bg-accent text-white px-8 py-3 rounded-full mt-4 font-bold shadow-[0_0_15px_rgba(10,132,255,0.3)]">
                Comprar Curso
              </a>
            </>
          ) : (
            <>
              <a href="#pilares" onClick={closeMenu}>Nuestra Filosofía</a>
              <a href="#cursos" onClick={closeMenu}>Catálogo de Cursos</a>
              <a href="#cursos" onClick={closeMenu} className="bg-primary text-white px-8 py-3 rounded-full mt-4 font-bold">
                Explorar Cursos
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}
