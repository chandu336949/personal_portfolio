import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const linkColor = isScrolled ? "text-muted-foreground" : "text-primary-foreground/80";
  const iconColor = isScrolled ? "text-foreground" : "text-primary-foreground";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xl font-bold">
            <span className="gradient-text">Chandusri.dev</span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button key={link.label} onClick={() => scrollToSection(link.href)} className={`text-sm font-medium transition-colors hover:text-primary ${linkColor}`}>
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button size="sm" asChild>
              <a href="/KuramdasuChandusri_Resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className={`w-6 h-6 ${iconColor}`} /> : <Menu className={`w-6 h-6 ${iconColor}`} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-lg rounded-b-xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button key={link.label} onClick={() => scrollToSection(link.href)} className="text-left text-foreground/80 hover:text-primary transition-colors py-2 px-2">
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-2 px-2">
                <Button size="sm" className="flex-1" asChild>
                  <a href="/KuramdasuChandusri_Resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
