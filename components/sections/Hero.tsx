import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4FAFF] pt-24 pb-0 flex flex-col items-center">
      {/* Inline styles for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) rotate(10deg); }
          50% { transform: translateY(-20px) rotate(15deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      {/* Decorative Geometric Shapes Layer */}
      <div className="absolute inset-0 w-full h-full max-w-[1400px] mx-auto pointer-events-none">
        
        {/* Top Left: Pink Cross */}
<div
  className="absolute top-[8%] left-[5%] md:top-[10%] md:left-[15%] w-36 h-36 text-brand-pink"
  style={{ animation: "float-1 8s ease-in-out infinite" }}
>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor">
      <rect
        x="16"
        y="36"
        width="68"
        height="28"
        rx="14"
        transform="rotate(45 50 50)"
      />
      <rect
        x="16"
        y="36"
        width="68"
        height="28"
        rx="14"
        transform="rotate(-45 50 50)"
      />
    </g>
  </svg>
</div>

        {/* Middle Left: Green Ribbed Horizontal */}
        <div className="absolute top-[35%] -left-4 md:top-[30%] md:-left-2 flex flex-col -space-y-4" style={{ animation: 'float-2 7s ease-in-out infinite' }}>
          <div className="w-24 h-12 bg-brand-green rounded-[2rem]"></div>
          <div className="w-24 h-12 bg-brand-green rounded-[2rem]"></div>
          <div className="w-24 h-12 bg-brand-green rounded-[2rem]"></div>
        </div>

        {/* Bottom Left: Light Blue Vertical Ribbed */}
        <div className="absolute top-[75%] left-[8%] md:top-[70%] md:left-[14%] flex -space-x-4" style={{ animation: 'float-1 9s ease-in-out infinite reverse' }}>
          <div className="w-12 h-24 bg-[#C0E0F0] rounded-[2rem]"></div>
          <div className="w-12 h-24 bg-[#C0E0F0] rounded-[2rem]"></div>
        </div>

        {/* Top Right: Dark Navy Circle */}
        <div className="absolute top-[8%] right-[8%] md:top-[12%] md:right-[14%] w-28 h-28 bg-brand-dark rounded-full" style={{ animation: 'float-2 8s ease-in-out infinite 1s' }}></div>

        {/* Bottom Mid Right: Yellow Ribbed Horizontal */}
        {/* <div className="absolute top-[82%] right-[15%] md:top-[80%] md:right-[24%] flex flex-col -space-y-3" style={{ animation: 'float-1 10s ease-in-out infinite' }}>
          <div className="w-[88px] h-10 bg-brand-yellow rounded-[2rem]"></div>
          <div className="w-[88px] h-10 bg-brand-yellow rounded-[2rem]"></div>
          <div className="w-[88px] h-10 bg-brand-yellow rounded-[2rem]"></div>
        </div> */}
        <div
  className="absolute top-[82%] right-[15%] md:top-[80%] md:right-[24%] w-[88px] h-[120px] text-brand-yellow"
  style={{ animation: "float-1 10s ease-in-out infinite" }}
>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 88 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="
        M22 8
        H66
        C78 8 84 16 84 28
        C84 36 80 42 73 46
        C80 50 84 56 84 64
        C84 72 80 78 73 82
        C80 86 84 92 84 100
        C84 112 78 120 66 120
        H22
        C10 120 4 112 4 100
        C4 92 8 86 15 82
        C8 78 4 72 4 64
        C4 56 8 50 15 46
        C8 42 4 36 4 28
        C4 16 10 8 22 8
        Z
      "
    />
  </svg>
</div>

        {/* Bottom Far Right: Blue Circle */}
        <div className="absolute top-[65%] -right-4 md:top-[68%] md:right-[6%] w-32 h-32 bg-brand-blue rounded-full" style={{ animation: 'float-2 7.5s ease-in-out infinite 2s' }}></div>

      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6 mb-24">
        
        {/* Active Pill Segment */}
        <div className="bg-brand-yellow px-5 py-2.5 rounded-lg text-brand-dark mb-10 shadow-sm inline-block">
          <span className="font-bold">30K€</span>/moyenne exonérés par client
        </div>
        
        {/* Headlines */}
        <h1 className="text-5xl md:text-6xl font-serif text-brand-dark tracking-tight leading-[1.1] mb-6 font-bold">
          Réduisons ensemble votre<br className="hidden md:block"/> charge fiscale
        </h1>
        
        <p className="text-lg md:text-[17px] text-gray-500 max-w-2xl mb-10 font-sans font-medium leading-relaxed px-4">
          Nos avocats fiscalistes accompagnent les professions libérales, freelances et TPE/PME dans la gestion de l'ensemble de leurs problématiques fiscales.
        </p>

        <Button className="bg-brand-blue hover:bg-blue-700 text-white font-semibold text-base rounded-[6px] px-8 py-6 shadow-sm">
          Réserver un appel gratuit
        </Button>
      </div>

    </section>
  );
}
