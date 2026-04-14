import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="bg-white w-full py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-brand-blue rounded-3xl overflow-hidden flex flex-col md:flex-row relative shadow-2xl">
          
          {/* Image side */}
          <div className="w-full md:w-5/12 h-64 md:h-auto relative">
             <div className="absolute inset-0 bg-brand-blue/30 z-10 mix-blend-multiply"></div>
             <img 
               src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" 
               alt="Businessman writing"
               className="w-full h-full object-cover grayscale"
             />
             {/* Left curvy overlay masking to blend with the blue section */}
             <div className="hidden md:block absolute -right-10 top-0 bottom-0 w-24 bg-brand-blue z-20" style={{ clipPath: "ellipse(70% 60% at 100% 50%)" }}></div>
          </div>
          
          {/* Content side */}
          <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center text-white z-30">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
              Réduisons votre fiscalité maintenant
            </h2>
            
            <div className="bg-white rounded-xl p-6 shadow-xl max-w-md">
              <form className="flex flex-col gap-4">
                <p className="text-gray-500 font-medium text-sm mb-2">Entrez votre adresse email ci-dessous</p>
                <Input 
                  type="email" 
                  placeholder="contact@exauce.fr" 
                  className="bg-gray-50 border-gray-200 text-gray-800 h-12" 
                />
                <Button className="bg-brand-blue hover:bg-blue-700 w-full h-12 text-md mt-2">
                  Prendre rendez-vous
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
