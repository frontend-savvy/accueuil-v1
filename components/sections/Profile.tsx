import Image from "next/image";

export default function Profile() {
  return (
    <section className="bg-[#fbfcff] w-full py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-dark mb-24 text-center tracking-tight">
          Une expertise qui donne le la
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side: Stats / Cards */}
          <div className="flex flex-col sm:flex-row gap-8 lg:w-[55%] w-full">
            {/* Box 1 */}
            <div className="bg-white p-10 rounded-[2rem] flex flex-col items-center text-center shadow-[0_15px_50px_rgba(0,0,0,0.04)] h-full w-full group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-brand-green/10 text-brand-green font-bold text-2xl rounded-2xl flex items-center justify-center mb-8 shrink-0 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white shadow-inner transition-all duration-300">
                10
              </div>
              <h3 className="font-bold text-xl text-brand-dark mb-4">10 années</h3>
              <p className="text-gray-500 text-[15px] font-light leading-relaxed">
                D'expertise de comptabilité d'entreprise, de fiscalité et de conseils de premier plan pour des indépendants en Fribourg.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-10 rounded-[2rem] flex flex-col items-center text-center shadow-[0_15px_50px_rgba(0,0,0,0.04)] h-full w-full group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-brand-pink/10 text-brand-pink font-bold text-2xl rounded-2xl flex items-center justify-center mb-8 shrink-0 group-hover:scale-110 group-hover:bg-brand-pink group-hover:text-white shadow-inner transition-all duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5V4H2v16h5m10 0v-5H7v5m10 0a2 2 0 002-2v-3H5v3a2 2 0 002 2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-brand-dark mb-4">Réseau de partenaires</h3>
              <p className="text-gray-500 text-[15px] font-light leading-relaxed">
                Des milliers d'heures à conseiller mes clients à tous les niveaux de leur vie.
              </p>
            </div>
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="lg:w-[45%] w-full max-w-md relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-brand-cyan/20 rounded-[4rem] transform scale-110 -rotate-6 transition-transform duration-700 hover:rotate-[-2deg]" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }} />
            <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-white border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                alt="Expertise Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
