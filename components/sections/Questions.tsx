import { Button } from "@/components/ui/button";

const groups = [
  {
    title: "Structure et organisation",
    questions: [
      "Vous avez le sentiment que votre structure actuelle (EI, société, SEL) n'est pas optimale pour votre situation.",
      "Vous repoussez des décisions importantes passage en SEL, création de holding par manque de visibilité sur les conséquences.",
      "Vous ne savez pas comment articuler votre patrimoine professionnel et personnel de manière cohérente.",
    ],
  },
  {
    title: "Charge fiscale",
    questions: [
      "Votre impôt augmente plus vite que vos revenus, sans que vous compreniez vraiment pourquoi.",
      "Vous savez qu'il existe des leviers d'optimisation, mais vous ne savez pas lesquels sont adaptés à votre cas ni lesquels sont risqués.",
      "Chaque année, vous avez l'impression de payer plus que nécessaire, sans pouvoir agir.",
    ],
  },
  {
    title: "Complexité et sécurité",
    questions: [
      "Vous avez peur de faire un mauvais choix ou de vous retrouver dans un montage fragile vis-à-vis de l'administration fiscale.",
      "Vous avez entendu parler de SEL, de holdings, de ZFU… mais personne ne vous a expliqué clairement ce qui est pertinent pour vous.",
      "Vous cherchez un interlocuteur capable de vous donner une vision claire, pas un discours générique.",
    ],
  },
];

export default function Questions() {
  return (
    <section className="bg-white w-full py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-[42px] font-serif font-bold text-brand-dark mb-5 text-center tracking-tight leading-tight">
          Les questions que vous vous posez
        </h2>

        {/* Blue subtitle */}
        <p className="text-brand-blue text-center text-[16px] font-medium max-w-2xl mb-14 leading-relaxed">
          Beaucoup de professionnels partagent ce constat : une fiscalité qui pèse, une structure qui mériterait d'être revue, mais ni le temps ni la clarté pour s'en occuper.
        </p>

        {/* Three columns */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-14">
          {groups.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col">
              {/* Column title with border line BELOW */}
              <div className="pb-5 mb-6 border-b-2 border-[#C0E0F0]">
                <h3 className="font-bold text-[18px] text-[#04052e]">
                  {group.title}
                </h3>
              </div>

              {/* Questions with left blue border */}
              <div className="flex  flex-col gap-4">
                {group.questions.map((q, qIdx) => (
                  <div
                    key={qIdx}
                    className="pl-4 border-l-[3px] border-brand-blue/70 py-1"
                  >
                    <p className="text-[13.5px] text-gray-500 leading-relaxed font-medium">
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button className="bg-brand-blue hover:bg-blue-700 text-white rounded-md px-8 py-5 text-[15px] font-semibold shadow-none">
          Réserver un appel gratuit
        </Button>

      </div>
    </section>
  );
}
