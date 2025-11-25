import { Award, Trophy, Users, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const certifications = [
  {
    icon: Briefcase,
    title: "Internship – SJCET Pala",
    description: "Completed a technical internship at St. Joseph's College of Engineering and Technology (SJCET), Pala, where I gained hands-on experience in software development, teamwork, and understanding real-world engineering workflows.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Trophy,
    title: "Smart India Hackathon – Runner-Up",
    description: "Achieved Runner-Up position in the preliminary level of the Smart India Hackathon (SIH). Demonstrated strong technical skills, innovative thinking, and teamwork by developing a solution aligned with real-world problem statements.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10"
  },
  {
    icon: Users,
    title: "Hackathon – MBTS, Kothamangalam",
    description: "Participated in a 13-hour hackathon organized by MBTS, Kothamangalam. Collaborated with a team to build a functional prototype within a limited time frame, showcasing problem-solving skills, time management, and creativity under pressure.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: Award,
    title: "Hackathon – Mar Athanasius College",
    description: "Attended a hackathon hosted by Mar Athanasius College of Engineering, Kothamangalam, where I contributed to designing and developing a project solution within the given theme.",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-slide-in">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${cert.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${cert.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
