import Image from "next/image";

const shapes = [
  { src: "/VectorJaune.svg", alt: "Jaune" },
  { src: "/VectorRose.svg",  alt: "Rose"  },
  { src: "/VectorNoir.svg",  alt: "Noir"  },
  { src: "/VectorBleu.svg",  alt: "Bleu"  },
  { src: "/VectorVert.svg",  alt: "Vert"  },
  { src: "/VectorRond.svg",  alt: "Rond"  },
];

export default function About() {
  return (
    <section className="bg-white w-full py-24 px-6 md:px-16 overflow-hidden">
      {/* Wiggle keyframe injected inline */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          20%       { transform: rotate(-8deg) scale(1.08); }
          40%       { transform: rotate(8deg)  scale(1.08); }
          60%       { transform: rotate(-5deg) scale(1.05); }
          80%       { transform: rotate(5deg)  scale(1.05); }
        }
        .shape-wiggle:hover {
          animation: wiggle 0.5s ease-in-out;
        }
      `}} />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* ─── Left: Text Content ─── */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">

          {/* Heading with emoji flags — force system emoji font */}
          <h2 className="text-3xl md:text-[36px] font-serif font-bold text-[#030423] mb-8 tracking-tight leading-tight">
            Le cabinet Exonéo{" "}
            <span
              className="inline-flex items-center gap-1 align-middle"
              style={{
                fontSize: "28px",
                fontFamily: "'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', 'Android Emoji', sans-serif",
              }}
            >
              🇫🇷&nbsp;🇱🇺
            </span>
          </h2>

          <div className="flex flex-col gap-5 text-[14.5px] text-[#1a1a2e] leading-[1.8] font-normal max-w-[540px]">
            <p>
              Exoneo est un cabinet réunissant des avocats fiscalistes expérimentés, intervenant en France et au Luxembourg.
            </p>
            <p>
              Nous accompagnons une clientèle exigeante composée de chefs d&apos;entreprise, de professionnels de santé et de freelances souhaitant structurer, sécuriser et optimiser leur situation fiscale et sociale.
            </p>
            <p>
              Cabinet 100 % digital, Exoneo se distingue par une approche moderne, réactive et accessible, tout en conservant une relation profondément humaine et personnalisée avec chacun de ses clients. Chaque situation est unique : notre accompagnement l&apos;est aussi.
            </p>
            <p>
              Notre mission est claire : vous aider à restructurer votre patrimoine professionnel et personnel afin de réduire durablement votre charge fiscale et sociale, tout en intégrant vos objectifs à moyen et long terme développement d&apos;activité, investissements, transmission ou expatriation.
            </p>
            <p>
              Parce qu&apos;une stratégie fiscale efficace s&apos;inscrit dans un écosystème global, nous travaillons en étroite collaboration avec des experts-comptables, commissaires aux comptes et gestionnaires de patrimoine spécialisés dans chaque secteur d&apos;activité. Cette approche pluridisciplinaire garantit à nos clients un suivi comptable rigoureux et cohérent à l&apos;issue de notre intervention.
            </p>
            <p>
              Exoneo, c&apos;est l&apos;alliance de l&apos;expertise technique, de la vision stratégique et d&apos;un accompagnement sur mesure.
            </p>
          </div>
        </div>

        {/* ─── Right: 3×2 SVG Shape Grid centered ─── */}
        <div className="shrink-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-3">
            {shapes.map((shape) => (
              <div
                key={shape.alt}
                className="shape-wiggle cursor-pointer"
                style={{ transition: "transform 0.1s" }}
              >
                <Image
                  src={shape.src}
                  alt={shape.alt}
                  width={110}
                  height={110}
                  className="block"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
