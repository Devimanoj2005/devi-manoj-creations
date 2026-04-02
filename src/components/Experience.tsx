import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Design Lead",
    organization: "CSEA – Computer Science and Engineering Association",
    period: "2025 – 2026",
  },
  {
    role: "Technical Officer",
    organization: "IEDC",
    period: "2026 – 2027",
  },
  {
    role: "Web Team Member",
    organization: "IEEE",
    period: "2026 – 2027",
  },
];

const Experience = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 scroll-reveal">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in opacity-0">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="h-1 bg-gradient-primary mx-auto rounded-full line-animate" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Roles and responsibilities that shaped my journey
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-6 animate-slide-up-stagger opacity-0`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 mt-6 md:mt-0 animate-subtle-bounce" style={{ animationDelay: `${index * 0.3}s` }} />

                <div className="hidden md:block md:w-1/2" />

                <Card className="ml-10 md:ml-0 md:w-1/2 p-6 border-border/50 group card-hover-lift border-glow-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 icon-hover-spin">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                      <p className="text-primary font-semibold text-sm mt-1">{item.organization}</p>
                      <p className="text-muted-foreground text-sm mt-2">{item.period}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
