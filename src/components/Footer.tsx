import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Devi Manoj
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Computer Science student passionate about creating meaningful web applications and exploring new technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Devimanoj2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/devi-manoj-a8a909326"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:2005devimanoj@gmail.com"
                className="p-2.5 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Devi Manoj. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 text-destructive inline fill-current" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
