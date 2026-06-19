import { GitPullRequest, Bug, MessagesSquare, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const OpenSource = () => {
  const items = [
    { icon: GitPullRequest, title: "Structured Pull Requests", desc: "Submitted PRs across community repositories with clear scope and documentation." },
    { icon: Bug, title: "Bug Fixes & Performance", desc: "Identified, isolated and resolved community-reported bugs and bottlenecks." },
    { icon: MessagesSquare, title: "Code Reviews", desc: "Engaged in technical reviews to keep deployments robust and maintainable." },
    { icon: Globe, title: "Global Collaboration", desc: "Worked with a worldwide network through Open Source Connect Global." },
  ];

  return (
    <section id="open-source" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Open Source</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Building <span className="gradient-text">In Public</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Contributing to open-source projects to grow as an engineer and give back to the community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {items.map((it, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-all">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <it.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <a href="https://github.com/chandu336949" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Follow My Contributions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
