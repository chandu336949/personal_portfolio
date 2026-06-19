import { Code, Database, Wrench, Layout, Server, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    { icon: Layout, title: "Frontend", color: "from-blue-500 to-cyan-500", skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"] },
    { icon: Server, title: "Backend", color: "from-teal-500 to-emerald-500", skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth"] },
    { icon: Code, title: "Programming Languages", color: "from-violet-500 to-purple-500", skills: ["Python", "Java", "C", "JavaScript"] },
    { icon: Database, title: "Databases", color: "from-amber-500 to-orange-500", skills: ["MySQL", "SQLite", "MongoDB"] },
    { icon: Cpu, title: "Core CS", color: "from-pink-500 to-rose-500", skills: ["DSA", "OOPS", "Operating Systems", "Computer Networks"] },
    { icon: Wrench, title: "Tools & DevOps", color: "from-indigo-500 to-blue-500", skills: ["Git", "GitHub", "Command Line", "VS Code", "Streamlit"] },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Technical Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A focused toolkit for building full-stack web applications, with a strong emphasis on the frontend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="group p-7 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-muted text-foreground text-sm font-medium border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
