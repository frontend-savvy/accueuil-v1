import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import Targets from "@/components/sections/Targets";
import Callout from "@/components/sections/Callout";
import Testimonials from "@/components/sections/Testimonials";
import Questions from "@/components/sections/Questions";
import Profile from "@/components/sections/Profile";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Cta from "@/components/sections/Cta";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <LogoCloud />
      <Targets />
      <Callout />
      <Testimonials />
      <Questions />
      <Profile />
      <Process />
      <About />
      <Cta />
      <Faq />
    </main>
  );
}
