import { Award, Trophy, BookOpen, Sparkles, Palette, Code2 } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "State-Level Buildathon Qualifier",
      sub: "OpenAI Academy × NxtWave",
      desc: "Qualified for the state-level round with an innovative project selected from hundreds of statewide entries.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Award,
      title: "CSE Top Academic Scorer",
      sub: "Raghu Engineering College",
      desc: "Recognized as the CSE top academic scorer and awarded an official certificate of merit.",
      color: "from-violet-500 to-purple-500",
    },
  ];

  const certifications = [
    { icon: Sparkles, title: "MCP Mega Workshop", issuer: "NxtWave" },
    { icon: BookOpen, title: "Introduction to Generative AI", issuer: "AWS Educate" },
    { icon: Palette, title: "Workshop on UI/UX Psychology", issuer: "GUVI" },
    { icon: Code2, title: "Python Full Stack", issuer: "Infosys Springboard" },
  ];

  return (
    <section id="achievements" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Achievements & Certifications</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Recognition & <span className="gradient-text">Continuous Learning</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {achievements.map((a, i) => (
              <div key={i} className="p-7 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <a.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{a.title}</h3>
                    <p className="text-sm text-primary mb-2">{a.sub}</p>
                    <p className="text-sm text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Workshops & Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((c, i) => (
              <div key={i} className="p-5 rounded-2xl bg-card shadow-card border border-border/50 hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{c.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
