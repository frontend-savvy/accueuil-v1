import { Button } from "@/components/ui/button";

export default function Questions() {
  const columns = [
    {
      title: "Gérant de TPE/PME",
      questions: [
        "Comment rémunérer au mieux le dirigeant tout en maîtrisant les charges sociales ?",
        "Quelles solutions pour optimiser la trésorerie de mon entreprise et préparer sa transmission ?",
        "Comment la structuration en holding peut-elle optimiser ma fiscalité et mes investissements ?"
      ],
    },
    {
      title: "Indépendants",
      questions: [
        "Quels sont les dispositifs les plus avantageux pour préparer ma retraite tout en réduisant mon IRP ?",
        "Comment optimiser mes revenus professionnels et la fiscalité de mon entreprise ?",
        "Est-il intéressant de changer le statut de mon entreprise (ex: passage de l'EI à la SELARL) ?"
      ],
    },
    {
      title: "Dirigeants de santé",
      questions: [
        "Comment optimiser ma fiscalité personnelle compte tenu de mes revenus élevés ?",
        "Quelles stratégies adopter pour la transmission de mon patrimoine (SCI, démembrement) ?",
        "Comment diversifier et sécuriser mes investissements financiers et immobiliers ?"
      ],
    },
  ];

  return (
    <section className="bg-white w-full py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6 text-center tracking-tight">
          Les questions que vous vous posez
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mb-16 text-lg">
          Nous apportons des réponses claires et chiffrées aux interrogations fréquentes de notre clientèle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-16">
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-xl font-bold text-brand-dark mb-6 pb-2 border-b border-gray-100">
                {col.title}
              </h3>
              <ul className="space-y-6">
                {col.questions.map((q, qIdx) => (
                  <li key={qIdx} className="flex gap-4 text-gray-600 leading-relaxed border-l-2 border-brand-blue/20 pl-4 hover:border-brand-blue transition-colors">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Button className="bg-brand-blue hover:bg-blue-700 text-white rounded-md px-8 py-6 shadow-xl shadow-brand-blue/30 text-lg">
          Poser une question
        </Button>
      </div>
    </section>
  );
}
