import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Software Developer Intern",
    organization: "Beyond Innovators",
    period: "3 months",
    points: [
      "Contributed to full-stack development using modern frameworks; built and maintained scalable web application features.",
      "Collaborated with cross-functional teams on product requirements, code reviews, and iterative delivery cycles.",
    ],
  },
  {
    role: "Frontend Intern",
    organization: "MuLearn",
    period: "6 months",
    points: [
      "Developed and improved UI components using React.js; built responsive, accessible web applications with cross-functional teams.",
      "Contributed to frontend architecture decisions, performance optimisation, code reviews, and agile sprint cycles.",
    ],
  },
  {
    role: "Technical Officer",
    organization: "Innovation and Entrepreneurship Development Cell (IEDC), SJCET Palai",
    period: "2026 – Present",
    points: [
      "Led technical initiatives and workshops; collaborated on tech-based prototypes and proof-of-concept solutions.",
      "Mentored junior members on technology tools and guided them through project development phases.",
    ],
  },
  {
    role: "Design Lead",
    organization: "Computer Science and Engineering Association (CSEA), SJCET Palai",
    period: "2025 – Present",
    points: [
      "Designed posters, banners, and digital content for events using Figma and Canva; maintained consistent visual branding across all platforms.",
    ],
  },
  {
    role: "Web Team Member",
    organization: "IEEE Student Branch, SJCET Palai",
    period: "2025 – Present",
    points: [
      "Worked on website development, UI improvements, and published event updates and technical articles for the student branch portal.",
    ],
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
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                      <p className="text-primary font-semibold text-sm mt-1">{item.organization}</p>
                      <p className="text-muted-foreground text-sm mt-2">{item.period}</p>
                      {item.points && (
                        <ul className="mt-3 space-y-2 list-disc list-outside pl-5">
                          {item.points.map((point, i) => (
                            <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
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
