import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Schedule />
      <Menu />
      <Contact />
    </main>
  );
}
