import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SocialProofDerecho() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.stat-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "+16", label: "Años de Experiencia Clínica" },
    { number: "100%", label: "Enfoque Práctico y Legal" },
    { number: "2", label: "Universidades (Docencia)" },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-primary relative z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item flex flex-col items-center justify-center py-4 md:py-0 text-center">
              <span className="font-serif italic text-4xl md:text-5xl text-white mb-2">{stat.number}</span>
              <span className="font-sans text-white/70 uppercase tracking-widest text-xs font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
