import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[90vh] overflow-x-hidden relative">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
