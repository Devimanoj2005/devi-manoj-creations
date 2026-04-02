import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-gradient-subtle scroll-reveal">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in opacity-0">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="h-1 bg-gradient-primary mx-auto mb-4 line-animate"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6 stagger-children">
            <Card className="p-6 border-border/50 card-hover-lift border-glow-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg icon-hover-spin">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:2005devimanoj@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    2005devimanoj@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 card-hover-lift border-glow-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg icon-hover-spin">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    SJCET Palai, Kerala, India
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 card-hover-lift border-glow-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg icon-hover-spin">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Social Links</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Devimanoj2005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 inline-block"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/devi-manoj-a8a909326"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 inline-block"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 md:p-8 border-border/50 card-hover-lift border-glow-hover animate-slide-in-right opacity-0" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="border-border/60 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="border-border/60 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  rows={5}
                  className="border-border/60 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300 hover:scale-105 btn-magnetic btn-liquid btn-glow"
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
