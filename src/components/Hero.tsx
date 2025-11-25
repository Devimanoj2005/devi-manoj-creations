import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Hero gradient background */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <span className="text-primary-foreground font-medium text-sm tracking-wider uppercase bg-gradient-primary px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                Computer Science Student
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-primary blur-xl opacity-40"></span>
                <span className="relative bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_100%]">
                  Devi Manoj
                </span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up opacity-0 leading-relaxed" style={{ animationDelay: '0.6s' }}>
              B.Tech CSE student at SJCET Palai, passionate about creating meaningful web applications 
              and exploring new technologies. Building projects that make a difference.
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
              <Button size="lg" className="bg-gradient-primary hover:shadow-lg transition-all duration-300 font-medium btn-magnetic btn-liquid btn-glow" asChild>
                <a href="mailto:2005devimanoj@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border hover:border-primary hover:bg-accent transition-all duration-300 font-medium btn-magnetic"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: '1s' }}>
              <a href="https://github.com/Devimanoj2005" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-3 bg-muted hover:bg-primary rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-md">
                  <Github className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/devi-manoj-a8a909326" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-3 bg-muted hover:bg-primary rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-md">
                  <Linkedin className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
              </a>
              <a href="mailto:2005devimanoj@gmail.com" className="group">
                <div className="p-3 bg-muted hover:bg-primary rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-md">
                  <Mail className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0 animate-scale-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img 
                src={profilePhoto} 
                alt="Devi Manoj - Computer Science Student"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl border-4 border-card group-hover:border-primary/30 transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow cursor-pointer" onClick={scrollToProjects}>
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
