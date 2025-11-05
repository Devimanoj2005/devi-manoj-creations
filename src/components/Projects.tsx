import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, DollarSign, Book, CheckSquare, FileText } from "lucide-react";

const projects = [
  {
    title: "Relationship App",
    description: "A mobile-based app designed to strengthen communication and bonding between partners through reminders, chats, and shared activities.",
    icon: Heart,
    tags: ["Mobile", "Communication", "React Native"],
  },
  {
    title: "Anonymous Counseling Platform",
    description: "A secure and private web app enabling users to seek emotional or mental health support anonymously from verified counselors.",
    icon: MessageCircle,
    tags: ["Web App", "Privacy", "Mental Health"],
  },
  {
    title: "Expense Tracker Application",
    description: "A web app that allows users to track income and expenses, visualize data with charts, and manage their monthly budgets efficiently.",
    icon: DollarSign,
    tags: ["Web App", "Finance", "Data Visualization"],
  },
  {
    title: "Website for Dyslexia Patients",
    description: "An accessibility-focused website built to support dyslexic users with text-to-speech, color contrast adjustments, and simple reading layouts.",
    icon: Book,
    tags: ["Accessibility", "Web", "Inclusive Design"],
  },
  {
    title: "ToDo App (React)",
    description: "A responsive productivity app to manage daily tasks using React, with features like task filtering and local storage.",
    icon: CheckSquare,
    tags: ["React", "Productivity", "Local Storage"],
  },
  {
    title: "Blog App (Next.js)",
    description: "A dynamic blog platform built with Next.js featuring SSR, React Query, and Tailwind CSS for a fast, modern blogging experience.",
    icon: FileText,
    tags: ["Next.js", "SSR", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
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
                className="group hover:shadow-glow transition-all duration-300 cursor-pointer animate-fade-in border-border/50 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-accent rounded-lg w-fit group-hover:bg-gradient-primary transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
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
