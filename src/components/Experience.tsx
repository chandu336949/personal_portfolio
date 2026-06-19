import { Briefcase, Calendar, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Infosys Springboard",
      period: "Jun 2026 – Present",
      type: "Internship",
      description: [
        "Designed and developed responsive web applications focused on clean UI and seamless user experience.",
        "Implemented dynamic frontend functionality using JavaScript and React.js, improving application interactivity.",
        "Optimized web pages for performance, accessibility and mobile responsiveness following industry best practices.",
      ],
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Responsive Design"],
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      title: "Open Source Contributor",
      company: "Open Source Connect Global",
      period: "Feb 2026",
      type: "Open Source",
      description: [
        "Collaborated with a global network to optimize architectural features and maintain codebase reliability.",
        "Identified, isolated and resolved community-reported bugs and performance bottlenecks via Git version control.",
        "Submitted structured pull requests and engaged in technical code reviews to ensure robust deployment.",
      ],
      skills: ["Git", "GitHub", "Python", "JavaScript", "Code Review"],
      color: "bg-gradient-to-br from-teal-500 to-emerald-500",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Internships and open-source contributions building real-world product experience.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border" />
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow" />
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${exp.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        {exp.type === "Internship" ? <Briefcase className="w-6 h-6 text-white" /> : <Users className="w-6 h-6 text-white" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((s, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
