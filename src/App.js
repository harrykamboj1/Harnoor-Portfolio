import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[90vh] overflow-x-hidden relative">
        <HeroSection />
        <IntroSection />
      </div>
    </div>
  );
}

export default App;
