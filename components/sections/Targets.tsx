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
      iconBg: "bg-brand-green/20",
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
      iconBg: "bg-brand-blue/20",
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
      iconBg: "bg-brand-pink/20",
    },
  ];

  return (
    <section className="bg-brand-light w-full py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6 text-center tracking-tight">
          À qui s'adresse notre expertise ?
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mb-16 text-lg">
          Nous accompagnons des profils variés pour répondre à des problématiques spécifiques et sur-mesure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((target, idx) => (
            <Card key={idx} className="border-0 shadow-lg shadow-black/5 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="pt-8 px-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${target.iconBg}`}>
                  {target.icon}
                </div>
                <CardTitle className="text-xl font-bold text-brand-dark mb-2">
                  {target.title}
                </CardTitle>
                <p className="text-sm text-gray-500 font-medium">
                  {target.description}
                </p>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="h-px w-full bg-gray-100 my-4" />
                <ul className="space-y-4 mt-6">
                  {target.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-brand-blue shrink-0" />
                      {bullet}
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
