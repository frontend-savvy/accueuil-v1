import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Le sens du service est chez Exauce authentique & sincère ! Ses conseils m'ont permis d'y voir clair sur ma situation mais surtout de me projeter sereinement, mon banquier a été impressionné du business-plan.",
      author: "SOPHIANE G.",
      role: "Client chez exaucé",
      avatar: "SG",
    },
    {
      quote: "Une expertise pointue et des conseils adaptés à ma situation médicale. Nous avons pu optimiser notre fiscalité de façon claire. Je suis pleinement satisfait de leur accompagnement tout au long de l'année.",
      author: "Dr. SOPHIE M.",
      role: "Médecin Généraliste",
      avatar: "SM",
    },
  ];

  return (
    <section className="bg-white w-full py-32 text-brand-dark text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
        <div className="bg-[#FCFDF2] border border-[#E9EBB1] text-brand-dark font-semibold mb-12 text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
          Ce que l'on dit de moi
        </div>

        <Carousel className="w-full max-w-3xl" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((testi, idx) => (
              <CarouselItem key={idx}>
                <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-700 ease-out">
                  <div className="text-brand-pink text-8xl font-serif leading-none h-16 drop-shadow-md">"</div>
                  <p className="text-2xl md:text-3xl font-serif font-medium leading-normal mb-14 px-4 text-gray-800">
                    {testi.quote}
                  </p>
                  <Avatar className="w-20 h-20 mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-4 border-white">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testi.avatar}&backgroundColor=f3f6ff&textColor=0a0d14`} />
                    <AvatarFallback className="bg-brand-light text-brand-dark">{testi.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="font-bold text-sm tracking-wider uppercase">{testi.author}</div>
                  <div className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-widest">
                    {testi.role}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-16 gap-6 relative">
            <CarouselPrevious className="relative static bg-white text-gray-400 hover:text-brand-blue border border-gray-200 hover:border-brand-blue translate-y-0 translate-x-0 shadow-sm hover:shadow-md transition-all" />
            <CarouselNext className="relative static bg-white text-gray-400 hover:text-brand-blue border border-gray-200 hover:border-brand-blue translate-y-0 translate-x-0 shadow-sm hover:shadow-md transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
