import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

function App() {
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
