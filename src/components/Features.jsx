import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { MousePointer2, ShieldCheck, Star } from 'lucide-react';

export default function Features({
  courseDate = 25,
  courseMonth = "Julio",
  occupation = 5,
  totalSpots = 8,
  prestigeTitle = "Alto Prestigio",
  prestigeDesc = "Nuestros cursos están diseñados y dictados por especialistas de primer nivel, garantizando una curva de aprendizaje rápida y aplicable a tu práctica clínica diaria."
}) {
  const cursorRef = useRef(null);
  const cellRef = useRef(null);
  const gridRef = useRef(null);

  // Generar días del calendario (asumiendo Julio 2026 para alinear 13 Lunes)
  const days = Array.from({length: 21}).map((_, i) => {
    const day = i + 13;
    return day > 31 ? day - 31 : day;
  });

  const targetIndex = days.indexOf(courseDate) !== -1 ? days.indexOf(courseDate) : 12;

  // Cursor Animation Logic
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!cellRef.current || !gridRef.current || !cursorRef.current) return;
      
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Calculate dynamic position based on cell offset relative to grid
      const gridRect = gridRef.current.getBoundingClientRect();
      const cellRect = cellRef.current.getBoundingClientRect();
      
      // Target position relative to the grid container
      const targetX = cellRect.left - gridRect.left + (cellRect.width / 2) - 12;
      const targetY = cellRect.top - gridRect.top + (cellRect.height / 2);
      
      tl.set(cursorRef.current, { x: targetX + 60, y: targetY + 60, opacity: 0 })
        .to(cursorRef.current, { opacity: 1, duration: 0.3 })
        .to(cursorRef.current, {
          x: targetX, y: targetY, duration: 1, ease: 'power2.out'
        })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(cellRef.current, { backgroundColor: '#0A84FF', color: '#fff', duration: 0.2 }, "-=0.1")
        .to(cursorRef.current, {
          x: targetX + 40, y: targetY + 40, duration: 0.8, ease: 'power2.in', delay: 0.5
        })
        .to(cursorRef.current, { opacity: 0, duration: 0.3 })
        .to(cellRef.current, { backgroundColor: '#ffffff', color: '#1a1a1a', duration: 0.3 }, "+=0.5");
        
    }, gridRef); // scoped to grid
    return () => ctx.revert();
  }, [courseDate]);

  return (
    <section id="features" className="py-32 px-6 bg-background relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 - Exclusividad */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5 flex flex-col h-[400px] relative overflow-hidden group">
          <h3 className="font-sans font-bold text-xl mb-2 text-primary">Exclusividad</h3>
          <p className="font-sans text-sm text-dark/60 mb-6">Máxima calidad educativa asegurada.</p>
          
          <div className="flex-1 flex flex-col justify-center">
            {/* Spots Visualization */}
            <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6">
              {Array.from({length: totalSpots}).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl border border-accent/20 bg-accent/5 flex items-center justify-center relative overflow-hidden group/spot">
                  <div className={`w-full h-full absolute inset-0 bg-accent/20 translate-y-full group-hover/spot:translate-y-0 transition-transform duration-300 ${i < occupation ? 'bg-accent/30 translate-y-0' : ''}`}></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`relative z-10 ${i < occupation ? 'text-accent' : 'text-accent/40'}`}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-dark/50 uppercase tracking-wider mb-2">
              <span>Ocupación</span>
              <span className="text-accent font-bold">{occupation}/{totalSpots}</span>
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full transition-all duration-1000" style={{ width: `${(occupation/totalSpots)*100}%` }}></div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-50 border border-accent/10 rounded-full text-xs font-sans font-medium text-primary">100% Personalizado</span>
            <span className="px-3 py-1 bg-gray-50 border border-accent/10 rounded-full text-xs font-sans font-medium text-primary">Práctica Clínica</span>
          </div>
        </div>

        {/* Card 2 - Prestigio (Rediseñada) */}
        <div className="bg-primary text-white rounded-[2rem] p-8 shadow-lg flex flex-col h-[400px] relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 text-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
            <ShieldCheck size={240} strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="font-mono text-xs text-white/60 tracking-wider uppercase">Excelencia</span>
            </div>
            
            <h3 className="font-sans font-bold text-3xl mb-4 leading-tight">{prestigeTitle}</h3>
            <p className="font-sans text-white/80 leading-relaxed">
              {prestigeDesc}
            </p>
          </div>
          
          <div className="mt-auto relative z-10 flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
             <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
               <ShieldCheck size={24} />
             </div>
             <div>
               <p className="font-bold text-sm">Garantía de Calidad</p>
               <p className="text-xs text-white/60">C&P Smile Academy</p>
             </div>
          </div>
        </div>

        {/* Card 3 - Comodidad */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5 flex flex-col h-[400px] relative overflow-hidden">
          <h3 className="font-sans font-bold text-xl mb-2 text-primary">Comodidad</h3>
          <p className="font-sans text-sm text-dark/60 mb-6">Norte de la ciudad. Almuerzo y refrigerio incluidos.</p>
          
          <div className="relative mt-auto bg-gray-50 rounded-2xl p-4 border border-black/5" ref={gridRef}>
            <div className="grid grid-cols-7 gap-1 mb-4 text-center">
              {['L','M','X','J','V','S','D'].map(d => (
                <div key={d} className="font-mono text-xs text-dark/40">{d}</div>
              ))}
              {days.map((displayDay, i) => {
                const dayOffset = i + 13;
                const isNextMonth = dayOffset > 31;
                const isTarget = i === targetIndex;
                
                return (
                  <div 
                    key={i} 
                    ref={isTarget ? cellRef : null}
                    className={`aspect-square flex items-center justify-center font-mono text-xs rounded-md border border-black/5 bg-white transition-colors duration-300 ${isNextMonth ? 'text-dark/30' : 'text-dark/80'}`}
                  >
                    {displayDay}
                  </div>
                );
              })}
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
