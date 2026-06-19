import { GraduationCap, Star, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Education</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Academic <span className="gradient-text">Background</span>
            </h2>
          </div>

          <div className="p-8 rounded-2xl bg-card shadow-card border border-border/50">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">Bachelor of Technology — Computer Science</h3>
                <p className="text-primary font-medium">Raghu Engineering College</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Oct 2023 – May 2027
                  </div>
                  <span>Andhra Pradesh, India</span>
                </div>

                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border/50">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="text-muted-foreground">Specialization in Software Engineering, Data Structures & Web Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
