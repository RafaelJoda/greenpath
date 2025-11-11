import Image from "next/image";
import Header from "./header";
import Hero from "./hero";
import Stats from "./stats";
import Features from "./features";
import Testimonials from "./testimonials";
import CTA from "./cta";
import Projects from "./projects";
import Footer from "./footer";

export default function Home() {
  return (
    <main >
      <Header />
      <Hero />
      <Stats />
       <Projects />
        <Features />
       <Testimonials />
      <CTA />
      <Footer />
     
     
    </main>
  );
}
