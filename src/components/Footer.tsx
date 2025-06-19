import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Grishj/" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    // { icon: Globe, label: 'Google Scholar', href: '#' },
    // { icon: BookOpen, label: 'ORCID', href: '#' },
    // { icon: Globe, label: 'Web of Science', href: '#' },
    //{ icon: Users, label: 'Scopus', href: '#' },
    // { icon: Zap, label: 'ResearchGate', href: '#' },
    // { icon: Users, label: 'StackOverflow', href: '#' },
    // { icon: Share2, label: 'SlideShare', href: '#' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-400">
            Copyright © 2025 Grish Joshi. All Rights Reserved.
          </p>
        </div>

        <div className="flex justify-center space-x-6 flex-wrap">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon size={16} />
              <span className="text-sm hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
