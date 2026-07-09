import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQEscaneo() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  const faqs = [
    {
      q: "¿Es necesario tener experiencia previa con escáneres intraorales?",
      a: "No. El curso está diseñado desde los fundamentos hasta lo avanzado. Enseñaremos paso a paso el manejo de la tecnología y software para que domines el flujo digital."
    },
    {
      q: "¿Debo llevar algún equipo al curso?",
      a: "Nosotros proveemos el equipo de escaneo en la práctica. Sin embargo, te recomendamos traer tu laptop si deseas practicar la descarga y visualización de archivos STL/PLY."
    },
    {
      q: "¿Cuáles son los métodos de pago aceptados?",
      a: "Aceptamos transferencias bancarias y pagos electrónicos. Al hacer clic en el botón de reservar, nuestro equipo te enviará por WhatsApp los datos de la cuenta o el enlace de pago seguro para separar tu cupo."
    },
    {
      q: "¿Se entrega algún tipo de certificación?",
      a: "Sí, todos los participantes que completen el entrenamiento recibirán un certificado formal de asistencia avalado por C&P Smile Academy y sus ponentes."
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.faq-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white relative z-10 border-t border-black/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl text-primary tracking-tight mb-4">Preguntas Frecuentes</h2>
          <p className="font-sans text-dark/60 text-lg">Resolvemos tus dudas antes de que tomes la decisión final.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-primary shadow-md' : 'border-black/5 hover:border-black/10'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between focus:outline-none bg-white"
                >
                  <h3 className={`font-sans font-bold text-left md:text-lg transition-colors pr-4 ${isOpen ? 'text-primary' : 'text-dark'}`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-dark/60'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out bg-gray-50/50 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="font-sans text-dark/70 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
