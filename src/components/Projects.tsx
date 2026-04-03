import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, DollarSign, ShieldCheck, ArrowRight, Armchair, BrainCircuit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import relationshipImg from "@/assets/projects/relationship-app-1.jpg";
import expenseImg from "@/assets/projects/expense-tracker-1.jpg";
import womenSafetyImg from "@/assets/projects/women-safety-app-1.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const projects = [
  {
    id: "relationship-app",
    title: "Relationship App",
    description: "A mobile-based app designed to strengthen communication and bonding between partners through reminders, chats, and shared activities.",
    fullDescription: "The Relationship App is a comprehensive mobile solution designed to help couples maintain and strengthen their relationship. It features daily conversation prompts, shared activity suggestions, important date reminders, and a private chat space. The app uses React Native for cross-platform compatibility and implements push notifications to keep partners engaged.",
    icon: Heart,
    tags: ["Mobile", "Communication", "React Native"],
    features: ["Daily conversation prompts", "Shared calendar", "Private messaging", "Activity suggestions", "Milestone tracking"],
    technologies: ["React Native", "Firebase", "Push Notifications", "Redux"],
    screenshots: [relationshipImg],
    demoUrl: "https://love-link-delta.vercel.app",
    githubUrl: "https://github.com/Devimanoj2005/Love_link",
  },
  {
    id: "women-safety-app",
    title: "Women Safety App",
    description: "A safety application designed to help women feel secure with features like emergency SOS, location tracking, and trusted contact alerts.",
    fullDescription: "A comprehensive safety application built to provide security and peace of mind. The app includes one-tap emergency SOS, real-time location sharing with trusted contacts, safe route suggestions, and community safety reporting. Features background location tracking, emergency contact notification system, and integration with local emergency services.",
    icon: ShieldCheck,
    tags: ["Mobile", "Safety", "Location Services"],
    features: ["Emergency SOS button", "Location tracking", "Trusted contacts", "Safe routes", "Community alerts"],
    technologies: ["React Native", "GPS Services", "Push Notifications", "Firebase"],
    screenshots: [womenSafetyImg],
    demoUrl: "https://vigilant-path-guard-elar-p9rx30smk-devimanoj2005s-projects.vercel.app/",
  },
  {
    id: "classroom-seat-reservation",
    title: "Classroom Seat Reservation",
    description: "A web application that allows students to reserve seats in classrooms, streamlining the seating arrangement process.",
    fullDescription: "A smart classroom seat reservation system that enables students to book their preferred seats in advance. Features include real-time seat availability, interactive seating layout, and automated reservation management for efficient classroom organization.",
    icon: Armchair,
    tags: ["Web App", "Education", "Reservation"],
    features: ["Interactive seat map", "Real-time availability", "User authentication", "Booking management", "Class scheduling"],
    technologies: ["React", "Vercel", "Tailwind CSS", "Authentication"],
    screenshots: [],
    demoUrl: "https://cse-c-seat-reservation.vercel.app/login",
  },
  {
    id: "ai-interviewer",
    title: "AI Interviewer",
    description: "An AI-powered mock interview platform that helps users practice and improve their interview skills with intelligent feedback.",
    fullDescription: "An intelligent interview preparation tool powered by AI that simulates real interview scenarios. Users can practice technical and behavioral interviews, receive instant feedback on their responses, and track their improvement over time.",
    icon: BrainCircuit,
    tags: ["AI", "Web App", "Education"],
    features: ["AI-powered questions", "Real-time feedback", "Multiple interview types", "Performance tracking", "Practice sessions"],
    technologies: ["React", "AI/ML", "Netlify", "Tailwind CSS"],
    screenshots: [],
    demoUrl: "https://practice-pal-35.netlify.app",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 bg-background scroll-reveal">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in opacity-0">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 bg-gradient-primary mx-auto rounded-full mb-4 line-animate"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            A collection of projects showcasing my skills in web development, accessibility, and user-centered design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-children">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden cursor-pointer border-border/50 card-hover-lift border-glow-hover"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0 icon-hover-spin">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-sm">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs px-2.5 py-0.5 badge-pop"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group/btn border-border hover:border-primary hover:bg-primary/5"
                  >
                    <span className="text-sm">View Details</span>
                    <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
