"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    author: "Name Surname",
    role: "Position, Company name",
  },
  {
    quote: "Une expertise pointue et des conseils adaptés à ma situation. Nous avons pu optimiser notre fiscalité de façon claire et efficace.",
    author: "Sophie M.",
    role: "Médecin Généraliste",
  },
  {
    quote: "Exonéo a transformé ma vision fiscale. Grâce à leur accompagnement, j'ai économisé significativement sur ma charge fiscale annuelle.",
    author: "Thomas D.",
    role: "Dirigeant, TPE Paris",
  },
  {
    quote: "Un accompagnement sur mesure et des conseils toujours pertinents. Je recommande sans hésiter à tous les indépendants.",
    author: "Clara B.",
    role: "Freelance, Consultante",
  },
  {
    quote: "Professionnalisme, réactivité et expertise. Exactement ce dont j'avais besoin pour structurer mon activité.",
    author: "Marc L.",
    role: "Gérant, PME Lyon",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto flex flex-col items-center">

        {/* Top Row: Stars left, Badge right */}
        <div className="w-full flex items-center flex-col sm:flex-row gap-4 justify-between mb-10">
          {/* Pink Stars */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#F0A0D0" stroke="#F0A0D0" strokeWidth="1" strokeLinejoin="round"/>
              </svg>
            ))}
          </div>

          {/* Yellow Badge */}
          <div className="bg-brand-yellow text-brand-dark text-[13px] font-semibold px-4 py-1.5 rounded-md">
            Social proof si nécessaire
          </div>
        </div>

        {/* Webflow Logo */}
        <div className="flex items-center gap-2 mb-8 text-brand-dark">
          <svg width="28" height="20" viewBox="0 0 45 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9248 18.2323L8.03158 5.67383H0.96875L9.6471 27.24H16.273L20.8164 15.1764L25.32 27.24H31.9056L40.6637 5.67383H33.4215L28.1822 19.349L24.0886 8.52841H17.483L12.9248 18.2323Z" fill="currentColor"/>
          </svg>
          <span className="text-[22px] font-bold tracking-tighter text-brand-dark">Webflow</span>
        </div>

        {/* Quote */}
        <blockquote className="text-center text-[18px] md:text-[20px] font-sans font-medium text-brand-dark leading-[1.7] mb-10 px-2">
          "{testimonials[current].quote}"
        </blockquote>

        {/* Avatar placeholder */}
        <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mb-4 overflow-hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="2" fill="#D1D5DB"/>
            <path d="M3 17L8 12L11 15L15 10L21 17H3Z" fill="#9CA3AF"/>
            <circle cx="8.5" cy="8.5" r="2.5" fill="#9CA3AF"/>
          </svg>
        </div>

        {/* Author */}
        <div className="text-[14px] font-bold text-brand-dark mb-1">
          {testimonials[current].author}
        </div>
        <div className="text-[13px] text-gray-400 font-medium mb-10">
          {testimonials[current].role}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-3 h-3 bg-brand-blue"
                  : "w-2.5 h-2.5 border border-gray-300 bg-transparent"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
