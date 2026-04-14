export default function LogoCloud() {
  const logos = [
    { name: "Phénix", icon: "🐦" },
    { name: "Balzac", icon: "🏛️" },
    { name: "Pilote", icon: "✈️" },
    { name: "Eclipso", icon: "🌗" },
    { name: "Météore", icon: "🌠" },
    { name: "Galaxis", icon: "🌌" },
    { name: "Aurore", icon: "🌅" },
  ];

  return (
    <section className="w-full border-t border-b border-gray-100 bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <p className="text-sm text-gray-500 font-medium mb-6 uppercase tracking-wider">
          Ils nous font confiance au quotidien
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 font-bold text-xl md:text-2xl text-gray-800">
              <span className="text-2xl">{logo.icon}</span>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
