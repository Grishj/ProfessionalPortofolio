import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      name: "Medicine Reminder App",
      description:
        "A feature-rich mobile application built with React Native that helps users manage their daily medication schedule with reminders, notifications, dosage tracking, and history logs. Backend powered by Node.js and PostgreSQL.",
      status: "Ongoing",
      category: "Mobile App",
      githubUrl: "https://github.com/Grishj/MedicineReminderApp", // Replace with actual GitHub URL
      demoUrl: null, // Add demo URL if available
    },

    {
      name: "LicenseMaster",
      description:
        "Computer Engineering License Preparation app, designed to help students prepare for licensing exams with mock tests and resources.",
      status: "Ongoing",
      category: "Education App",
      githubUrl: "https://github.com/Grishj/LicenseMaster", // Replace with actual GitHub URL
      demoUrl: null, // Add demo URL if available
    },
    {
      name: "HomeSolution: On Demand Home Service",
      description:
        "Completed on-demand home service app that connects users with local service providers, built with React Native and Node.js backend.",
      status: "Completed",
      category: "Mobile App",
      githubUrl: "https://github.com/Grishj/HomeSolution", // Replace with actual GitHub URL
      demoUrl: null, // Add demo URL if available
    },
    {
      name: "Expense Tracker",
      description:
        "Completed expense tracking app with features like user authentication, expense management, and visualization built in React Native.",
      status: "Completed",
      category: "Mobile App",
      githubUrl: "https://github.com/Grishj/Expense_Tracker", // Replace with actual GitHub URL
      demoUrl: null, // Add demo URL if available
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ongoing":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Mobile App":
        return "bg-orange-100 text-orange-800";
      case "Education App":
        return "bg-purple-100 text-purple-800";
      case "Automation":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                    project.category
                  )}`}
                >
                  {project.category}
                </span>

                <div className="flex items-center space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      title="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-orange-600 hover:text-orange-700 transition-colors duration-200"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
