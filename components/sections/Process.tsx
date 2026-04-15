const steps = [
  {
    number: "1",
    title: "Prise de contacte",
    desc: "Un premier échange rapide pour comprendre votre situation, vos enjeux et vérifier l'adéquation de notre accompagnement avec vos besoins.",
    numColor: "text-brand-blue",
  },
  {
    number: "2",
    title: "Consultation",
    desc: "Une analyse approfondie de votre situation fiscale et sociale afin d'identifier les optimisations pertinentes et de préparer la stratégie de mise en œuvre.",
    numColor: "text-brand-pink",
  },
  {
    number: "3",
    title: "Mise en oeuvre & Accompagnement",
    desc: "Nous déployons la stratégie validée et assurons un accompagnement rigoureux jusqu'à sa parfaite mise en place.",
    numColor: "text-brand-green",
  },
];

export default function Process() {
  return (
    <section className="bg-white w-full py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-[42px] font-serif font-bold text-[#030423] mb-5 tracking-tight leading-tight">
          Une démarche claire
        </h2>

        {/* Blue subtitle */}
        <p className="text-[#4141f4]/80 text-[16px] font-medium md:max-w-[70%] mb-20 leading-[1.6] text-center">
          Notre objectif : vous faire passer d&apos;une situation floue à une structure fiscalement optimisée, étape par étape, avec une visibilité totale sur le processus.
        </p>

        {/* Steps */}
        <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-4  w-full">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Number — serif bold to match image style */}
              <span className={`text-[80px] font-bold leading-none mb-5 [font-family:var(--font-display)] ${step.numColor}`}>
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#030423] mb-3 leading-snug">
                {step.title}
              </h3>

              {/* Description — max-width tuned to match line-count in image */}
              <p className="text-[12px] text-gray-400 leading-[1.6] font-normal ">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
