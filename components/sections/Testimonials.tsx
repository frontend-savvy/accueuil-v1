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
      quote: "Le cabinet Exaucé m'a permis de structurer mon patrimoine et de réduire mon impôt en toute sérénité. Une approche très personnalisée et humaine que je recommande vivement. Mon entreprise est aujourd'hui sur de bons rails.",
      author: "Julien Dumont",
      role: "Gérant d'entreprise",
      avatar: "JD",
    },
    {
      quote: "Une expertise pointue et des conseils adaptés à ma situation médicale. Nous avons pu optimiser notre fiscalité de façon claire. Je suis pleinement satisfait de leur accompagnement tout au long de l'année.",
      author: "Dr. Sophie Martin",
      role: "Médecin Généraliste",
      avatar: "SM",
    },
  ];

  return (
    <section className="bg-brand-blue w-full py-24 text-white text-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <p className="text-blue-200 font-semibold mb-8 tracking-widest text-sm uppercase">
          Ce que nos clients disent de nous
        </p>

        <Carousel className="w-full max-w-2xl">
          <CarouselContent>
            {testimonials.map((testi, idx) => (
              <CarouselItem key={idx}>
                <div className="flex flex-col items-center">
                  <div className="text-blue-300 text-6xl font-serif leading-none mb-6">"</div>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10">
                    {testi.quote}
                  </p>
                  <Avatar className="w-16 h-16 mb-4 ring-4 ring-white/10">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testi.avatar}`} />
                    <AvatarFallback className="bg-blue-800 text-white">{testi.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="font-bold">{testi.author}</div>
                  <div className="text-sm border border-blue-400 rounded-full py-1 px-3 mt-2 text-blue-200">
                    {testi.role}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-center mt-12 gap-4 relative">
            <CarouselPrevious className="relative static bg-white/10 text-white hover:bg-white hover:text-brand-blue border-0 translate-y-0 translate-x-0" />
            <CarouselNext className="relative static bg-white/10 text-white hover:bg-white hover:text-brand-blue border-0 translate-y-0 translate-x-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
