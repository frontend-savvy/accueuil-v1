"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Comment se déroule la consultation avec l'avocat ?",
    answer:
      "La consultation se déroule en visioconférence ou par téléphone. Nous analysons ensemble votre situation fiscale et sociale pour vous proposer les meilleures optimisations.",
  },
  {
    question: "Comment se déroule l'appel découverte ?",
    answer:
      "L'appel découverte est un échange gratuit de 15 minutes pour vérifier que nous sommes le bon interlocuteur pour votre situation. Il n'y a aucun engagement.",
  },
  {
    question: "La consultation est-elle payante ?",
    answer:
      "L'appel découverte est totalement gratuit. La consultation approfondie fait partie de notre accompagnement forfaitaire, défini dès le départ.",
  },
  {
    question: "Je travaille déjà avec un expert-comptable, est-ce compatible ?",
    answer:
      "Tout à fait. Nous travaillons en complémentarité avec les experts-comptables. Notre rôle est d'apporter une expertise fiscale et stratégique que l'expert-comptable n'a pas toujours le temps d'approfondir.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-white w-full py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-[42px] font-serif font-bold text-[#030423] mb-4 text-center tracking-tight leading-tight">
          Questions fréquentes
        </h2>

        {/* Blue subtitle */}
        <p className="text-[#4141F4] text-[15px] font-medium text-center mb-14 leading-relaxed">
          Les réponses aux questions que vous vous posez avant de prendre rendez-vous.
        </p>

        {/* Accordion list */}
        <div className="w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b-2 border-[#4141F4]/70">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-[14.5px] text-[#030423] font-normal leading-snug pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`shrink-0 w-4 h-4 text-[#4141F4] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>

                {/* Answer panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-[13.5px] text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
