import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, DollarSign, Book, ShieldCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import relationshipImg from "@/assets/projects/relationship-app-1.jpg";
import counselingImg from "@/assets/projects/counseling-app-1.jpg";
import expenseImg from "@/assets/projects/expense-tracker-1.jpg";
import dyslexiaImg from "@/assets/projects/dyslexia-website-1.jpg";
import womenSafetyImg from "@/assets/projects/women-safety-app-1.jpg";

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
    demoUrl: "https://vercel.com/devimanoj2005s-projects/heartbeat-yryl",
    githubUrl: "https://github.com/Devimanoj2005/Bloom",
  },
  {
    id: "counseling-platform",
    title: "Anonymous Counseling Platform",
    description: "A secure and private web app enabling users to seek emotional or mental health support anonymously from verified counselors.",
    fullDescription: "A secure platform that connects individuals with licensed counselors while maintaining complete anonymity. The platform uses end-to-end encryption for all communications and implements a verification system for counselors. Users can book sessions, communicate via text or video, and access mental health resources.",
    icon: MessageCircle,
    tags: ["Web App", "Privacy", "Mental Health"],
    features: ["Anonymous sessions", "Video counseling", "Secure messaging", "Counselor verification", "Resource library"],
    technologies: ["React", "WebRTC", "End-to-End Encryption", "Node.js"],
    screenshots: [counselingImg],
    demoUrl: "https://anonymousguide.vercel.app/",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker Application",
    description: "A web app that allows users to track income and expenses, visualize data with charts, and manage their monthly budgets efficiently.",
    fullDescription: "A full-featured expense tracking application that helps users manage their finances effectively. Features include category-wise expense tracking, visual charts and graphs, budget planning, receipt uploads, and financial goal setting. The app provides detailed analytics and monthly reports.",
    icon: DollarSign,
    tags: ["Web App", "Finance", "Data Visualization"],
    features: ["Expense categorization", "Budget planning", "Visual analytics", "Receipt scanning", "Export reports"],
    technologies: ["React", "Chart.js", "LocalStorage", "Tailwind CSS"],
    screenshots: [expenseImg],
    demoUrl: "https://vercel.com/devimanoj2005s-projects/fina-sparkle",
    githubUrl: "https://github.com/Devimanoj2005/fina-sparkle",
  },
  {
    id: "dyslexia-website",
    title: "Website for Dyslexia Patients",
    description: "An accessibility-focused website built to support dyslexic users with text-to-speech, color contrast adjustments, and simple reading layouts.",
    fullDescription: "An inclusive web platform specifically designed for individuals with dyslexia. It features customizable reading experiences with dyslexia-friendly fonts, adjustable text spacing, color overlays, text-to-speech functionality, and simplified navigation. The website serves as both an information resource and a demonstration of accessibility best practices.",
    icon: Book,
    tags: ["Accessibility", "Web", "Inclusive Design"],
    features: ["Text-to-speech", "Dyslexia-friendly fonts", "Color adjustments", "Simplified layouts", "Reading ruler"],
    technologies: ["React", "Web Speech API", "ARIA", "CSS Variables"],
    screenshots: [dyslexiaImg],
    githubUrl: "https://github.com/Devimanoj2005/sereniSphere",
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
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, accessibility, and user-centered design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in border-border/50 hover:border-primary/30 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
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
                        className="text-xs px-2.5 py-0.5"
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
