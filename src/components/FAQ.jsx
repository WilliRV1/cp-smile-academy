import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  const faqs = [
    {
      q: "¿Es necesario tener experiencia previa con el software de tomografía?",
      a: "No. El curso está diseñado desde los fundamentos hasta lo avanzado. Enseñaremos paso a paso el manejo del software Blue Sky 4 para que domines la navegación en 3D."
    },
    {
      q: "¿Qué computador debo llevar al curso?",
      a: "Puedes traer tu laptop, ya sea Mac o Windows, siempre y cuando te permita instalar el visor Blue Sky Plan o visores DICOM estándar. Te enviaremos instrucciones de instalación previas al taller."
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
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item border-b border-black/10">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <h3 className={`font-sans font-semibold text-lg md:text-xl pr-8 transition-colors ${openIndex === idx ? 'text-accent' : 'text-primary group-hover:text-accent'}`}>
                  {faq.q}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-primary group-hover:border-accent transition-colors">
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: openIndex === idx ? '200px' : '0', opacity: openIndex === idx ? 1 : 0 }}
              >
                <p className="pb-6 font-sans text-dark/70 leading-relaxed pr-12">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
