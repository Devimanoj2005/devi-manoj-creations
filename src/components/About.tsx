import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-background scroll-reveal">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in opacity-0">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 bg-gradient-primary mx-auto rounded-full line-animate"></div>
        </div>

        <Card className="p-8 md:p-12 shadow-lg border-border/50 card-hover-lift border-glow-hover animate-fade-in-scale opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-start gap-6 mb-8">
            <div className="p-4 bg-primary/10 rounded-xl icon-hover-spin">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Education</h3>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Bachelor of Technology in Computer Science & Engineering
              </h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3 animate-slide-in opacity-0" style={{ animationDelay: '0.3s' }}>
                  <div className="p-2 bg-muted rounded-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span>St Joseph's collage of engineering and technology Palai</span>
                </div>
                <div className="flex items-center gap-3 animate-slide-in opacity-0" style={{ animationDelay: '0.4s' }}>
                  <div className="p-2 bg-muted rounded-lg">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <span>2024 – Present</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-lg p-6 rounded-lg bg-muted/50 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            Currently pursuing my passion for technology and software development at SJCET Palai. 
            I'm constantly learning and building projects that combine technical skills with creative problem-solving, 
            focusing on web technologies and user-centered design.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
