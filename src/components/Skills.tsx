import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Layers,
  Palette,
  Code2,
  Server,
  Database,
  Shield,
  Cloud,
  Wrench,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Frontend Frameworks & Libraries",
    icon: Layers,
    skills: ["React", "Next.js", "Angular", "Vue.js"],
  },
  {
    title: "Styling & Design",
    icon: Palette,
    skills: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "Sass / SCSS", "UI/UX Design"],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "Java", "JavaScript", "TypeScript", "Python", "PHP", "C#", "Go"],
  },
  {
    title: "Backend Frameworks",
    icon: Server,
    skills: ["Node.js", "Express.js", "Django", "Flask", "Spring Boot", "Laravel"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Firebase"],
  },
  {
    title: "Security & Authentication",
    icon: Shield,
    skills: [
      "Password Hashing",
      "Authentication Systems",
      "Authorization",
      "HTTPS",
      "Secure APIs",
      "Input Validation",
    ],
  },
  {
    title: "DevOps & Hosting",
    icon: Cloud,
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Render", "AWS"],
  },
  {
    title: "Tools & APIs",
    icon: Wrench,
    skills: ["VS Code", "REST APIs", "GraphQL", "Project Deployment"],
  },
];

const Skills = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-gradient-subtle scroll-reveal">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in opacity-0">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-1 bg-gradient-primary mx-auto rounded-full line-animate"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto stagger-children">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 border-border/50 card-hover-lift border-glow-hover group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300 icon-hover-spin">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 font-medium px-3 py-1.5 badge-pop"
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
