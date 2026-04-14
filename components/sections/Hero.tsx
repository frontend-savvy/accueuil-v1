import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Decorative Geometric Shapes */}
      {/* Top Left Pink Cross */}
      <div className="absolute top-10 left-10 md:top-20 md:left-32 w-16 h-16 md:w-24 md:h-24 bg-brand-pink rounded-3xl rotate-45 opacity-80 animate-[spin_10s_linear_infinite]" style={{ clipPath: "polygon(33% 0, 66% 0, 66% 33%, 100% 33%, 100% 66%, 66% 66%, 66% 100%, 33% 100%, 33% 66%, 0 66%, 0 33%, 33% 33%)" }}></div>
      
      {/* Left Green Wavy Rect */}
      <div className="absolute top-1/3 -left-4 md:left-12 w-12 h-16 md:w-16 md:h-24 bg-brand-green rounded-xl opacity-80 animate-[bounce_4s_infinite]"></div>

      {/* Top Right Dark Circle */}
      <div className="absolute top-12 right-12 md:top-24 md:right-48 w-16 h-16 md:w-20 md:h-20 bg-brand-dark rounded-full opacity-90 animate-[pulse_5s_infinite]"></div>

      {/* Bottom Left Pale Blue Shape */}
      <div className="absolute bottom-16 left-24 md:bottom-32 md:left-48 w-16 h-16 md:w-20 md:h-20 bg-brand-cyan rounded-[2rem] opacity-70"></div>

      {/* Bottom Right Yellow Stack */}
      <div className="absolute bottom-12 right-32 md:bottom-24 md:right-64 w-16 h-16 md:w-20 md:h-20 bg-brand-yellow rounded-2xl opacity-90 animate-[bounce_5s_infinite]"></div>

      {/* Far Right Blue Circle */}
      <div className="absolute bottom-1/3 -right-8 md:right-16 w-12 h-12 md:w-16 md:h-16 bg-brand-blue rounded-full opacity-90"></div>

      {/* Content */}
      <div className="z-10 bg-[#FCFDF2] px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-[#E9EBB1] text-brand-dark shadow-sm">
        Fiduciare, assurance et gestion privée
      </div>
      
      <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark max-w-4xl tracking-tight leading-tight mb-6">
        Réduisons ensemble votre charge fiscale
      </h1>
      
      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12">
        La première démarche se résume à réaliser un diagnostic complet et
        global de votre situation personnelle et professionnelle afin de...
      </p>

      <Button className="bg-brand-blue hover:bg-blue-700 text-white text-lg rounded-md px-8 py-6 shadow-xl shadow-brand-blue/30 transition-transform hover:scale-105 active:scale-95">
        Prendre rendez-vous
      </Button>
    </section>
  );
}
