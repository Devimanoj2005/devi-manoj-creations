import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="container max-w-4xl relative z-10">
        <div className="flex flex-col items-center">
          <div className="text-center space-y-8">
            <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <span className="text-primary-foreground font-medium text-xs tracking-widest uppercase bg-primary px-4 py-1.5 rounded-full">
                Computer Science Student
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up opacity-0 flex flex-wrap items-center justify-center gap-3 sm:gap-4" style={{ animationDelay: '0.4s' }}>
              <span className="text-foreground">Hi, I'm</span>
              <span className="relative inline-flex items-center gap-2 sm:gap-3">
                <div className="relative group/photo">
                  <img 
                    src={profilePhoto} 
                    alt="Devi Manoj"
                    className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 border-foreground/20 shadow-lg transition-all duration-500 ease-out group-hover/photo:scale-110 group-hover/photo:rotate-6 group-hover/photo:border-foreground/40 group-hover/photo:shadow-xl"
                  />
                </div>
                <span className="text-foreground font-black">
                  Devi Manoj
                </span>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in-up opacity-0 leading-relaxed font-light" style={{ animationDelay: '0.6s' }}>
              B.Tech CSE student at SJCET Palai, passionate about creating meaningful web applications 
              and exploring new technologies.
            </p>
            
            <div className="flex gap-4 justify-center pt-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-medium rounded-full px-8" asChild>
                <a href="mailto:2005devimanoj@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background rounded-full px-8 font-medium transition-all duration-300"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
            </div>
            
            <div className="flex gap-3 justify-center pt-6 animate-fade-in-up opacity-0" style={{ animationDelay: '1s' }}>
              <a href="https://github.com/Devimanoj2005" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-3 border border-border hover:bg-foreground hover:border-foreground rounded-full transition-all duration-300 hover:scale-110">
                  <Github className="h-5 w-5 text-foreground group-hover:text-background transition-colors" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/devi-manoj-a8a909326" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-3 border border-border hover:bg-foreground hover:border-foreground rounded-full transition-all duration-300 hover:scale-110">
                  <Linkedin className="h-5 w-5 text-foreground group-hover:text-background transition-colors" />
                </div>
              </a>
              <a href="mailto:2005devimanoj@gmail.com" className="group">
                <div className="p-3 border border-border hover:bg-foreground hover:border-foreground rounded-full transition-all duration-300 hover:scale-110">
                  <Mail className="h-5 w-5 text-foreground group-hover:text-background transition-colors" />
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow cursor-pointer" onClick={scrollToProjects}>
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
