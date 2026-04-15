export default function LogoCloud() {
  return (
    <section className="w-full bg-[#F4FAFF] flex flex-col items-center pt-8 pb-8  border-[#E5E7EB]/50">
      
      {/* Divider / Trust Text */}
      <div className="flex items-center justify-center w-full max-w-7xl px-6 mb-8 mt-2">
        <div className="h-px bg-black  flex-1"></div>
        <span className="px-12 text-[15px] font-bold text-gray-700">plus de 300 Chefs d'entreprise nous ont fait confiance</span>
        <div className="h-px bg-black flex-1"></div>
      </div>

      {/* Infinite Marquee */}
      <div className="w-full justify-center overflow-hidden flex relative pb-4">
        <div className="flex whitespace-nowrap min-w-full items-center gap-3 md:gap-8" style={{ animation: 'marquee 25s linear infinite' }}>
          {/* Logo Sequence repeated twice for seamless looping */}
          {[...Array(4)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex gap-12 md:gap-20 min-w-full items-center justify-between shrink-0 px-6">
              
              {/* Webflow Logo Exact */}
              <div className="flex items-center gap-2 opacity-90 transition-all cursor-default text-brand-dark">
                <svg width="32" height="24" viewBox="0 0 45 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9248 18.2323L8.03158 5.67383H0.96875L9.6471 27.24H16.273L20.8164 15.1764L25.32 27.24H31.9056L40.6637 5.67383H33.4215L28.1822 19.349L24.0886 8.52841H17.483L12.9248 18.2323Z" fill="currentColor"/>
                </svg>
                <span className="text-2xl font-bold tracking-tighter text-brand-dark -ml-1">Webflow</span>
              </div>

              {/* Relume Logo Clone */}
              <div className="flex items-center gap-2 opacity-90 transition-all cursor-default text-brand-dark">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM10 16.5L4 13.5V10.5L10 13.5V16.5ZM12 4.5L18 7.5L12 10.5L6 7.5L12 4.5ZM20 13.5L14 16.5V13.5L20 10.5V13.5Z" fill="currentColor" />
                </svg>
                <span className="text-2xl font-bold tracking-tight text-brand-dark">Relume</span>
              </div>
              
              {/* Webflow Logo Exact */}
              <div className="flex items-center gap-2 opacity-90 transition-all cursor-default text-brand-dark">
                <svg width="32" height="24" viewBox="0 0 45 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9248 18.2323L8.03158 5.67383H0.96875L9.6471 27.24H16.273L20.8164 15.1764L25.32 27.24H31.9056L40.6637 5.67383H33.4215L28.1822 19.349L24.0886 8.52841H17.483L12.9248 18.2323Z" fill="currentColor"/>
                </svg>
                <span className="text-2xl font-bold tracking-tighter text-brand-dark -ml-1">Webflow</span>
              </div>

              {/* Relume Logo Clone */}
              <div className="flex items-center gap-2 opacity-90 transition-all cursor-default text-brand-dark">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM10 16.5L4 13.5V10.5L10 13.5V16.5ZM12 4.5L18 7.5L12 10.5L6 7.5L12 4.5ZM20 13.5L14 16.5V13.5L20 10.5V13.5Z" fill="currentColor" />
                </svg>
                <span className="text-2xl font-bold tracking-tight text-brand-dark">Relume</span>
              </div>
              
              {/* Webflow Logo Exact */}
              <div className="flex items-center gap-2 opacity-90 transition-all cursor-default text-brand-dark">
                <svg width="32" height="24" viewBox="0 0 45 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9248 18.2323L8.03158 5.67383H0.96875L9.6471 27.24H16.273L20.8164 15.1764L25.32 27.24H31.9056L40.6637 5.67383H33.4215L28.1822 19.349L24.0886 8.52841H17.483L12.9248 18.2323Z" fill="currentColor"/>
                </svg>
                <span className="text-2xl font-bold tracking-tighter text-brand-dark -ml-1">Webflow</span>
              </div>

              {/* Relume Logo Clone */}
              <div className="flex items-center gap-2 opacity-90 transition-all cursor-default text-brand-dark">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM10 16.5L4 13.5V10.5L10 13.5V16.5ZM12 4.5L18 7.5L12 10.5L6 7.5L12 4.5ZM20 13.5L14 16.5V13.5L20 10.5V13.5Z" fill="currentColor" />
                </svg>
                <span className="text-2xl font-bold tracking-tight text-brand-dark">Relume</span>
              </div>
              
              {/* Webflow Logo Exact */}
              <div className="flex items-center gap-2 opacity-90 transition-all cursor-default text-brand-dark">
                <svg width="32" height="24" viewBox="0 0 45 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9248 18.2323L8.03158 5.67383H0.96875L9.6471 27.24H16.273L20.8164 15.1764L25.32 27.24H31.9056L40.6637 5.67383H33.4215L28.1822 19.349L24.0886 8.52841H17.483L12.9248 18.2323Z" fill="currentColor"/>
                </svg>
                <span className="text-2xl font-bold tracking-tighter text-brand-dark -ml-1">Webflow</span>
              </div>

              {/* Relume Logo Clone */}
              <div className="flex items-center gap-2 opacity-90 transition-all cursor-default text-brand-dark">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM10 16.5L4 13.5V10.5L10 13.5V16.5ZM12 4.5L18 7.5L12 10.5L6 7.5L12 4.5ZM20 13.5L14 16.5V13.5L20 10.5V13.5Z" fill="currentColor" />
                </svg>
                <span className="text-2xl font-bold tracking-tight text-brand-dark">Relume</span>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
