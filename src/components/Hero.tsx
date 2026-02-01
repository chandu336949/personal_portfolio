import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/80">Open to opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary-foreground tracking-tight">
            Chandusri <span className="gradient-text">Kuramdasu</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-primary-foreground/70 mb-4 font-light">
            Computer Science Student & Software Developer
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/60 mb-8">
            <MapPin className="w-4 h-4" />
            <span>Visakhapatnam, Andhra Pradesh, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://github.com/chandu336949" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/chandu-sri-kuramdasu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:chandusri0303@gmail.com"
              className="p-3 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="tel:+917981431193"
              className="p-3 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary-foreground/40" />
      </div>
    </section>
  );
};

export default Hero;
