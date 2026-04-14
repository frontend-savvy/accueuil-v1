import React from "react";

export default function Callout() {
  return (
    <section className="relative w-full bg-brand-blue py-20 overflow-hidden">
      {/* Abstract animated gradient light */ }
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl opacity-50 pointer-events-none animate-[pulse_6s_infinite]" />
      
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10">
        <p className="text-xl md:text-3xl text-white font-serif leading-relaxed tracking-wide font-medium">
          En tant que fiduciaire à Fribourg, je participe au quotidien à la réussite d'entrepreneurs, et à la réalisation de projets pour les particuliers, je connais leurs aventures, leurs doutes et le chemin à parcourir pour avancer.
        </p>
        <div className="mt-8 w-12 h-1 bg-brand-pink rounded-full shadow-[0_0_10px_rgba(255,133,213,0.5)]" />
      </div>
    </section>
  );
}
