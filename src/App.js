import React, { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const primaryPurple = "#8B5CF6"; // Assuming this is your project's primary purple color

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-600 to-indigo-600">
        <ScaleLoader
          color={primaryPurple}
          height={60}
          width={10}
          radius={6}
          margin={4}
        />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="w-full h-full overflow-x-hidden relative">
        <HeroSection />
        <IntroSection />
        <Skills />
        <WorkExperience />
        <ProjectSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
