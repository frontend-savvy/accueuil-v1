export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Prise de contact",
      desc: "L'objectif est de faire un état des lieux de votre situation, de vos projets et de vos interrogations.",
      color: "text-brand-blue"
    },
    {
      number: "2",
      title: "Évaluation",
      desc: "Nous construisons un plan d'action pertinent. Une approche globale pour des réponses sur-mesure.",
      color: "text-brand-pink"
    },
    {
      number: "3",
      title: "Mise en place de l'optimisation",
      desc: "Notre mission au quotidien : vous accompagner dans la structuration de vos revenus et sécuriser votre patrimoine.",
      color: "text-brand-green"
    }
  ];

  return (
    <section className="bg-white w-full py-32 relative overflow-hidden">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-dark mb-6 tracking-tight">
          Une démarche claire
        </h2>
        <p className="text-gray-500 max-w-2xl mb-24 text-lg font-light leading-relaxed">
          Une approche globale pour des réponses sur-mesure... Notre mission à la clé : vous soulager dans votre quotidien et vous aider à structurer vos revenus.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative w-full mb-8">
          {/* Connector Line Desktop */}
          <div className="hidden md:block absolute top-[25%] left-[15%] right-[15%] h-px bg-gradient-to-r from-brand-blue/20 via-brand-pink/20 to-brand-green/20 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center relative z-10 group hover:-translate-y-2 transition-transform duration-500">
              <div className="relative">
                <span className={`text-8xl md:text-9xl font-black ${step.color} opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500 animate-pulse bg-clip-text`}>
                  {step.number}
                </span>
                <div className={`absolute inset-0 blur-xl ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 -mt-4 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-light max-w-[280px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
