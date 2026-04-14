export default function About() {
  return (
    <section className="bg-white w-full py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark tracking-tight">
              Le cabinet Exaucé
            </h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" alt="France" className="w-8 rounded-sm shadow-sm" />
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Notre cabinet est né de la volonté de vous accompagner dans un environnement fiscal, social et juridique en perpétuel changement. Nous considérons l'expert-comptable non pas comme un simple intervenant, mais comme un véritable partenaire au quotidien.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Face à une complexité croissante des textes de loi, nous mettons notre savoir-faire et notre technicité à votre disposition avec une approche transversale sur mesure.
          </p>
          <p className="text-gray-600 leading-relaxed font-medium">
            Notre exigence de réactivité, de qualité de travail et de suivi proactif permet à nos clients de bénéficier des meilleures opportunités qui s'offrent à eux pour préparer sereinement leur retraite et optimiser leur imposition dès aujourd'hui.
          </p>
        </div>

        {/* Geometric Abstract Art Grid */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="grid grid-cols-3 gap-2 w-full max-w-[320px]">
            {/* Top row */}
            <div className="aspect-square bg-brand-yellow rounded-xl rounded-bl-[40px]"></div>
            <div className="aspect-square bg-brand-pink rounded-full"></div>
            <div className="aspect-square bg-brand-dark rounded-xl rounded-tr-[40px]"></div>
            
            {/* Bottom row */}
            <div className="aspect-square bg-brand-cyan rounded-md" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}></div>
            <div className="aspect-square bg-brand-green rounded-[1.5rem] rounded-tl-sm rounded-br-sm" style={{ clipPath: "polygon(0 10%, 100% 0, 90% 100%, 10% 90%)" }}></div>
            <div className="aspect-square bg-brand-blue rounded-full"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
