import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      title="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Ping ring */}
        <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30" />
        <div className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 shadow-xl shadow-emerald-500/40 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/60">
          <MessageCircle size={26} className="text-white" fill="white" />
        </div>
      </div>
    </a>
  );
}
