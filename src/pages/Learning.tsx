import React from "react";

const Learning: React.FC = () => {
  const courseData = [
    {
      year: "2024",
      courses: [
        {
          name: "Automation Testing with Java & Selenium",
          details:
            "Advanced hands-on course for aspiring QA Engineers focusing on real-world automation frameworks.",
        },
        {
          name: "React Native App Development",
          details:
            "Full-stack mobile development covering Expo, navigation, state management, and backend integration.",
        },
        {
          name: "Node.js & PostgreSQL Backend",
          details:
            "API development using Express.js and PostgreSQL with ORM (Prisma) and authentication.",
        },
        {
          name: "Data Structures & Algorithms with Python",
          details:
            "Focused on algorithmic thinking and solving coding challenges from beginner to intermediate.",
        },
        {
          name: "Git & CI/CD Essentials",
          details:
            "Practical Git, GitHub, and GitHub Actions usage for automation and team workflows.",
        },
      ],
    },
    {
      year: "2023",
      courses: [
        {
          name: "QA Automation Bootcamp",
          details:
            "30-day project-based QA bootcamp using Java, TestNG, and Selenium WebDriver.",
        },
        {
          name: "Intro to Full Stack Mobile Apps",
          details:
            "React Native with Expo and Firebase for complete mobile app development cycle.",
        },
        {
          name: "Beginner Python Programming",
          details:
            "Hands-on beginner Python with focus on syntax, problem solving, and small apps.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Courses I'm Learning
        </h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Personal & Project-Based Learning Programs
          </h3>

          {courseData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="mb-8">
              <h4 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
                {yearData.year}
              </h4>

              <ul className="space-y-3">
                {yearData.courses.map((course, courseIndex) => (
                  <li
                    key={courseIndex}
                    className="flex flex-col sm:flex-row sm:items-start"
                  >
                    <span className="font-medium text-orange-600 sm:w-64 sm:flex-shrink-0 mb-1 sm:mb-0">
                      {course.name}
                    </span>
                    <span className="text-gray-700 sm:ml-4">
                      {course.details}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-400">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Learning Philosophy
          </h4>
          <p className="text-gray-700 leading-relaxed">
            I believe in learning by doing. My learning style blends theory with
            practical implementation, using real-world projects and challenges.
            I guide learners to build full-stack apps, automate tests, and solve
            algorithmic problems while mastering tools like Git, Selenium, and
            CI/CD workflows. Each course is crafted to spark curiosity and build
            confidence through hands-on experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learning;
