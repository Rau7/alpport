import Hero from "@/components/homecomponents/Hero";
import Image from "next/image";
import AboutMe from "@/components/homecomponents/AboutMe";
import Projects from "@/components/homecomponents/Projects";
import Technologies from "@/components/homecomponents/Technologies";
import Blog from "@/components/homecomponents/Blog";
import CallToAction from "@/components/homecomponents/CallToAction";
import Contact from "@/components/homecomponents/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Technologies />
      <Blog />
      <CallToAction />
      <Contact />
    </>
  );
}
