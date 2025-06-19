import React from 'react';
import { Presentation, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const Dissemination: React.FC = () => {
  const conferences = [
    {
      title: 'SeleniumConf 2024',
      type: 'Keynote',
      location: 'Chicago, USA',
      date: 'October 2024',
      topic: 'The Future of Web Test Automation',
      audience: '500+ attendees'
    },
    {
      title: 'TestCon Europe 2024',
      type: 'Workshop',
      location: 'Vilnius, Lithuania',
      date: 'September 2024',
      topic: 'Advanced Selenium WebDriver Techniques',
      audience: '150+ participants'
    },
    {
      title: 'QA World Conference',
      type: 'Technical Talk',
      location: 'Virtual',
      date: 'June 2024',
      topic: 'Building Resilient Test Automation Frameworks',
      audience: '1000+ viewers'
    },
    {
      title: 'European Testing Conference',
      type: 'Panel Discussion',
      location: 'Valencia, Spain',
      date: 'April 2024',
      topic: 'Open Source Testing Tools: Past, Present & Future',
      audience: '300+ attendees'
    }
  ];

  const mediaFeatures = [
    {
      title: 'Test Automation University',
      type: 'Course Instructor',
      description: 'Created comprehensive courses on Selenium WebDriver and test automation best practices.',
      reach: '50k+ students'
    },
    {
      title: 'Testing Podcast Network',
      type: 'Guest Speaker',
      description: 'Regular appearances discussing latest trends in test automation and open source development.',
      reach: '25k+ downloads per episode'
    },
    {
      title: 'Developer Blog Series',
      type: 'Technical Writer',
      description: 'Weekly articles on software testing, automation frameworks, and development practices.',
      reach: '100k+ monthly readers'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Knowledge Dissemination</h2>
        
        <div className="mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            I actively share knowledge through international conferences, workshops, online courses, 
            and technical publications. My goal is to make test automation and software engineering 
            practices accessible to developers worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center bg-orange-50 rounded-lg p-4">
              <p className="text-2xl font-bold text-orange-600">50+</p>
              <p className="text-sm text-gray-600">Conference Talks</p>
            </div>
            <div className="text-center bg-orange-50 rounded-lg p-4">
              <p className="text-2xl font-bold text-orange-600">25+</p>
              <p className="text-sm text-gray-600">Countries Visited</p>
            </div>
            <div className="text-center bg-orange-50 rounded-lg p-4">
              <p className="text-2xl font-bold text-orange-600">100k+</p>
              <p className="text-sm text-gray-600">People Reached</p>
            </div>
            <div className="text-center bg-orange-50 rounded-lg p-4">
              <p className="text-2xl font-bold text-orange-600">15+</p>
              <p className="text-sm text-gray-600">Online Courses</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Presentation className="w-6 h-6 text-orange-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Recent Conference Presentations</h3>
            </div>
            
            <div className="space-y-4">
              {conferences.map((conf, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{conf.title}</h4>
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                      {conf.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 font-medium text-sm mb-2">{conf.topic}</p>
                  
                  <div className="flex items-center text-gray-600 text-xs space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {conf.date}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {conf.location}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {conf.audience}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="#" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Presentation Slides
              </a>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-orange-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Media & Educational Content</h3>
            </div>
            
            <div className="space-y-6">
              {mediaFeatures.map((media, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{media.title}</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {media.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {media.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">
                      <Users className="w-3 h-3 inline mr-1" />
                      {media.reach}
                    </span>
                    <a href="#" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-orange-50 rounded-lg p-6 border-l-4 border-orange-400">
              <h4 className="font-semibold text-gray-900 mb-2">Speaking Opportunities</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                I'm available for conference keynotes, technical workshops, and educational seminars. 
                Topics include test automation, software engineering, and open source development.
              </p>
              <a 
                href="mailto:boni.garcia@uc3m.es" 
                className="inline-flex items-center bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700 transition-colors duration-200"
              >
                Contact for Speaking
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dissemination;