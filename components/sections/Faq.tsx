import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "Combien coûte un bilan patrimonial ?",
      answer: "Le coût varie en fonction de la complexité de votre situation patrimoniale. Nous proposons un premier rendez-vous de diagnostic gratuit pour définir avec vous un devis sur mesure, sans engagement.",
    },
    {
      question: "Quelles sont vos expertises ?",
      answer: "Nous sommes experts en optimisation fiscale, structuration de revenus (TPE/PME, indépendants, professions libérales), conseil en investissement immobilier et gestion de crypto-actifs.",
    },
    {
      question: "Comment se déroule la mission ?",
      answer: "La mission s'articule généralement en 3 phases : 1. Rendez-vous de diagnostic et recueil d'informations. 2. Analyse et présentation de nos préconisations. 3. Accompagnement à la mise en place et suivi annuel.",
    },
    {
      question: "Les devis et premier rdv sont-ils payants ?",
      answer: "Non, le premier rendez-vous de prise de contact et le devis qui en découle sont totalement gratuits et sans engagement de votre part.",
    },
  ];

  return (
    <section className="bg-white w-full pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-brand-dark mb-4 text-center tracking-tight">
          Questions fréquentes
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Retrouvez les réponses aux questions qui nous sont le plus souvent posées.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-gray-200">
              <AccordionTrigger className="text-left text-brand-dark font-semibold text-lg hover:text-brand-blue py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
