import Image from "next/image";
import { Copyright, Settings } from "lucide-react";

export default function Profile() {
  return (
    <section className="bg-white w-full py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-[42px] font-serif font-bold text-[#030423] mb-16 text-center tracking-tight leading-tight">
          Une expertise qui change la donne
        </h2>

        {/* Main Row */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Left: Two transparent columns side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">

            {/* Column 1: Honoraires */}
            <div className="flex flex-col items-center text-center px-4">
              {/* Green icon with black icon inside */}
              <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center mb-6 shrink-0">
                <Copyright className="text-black w-5 h-5" strokeWidth={2.5} />
              </div>
              <h3 className="text-[17px] font-bold text-[#030423] mb-4">
                Honoraires
              </h3>
              <p className="text-[14px] text-gray-400 leading-relaxed font-normal">
                Honoraires forfaitaires, clairs et définis dès le départ. Une tarification pensée pour rester proportionnée aux économies fiscales et sociales obtenues, avec un engagement simple : nos honoraires n&apos;excèdent jamais les économies réalisées.
              </p>
            </div>

            {/* Column 2: Stratégie sur mesure */}
            <div className="flex flex-col items-center text-center px-4">
              {/* Pink icon with black icon inside */}
              <div className="w-12 h-12 bg-brand-pink rounded-xl flex items-center justify-center mb-6 shrink-0">
                <Settings className="text-black w-5 h-5" strokeWidth={2.5} />
              </div>
              <h3 className="text-[17px] font-bold text-[#030423] mb-4">
                Stratégie sur mesure
              </h3>
              <p className="text-[14px] text-gray-400 leading-relaxed font-normal">
                Chaque client bénéficie d&apos;une analyse personnalisée de son potentiel fiscal.
              </p>
            </div>

          </div>

          {/* Right: Profil.png with baked-in wavy blob */}
          <div className="relative shrink-0 w-full lg:w-[360px] flex justify-center lg:justify-end">
            <Image
              src="/Profil.png"
              alt="Expert fiscal"
              width={360}
              height={440}
              className="object-contain w-full max-w-[360px]"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}