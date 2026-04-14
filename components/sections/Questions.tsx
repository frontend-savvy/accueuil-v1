import { Button } from "@/components/ui/button";

export default function Questions() {
  const groups = [
    {
      title: "Cadres & employés",
      questions: [
        "Je souhaite réduire mes impôts ?",
        "Je dois remplir ma déclaration d’impôt ?",
        "Je gagne bien ma vie et j’épargne tous les mois, est-ce que je fais les choses correctement ?",
      ]
    },
    {
      title: "Indépendants",
      questions: [
        "Je souhaite me mettre à mon compte, ou créer mon entreprise ?",
        "Je gagne ma vie, comment épargner pour ma retraite tout en payant moins d’impôt ?",
        "Mon conjoint a une bonne situation et moi aussi, et nous allons passer un cap fiscal ?",
      ]
    },
    {
      title: "Dirigeants / Actionnaires",
      questions: [
        "Je souhaite sortir de l’argent de ma holding en franchise d’impôt ?",
        "Comment anticiper la transmission de mon entreprise : vendre ou la léguer ? Comment m’y préparer ?",
        "Je vais avoir un grand capital comment le placer et quelle sera ma fiscalité...",
      ]
    }
  ];

  return (
    <section className="bg-white w-full py-24 relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-dark mb-24 text-center tracking-tight">
          Les questions que vous vous posez
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full mb-20">
          {groups.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col relative md:pl-8 border-l border-gray-100 transition-colors hover:border-brand-blue/30 group">
              <h3 className="font-bold text-lg text-brand-dark mb-8 tracking-tight">
                {group.title}
              </h3>
              <ul className="space-y-6">
                {group.questions.map((q, qIdx) => (
                  <li key={qIdx} className="flex gap-4 items-start group/item cursor-default">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-brand-blue/20 shrink-0 group-hover/item:bg-brand-blue group-hover/item:shadow-[0_0_8px_rgba(58,67,255,0.5)] transition-all" />
                    <p className="text-[15px] font-light text-gray-600 leading-relaxed group-hover/item:text-brand-dark transition-colors">
                      {q}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Button className="bg-brand-blue hover:bg-blue-700 text-white rounded-md px-10 py-6 text-base font-medium shadow-[0_8px_20px_rgb(58,67,255,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgb(58,67,255,0.35)] transition-all">
          Je me renseigne
        </Button>
      </div>
    </section>
  );
}
