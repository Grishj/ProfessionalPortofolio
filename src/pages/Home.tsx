import React from "react";
import { Mail, MapPin, Building } from "lucide-react";
import profileImg from "../assets/profile.jpg";
const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-shrink-0">
                <img
                  src={profileImg}
                  alt="Grish Joshi"
                  className="w-48 h-60 object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed mb-4">
                  I'm <strong>Grish Joshi</strong>, a passionate full-stack
                  mobile app developer and QA automation enthusiast. I build
                  modern, scalable applications using{" "}
                  <strong>React Native</strong>, <strong>Node.js</strong>, and{" "}
                  <strong>PostgreSQL</strong>, while also ensuring code
                  reliability through{" "}
                  <strong>automated testing in Java with Selenium</strong>.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  I strongly believe in learning by doing. Whether it’s
                  developing real-world apps like quiz platforms, expense
                  trackers, or service booking systems, or designing full QA
                  pipelines, I aim to create meaningful, production-ready
                  solutions.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  I am currently sharpening my knowledge in{" "}
                  <strong>Python</strong> and{" "}
                  <strong>Data Structures & Algorithms</strong> to improve my
                  problem-solving and backend logic design. I also regularly
                  work on <strong>end-to-end testing projects</strong> and share
                  insights with the developer and QA community.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  My goal is to merge development and testing to deliver
                  high-quality user experiences — and I'm always eager to
                  collaborate on exciting new projects!
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Freelance Developer
                    </p>
                    <p className="text-sm text-gray-600">
                      Remote / Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <a
                    href="mailto:your.email@example.com" // Update this to your actual email
                    className="text-sm text-orange-600 hover:text-orange-700 underline"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
