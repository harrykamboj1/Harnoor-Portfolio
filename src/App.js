import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[90vh] overflow-x-hidden relative">
        <HeroSection />
        <IntroSection />
        <Skills />
      </div>
    </div>
  );
}

export default App;
