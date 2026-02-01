import { Code, Database, Wrench, Layout } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "Java", "C", "JavaScript", "HTML", "CSS", "SQL"]
    },
    {
      icon: Layout,
      title: "Frameworks & Libraries",
      color: "from-teal-500 to-emerald-500",
      skills: ["React.js", "Node.js", "Express.js", "Bootstrap", "Flexbox", "REST APIs"]
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-violet-500 to-purple-500",
      skills: ["MySQL", "SQLite"]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      color: "from-orange-500 to-amber-500",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Canva", "Streamlit"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Technical Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Technologies I <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit spanning full-stack development, AI/ML, and modern design tools
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* AI/ML Expertise Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">AI & Machine Learning Expertise</h3>
                <p className="text-muted-foreground">
                  Specialized in deep learning, CNNs, and building end-to-end ML pipelines with Flask deployment
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center px-6 py-3 rounded-xl bg-card shadow-sm">
                  <div className="text-2xl font-bold text-primary">CNN</div>
                  <div className="text-xs text-muted-foreground">Deep Learning</div>
                </div>
                <div className="text-center px-6 py-3 rounded-xl bg-card shadow-sm">
                  <div className="text-2xl font-bold text-secondary">Flask</div>
                  <div className="text-xs text-muted-foreground">ML Deployment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
