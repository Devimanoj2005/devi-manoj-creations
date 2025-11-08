import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto animate-scale-in"></div>
        </div>

        <Card className="p-8 md:p-12 shadow-soft hover:shadow-hover transition-all duration-500 animate-slide-in hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/60 hover:border-primary/40">
          <div className="flex items-start gap-6 mb-6">
            <div className="p-4 bg-gradient-to-br from-accent to-accent/50 rounded-xl hover:from-primary hover:to-primary-glow transition-all duration-500 shadow-soft transform hover:scale-110 hover:rotate-3">
              <GraduationCap className="h-8 w-8 text-primary hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">Education</h3>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Bachelor of Technology in Computer Science & Engineering
              </h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3 group/item">
                  <div className="p-2 bg-accent/50 rounded-lg group-hover/item:bg-accent transition-all duration-300">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors duration-300">Saint Joseph's College of Engineering and Technology (SJCET), Palai</span>
                </div>
                <div className="flex items-center gap-3 group/item">
                  <div className="p-2 bg-accent/50 rounded-lg group-hover/item:bg-accent transition-all duration-300">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors duration-300">2024 – Present</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-primary opacity-0 hover:opacity-10 blur-lg transition-opacity duration-500 rounded-lg"></div>
            <p className="relative text-muted-foreground leading-relaxed text-lg p-4 rounded-lg bg-accent/20">
              Currently pursuing my passion for technology and software development at SJCET Palai. 
              I'm constantly learning and building projects that combine technical skills with creative problem-solving, 
              focusing on web technologies and user-centered design.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
