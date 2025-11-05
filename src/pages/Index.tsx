import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default Index;
