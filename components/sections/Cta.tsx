import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="bg-white w-full py-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-gradient-to-br from-brand-blue to-blue-600 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative shadow-[0_20px_50px_rgba(58,67,255,0.25)] border border-blue-400/20">
          
          {/* Image side */}
          <div className="w-full md:w-5/12 h-[400px] md:h-auto relative">
             <div className="absolute inset-0 bg-brand-blue/10 z-10 mix-blend-multiply transition-colors duration-500 hover:bg-transparent"></div>
             <img 
               src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" 
               alt="Businessman writing"
               className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
             />
             {/* Left curvy overlay masking to blend with the blue section */}
             <div className="hidden md:block absolute -right-10 top-0 bottom-0 w-24 bg-gradient-to-b from-brand-blue to-blue-600 z-20" style={{ clipPath: "ellipse(70% 60% at 100% 50%)" }}></div>
          </div>
          
          {/* Content side */}
          <div className="w-full md:w-7/12 p-10 md:p-16 flex flex-col justify-center text-white z-30 relative overflow-hidden">
            {/* Soft energetic light pulse behind content */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] animate-pulse rounded-full pointer-events-none" />

            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-10 tracking-tight leading-tight max-w-lg relative z-10">
              Réduisons votre fiscalité maintenant
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.15)] max-w-md w-full relative z-10 transform transition-transform duration-500 hover:-translate-y-1">
              <form className="flex flex-col gap-5">
                <Input 
                  type="text" 
                  placeholder="Nom & Prénom" 
                  className="bg-gray-50 border-gray-200 focus-visible:ring-brand-blue focus-visible:border-brand-blue text-gray-800 h-14 rounded-xl text-[15px]" 
                />
                <Input 
                  type="text" 
                  placeholder="Email ou Numéro de téléphone" 
                  className="bg-gray-50 border-gray-200 focus-visible:ring-brand-blue focus-visible:border-brand-blue text-gray-800 h-14 rounded-xl text-[15px]" 
                />
                <Button className="bg-brand-blue hover:bg-blue-700 w-full h-14 text-base font-medium mt-2 rounded-xl shadow-[0_5px_15px_rgba(58,67,255,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(58,67,255,0.4)]">
                  Être recontacté
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
