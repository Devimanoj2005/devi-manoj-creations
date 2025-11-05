import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <span className="text-primary font-semibold text-sm md:text-base tracking-wide uppercase bg-accent px-4 py-2 rounded-full">
                Computer Science Student
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
              Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">DeviManoj</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
              B.Tech CSE student at SJCET Palai, passionate about creating meaningful web applications 
              and exploring new technologies. Building projects that make a difference.
            </p>
            <div className="flex gap-4 justify-center md:justify-start pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 hover:border-primary hover:bg-accent transition-all duration-300 hover:scale-105"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
            </div>
            <div className="flex gap-4 justify-center md:justify-start pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: '1s' }}>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 animate-scale-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-glow-pulse"></div>
              <img 
                src={profilePhoto} 
                alt="DeviManoj"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-soft border-4 border-card group-hover:border-primary/50 transition-all duration-500 group-hover:scale-105"
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
