import { Github, Linkedin, Mail, MapPin, Download, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const RESUME_URL = "/KuramdasuChandusri_Resume.pdf";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/80">Open to Software & Frontend Developer roles</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary-foreground tracking-tight">
            Kuramdasu <span className="gradient-text">Chandusri</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 font-light">
            Frontend Developer <span className="text-primary-foreground/40">|</span> React Developer <span className="text-primary-foreground/40">|</span> Problem Solver
          </p>

          <p className="max-w-2xl mx-auto text-primary-foreground/60 mb-6 leading-relaxed">
            Full-Stack Developer skilled in Python, JavaScript, React.js, Node.js, and SQL, with a solid core in
            Data Structures, Algorithms, and OOP — and hands-on experience building REST APIs and scalable web applications.
          </p>

          <div className="flex items-center justify-center gap-2 text-primary-foreground/60 mb-8">
            <MapPin className="w-4 h-4" />
            <span>Visakhapatnam, Andhra Pradesh, India · Open to Relocation</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                View Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href={RESUME_URL} download="KuramdasuChandusri_Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a href="https://github.com/chandu336949" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/chandu-sri-kuramdasu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:chandusri0303@gmail.com" aria-label="Email" className="p-3 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary-foreground/40" />
      </div>
    </section>
  );
};

export default Hero;
