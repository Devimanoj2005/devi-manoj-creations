import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, DollarSign, Book, CheckSquare, FileText, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import relationshipImg from "@/assets/projects/relationship-app-1.jpg";
import counselingImg from "@/assets/projects/counseling-app-1.jpg";
import expenseImg from "@/assets/projects/expense-tracker-1.jpg";
import dyslexiaImg from "@/assets/projects/dyslexia-website-1.jpg";
import todoImg from "@/assets/projects/todo-app-1.jpg";
import blogImg from "@/assets/projects/blog-app-1.jpg";

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
  },
  {
    id: "todo-app",
    title: "ToDo App (React)",
    description: "A responsive productivity app to manage daily tasks using React, with features like task filtering and local storage.",
    fullDescription: "A clean and efficient task management application built with React. Features include task creation with due dates, priority levels, category organization, filtering options, and persistent storage. The app uses modern React hooks and follows best practices for state management.",
    icon: CheckSquare,
    tags: ["React", "Productivity", "Local Storage"],
    features: ["Task management", "Priority levels", "Category filters", "Due dates", "Persistent storage"],
    technologies: ["React", "React Hooks", "LocalStorage", "Tailwind CSS"],
    screenshots: [todoImg],
  },
  {
    id: "blog-app",
    title: "Blog App (Next.js)",
    description: "A dynamic blog platform built with Next.js featuring SSR, React Query, and Tailwind CSS for a fast, modern blogging experience.",
    fullDescription: "A high-performance blog platform built for the Oronium hiring challenge. Implements server-side rendering for optimal SEO, React Query for efficient data fetching, and a modern design with Tailwind CSS. Features include markdown support, code syntax highlighting, comment system, and admin dashboard.",
    icon: FileText,
    tags: ["Next.js", "SSR", "Tailwind CSS"],
    features: ["Server-side rendering", "Markdown support", "Code highlighting", "Comment system", "Admin dashboard"],
    technologies: ["Next.js", "React Query", "Tailwind CSS", "MDX"],
    screenshots: [blogImg],
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4 animate-scale-in"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, accessibility, and user-centered design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden hover:shadow-hover transition-all duration-500 cursor-pointer animate-fade-in border-border/60 hover:border-primary/60 hover:-translate-y-3 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-8 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="mb-4 p-4 bg-gradient-to-br from-accent to-accent/50 rounded-xl w-fit group-hover:from-primary group-hover:to-primary-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 transform shadow-soft">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-secondary/20 to-secondary/10 border-secondary/30 hover:from-secondary/30 hover:to-secondary/20 transition-all duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group/btn hover:bg-gradient-to-r hover:from-accent hover:to-accent/60 font-medium"
                  >
                    <span>View Details</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
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
