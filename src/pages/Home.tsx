import React from "react";
import { Mail, MapPin, Building } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-shrink-0">
                <img
                  src={profileImg}
                  alt="Grish Joshi - React Native Developer"
                  className="w-48 h-60 object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="flex-1">
                {/* Introduction */}
                <section className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I'm <strong>Grish Joshi</strong>, a passionate React Native
                    developer specializing in cross-platform mobile
                    applications. I create seamless iOS and Android experiences
                    using <strong>React Native</strong>, <strong>Expo</strong>,
                    and <strong>TypeScript</strong>, with backend solutions
                    powered by <strong>Node.js</strong> and{" "}
                    <strong>PostgreSQL</strong>.
                  </p>
                </section>

                {/* Technical Expertise */}
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Technical Expertise
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    My expertise spans the entire mobile development lifecycle -
                    from UI/UX design with <strong>React Navigation</strong> and{" "}
                    <strong>Styled Components</strong> to state management with{" "}
                    <strong>Redux Toolkit</strong> and{" "}
                    <strong>Context API</strong>. I'm proficient in native
                    module integration, push notifications, offline storage, and
                    app store deployment for both platforms.
                  </p>
                </section>

                {/* Philosophy & Portfolio */}
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Development Philosophy
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I believe in building production-ready mobile apps that
                    users love. My portfolio includes quiz platforms, expense
                    tracking apps, service booking systems, and e-commerce
                    solutions - all optimized for performance and user
                    engagement.
                  </p>
                </section>

                {/* Current Learning */}
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Currently expanding my skillset in <strong>Python</strong>{" "}
                    for backend integrations and diving deeper into{" "}
                    <strong>Data Structures & Algorithms</strong> to write more
                    efficient mobile applications. I'm also exploring{" "}
                    <strong>React Native's New Architecture</strong> and{" "}
                    <strong>Fabric</strong> renderer.
                  </p>
                </section>

                {/* Call to Action */}
                <section>
                  <p className="text-gray-700 leading-relaxed">
                    I'm passionate about creating mobile experiences that make a
                    difference and am always excited to collaborate on
                    innovative mobile projects. Let's build something amazing
                    together!
                  </p>
                </section>
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building
                    className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      React Native Developer
                    </p>
                    <p className="text-sm text-gray-600">
                      Freelance / Remote / Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin
                    className="w-5 h-5 text-orange-600 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm text-gray-600">Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail
                    className="w-5 h-5 text-orange-600 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:joshigrish058@gmail.com"
                    className="text-sm text-orange-600 hover:text-orange-700 underline transition-colors"
                    aria-label="Send email to Grish Joshi"
                  >
                    joshigrish058@gmail.com
                  </a>
                </div>
              </div>

              {/* Optional: Add social links or additional info */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Available for freelance projects
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Home;
