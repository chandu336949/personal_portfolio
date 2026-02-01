import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chandusri0303@gmail.com",
      href: "mailto:chandusri0303@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 798 143 1193",
      href: "tel:+917981431193"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Visakhapatnam, Andhra Pradesh, India 530008",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/chandu336949",
      username: "chandu336949"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/chandu-sri-kuramdasu",
      username: "chandu-sri-kuramdasu"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm actively looking for opportunities in software development and AI/ML. 
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="p-8 rounded-2xl bg-card shadow-card border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-sm font-semibold text-foreground mb-4">Social Profiles</h4>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{social.label}</p>
                        <p className="text-foreground font-medium font-mono text-sm">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-8 rounded-2xl gradient-hero text-primary-foreground flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  Whether you're looking for a dedicated team member, collaborator for an exciting project, 
                  or just want to discuss technology, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90 transition-all"
                  asChild
                >
                  <a href="mailto:chandusri0303@gmail.com">
                    <Send className="w-4 h-4 mr-2" />
                    Send Me an Email
                  </a>
                </Button>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a href="https://github.com/chandu336949" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a href="https://linkedin.com/in/chandu-sri-kuramdasu" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
