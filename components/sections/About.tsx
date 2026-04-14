export default function About() {
  return (
    <section className="bg-white w-full py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-20 relative z-10">
        
        {/* Text Content */}
        <div className="w-full md:w-[55%] flex flex-col items-start text-left">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-dark tracking-tight">
              Le cabinet Exaucé
            </h2>
            <span className="text-3xl drop-shadow-sm" title="Fribourg, Suisse">🇨🇭</span>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed font-light text-[17px]">
            Notre cabinet est né de la volonté de vous accompagner dans un environnement fiscal, social et juridique en perpétuel changement. Nous considérons l'expert-comptable non pas comme un simple intervenant, mais comme un véritable partenaire au quotidien.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed font-light text-[17px]">
            Face à une complexité croissante des textes de loi, nous mettons notre savoir-faire et notre technicité à votre disposition avec une approche transversale sur-mesure.
          </p>
          <p className="text-gray-800 leading-relaxed font-medium text-[17px]">
            Notre exigence de réactivité, de qualité de travail et de suivi proactif permet à nos clients de bénéficier des meilleures opportunités qui s'offrent à eux pour préparer sereinement leur réussite et optimiser leur situation dès aujourd'hui.
          </p>
        </div>

        {/* Geometric Abstract Art Grid */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end">
          <div className="grid grid-cols-3 gap-3 w-full max-w-[340px] group perspective-[1000px]">
            {/* Top row */}
            <div className="aspect-square bg-brand-yellow rounded-xl shadow-lg shadow-brand-yellow/20 hover:scale-110 hover:-rotate-6 hover:translate-z-10 transition-all duration-500 ease-out" style={{ borderRadius: '20% 20% 20% 20% / 40% 40% 20% 20%' }}>
              <div className="w-full h-full bg-white/20 rounded-xl" />
            </div>
            <div className="aspect-square bg-brand-pink rounded-3xl rotate-45 scale-90 shadow-lg shadow-brand-pink/20 hover:scale-110 hover:rotate-90 transition-all duration-700 ease-out" style={{ clipPath: "polygon(33% 0, 66% 0, 66% 33%, 100% 33%, 100% 66%, 66% 66%, 66% 100%, 33% 100%, 33% 66%, 0 66%, 0 33%, 33% 33%)" }}></div>
            <div className="aspect-square bg-brand-dark rounded-full shadow-xl shadow-brand-dark/20 hover:scale-105 transition-all duration-500 ease-out"></div>
            
            {/* Bottom row */}
            <div className="aspect-square bg-brand-cyan rounded-[2rem] scale-95 shadow-lg shadow-brand-cyan/20 hover:scale-110 hover:rotate-12 transition-all duration-500 ease-out" style={{ clipPath: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)" }}></div>
            <div className="aspect-square bg-brand-green rounded-xl shadow-lg shadow-brand-green/20 hover:scale-110 transition-all duration-500 ease-out flex items-center justify-center p-2">
              <div className="w-full h-full border-[6px] border-white/30 rounded-xl" />
            </div>
            <div className="aspect-square bg-brand-blue rounded-full scale-90 shadow-xl shadow-brand-blue/30 hover:scale-110 transition-all duration-500 ease-out bg-gradient-to-tr from-brand-blue to-blue-400"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
