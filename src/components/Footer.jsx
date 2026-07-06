export default function Footer() {
  return (
    <footer className="bg-dark text-white rounded-t-[4rem] px-6 py-16 mt-[-2rem] relative z-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.svg" alt="C&P Smile Academy" className="h-10 w-auto brightness-0 invert opacity-90" />
            <span className="font-sans font-bold text-xl tracking-tight">C&P Smile Academy</span>
          </div>
          <p className="font-sans text-white/60 text-sm max-w-sm mb-8">
            Formación continua para odontólogos que buscan la excelencia clínica a través de la precisión en el diagnóstico.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#34C759] animate-pulse"></div>
            <span className="font-mono text-xs text-white/80 uppercase tracking-wider">C&P OS v1.0.4 Online</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-sans font-bold text-lg mb-6 text-white/90">Navegación</h4>
          <ul className="space-y-4 font-sans text-sm text-white/60">
            <li><a href="#features" className="hover:text-accent transition-colors">Características</a></li>
            <li><a href="#protocol" className="hover:text-accent transition-colors">Temario del Curso</a></li>
            <li><a href="#pricing" className="hover:text-accent transition-colors">Inscripción</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-sans font-bold text-lg mb-6 text-white/90">Legal</h4>
          <ul className="space-y-4 font-sans text-sm text-white/60">
            <li><a href="#" className="hover:text-accent transition-colors">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between font-mono text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} C&P Smile Academy. Todos los derechos reservados.</p>
        <p className="mt-4 md:mt-0 uppercase tracking-widest">Precisión Clínica Absoluta</p>
      </div>
    </footer>
  );
}
