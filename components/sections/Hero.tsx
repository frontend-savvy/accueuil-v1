import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Decorative Geometric Shapes */}
      <div className="absolute top-10 left-10 md:top-20 md:left-32 w-16 h-16 md:w-24 md:h-24 bg-brand-pink rounded-3xl rotate-45 opacity-60 animate-[spin_15s_linear_infinite] shadow-lg shadow-brand-pink/20" style={{ clipPath: "polygon(33% 0, 66% 0, 66% 33%, 100% 33%, 100% 66%, 66% 66%, 66% 100%, 33% 100%, 33% 66%, 0 66%, 0 33%, 33% 33%)" }}></div>
      
      <div className="absolute top-1/3 -left-4 md:left-12 w-12 h-16 md:w-16 md:h-24 bg-brand-green rounded-[2rem] opacity-70 animate-[bounce_6s_infinite] shadow-xl shadow-brand-green/20" style={{ animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}></div>

      <div className="absolute top-12 right-12 md:top-24 md:right-48 w-16 h-16 md:w-20 md:h-20 bg-brand-dark rounded-full opacity-90 animate-[pulse_8s_infinite] hover:scale-110 transition-transform duration-700 shadow-2xl shadow-brand-dark/30"></div>

      <div className="absolute bottom-16 left-24 md:bottom-32 md:left-48 w-16 h-16 md:w-24 md:h-24 bg-brand-cyan rounded-[2.5rem] opacity-60 shadow-lg shadow-brand-cyan/20 animate-[pulse_6s_infinite]" style={{ clipPath: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)" }}></div>

      <div className="absolute bottom-12 right-32 md:bottom-24 md:right-64 w-16 h-16 md:w-20 md:h-20 bg-brand-yellow flex gap-1 justify-center items-center rounded-2xl opacity-80 animate-[bounce_7s_infinite] shadow-xl shadow-brand-yellow/30" style={{ animationTimingFunction: "ease-in-out" }}>
        <div className="w-2 h-full bg-white/30 rounded-full" />
        <div className="w-2 h-full bg-white/30 rounded-full" />
        <div className="w-2 h-full bg-white/30 rounded-full" />
      </div>

      <div className="absolute bottom-1/3 -right-8 md:right-16 w-12 h-12 md:w-16 md:h-16 bg-brand-blue rounded-full opacity-80 shadow-lg shadow-brand-blue/30 hover:scale-110 transition-transform duration-700"></div>

      {/* Content */}
      <div className="relative z-10 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow/50 to-brand-green/30 rounded-full blur-md opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
        <div className="relative bg-[#FCFDF2] px-5 py-2 rounded-full text-sm font-semibold mb-10 border border-[#E9EBB1] text-brand-dark shadow-md shadow-[#E9EBB1]/40 flex items-center justify-center">
          30K€/moyenne exonérés par client
        </div>
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-dark max-w-5xl tracking-tight leading-[1.1] mb-8 font-medium">
        Réduisons ensemble <br className="hidden md:block"/> votre charge fiscale
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12 font-light leading-relaxed">
        La première démarche se résume à réaliser un diagnostic complet et
        global de votre situation personnelle et professionnelle afin de...
      </p>

      <Button className="bg-brand-blue hover:bg-blue-700 text-white text-lg rounded-xl flex items-center gap-2 px-8 py-7 shadow-[0_8px_30px_rgb(58,67,255,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(58,67,255,0.4)] active:scale-95">
        Prendre rendez-vous
      </Button>
    </section>
  );
}
