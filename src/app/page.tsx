import Contact from "@/components/sections/contact/contact";
import Experience from "@/components/sections/experience/experience";
import Hero from "@/components/sections/hero/hero";
import Skills from "@/components/sections/hero/skills";
import Showcase from "@/components/sections/showcase/showcase";

export default function Home() {
  return (
    <div className="font-sans max-w-3xl p-5 md:p-10 mt-25 mx-auto">
      <Hero />
      <Skills />
      <Experience />
      <Showcase />
      <Contact />
    </div>
  );
}
