export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-dark border-b border-white/10 text-white text-center py-2 px-4 text-xs md:text-sm font-sans tracking-wide z-[60]">
      Atención: Solo quedan <span className="font-bold text-accent">3 de 8 cupos</span> disponibles para el 25 de Julio
    </div>
  );
}
