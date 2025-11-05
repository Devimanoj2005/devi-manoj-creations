import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/components/Projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="hover:bg-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 animate-fade-in">
            <div className="p-6 bg-gradient-primary rounded-2xl shadow-glow animate-glow-pulse">
              <Icon className="h-16 w-16 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
                <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-accent transition-all duration-300 hover:scale-105">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <Card className="p-8 shadow-soft animate-slide-in">
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </Card>

            <Card className="p-8 shadow-soft animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="mt-1 p-1 bg-primary/10 rounded-full">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 shadow-soft animate-slide-in-right">
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-accent transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-soft bg-gradient-primary text-white animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold mb-2">Interested in this project?</h3>
              <p className="text-white/90 mb-4 text-sm">
                Get in touch to learn more about the development process and implementation details.
              </p>
              <Button variant="secondary" className="w-full hover:scale-105 transition-transform duration-300">
                Contact Me
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation to other projects */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== id)
              .slice(0, 3)
              .map((otherProject, index) => {
                const OtherIcon = otherProject.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 cursor-pointer hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
                    onClick={() => navigate(`/project/${otherProject.id}`)}
                  >
                    <div className="mb-4 p-3 bg-accent rounded-lg w-fit group-hover:bg-gradient-primary transition-all duration-300">
                      <OtherIcon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {otherProject.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {otherProject.description}
                    </p>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
