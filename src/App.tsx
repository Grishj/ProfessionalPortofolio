import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Teaching from "./pages/Teaching";
import Learning from "./pages/Learning";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Dissemination from "./pages/Dissemination";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/research" element={<Research />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/dissemination" element={<Dissemination />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
