import React from "react";
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
  "custom-software-solutions": {
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
      <div className="min-h-screen bg-background text-neon p-8">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-neon underline hover:text-neon/80">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-neon p-8 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">{serviceInfo.title}</h1>
      <p className="text-lg mb-6">{serviceInfo.description}</p>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          {serviceInfo.features.map((feature, idx) => (
            <li key={idx} className="text-neon/90">
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {serviceInfo.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-neon/20 text-neon rounded-full px-4 py-1 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <Link to="/" className="text-neon underline hover:text-neon/80">
        ← Back to Home
      </Link>
    </div>
  );
};

export default ServiceDetail;
