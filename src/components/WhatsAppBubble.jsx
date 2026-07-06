import { MessageCircle } from 'lucide-react';

export default function WhatsAppBubble() {
  return (
    <a 
      href="https://wa.me/19293430985?text=Hola,%20tengo%20una%20duda%20sobre%20el%20curso%20de%20Tomograf%C3%ADa."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-[55] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      <span className="absolute right-full mr-4 bg-white text-dark text-xs font-bold px-3 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
        ¿Tienes dudas?
      </span>
    </a>
  );
}
