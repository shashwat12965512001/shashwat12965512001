import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-darker via-background to-dark-card opacity-50"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm</span>{" "}
            <span className="gradient-text">Shashwat</span>
          </h1>
          
          <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-4">
            Full Stack Developer | Flutter Dev | Problem Solver
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Building solutions for real-world challenges through code. 
            Passionate about creating innovative platforms and solving complex problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="neon" size="lg" className="group">
              View Portfolio
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end animate-slide-up">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neon to-neon-glow rounded-full blur-3xl opacity-20 scale-110"></div>
            <img 
              src={profileImage} 
              alt="Shashwat Srivastava" 
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-neon/30 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;