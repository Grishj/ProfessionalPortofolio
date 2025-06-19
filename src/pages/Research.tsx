import React from 'react';
import { FileText, TrendingUp, Award, Users } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Research</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Research Interests</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Software Testing</h4>
                  <p className="text-gray-700 text-sm">
                    Advanced testing methodologies, test automation frameworks, 
                    and quality assurance practices.
                  </p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Web Automation</h4>
                  <p className="text-gray-700 text-sm">
                    Browser automation, cross-platform testing, 
                    and modern web testing tools.
                  </p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Software Engineering</h4>
                  <p className="text-gray-700 text-sm">
                    Development methodologies, software architecture, 
                    and engineering best practices.
                  </p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Open Source</h4>
                  <p className="text-gray-700 text-sm">
                    Community-driven development, tool creation, 
                    and collaborative software projects.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Recent Publications</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-orange-200 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">
                    "Advanced Test Automation Strategies for Modern Web Applications"
                  </h4>
                  <p className="text-gray-600 text-sm">Journal of Software Engineering, 2024</p>
                  <p className="text-gray-700 text-sm mt-1">
                    Comprehensive analysis of current web testing methodologies and their effectiveness.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-200 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">
                    "Selenium Manager: Simplifying WebDriver Management"
                  </h4>
                  <p className="text-gray-600 text-sm">IEEE Software, 2023</p>
                  <p className="text-gray-700 text-sm mt-1">
                    Technical paper introducing Selenium Manager and its impact on test automation.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-200 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">
                    "Cross-Platform Mobile Testing with Automated Tools"
                  </h4>
                  <p className="text-gray-600 text-sm">ACM Computing Surveys, 2023</p>
                  <p className="text-gray-700 text-sm mt-1">
                    Survey of mobile testing approaches and automated testing solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">Research Metrics</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold text-orange-600">55+</p>
                    <p className="text-gray-600 text-sm">Published Papers</p>
                  </div>
                  
                  <div>
                    <p className="text-2xl font-bold text-orange-600">1,200+</p>
                    <p className="text-gray-600 text-sm">Citations</p>
                  </div>
                  
                  <div>
                    <p className="text-2xl font-bold text-orange-600">25+</p>
                    <p className="text-gray-600 text-sm">Conference Presentations</p>
                  </div>
                  
                  <div>
                    <p className="text-2xl font-bold text-orange-600">15+</p>
                    <p className="text-gray-600 text-sm">Open Source Projects</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">Collaborations</h3>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900">Selenium Project</h4>
                    <p className="text-gray-600">Tech Lead & Core Contributor</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">International Conferences</h4>
                    <p className="text-gray-600">Program Committee Member</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Academic Partnerships</h4>
                    <p className="text-gray-600">Research Collaborations</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry Partners</h4>
                    <p className="text-gray-600">Technology Transfer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;