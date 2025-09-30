import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  BookOpen,
  Users,
  BarChart3,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

const allProjects = [
  {
    title: "Spendwise",
    subtitle: "Personal Finance Tracker",
    description:
      "A hybrid finance management app to track income, expenses, categories, and generate insights with charts.",
    features: [
      "Income vs Expense comparison (bar/line charts)",
      "Category breakdown (monthly & yearly)",
      "Filters for month/year",
      "Dashboard similar to Google Pay spends screen",
      "Rule-based expense categorization",
    ],
    technologies: [
      "Flutter (fl_chart)",
      "Python Flask",
      "Firebase (Firestore)",
    ],
    icons: { main: Wallet, features: [Wallet, BarChart3, Users] },
  },
  {
    title: "Koha-like Library Management System",
    subtitle: "Full MERN Stack",
    description:
      "A full-stack digital library management system inspired by Koha, built with modern tools.",
    features: [
      "Modules: Inventory, Circulation, Serials, Acquisitions, Settings, Roles & Permissions",
      "User Roles: Admin, Librarian, Patron with dynamic permission control",
      "Student Portal: Separate dashboard UI for students",
      "Settings: Library info, policies, notifications, AI features, UX settings",
      "CRUD everywhere: patrons, books, acquisitions, serials, permissions",
    ],
    technologies: ["Next.js (App Router)", "Express.js", "MongoDB"],
    icons: { main: BookOpen, features: [Users, BookOpen, BarChart3] },
  },
  {
    title: "PESU-Library",
    subtitle: "Strapi-based",
    description:
      "A Strapi-powered digital library portal built for PESU students.",
    features: [
      "Centralized content management via Strapi",
      "Future plan: integrate with student dashboards",
    ],
    technologies: ["Strapi", "Next.js (planned)", "PostgreSQL/MySQL"],
    icons: { main: BookOpen, features: [BookOpen] },
  },
  {
    title: "Portfolio Builder App",
    subtitle: "Customizable Portfolio UI Creator",
    description:
      "Tool for users to design, customize, and download their portfolio UI source code.",
    features: [
      "Drag & drop portfolio sections (Education, Experience, Skills, Projects)",
      "Downloadable code: Minimal, essential libraries",
      "Output matches the designed UI exactly",
    ],
    technologies: ["Next.js", "Strapi (planned)", "MySQL"],
    icons: { main: BookOpen, features: [BookOpen] },
  },
  {
    title: "MLM Wallet System",
    subtitle: "Multi-Level Marketing Wallet",
    description:
      "A platform for basic wallet operations in the Multi-Level Marketing domain.",
    features: [
      "Wallet CRUD (credit, debit, balance check)",
      "No payment gateway integration",
    ],
    technologies: ["PHP", "MySQL"],
    icons: { main: Wallet, features: [Wallet] },
  },
];

const AllProjects = () => {
  return (
    <section className="py-20 px-4 bg-background text-neon" id="all-projects">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold gradient-text">All Projects</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-3">
            Explore my diverse range of projects showcasing full-stack
            development, mobile apps, CMS integrations, and tailored business
            solutions.
          </p>
        </div>

        <div className="space-y-16">
          {allProjects.map((project, index) => {
            const MainIcon = project.icons.main;
            return (
              <Card
                key={index}
                className="card-hover bg-dark-card border-neon/20 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden bg-gradient-to-br from-neon/10 to-neon-glow/10 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-neon/20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        <MainIcon className="w-12 h-12 text-neon" />
                      </div>
                      <h3 className="text-2xl font-bold text-neon mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-50"></div>
                  </div>

                  <div className="p-8 lg:p-12">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl font-bold mb-4">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4 text-neon">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {project.features.map((feature, idx) => {
                            const IconComponent =
                              project.icons.features[idx] || MainIcon;
                            return (
                              <div
                                key={idx}
                                className="flex items-center space-x-3"
                              >
                                <div className="bg-neon/10 p-2 rounded-lg">
                                  <IconComponent className="w-4 h-4 text-neon" />
                                </div>
                                <span className="text-muted-foreground">
                                  {feature}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4 text-neon">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
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
                        <Button
                          variant="outline"
                          className="flex-1 border-neon/20 hover:border-neon"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <Link
            to="/"
            className="text-neon underline hover:text-neon/80 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
