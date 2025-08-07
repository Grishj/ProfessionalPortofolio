import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/resume", label: "Resume" },
    // { path: "/teaching", label: "Teaching" },
    { path: "/learning", label: "Learning" },
    // { path: "/research", label: "Research" },
    { path: "/Projects", label: "Projects" },
    // { path: "/dissemination", label: "Dissemination" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <h1 className="text-2xl font-bold text-orange-600 tracking-wide">
                Grish Joshi
              </h1>
              <p className="text-sm text-gray-500 mt-1">Computer Engineer</p>
              <p className="text-sm text-gray-500">Mobile App Developer(React-Native)</p>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-orange-50 ${
                    isActive
                      ? "bg-orange-600 text-white shadow-sm"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu - simplified for this demo */}
          <div className="md:hidden">
            <select
              value={location.pathname}
              onChange={(e) => (window.location.href = e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
            >
              {navItems.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
