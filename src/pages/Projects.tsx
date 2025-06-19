import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      name: "Mobile Banking App Clone",
      description:
        "A fully functional clone of a mobile banking app, implementing core banking features with React Native and Node.js backend.",
      status: "Ongoing",
      category: "Mobile App",
    },
    {
      name: "LicenseMaster",
      description:
        "Computer Engineering License Preparation app, designed to help students prepare for licensing exams with mock tests and resources.",
      status: "Ongoing",
      category: "Education App",
    },
    {
      name: "API Testing",
      description:
        "Project focused on API testing automation using Postman and Java test frameworks, improving reliability and test coverage.",
      status: "Ongoing",
      category: "Automation",
    },
    {
      name: "Selenium Automation",
      description:
        "Automated Selenium WebDriver tests for web applications, increasing test efficiency and reducing manual testing efforts.",
      status: "Ongoing",
      category: "Automation",
    },
    {
      name: "HomeSolution: On Demand Home Service",
      description:
        "Completed on-demand home service app that connects users with local service providers, built with React Native and Node.js backend.",
      status: "Completed",
      category: "Mobile App",
    },
    {
      name: "Expense Tracker",
      description:
        "Completed expense tracking app with features like user authentication, expense management, and visualization built in React Native.",
      status: "Completed",
      category: "Mobile App",
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

              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                  project.category
                )}`}
              >
                {project.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
