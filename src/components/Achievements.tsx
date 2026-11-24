import { Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import shebuildsPhoto from "@/assets/certificates/shebuilds-hackathon.jpeg";
import sihPhoto from "@/assets/certificates/sih-certificate.png";
import iitMadrasPhoto from "@/assets/certificates/iit-madras-workshop.jpeg";

const achievements = [
  {
    title: "🎓 Selected for IIT Madras Workshop",
    event: "3-Day Workshop at IIT Madras",
    team: "Selected Participant",
    description:
      "Selected to attend a prestigious 3-day workshop at IIT Madras, one of India's premier engineering institutions. This opportunity provided valuable exposure to cutting-edge technologies, expert mentorship, and a collaborative learning environment.",
    image: iitMadrasPhoto,
    color: "text-blue-500",
    accent: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/10",
  },
];

const Achievements = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-20 px-4 scroll-reveal"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in opacity-0">
            Key{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="h-1 bg-gradient-primary mx-auto rounded-full line-animate" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Milestones and victories that define my journey
          </p>
        </div>

        <div className="space-y-10">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/50 card-hover-lift border-glow-hover group animate-slide-up-stagger opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-72 md:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent md:bg-gradient-to-r" />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 ${item.bgGlow} rounded-xl icon-hover-spin`}>
                      <Trophy className={`h-7 w-7 ${item.color}`} />
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${item.accent} bg-clip-text text-transparent`}
                    >
                      {item.team}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm font-semibold mb-4 bg-gradient-to-r ${item.accent} bg-clip-text text-transparent`}
                  >
                    {item.event}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
