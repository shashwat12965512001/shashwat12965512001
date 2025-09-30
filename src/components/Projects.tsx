import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BookOpen, Users, BarChart3, Wallet } from "lucide-react";

const Projects = () => {
  const pesuLibraryFeatures = [
    { icon: Users, text: "Dynamic roles & permissions" },
    { icon: BookOpen, text: "Serials, acquisitions & circulation modules" },
    { icon: BarChart3, text: "Analytics dashboards & reports" },
  ];

  const pesuLibraryTech = ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"];

  const spendwiseFeatures = [
    { icon: Wallet, text: "Income & expense tracking" },
    { icon: BarChart3, text: "Visual reports & breakdowns" },
    { icon: Users, text: "Rule-based expense categorization" },
  ];

  const spendwiseTech = ["Flutter", "Python Flask", "Firebase", "REST APIs", "fl_chart"];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my latest work and the impact of innovative solutions
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* PESU Library Project */}
          <Card className="card-hover bg-dark-card border-neon/20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden bg-gradient-to-br from-neon/10 to-neon-glow/10 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-neon/20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-neon" />
                  </div>
                  <h3 className="text-2xl font-bold text-neon mb-2">PESU Library</h3>
                  <p className="text-muted-foreground">Koha-inspired Management System</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-50"></div>
              </div>
              
              <div className="p-8 lg:p-12">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl font-bold mb-4">
                    Library Management System
                  </CardTitle>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A modern, full-featured platform inspired by Koha, built with the MERN stack to 
                    digitize library workflows including acquisitions, serials, and circulation. 
                    Designed with role-based access, analytics dashboards, and scalable architecture.
                  </p>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-neon">Key Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {pesuLibraryFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="bg-neon/10 p-2 rounded-lg">
                              <IconComponent className="w-4 h-4 text-neon" />
                            </div>
                            <span className="text-muted-foreground">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-neon">Impact & Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-neon/5 rounded-lg">
                        <div className="text-2xl font-bold text-neon">60%</div>
                        <div className="text-sm text-muted-foreground">Reduced Manual Work</div>
                      </div>
                      <div className="text-center p-4 bg-neon/5 rounded-lg">
                        <div className="text-2xl font-bold text-neon">100%</div>
                        <div className="text-sm text-muted-foreground">Digital Records</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-neon">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {pesuLibraryTech.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-neon/10 text-neon border-neon/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button variant="neon" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button variant="outline" className="flex-1 border-neon/20 hover:border-neon">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* Spendwise Project */}
          <Card className="card-hover bg-dark-card border-neon/20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden bg-gradient-to-br from-neon/10 to-neon-glow/10 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-neon/20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <Wallet className="w-12 h-12 text-neon" />
                  </div>
                  <h3 className="text-2xl font-bold text-neon mb-2">Spendwise</h3>
                  <p className="text-muted-foreground">Personal Finance Tracker</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-50"></div>
              </div>
              
              <div className="p-8 lg:p-12">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl font-bold mb-4">
                    Spendwise – Finance Tracker
                  </CardTitle>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A cross-platform finance tracker built with Flutter, Flask, and Firebase, 
                    designed to help users track their income/expenses, visualize spending habits, 
                    and make smarter financial decisions.
                  </p>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-neon">Key Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {spendwiseFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="bg-neon/10 p-2 rounded-lg">
                              <IconComponent className="w-4 h-4 text-neon" />
                            </div>
                            <span className="text-muted-foreground">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-neon">Impact & Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-neon/5 rounded-lg">
                        <div className="text-2xl font-bold text-neon">+40%</div>
                        <div className="text-sm text-muted-foreground">Better Financial Insights</div>
                      </div>
                      <div className="text-center p-4 bg-neon/5 rounded-lg">
                        <div className="text-2xl font-bold text-neon">24/7</div>
                        <div className="text-sm text-muted-foreground">Cross-Platform Access</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-neon">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {spendwiseTech.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-neon/10 text-neon border-neon/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button variant="neon" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button variant="outline" className="flex-1 border-neon/20 hover:border-neon">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button variant="outline" size="lg" className="border-neon/20 hover:border-neon hover:bg-neon/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;