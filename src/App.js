import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[90vh] overflow-x-hidden relative">
        <HeroSection />
        <IntroSection />
        <Skills />
        <WorkExperience />
      </div>
    </div>
  );
}

export default App;
