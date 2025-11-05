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
                className="p-6 hover:shadow-glow transition-all duration-500 animate-slide-in hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent rounded-lg group-hover:bg-gradient-primary transition-all duration-300">
                    <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="border-primary/30 hover:border-primary hover:bg-accent transition-all duration-300 hover:scale-105 transform"
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
