import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "React.js", 
        "Next.js (App Router)", 
        "Tailwind CSS", 
        "Flutter"
      ],
      color: "text-blue-400"
    },
    {
      title: "Backend",
      icon: Code,
      skills: [
        "Node.js", 
        "Express.js", 
        "Strapi (Headless CMS)", 
        "Flask", 
        "PHP"
      ],
      color: "text-green-400"
    },
    {
      title: "Languages & Databases", 
      icon: Database,
      skills: [
        "C", 
        "C++", 
        "Java", 
        "Python", 
        "Dart", 
        "MongoDB", 
        "MySQL", 
        "Firebase (Firestore & Auth)"
      ],
      color: "text-purple-400"
    },
    {
      title: "Tools & Concepts",
      icon: Wrench,
      skills: [
        "Git & GitHub", 
        "Postman", 
        "Replit", 
        "APIs & REST", 
        "Authentication (JWT, OAuth)", 
        "Deployment (Vercel, Render)", 
        "Linux", 
        "DSA", 
        "OS", 
        "DBMS", 
        "OOPs"
      ],
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 px-4" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build scalable, impactful solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="card-hover bg-dark-card border-border group h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-neon/10 p-4 rounded-lg w-fit mb-4 group-hover:bg-neon/20 transition-colors">
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-neon/5 transition-colors"
                      >
                        <div className="w-2 h-2 bg-neon rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">CS Fundamentals & Algorithms</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Data Structures", 
              "Algorithms", 
              "Graph Algorithms", 
              "Greedy & DP", 
              "Scheduling Algorithms", 
              "Operating Systems", 
              "Object-Oriented Programming", 
              "Database Management Systems"
            ].map((fundamental, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-neon/10 to-neon-glow/10 border border-neon/20 rounded-lg px-4 py-2 text-neon hover:from-neon/20 hover:to-neon-glow/20 transition-all duration-300"
              >
                {fundamental}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;