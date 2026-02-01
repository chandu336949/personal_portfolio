import { GraduationCap, Award, Trophy, Star } from "lucide-react";
const Education = () => {
  return <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Education & Achievements</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Academic <span className="gradient-text">Excellence</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="p-8 rounded-2xl bg-card shadow-card border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Education</h3>
                  <p className="text-muted-foreground">Academic Background</p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-muted/50 border border-border/50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-primary font-medium">Raghu Engineering College, Vizianagaram</p>
                    <p className="text-sm text-muted-foreground mt-1">Sep 2023 - Present</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <span className="text-2xl font-bold gradient-text">9.27</span>
                    <span className="text-muted-foreground">/10 CGPA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div className="p-8 rounded-2xl bg-card shadow-card border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Achievements & Certifications</h3>
                  <p className="text-muted-foreground">Recognition & Accomplishments</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Secured Top Rank in CSE Department</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Secured top rank for academic excellence and awarded an official certificate of merit
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-4 h-4 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">State-Level OpenAI Academy × NxtWave Buildathon</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Qualified for the state-level competition with project selected from hundreds of participants for innovation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Education;