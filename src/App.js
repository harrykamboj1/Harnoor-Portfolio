import React from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
// IntroSection removed in previous step but import remains, cleaning it up
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-background font-sans text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <HeroSection />
        <Skills />
        <WorkExperience />
        <ProjectSection />
        <Footer />
      </main>
      <div className="fixed inset-0 -z-10 h-full w-full bg-background bg-dot-white/[0.1]" />
    </div>
  );
}

export default App;
