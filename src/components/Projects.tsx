import { Github, ExternalLink, Sparkles, Brain, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Mock Interview Platform",
      subtitle: "MERN + Gemini AI",
      date: "Feb 2026",
      description:
        "Full-stack web application that simulates real-world technical interviews using generative AI, with voice streams and a live code editor.",
      features: [
        "Multi-step wizard UI with Gemini AI for resume parsing & question generation",
        "Voice communication via AssemblyAI transcription and Murf AI speech synthesis",
        "Monaco Code Editor integration for interactive live-coding rounds",
        "JWT-based authentication and persistent user sessions",
      ],
      tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Gemini AI"],
      github: "https://github.com/chandu336949",
      demo: "https://github.com/chandu336949",
      icon: MessageSquare,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Learning Path Generator via MCP",
      subtitle: "Python · Streamlit · MCP",
      date: "Jan 2026",
      description:
        "Modular web dashboard that generates personalized learning paths using the Model Context Protocol, aggregating resources across platforms.",
      features: [
        "Streamlit interface for custom syllabi based on user timelines",
        "MCP with Google AI Studio to broker cross-platform resources",
        "Pipedream webhooks to aggregate YouTube lectures and docs",
        "Real-time progress tracking and topic curation",
      ],
      tech: ["Python", "Streamlit", "MCP", "Google AI Studio", "Pipedream"],
      github: "https://github.com/chandu336949/Path-GENERATOR-MCP",
      demo: null,
      icon: Sparkles,
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Pneumonia Detection — Deep Learning CNN",
      subtitle: "Python · TensorFlow · Keras",
      date: "Nov 2025",
      description:
        "Automated pneumonia detection from chest X-ray images using a Convolutional Neural Network pipeline with structured preprocessing.",
      features: [
        "2-layer CNN with sequential feature scaling for radiographic classification",
        "Reached 87% test accuracy via structured image pre-processing routines",
        "Optimized inference to evaluate standalone scans in milliseconds",
        "Confusion matrix, precision, recall and F1-score evaluation",
      ],
      tech: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"],
      github: "https://github.com/chandu336949/Pneumonia-detector",
      demo: null,
      icon: Brain,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Projects That <span className="gradient-text">Make an Impact</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of full-stack, AI and web projects shipped end-to-end — from UI to deployment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative rounded-2xl bg-card shadow-card border border-border/50 overflow-hidden hover:shadow-card-hover transition-all duration-500">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6 gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <project.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                        <span className="text-sm text-muted-foreground font-mono">{project.subtitle}</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap mt-1">{project.date}</span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Explore more on my GitHub</p>
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="https://github.com/chandu336949" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
