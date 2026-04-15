export default function Callout() {
  return (
    <section className="w-full bg-[#4040F0] py-16 px-6">
      <div className="max-w-5xl mx-auto flex items-center gap-10 md:gap-16">

        {/* Left horizontal rule */}
        <div className="hidden sm:block h-[1.3px] bg-white/60 flex-1" />

        {/* Center Text */}
        <div className=" lg:max-w-md text-center">
          <p className="text-white text-[17px] font-sans font-medium leading-[1.75] tracking-wide">
            En moyenne, nos clients découvrent qu'ils ont payé bien plus que nécessaire : mauvais choix de statut, exonérations ignorées, options fiscales oubliées... Combien d'années d'exonération laissez-vous passer ?
          </p>
        </div>

        {/* Right horizontal rule */}
        <div className="hidden sm:block h-[1.3px] bg-white/60 flex-1" />

      </div>
    </section>
  );
}
