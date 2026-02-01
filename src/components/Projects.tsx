import { Github, ExternalLink, Sparkles, Brain, Youtube, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Learning Path Generator",
      subtitle: "Streamlit + MCP",
      description: "A Streamlit application that generates personalized learning paths using Model Context Protocol (MCP). Integrates YouTube, Google Drive, and Notion APIs to automate content curation and note-taking with real-time progress tracking.",
      features: [
        "Personalized learning path generation",
        "YouTube, Google Drive, Notion API integration",
        "Real-time progress tracking",
        "Responsive UI design"
      ],
      tech: ["Streamlit", "Python", "MCP", "APIs"],
      github: "https://github.com/chandu336949/Path-GENERATOR-MCP",
      icon: Sparkles,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Pneumonia Detector",
      subtitle: "AI/ML – CNN",
      description: "A CNN-based deep learning model for chest X-ray classification achieving ~87% accuracy. Features advanced image preprocessing and augmentation techniques with comprehensive model evaluation metrics.",
      features: [
        "87% classification accuracy",
        "Image preprocessing & augmentation",
        "Confusion matrix analysis",
        "Precision, recall, F1-score metrics"
      ],
      tech: ["Python", "TensorFlow", "CNN", "Deep Learning"],
      github: "https://github.com/chandu336949/Pneumonia-detector",
      icon: Brain,
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Projects That <span className="gradient-text">Make an Impact</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Showcasing my journey through AI/ML and full-stack development with real-world applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl bg-card shadow-card border border-border/50 overflow-hidden hover:shadow-card-hover transition-all duration-500"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                        <project.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                        <span className="text-sm text-muted-foreground font-mono">{project.subtitle}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Explore more projects on my GitHub</p>
            <Button 
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
              asChild
            >
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
