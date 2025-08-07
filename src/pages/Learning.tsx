import React from "react";

const Learning: React.FC = () => {
  const courseData = [
    {
      year: "2025",
      courses: [
        {
          name: "React Native New Architecture & Fabric",
          details:
            "Deep dive into React Native's new architecture, Fabric renderer, TurboModules, and JSI for high-performance mobile apps.",
        },
        {
          name: "Advanced React Native with TypeScript",
          details:
            "Type-safe React Native development covering custom hooks, higher-order components, and complex navigation patterns.",
        },
        {
          name: "Native Module Development (iOS & Android)",
          details:
            "Building custom native modules using Swift/Objective-C for iOS and Java/Kotlin for Android to extend React Native capabilities.",
        },
        {
          name: "React Native Performance Optimization",
          details:
            "Memory management, lazy loading, image optimization, bundle splitting, and Flipper debugging for production-ready apps.",
        },
        {
          name: "Mobile App State Management Patterns",
          details:
            "Advanced Redux Toolkit, Zustand, Jotai, and React Query for complex state management in React Native applications.",
        },
        {
          name: "React Native Testing & CI/CD",
          details:
            "Unit testing with Jest, E2E testing with Detox, automated testing pipelines, and app distribution via Fastlane.",
        },
      ],
    },
    {
      year: "2024",
      courses: [
        {
          name: "React Native Fundamentals with Expo",
          details:
            "Complete React Native development using Expo CLI, EAS Build, navigation, and third-party library integration.",
        },
        {
          name: "Mobile UI/UX Design Implementation",
          details:
            "Implementing modern mobile designs with React Native Elements, NativeBase, and custom animations using Reanimated.",
        },
        {
          name: "Firebase Integration for Mobile Apps",
          details:
            "Authentication, real-time database, cloud storage, push notifications, and analytics integration in React Native.",
        },
        {
          name: "React Native Navigation & Routing",
          details:
            "Mastering React Navigation v6, stack, tab, drawer navigations, deep linking, and navigation state management.",
        },
        {
          name: "Mobile Backend Integration",
          details:
            "REST APIs, GraphQL, async storage, offline data synchronization, and real-time updates in React Native apps.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          My Learning Journey
        </h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            React Native & Mobile Development Mastery
          </h3>

          {courseData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="mb-8">
              <h4 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
                {yearData.year}
              </h4>

              <ul className="space-y-4">
                {yearData.courses.map((course, courseIndex) => (
                  <li
                    key={courseIndex}
                    className="flex flex-col sm:flex-row sm:items-start bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="font-medium text-orange-600 sm:w-72 sm:flex-shrink-0 mb-2 sm:mb-0 text-sm">
                      {course.name}
                    </span>
                    <span className="text-gray-700 sm:ml-4 text-sm leading-relaxed">
                      {course.details}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Current Focus Areas
            </h4>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• React Native New Architecture migration</li>
              <li>• Advanced animations with Reanimated 3</li>
              <li>• Cross-platform native module development</li>
              <li>• Mobile app security and encryption</li>
              <li>• App Store optimization and deployment</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Upcoming Learning Goals
            </h4>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• React Native for Web development</li>
              <li>• Advanced GraphQL and mobile caching</li>
              <li>• Mobile DevOps and automated deployment</li>
              <li>• AR/VR integration in React Native</li>
              <li>• Micro-frontend architecture for mobile</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-400">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Learning Philosophy
          </h4>
          <p className="text-gray-700 leading-relaxed text-sm">
            As a React Native developer, I believe in building real mobile
            applications while learning. My approach combines hands-on project
            development with deep understanding of mobile-specific concepts like
            platform differences, performance optimization, and user experience
            design. Each learning milestone involves creating production-ready
            mobile apps that solve real problems, from simple utilities to
            complex cross-platform solutions with native integrations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learning;
