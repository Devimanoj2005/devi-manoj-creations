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

        <Card className="p-8 md:p-12 shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-in hover:-translate-y-1">
          <div className="flex items-start gap-6 mb-6">
            <div className="p-4 bg-accent rounded-lg group-hover:bg-gradient-primary transition-all duration-300">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Education</h3>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Bachelor of Technology in Computer Science & Engineering
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Saint Joseph's College of Engineering and Technology (SJCET), Palai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2024 – Present</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
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
