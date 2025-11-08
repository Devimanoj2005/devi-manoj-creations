import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Globe, Wrench, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "Java", "JavaScript", "Python"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Other Areas",
    icon: Lightbulb,
    skills: ["UI/UX basics", "API integration", "Project deployment"],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto animate-scale-in"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="relative p-6 hover:shadow-hover transition-all duration-500 animate-slide-in hover:-translate-y-2 group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/60 hover:border-primary/50 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                
                <div className="relative flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-accent to-accent/50 rounded-xl group-hover:from-primary group-hover:to-primary-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 transform shadow-soft">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                </div>
                <div className="relative flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="border-border/60 hover:border-primary/80 hover:bg-gradient-to-r hover:from-accent hover:to-accent/60 transition-all duration-300 hover:scale-110 hover:shadow-soft transform font-medium px-3 py-1.5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
