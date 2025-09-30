import { useParams, Link } from "react-router-dom";

const servicesData = {
  "mobile-app-development": {
    title: "Mobile App Development",
    description:
      "Creating sleek, performant mobile applications across iOS and Android platforms using Flutter and React Native. Tailored user experiences and modern UI design to help your app stand out.",
    features: [
      "Cross-platform Flutter & React Native apps",
      "Custom UI/UX design",
      "Integration with APIs and backend services",
      "Deployment to App Stores",
    ],
    technologies: [
      "Flutter",
      "React Native",
      "Dart",
      "JavaScript",
      "API Integration",
    ],
  },
  "full-stack-web-development": {
    title: "Full-Stack Web Development",
    description:
      "Building responsive and scalable web applications with modern tech stacks including React, Next.js, Strapi, and MySQL. Featuring secure authentication, seamless user interfaces, and robust backend logic.",
    features: [
      "React & Next.js frontend",
      "Headless CMS with Strapi",
      "MySQL and database design",
      "Authentication and authorization",
      "RESTful and GraphQL APIs",
    ],
    technologies: [
      "React",
      "Next.js",
      "Strapi",
      "MySQL",
      "REST API",
      "GraphQL",
    ],
  },
  "custom-backend-solutions": {
    title: "Custom Software Solutions",
    description:
      "Developing tailored software that meets unique business needs. From automation tools to enterprise applications, ensuring reliable, maintainable, and efficient solutions.",
    features: [
      "Bespoke application development",
      "Legacy system modernization",
      "Automation and workflow optimization",
      "Scalable architecture design",
    ],
    technologies: ["JavaScript", "Python", "Docker", "AWS", "CI/CD"],
  },
};

const ServiceDetail = () => {
  const { service } = useParams<{ service: string }>();
  const serviceInfo = service ? servicesData[service] : null;

  if (!serviceInfo) {
    return (
      <div className="min-h-screen bg-background text-neon p-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-neon underline hover:text-neon/80">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-neon p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl bg-dark-card/60 rounded-2xl shadow-lg px-10 py-8 mb-6 border border-neon/20 transition-all backdrop-blur-md">
        {/* Service Title with gradient underline */}
        <h1 className="text-5xl font-bold mb-2 text-neon relative inline-block z-10">
          {serviceInfo.title}
          <span
            className="absolute left-0 right-0 bottom-[-6px] h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-40 rounded-full"
            aria-hidden="true"
          />
        </h1>
        <p className="text-lg mb-7 text-neon/70 leading-relaxed">
          {serviceInfo.description}
        </p>

        {/* Features section as cards */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">
            <span className="border-b-2 border-neon/40 pb-1">Features</span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {serviceInfo.features.map((feature, idx) => (
              <li
                key={idx}
                className="bg-neon/10 hover:bg-neon/20 rounded-xl p-4 shadow transition-all flex items-center gap-4"
              >
                <span className="w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mr-2"></span>
                <span className="text-neon/90">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies section as badges */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">
            <span className="border-b-2 border-neon/40 pb-1">Technologies</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            {serviceInfo.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gradient-to-br from-blue-600/40 to-cyan-700/40 text-neon rounded-full px-5 py-2 text-base font-semibold shadow hover:scale-105 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-6 text-right">
          <Link
            to="/"
            className="text-neon underline hover:text-neon/90 transition inline-block"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
