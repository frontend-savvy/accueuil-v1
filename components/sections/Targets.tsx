import { Building2, Laptop, Stethoscope } from "lucide-react";

export default function Targets() {
  const targets = [
    {
      title: "Professions médicales",
      subtitle: "Médecins, chirurgiens, dentistes et plus largement professionnels de santé",
      description: "Passage en SEL, création d'une holding patrimoniale pour investir via votre structure, mise en place de schémas plus élaborés....",
      actionText: "Nous vous aidons à :",
      bullets: [
        "Optimiser la structuration de votre passage en SEL",
        "Mettre en place une holding patrimoniale pour piloter efficacement vos investissements, notamment via la création, le cas échéant, d'une société d'achat-revente de prothèses au service de votre cabinet",
        "Sécuriser la réduction de votre charge fiscale et sociale"
      ],
      icon: <Stethoscope className="text-white w-6 h-6" />,
      iconBg: "bg-brand-green"
    },
    {
      title: "Dirigeants de TPE / PME",
      subtitle: "Entrepreneurs, gérants, actionnaires",
      description: "Votre entreprise génère des résultats, mais vous avez le sentiment que la fiscalité absorbe une part excessive de vos profits. Vous cherchez à organiser les flux (dividendes, rémunérations, réinvestissement) de façon plus efficace.",
      actionText: "Nous vous aidons à :",
      bullets: [
        "Optimiser la fiscalité de votre société ainsi que votre stratégie de rémunération",
        "Structurer votre patrimoine professionnel au travers d'une holding afin de soutenir vos projets d'investissement",
        "Anticiper et préparer la transmission ou la cession de votre entreprise dans des conditions optimales"
      ],
      icon: <Building2 className="text-white w-6 h-6" />,
      iconBg: "bg-brand-blue"
    },
    {
      title: "Freelances et indépendants",
      subtitle: "Consultants, professions libérales, créateurs",
      description: "Vous avez démarré en micro-entreprise ou en EI, mais votre activité se développe. Vous vous demandez s'il est temps de passer en société, si une domiciliation en ZFU est pertinente, ou comment structurer votre croissance.",
      actionText: "Nous vous aidons à :",
      bullets: [
        "Déterminer le moment opportun pour votre passage en société",
        "Vous accompagner dans une domiciliation en ZFU afin de bénéficier d'une exonération totale d'impôt",
        "Construire une structure simple, solide et évolutive"
      ],
      icon: <Laptop className="text-white w-6 h-6" />,
      iconBg: "bg-brand-pink"
    },
  ];

  return (
    <section className="bg-[#F4FAFF] w-full py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Heading Section */}
        <h2 className="text-4xl md:text-[42px] font-serif font-bold text-brand-dark mb-4 text-center tracking-tight">
          À qui s'adresse notre expertise ?
        </h2>
        <p className="text-brand-blue text-center max-w-3xl mb-16 text-[17px] font-medium leading-relaxed">
          Notre cabinet accompagne trois profils de clients dont les besoins fiscaux<br className="hidden md:block"/> nécessitent une approche spécialisée.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {targets.map((target, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col h-full">
              
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 shrink-0 ${target.iconBg}`}>
                {target.icon}
              </div>

              {/* Title & Subtitles */}
              <h3 className="text-[22px] font-serif font-bold text-brand-blue mb-3 leading-snug">
                {target.title}
              </h3>
              <p className="text-[15px] font-medium text-gray-400 mb-6 leading-relaxed">
                {target.subtitle}
              </p>
              
              {/* Description Phase */}
              <p className="text-[14px] text-gray-400 leading-relaxed mb-6 flex-1 min-h-[105px]">
                {target.description}
              </p>

              {/* Action List Section */}
              <div className="mt-auto">
                <p className="text-[14px] font-bold text-brand-blue mb-4">
                  {target.actionText}
                </p>
                <ul className="space-y-3.5">
                  {target.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                      <span className="text-[13px] text-gray-500 leading-relaxed font-medium">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
