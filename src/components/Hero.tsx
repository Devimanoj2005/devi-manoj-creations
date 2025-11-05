import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4 py-20">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm md:text-base tracking-wide uppercase">
                Computer Science Student
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">DeviManoj</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              B.Tech CSE student at SJCET Palai, passionate about creating meaningful web applications 
              and exploring new technologies. Building projects that make a difference.
            </p>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary transition-all duration-300">
                View Projects
              </Button>
            </div>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={profilePhoto} 
                alt="DeviManoj"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-soft border-4 border-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
