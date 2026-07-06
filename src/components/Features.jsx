import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { MousePointer2 } from 'lucide-react';

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}<span className="animate-pulse text-accent">_</span></span>;
};

export default function Features() {
  const shuffleRef = useRef(null);
  const cursorRef = useRef(null);
  const cellRef = useRef(null);

  // Shuffle Logic
  const [cards, setCards] = useState([
    { id: 1, text: 'Solo 8 cupos disponibles', bg: 'bg-white' },
    { id: 2, text: 'Atención 100% personalizada', bg: 'bg-slate-50' },
    { id: 3, text: 'Espacio clínico acogedor', bg: 'bg-gray-100' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cursor Animation Logic
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      tl.to(cursorRef.current, {
        x: 60, y: 40, duration: 1, ease: 'power2.inOut'
      })
      .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
      .to(cellRef.current, { backgroundColor: '#0A84FF', color: '#fff', duration: 0.2 }, "-=0.1")
      .to(cursorRef.current, {
        x: 140, y: 100, duration: 1, ease: 'power2.inOut', delay: 0.5
      })
      .to(cursorRef.current, { opacity: 0, duration: 0.3 })
      .to(cellRef.current, { backgroundColor: 'transparent', color: 'inherit', duration: 0.3 }, "+=0.5")
      .set(cursorRef.current, { x: -20, y: -20, opacity: 1 });
      
    }, cursorRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" className="py-32 px-6 bg-background relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 - Barajador */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5 flex flex-col h-[400px]">
          <h3 className="font-sans font-bold text-xl mb-2 text-primary">Exclusividad</h3>
          <p className="font-sans text-sm text-dark/60 mb-auto">Grupo limitado para máxima calidad educativa.</p>
          <div className="relative h-48 w-full perspective-[1000px] flex items-end justify-center pb-4" ref={shuffleRef}>
            {cards.map((card, idx) => (
              <div 
                key={card.id}
                className={`absolute w-full max-w-[200px] p-4 rounded-2xl shadow-lg border border-black/5 text-center font-sans font-medium text-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${card.bg}`}
                style={{
                  transform: `translateY(${-idx * 15}px) scale(${1 - idx * 0.05})`,
                  zIndex: 10 - idx,
                  opacity: 1 - idx * 0.2
                }}
              >
                {card.text}
              </div>
            ))}
          </div>
        </div>

        {/* Card 2 - Máquina de Escribir */}
        <div className="bg-primary text-white rounded-[2rem] p-8 shadow-lg flex flex-col h-[400px]">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="font-mono text-xs text-white/60 tracking-wider uppercase">Feed en Vivo</span>
          </div>
          <h3 className="font-sans font-bold text-xl mb-4">Alto Prestigio</h3>
          <div className="font-mono text-sm leading-relaxed text-white/80 mt-auto flex-1 bg-black/20 p-4 rounded-2xl border border-white/10 overflow-hidden">
            <TypewriterText text="> INICIANDO DATOS DEL CURSO...&#10;> DICTANTES: Dr. Jorge Bonilla (17 años exp.) & Héctor Arboleda (Mg. Derecho Médico).&#10;> VALOR: $450.000 COP.&#10;> STATUS: PREPARADO." />
          </div>
        </div>

        {/* Card 3 - Programador */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5 flex flex-col h-[400px] relative overflow-hidden">
          <h3 className="font-sans font-bold text-xl mb-2 text-primary">Comodidad</h3>
          <p className="font-sans text-sm text-dark/60 mb-6">Norte de la ciudad. Almuerzo y refrigerio incluidos.</p>
          
          <div className="relative mt-auto bg-gray-50 rounded-2xl p-4 border border-black/5">
            <div className="grid grid-cols-7 gap-1 mb-4 text-center">
              {['L','M','X','J','V','S','D'].map(d => (
                <div key={d} className="font-mono text-xs text-dark/40">{d}</div>
              ))}
              {Array.from({length: 21}).map((_, i) => (
                <div 
                  key={i} 
                  ref={i === 12 /* 25th in a mock grid */ ? cellRef : null}
                  className="aspect-square flex items-center justify-center font-mono text-xs rounded-md border border-black/5 bg-white text-dark/80"
                >
                  {i + 13}
                </div>
              ))}
            </div>
            <div className="magnetic-button bg-primary text-white py-2 rounded-xl text-center text-xs font-sans font-medium w-[100px] mx-auto relative z-10 cursor-pointer">
              Guardar
            </div>
            
            <div ref={cursorRef} className="absolute top-0 left-0 z-20 pointer-events-none drop-shadow-md text-dark">
              <MousePointer2 className="w-6 h-6 fill-white" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
