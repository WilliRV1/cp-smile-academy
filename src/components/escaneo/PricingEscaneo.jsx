import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PricingEscaneo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.pricing-card', 
        { y: 60, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );

      gsap.fromTo('.pricing-btn',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.4,
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
    <section id="pricing" ref={sectionRef} className="py-32 px-6 bg-background relative z-20 rounded-t-[3rem] -mt-10 border-t border-black/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif italic text-4xl md:text-5xl text-primary mb-6">Empezar el Nivel Superior</h2>
        <p className="font-sans text-dark/70 mb-12 max-w-xl mx-auto text-lg">
          Únete a nuestro grupo intensivo. Domina el flujo digital y eleva la calidad de tus tratamientos desde el primer día.
        </p>
        
        <div className="pricing-card bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5 relative overflow-hidden text-left opacity-0 translate-y-8">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Próxima Edición: 18 de Julio
              </div>
              <h3 className="font-sans font-bold text-3xl text-primary mb-2">Escaneo Intraoral</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-sans font-bold text-4xl md:text-5xl text-dark">$280.000</span>
                <span className="font-sans text-dark/50">COP</span>
              </div>
              
              <ul className="space-y-3 font-sans text-sm text-dark/80 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>Teórico-Práctico (4 Horas Intensivas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>Acceso a equipos de escaneo de última tecnología</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span>Cl. 52 Nte. #2 DN 05, La Merced, Cali, Valle del Cauca</span>
                    <a href="https://maps.app.goo.gl/ArxrDqiW5c6tRnqT7" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline mt-0.5">Ver en Google Maps</a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex-shrink-0 flex flex-col items-center">
              <a href="https://wa.me/19293430985?text=Hola,%20me%20gustar%C3%ADa%20inscribirme%20al%20Curso%20de%20Escaneo%20Digital." target="_blank" rel="noopener noreferrer" className="pricing-btn magnetic-button w-full md:w-auto bg-primary text-white px-8 py-5 rounded-[2rem] font-sans font-bold text-lg inline-flex items-center justify-center shadow-xl mb-4 hover:shadow-2xl transition-shadow opacity-0">
                <span className="relative z-10">Reservar mi cupo</span>
              </a>
              <p className="font-mono text-xs text-dark/40 text-center">Cupos súper limitados</p>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-black/10 shadow-inner relative z-10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7964.904553234545!2d-76.51143359999999!3d3.4821305999999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a74dea1b9183%3A0x718d1bd2444e9bd5!2sC%26P%20SMILE!5e0!3m2!1ses-419!2sco!4v1783367959885!5m2!1ses-419!2sco" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
