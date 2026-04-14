export default function Process() {
  const steps = [
    {
      number: "1",
      title: "1er rendez-vous",
      desc: "Nous échangeons de vive voix sur votre situation, vos objectifs personnels et professionnels pour cibler au mieux vos attentes.",
      color: "text-brand-blue"
    },
    {
      number: "2",
      title: "Analyse",
      desc: "Notre cabinet étudie minutieusement l'ensemble de votre patrimoine afin de vous proposer les stratégies d'optimisation adaptées.",
      color: "text-brand-pink"
    },
    {
      number: "3",
      title: "Mise en place & Suivi annuel",
      desc: "Nous vous accompagnons dans le déploiement des solutions et ajustons notre stratégie au fil des évolutions législatives.",
      color: "text-brand-green"
    }
  ];

  return (
    <section className="bg-brand-light w-full py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">
          Une démarche claire
        </h2>
        <p className="text-gray-500 max-w-2xl mb-20 text-lg">
          Un accompagnement de A à Z : de la prise de contact à l'optimisation pérenne de votre fiscalité et de vos revenus.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative w-full mb-8">
          {/* Connector Line Desktop */}
          <div className="hidden md:block absolute top-[20%] left-[10%] right-[10%] h-px bg-gray-200 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center relative z-10">
              <span className={`text-6xl md:text-8xl font-black ${step.color} opacity-20 mb-[-2rem] md:mb-[-3rem]`}>
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-brand-dark mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
