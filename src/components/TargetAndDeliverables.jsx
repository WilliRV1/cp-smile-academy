import { useEffect, useRef } from 'react';
import { Target, Award, MonitorPlay, FileCheck, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TargetAndDeliverables() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.target-box',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
      gsap.fromTo('.deliver-box',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white border-t border-black/5 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Target Audience */}
          <div className="target-box bg-background rounded-[3rem] p-10 md:p-14 relative overflow-hidden border border-black/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 text-primary">
                <Target className="w-6 h-6" />
                <span className="font-sans font-bold uppercase tracking-wider text-sm">Perfil del Estudiante</span>
              </div>
              <h2 className="font-serif italic text-4xl text-primary mb-6">¿Para quién es este curso?</h2>
              <p className="font-sans text-dark/70 mb-8 text-lg">
                Diseñado exclusivamente para profesionales que buscan seguridad, precisión y evitar riesgos legales o clínicos.
              </p>
              
              <ul className="space-y-4">
                {["Odontólogos Generales", "Endodoncistas", "Cirujanos Maxilofaciales", "Ortodoncistas y Periodoncistas"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-white px-5 py-4 rounded-2xl shadow-sm border border-black/5">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-sans font-semibold text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deliverables */}
          <div className="deliver-box flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-6 text-accent">
              <Award className="w-6 h-6" />
              <span className="font-sans font-bold uppercase tracking-wider text-sm">Tu Inversión Incluye</span>
            </div>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight mb-6">
              Entregables <span className="font-serif italic text-accent">Tangibles</span>
            </h2>
            <p className="font-sans text-dark/70 mb-10 text-lg">
              No solo teoría. Saldrás del taller con herramientas reales, avaladas y listas para usar al día siguiente en tu consultorio.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-primary mb-2">Certificado de Asistencia</h3>
                  <p className="font-sans text-dark/60">Acreditación formal por tu participación en el entrenamiento intensivo de C&P Smile Academy.</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MonitorPlay className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-primary mb-2">Archivos DICOM de Práctica</h3>
                  <p className="font-sans text-dark/60">Casos clínicos reales para que continúes perfeccionando tu técnica en casa usando software libre.</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <div className="font-serif italic text-2xl text-accent">§</div>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-primary mb-2">Experiencia Premium</h3>
                  <p className="font-sans text-dark/60">Almuerzo y refrigerio de alta calidad en nuestra exclusiva sede del norte de la ciudad.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
