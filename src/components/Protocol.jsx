import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Protocol() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = el => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        // SVG Animations
        const svgs = card.querySelectorAll('svg *');
        gsap.to(svgs, {
          rotation: 360,
          transformOrigin: '50% 50%',
          duration: 10 + index * 5,
          repeat: -1,
          ease: 'linear'
        });

        const laser = card.querySelector('.laser-line');
        if (laser) {
          gsap.to(laser, {
            y: 200,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
          });
        }
        
        const path = card.querySelector('.pulse-path');
        if (path) {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2,
            repeat: -1,
            ease: 'power1.inOut'
          });
        }

        // Stacking effect
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: false,
          animation: gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(20px)',
            ease: 'none'
          }),
          scrub: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      id: "01",
      title: "Fundamentos y Anatomía",
      desc: "Principios físicos de adquisición CBCT, selección de FOV, y radiográfica tridimensional maxilofacial.",
      bg: "bg-white",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Interpretación Sistemática",
      desc: "Navegación por volumen, reconstrucciones multiplanares (axial, coronal, sagital) y errores frecuentes.",
      bg: "bg-gray-50",
      svg: (
        <div className="relative w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')]"></div>
          <div className="laser-line absolute top-0 left-0 right-0 h-0.5 bg-accent shadow-[0_0_8px_rgba(10,132,255,0.8)]"></div>
        </div>
      )
    },
    {
      id: "03",
      title: "Aplicaciones Clínicas y Taller",
      desc: "Práctica en visor DICOM para implantología, endodoncia, ortodoncia, y localización de lesiones.",
      bg: "bg-gray-100",
      svg: (
        <svg viewBox="0 0 100 50" className="w-full h-full opacity-20">
          <path className="pulse-path" d="M0 25 L20 25 L25 10 L30 40 L35 25 L100 25" fill="none" stroke="#0A84FF" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="protocol" ref={sectionRef} className="relative pb-24">
      {steps.map((step, index) => (
        <div 
          key={step.id} 
          ref={addToRefs}
          className={`h-[100dvh] w-full ${step.bg} sticky top-0 flex items-center justify-center overflow-hidden border-b border-black/5 rounded-b-[3rem] shadow-sm`}
          style={{ zIndex: index + 1 }}
        >
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[80vw] max-w-2xl aspect-square">
              {step.svg}
            </div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="font-mono text-xl md:text-2xl text-accent mb-6 font-bold">{step.id}</div>
            <h2 className="font-sans font-bold text-4xl md:text-6xl text-primary mb-6 tracking-tight">{step.title}</h2>
            <p className="font-sans text-lg md:text-xl text-dark/70 max-w-2xl mx-auto leading-relaxed">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
