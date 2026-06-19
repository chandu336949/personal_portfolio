import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio contact from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:chandusri0303@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client", description: "Thanks for reaching out!" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "chandusri0303@gmail.com", href: "mailto:chandusri0303@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 79814 31193", href: "tel:+917981431193" },
    { icon: MapPin, label: "Location", value: "Visakhapatnam, Andhra Pradesh, India", href: null },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/chandu336949", username: "chandu336949" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/chandu-sri-kuramdasu", username: "chandu-sri-kuramdasu" },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Actively looking for Software & Frontend Developer opportunities. Open to collaborations and a friendly chat.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card shadow-card border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-sm font-semibold text-foreground mb-4">Social Profiles</h4>
                <div className="space-y-3">
                  {socialLinks.map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <s.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{s.label}</p>
                        <p className="text-foreground font-medium font-mono text-sm">{s.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card shadow-card border border-border/50 space-y-5">
              <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  maxLength={100}
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  maxLength={255}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can I help?"
                  rows={5}
                  maxLength={1000}
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
