import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export default function Cta() {
  return (
    <section className="bg-white w-full py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl flex flex-col lg:flex-row">

        {/* ─── Left: Bureau image — no gap, flush with blue panel ─── */}
        <div className="w-full lg:w-[42%] bg-white flex items-end justify-center">
          <Image
            src="/Bureau.png"
            alt="Cabinet Exonéo — expert fiscal"
            width={360}
            height={420}
            className="object-contain object-bottom w-full"
            priority
          />
        </div>

        {/* ─── Right: Brand blue panel — flush against image ─── */}
        <div className="w-full lg:w-[58%] bg-[#4141F4] flex flex-col justify-center px-10 md:px-14 py-12">

          {/* Heading */}
          <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-white leading-[1.2] mb-8 max-w-[380px]">
            Réduisons votre fiscalité maintenant
          </h2>

          {/* White card */}
          <div className="bg-white rounded-xl px-6 py-5 max-w-[380px] w-full">

            {/* Card title row */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <CalendarDays className="text-[#030423] w-4 h-4 shrink-0" strokeWidth={1.8} />
              <span className="text-[13.5px] font-bold text-[#030423]">
                Appel découverte offert (15 min)
              </span>
            </div>

            {/* Card description */}
            <p className="text-[12.5px] text-gray-400 leading-relaxed mb-4">
              Vérifiez dès maintenant que nous sommes le bon interlocuteur pour votre situation.
            </p>

            {/* CTA Button */}
            <Button className="bg-[#4141F4] hover:bg-blue-700 text-white text-[13.5px] font-semibold w-full py-4 rounded-lg shadow-none">
              Réserver un appel gratuit
            </Button>

          </div>
        </div>

      </div>
    </section>
  );
}
