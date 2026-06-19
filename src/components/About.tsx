import { Code2, Layout, GitBranch, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Layout, title: "Frontend Engineering", description: "Crafting responsive, accessible interfaces with React.js, JavaScript, HTML and CSS." },
    { icon: Code2, title: "Full-Stack Development", description: "Building REST APIs and scalable web apps with Node.js, Express and SQL databases." },
    { icon: GitBranch, title: "Open Source", description: "Contributing fixes, features and reviews to global open-source projects via Git & GitHub." },
    { icon: Rocket, title: "Problem Solver", description: "Strong foundation in DSA, OOP, Operating Systems and Computer Networks." },
  ];

  const stats = [
    { value: "5+", label: "Tech Stacks" },
    { value: "3+", label: "Featured Projects" },
    { value: "2", label: "Internships" },
    { value: "4+", label: "Certifications" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Engineering Clean, <span className="gradient-text">Impactful Software</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Kuramdasu Chandusri</span>, a Computer Science undergraduate at
                <span className="text-foreground font-medium"> Raghu Engineering College</span> with a passion for
                <span className="text-primary font-semibold"> Frontend Development</span>, web engineering and open source.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I love translating ideas into smooth, performant interfaces — from an AI-powered mock interview platform with
                live coding and voice streams, to a CNN-based pneumonia detector that hit 87% test accuracy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently a <span className="text-foreground font-medium">Frontend Developer Intern at Infosys Springboard</span>,
                I focus on clean UI, accessibility and shipping production-ready React applications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="p-6 rounded-2xl bg-card shadow-card border border-border/50 text-center">
                  <div className="text-4xl font-bold gradient-text">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-card-hover hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
