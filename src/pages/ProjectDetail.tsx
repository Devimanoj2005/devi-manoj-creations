import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Maximize2 } from "lucide-react";
import { projects } from "@/components/Projects";
import ImageLightbox from "@/components/ImageLightbox";
import ThemeToggle from "@/components/ThemeToggle";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
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
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50 animate-fade-in">
        <ThemeToggle />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50 transition-colors duration-300">
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
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="p-6 bg-gradient-primary rounded-2xl shadow-glow animate-glow-pulse hover:scale-110 transition-transform duration-500">
              <Icon className="h-16 w-16 text-white animate-bounce-slow" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up opacity-0 bg-gradient-primary bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
                {project.tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm hover:scale-110 transition-transform duration-300 animate-scale-in opacity-0"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
                {project.demoUrl ? (
                  <Button 
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-110 animate-glow-pulse"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                ) : (
                  <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-110 animate-glow-pulse" disabled>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo (Coming Soon)
                  </Button>
                )}
                {project.githubUrl ? (
                  <Button 
                    variant="outline" 
                    className="border-primary/30 hover:border-primary hover:bg-accent transition-all duration-300 hover:scale-110"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    className="border-primary/30 hover:border-primary hover:bg-accent transition-all duration-300 hover:scale-110" 
                    disabled
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="py-12 px-4 bg-background/50">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">
              Project <span className="bg-gradient-primary bg-clip-text text-transparent">Screenshots</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden cursor-pointer animate-scale-in opacity-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/70 p-4 rounded-full backdrop-blur-sm animate-bounce-slow">
                        <Maximize2 className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-in opacity-0 hover:-translate-y-2 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-primary rounded-full group-hover:h-12 transition-all duration-300"></div>
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">Key Features</h2>
              </div>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-4 animate-fade-in opacity-0 hover:translate-x-2 transition-transform duration-300"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="mt-1 p-2 bg-gradient-primary rounded-lg shadow-soft">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-in opacity-0 hover:-translate-y-2 group" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-secondary rounded-full group-hover:h-12 transition-all duration-300"></div>
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">About This Project</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-in-right opacity-0 hover:-translate-y-2 group">
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-accent transition-all duration-300 hover:scale-110 transform"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-glow bg-gradient-primary text-white animate-slide-in-right opacity-0 hover:scale-105 transition-all duration-500 relative overflow-hidden group" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Interested in this project?</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Get in touch to learn more about the development process and implementation details.
                </p>
                <a 
                  href="tel:+919876543210" 
                  className="block w-full"
                >
                  <Button variant="secondary" className="w-full hover:scale-105 transition-transform duration-300 font-semibold">
                    📞 Call: +91 98765 43210
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation to other projects */}
      <section className="py-16 px-4 bg-background relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">
            Explore More <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== id)
              .slice(0, 3)
              .map((otherProject, index) => {
                const OtherIcon = otherProject.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 cursor-pointer hover:shadow-glow transition-all duration-500 hover:-translate-y-3 group animate-scale-in opacity-0 relative overflow-hidden"
                    onClick={() => navigate(`/project/${otherProject.id}`)}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="mb-4 p-3 bg-accent rounded-lg w-fit group-hover:bg-gradient-primary transition-all duration-300 group-hover:scale-110 transform">
                        <OtherIcon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {otherProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {otherProject.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && project.screenshots && (
        <ImageLightbox
          images={project.screenshots}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
