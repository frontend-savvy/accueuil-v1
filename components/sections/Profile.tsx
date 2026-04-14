import { Card, CardContent } from "@/components/ui/card";
import { BuildingIcon, LineChart } from "lucide-react";
import Image from "next/image";

export default function Profile() {
  return (
    <section className="bg-white w-full py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-16 text-center tracking-tight">
          Une expertise pointue et à la pointe
        </h2>

        <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-between relative">
          
          {/* Decorative left shape background */}
          <div className="hidden lg:block absolute -left-32 top-0 w-96 h-96 bg-brand-light rounded-[4rem] -z-10 transform -rotate-6"></div>

          {/* Cards Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <Card className="border-0 shadow-lg shadow-black/5 bg-white rounded-2xl hover:shadow-xl transition-shadow flex overflow-hidden">
              <div className="w-2 bg-brand-green shrink-0"></div>
              <CardContent className="p-8 flex items-start gap-6 w-full">
                <div className="bg-brand-green/20 p-4 rounded-xl shrink-0">
                  <BuildingIcon className="text-brand-green w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Immobilier</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    L'immobilier reste une valeur refuge, mais son acquisition, sa détention ou sa transmission peut rapidement générer des frottements fiscaux. Nous optimisons chaque étape pour vous.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg shadow-black/5 bg-white rounded-2xl hover:shadow-xl transition-shadow flex overflow-hidden">
              <div className="w-2 bg-brand-pink shrink-0"></div>
              <CardContent className="p-8 flex items-start gap-6 w-full">
                <div className="bg-brand-pink/20 p-4 rounded-xl shrink-0">
                  <LineChart className="text-brand-pink w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Bourse et crypto-monnaies</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Une fiscalité complexe qui demande une analyse rigoureuse. Nous vous aidons à structurer vos plus-values dans un cadre juridique sécurisé et optimisé.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image & Decorative Right */}
          <div className="w-full md:w-1/2 relative flex justify-end mt-12 md:mt-0 xl:-mr-12">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-cyan/20 rounded-[10rem] -z-10 rounded-tr-none rounded-br-none"></div>
            
            {/* Placeholder for the portrait */}
            <div className="relative w-full max-w-sm aspect-[3/4] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              {/* Fallback image if generative src not available */}
              <div className="absolute inset-0 bg-brand-dark flex flex-col items-center justify-center text-white/50 text-center p-8">
                <div className="w-24 h-24 bg-white/10 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white/40">📸</span>
                </div>
                <p>Portrait professionnel</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80" 
                alt="Portrait Consultant"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
