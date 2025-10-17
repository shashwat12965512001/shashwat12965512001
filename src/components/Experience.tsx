import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp, Code, Layers } from "lucide-react";

const Experience = () => {
  const skills = [
    "WordPress Plugins",
    "Payment Gateways",
    "Razorpay",
    "PayPal",
    "Stripe",
    "Shiprocket API",
    "PHP",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Git",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Python",
    "Flask",
    "Data Visualization",
    "Charting",
    "Security Basics",
  ];

  const projects = [
    {
      title: "Spendwise App",
      role: "Full-Stack Developer",
      duration: "3+ months",
      highlights: [
        "Built a Flutter frontend with Python Flask backend and Firebase database",
        "Implemented custom charts and dashboards for income/expense tracking",
        "Rule-based categorization system for financial data",
      ],
    },
    {
      title: "Koha-like Library System",
      role: "Full-Stack Developer",
      duration: "4+ months",
      highlights: [
        "MERN stack with Next.js frontend, Express.js backend, MongoDB database",
        "Implemented user roles, permissions, inventory, and circulation modules",
        "Designed scalable database schemas and clean UI/UX",
      ],
    },
    {
      title: "Portfolio Builder App",
      role: "Independent Project",
      duration: "2+ months",
      highlights: [
        "Users can customize their portfolio UI and download production-ready code",
        "Next.js frontend with Strapi + MySQL backend",
        "Focus on minimal dependencies and maintainable code",
      ],
    },
    // {
    //   title: "Threat Intelligence Learning",
    //   role: "Self-Learning / Labs",
    //   duration: "Ongoing",
    //   highlights: [
    //     "Hands-on networking, Linux, cybersecurity fundamentals",
    //     "Applied learning in small security and data analysis projects",
    //   ],
    // },
  ];

  return (
    <section className="py-20 px-4 bg-dark-card/30" id="experience">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made in tech through
            internships and major projects
          </p>
        </div>

        {/* Internship Experience */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="card-hover bg-dark-card border-neon/20 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <Building2 className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      WooDevz Technologies
                    </h3>
                    <p className="text-neon font-semibold">
                      Intern → Software Developer
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>6+ months</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-neon mr-2" />
                  Key Contributions
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Developed custom WordPress plugins to enhance website
                    functionality
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Integrated payment gateways like Razorpay, PayPal, and
                    Stripe
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Implemented Shiprocket API for shipping management
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Worked across full-stack development using PHP and
                    JavaScript
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Gained essential soft skills: communication, time, and money
                    management
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-neon/10 text-neon border-neon/20 hover:bg-neon/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Major Projects / Independent Work */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 gradient-text flex items-center">
            <Code className="w-6 h-6 mr-2 text-neon" /> Major Projects /
            Independent Work
          </h3>

          {projects.map((proj, idx) => (
            <Card
              key={idx}
              className="card-hover bg-dark-card border-neon/20 mb-6 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="bg-neon/10 p-2 rounded-lg">
                      <Layers className="w-5 h-5 text-neon" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">
                        {proj.title}
                      </h4>
                      <p className="text-neon font-semibold">{proj.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{proj.duration}</span>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {proj.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
