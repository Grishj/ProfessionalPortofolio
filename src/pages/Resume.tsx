import React from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  Phone,
  Mail,
  MapPin,
  Download,
} from "lucide-react";
import resumePdf from "../assets/resume.pdf";

const Resume: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Resume</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            {/* Contact */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Contact</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700 ml-9">
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+9779765645686"
                    className="text-orange-600 hover:text-orange-700"
                  >
                    +977-9765645686
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:gtech2884@gmail.com"
                    className="text-orange-600 hover:text-orange-700"
                  >
                    gtech2884@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> Koteshwor, Kathmandu
                </p>
                <p>
                  <strong>Portfolio:</strong>{" "}
                  <a
                    href="https://grishjoshi.netlify.app/"
                    target="_blank"
                    className="text-orange-600 hover:text-orange-700"
                  >
                    grishjoshi.netlify.app
                  </a>
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
              </div>
              <ul className="text-sm text-gray-700 ml-9 list-disc space-y-1">
                <li>JavaScript (Intermediate)</li>
                <li>SQL (Intermediate)</li>
                <li>Python (Basic)</li>
                <li>C, C++ (Basic)</li>
                <li>React Native, Node.js</li>
                <li>Git, CI/CD, GitHub Actions</li>
                <li>Computer Networks</li>
              </ul>
            </div>

            {/* Projects */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Projects
                </h3>
              </div>
              <ul className="text-sm text-gray-700 ml-9 list-disc space-y-1">
                <li>On-Demand Home Service Mobile App</li>
                <li>Expense Tracker</li>
              </ul>
            </div>

            {/* Download Resume */}
            <div className="flex items-center mt-6 ml-9">
              <Download className="w-5 h-5 text-orange-600 mr-2" />
              <a
                href={resumePdf}
                download
                className="text-sm text-orange-600 hover:text-orange-700 underline"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div>
            {/* Education */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Education
                </h3>
              </div>
              <div className="space-y-4 border-l-2 border-orange-200 pl-4">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Bachelor’s in Computer Engineering
                  </h4>
                  <p className="text-orange-600 text-sm">
                    Paschimanchal College
                  </p>
                  {/* <p className="text-gray-600 text-sm">
                    2021 - 2025 | GPA: 3.65
                  </p> */}
                  <p className="text-gray-700">
                    Member, The Computer Innovation Society
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">+2 Science</h4>
                  <p className="text-orange-600 text-sm">
                    Little Buddha, Mahendranagar
                  </p>
                  {/* <p className="text-gray-600 text-sm">GPA: 3.65</p> */}
                  <p className="text-gray-700">President, Adarsh IT Club</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">SEE</h4>
                  <p className="text-orange-600 text-sm">
                    Adarsh Vidhya Niketan, Mahendranagar
                  </p>
                  {/* <p className="text-gray-600 text-sm">GPA: 3.6</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
