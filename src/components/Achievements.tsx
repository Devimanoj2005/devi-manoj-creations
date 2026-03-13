import { Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import shebuildsPhoto from "@/assets/certificates/shebuilds-hackathon.jpeg";

const achievements = [
  {
    title: "🥇 1st Prize – She Builds Hackathon",
    event: "She Builds Hackathon by CSEA, SJCET Palai",
    team: "Team Delusion",
    description:
      "Our team Delusion proudly clinched 1st Prize at the She Builds Hackathon, a girls-only innovation challenge organized by the Computer Science and Engineering Association (CSEA), SJCET Palai. The event brought together 100+ enthusiastic participants forming around 30 teams, all working towards innovative solutions and creative ideas.",
    image: shebuildsPhoto,
    color: "text-pink-500",
    accent: "from-pink-500 to-rose-500",
    bgGlow: "bg-pink-500/10",
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
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Milestones and victories that define my journey
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="space-y-10 animate-slide-in">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/50 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-72 md:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content Side */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 ${item.bgGlow} rounded-xl`}>
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
