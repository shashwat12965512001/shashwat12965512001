import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-justify">
            <p className="text-lg leading-relaxed text-foreground">
              I have completed my Master's in Computer Applications at <span className="text-neon font-semibold">PES University, Bengaluru</span>. 
              I’m now actively seeking job opportunities in product-based companies while building real-world projects to strengthen my experience. 
              Some of my notable projects include <span className="text-neon font-semibold">Spendwise</span> 
              (a personal finance tracker built with Flutter, Flask, and Firebase) and a 
              <span className="text-neon font-semibold"> Koha-inspired Library Management System</span> built on the MERN stack.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              With hands-on experience as a backend developer and working across diverse full-stack projects, 
              I have a strong foundation in modern web and mobile technologies. I enjoy contributing to every part of the stack—whether it's crafting clean UIs, architecting APIs, or optimizing databases. 
              Currently, I’m also exploring <span className="text-neon font-semibold">machine learning</span> and 
              <span className="text-neon font-semibold"> cybersecurity</span>, continuously expanding my skill set to become a versatile engineer ready for challenging roles in product-based companies.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="card-hover bg-dark-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Master of Computer Applications</h3>
                    <p className="text-muted-foreground">PES University, Bengaluru</p>
                    <p className="text-sm text-neon">2023 - 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover bg-dark-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Bachelor of Computer Applications</h3>
                    <p className="text-muted-foreground">Integral University</p>
                    <p className="text-sm text-neon">2019 - 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover bg-dark-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Bengaluru, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;