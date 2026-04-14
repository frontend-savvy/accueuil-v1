import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Building2, Briefcase } from "lucide-react";

export default function Targets() {
  const targets = [
    {
      title: "Professions médicales",
      description: "Médecins, chirurgiens-dentistes, infirmiers, kinésithérapeutes, pharmaciens...",
      bullets: [
        "Optimisation de vos charges sociales et fiscales",
        "Aide à la création et à la reprise de cabinet",
        "Accompagnement dans vos projets d'investissement",
      ],
      icon: <User className="text-brand-green w-6 h-6" />,
      iconBg: "bg-brand-green/10 text-brand-green",
      hoverBg: "group-hover:bg-brand-green/20"
    },
    {
      title: "Gérant de TPE/PME",
      description: "Artisans, commerçants, professions libérales, dirigeants d'entreprise...",
      bullets: [
        "Tableaux de bord et indicateurs de performance",
        "Optimisation de la rémunération du dirigeant",
        "Accompagnement au développement de votre activité",
        "Choix de la forme juridique et du statut social",
      ],
      icon: <Building2 className="text-brand-blue w-6 h-6" />,
      iconBg: "bg-brand-blue/10 text-brand-blue",
      hoverBg: "group-hover:bg-brand-blue/20"
    },
    {
      title: "Indépendants, dirigeants",
      description: "Freelances, consultants, auto-entrepreneurs...",
      bullets: [
        "Mise en place de solutions d'épargne retraite",
        "Bilan patrimonial personnalisé",
        "Stratégie de transmission et succession",
        "Optimisation de votre fiscalité personnelle",
      ],
      icon: <Briefcase className="text-brand-pink w-6 h-6" />,
      iconBg: "bg-brand-pink/10 text-brand-pink",
      hoverBg: "group-hover:bg-brand-pink/20"
    },
  ];

  return (
    <section className="bg-[#fbfcff] w-full py-32 relative overflow-hidden">
      {/* Decorative background light gradient */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-dark mb-6 text-center tracking-tight">
          À qui s'adresse notre expertise ?
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mb-20 text-lg font-light leading-relaxed">
          Nous accompagnons des profils variés pour répondre à des problématiques spécifiques et sur-mesure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {targets.map((target, idx) => (
            <Card key={idx} className="group relative border-0 bg-white rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] shadow-[0_4px_20px_rgba(0,0,0,0.03)] z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <CardHeader className="pt-10 px-10 relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 ${target.iconBg} ${target.hoverBg}`}>
                  {target.icon}
                </div>
                <CardTitle className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors duration-300">
                  {target.title}
                </CardTitle>
                <p className="text-[15px] font-light text-gray-500 leading-relaxed min-h-[4.5rem]">
                  {target.description}
                </p>
              </CardHeader>
              <CardContent className="px-10 pb-10 relative z-10">
                <div className="h-px w-full bg-gradient-to-r from-gray-100 via-gray-200 to-transparent my-6 group-hover:via-brand-blue/20 transition-all duration-500" />
                <ul className="space-y-4">
                  {target.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-4 text-[15px] text-gray-600 font-light items-start">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-brand-blue/30 group-hover:bg-brand-blue transition-colors duration-300 shrink-0 shadow-[0_0_8px_rgba(58,67,255,0.4)]" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
