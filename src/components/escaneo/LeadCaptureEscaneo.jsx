import { FileText } from 'lucide-react';

export default function LeadCaptureEscaneo() {
  return (
    <section className="py-20 px-6 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-serif italic text-3xl md:text-4xl mb-4">¿Aún lo estás pensando?</h2>
        <p className="font-sans text-white/80 mb-8 text-lg">
          Descarga el temario completo en PDF, conoce los detalles del flujo digital que cubriremos y recibe una sorpresa especial.
        </p>
        <a 
          href="https://wa.me/19293430985?text=Hola,%20me%20gustar%C3%ADa%20recibir%20el%20temario%20en%20PDF%20del%20curso%20de%20Escaneo%20Digital." 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
        >
          <FileText className="w-5 h-5" />
          <span>Quiero el temario en PDF</span>
        </a>
      </div>
    </section>
  );
}
