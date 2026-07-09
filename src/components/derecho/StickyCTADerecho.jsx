import { useEffect, useState } from 'react';

export default function StickyCTADerecho() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = "Hola, me gustaría inscribirme al Curso de Derecho Médico y la Imagen Diagnóstica.";
  const whatsappLink = `https://wa.me/19293430985?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-50 p-4 bg-white/90 backdrop-blur-md border-t border-black/10 transform transition-transform duration-300 md:hidden flex justify-center ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <a 
        href={whatsappLink}
        target="_blank" 
        rel="noopener noreferrer" 
        className="magnetic-button w-full bg-primary text-white py-4 rounded-[2rem] font-sans font-bold text-lg text-center shadow-2xl active:scale-95 transition-transform"
      >
        <span className="relative z-10">Reservar mi cupo</span>
      </a>
    </div>
  );
}
