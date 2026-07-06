import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Philosophy() {
  const textRef = useRef(null);

  useEffect(() => {
    // Basic split text simulation for words
    const words = textRef.current.querySelectorAll('.word');
    let ctx = gsap.context(() => {
      gsap.fromTo(words, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.05, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          }
        }
      );
    }, textRef);
    
    return () => ctx.revert();
  }, []);

  const wrapWords = (text, isHighlight) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className={`word inline-block mr-[0.25em] ${isHighlight ? 'text-accent' : ''}`}>
        {word}
      </span>
    ));
  };

  return (
    <section className="py-40 relative bg-dark text-white overflow-hidden flex items-center min-h-[80vh]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop" 
          alt="Textura orgánica" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full" ref={textRef}>
        <div className="font-sans text-xl md:text-2xl text-white/60 font-medium mb-12">
          {wrapWords("La mayoría de la educación continua se enfoca en: teoría superficial.")}
        </div>
        
        <h2 className="font-serif italic text-4xl md:text-7xl leading-tight">
          {wrapWords("Nosotros nos enfocamos en: ")}
          {wrapWords("precisión diagnóstica.", true)}
        </h2>
      </div>
    </section>
  );
}
