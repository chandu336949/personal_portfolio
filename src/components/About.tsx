import { Code2, Brain, Users, Rocket } from "lucide-react";
const About = () => {
  const highlights = [{
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with React, Node.js, and modern frameworks"
  }, {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Developing intelligent solutions using Python, deep learning, and CNN architectures"
  }, {
    icon: Users,
    title: "Open Source Contributor",
    description: "Active contributor to GirlScript Summer of Code with real-world collaboration experience"
  }, {
    icon: Rocket,
    title: "Continuous Learner",
    description: "Passionate about staying current with emerging technologies and best practices"
  }];
  return <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Passionate About Building <span className="gradient-text">Impactful Solutions</span>
            </h2>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Computer Science undergraduate</span> at Raghu Engineering College 
                with a strong passion for software development and artificial intelligence. Currently maintaining a 
                <span className="text-primary font-semibold"> CGPA of 9.27/10</span>, I strive for academic excellence while 
                building practical, real-world applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey spans from developing AI-powered applications like a pneumonia detection system with 87% accuracy, 
                to building interactive web applications using modern frameworks. I believe in writing clean, maintainable 
                code and contributing to the developer community through open-source projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As an <span className="text-foreground font-medium">AI Intern at Edunet Foundation</span> and a 
                <span className="text-foreground font-medium"> GirlScript Summer of Code contributor</span>, I've gained 
                hands-on experience in collaborative development, model deployment, and building production-ready applications.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card shadow-card border border-border/50 text-center">
                
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="p-6 rounded-2xl bg-card shadow-card border border-border/50 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="p-6 rounded-2xl bg-card shadow-card border border-border/50 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">2+</div>
                
              </div>
              <div className="p-6 rounded-2xl bg-card shadow-card border border-border/50 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">87%</div>
                <div className="text-sm text-muted-foreground">Model Accuracy</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => <div key={index} className="group p-6 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;