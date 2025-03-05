import './App.css';

import CustomCursor from "./components/CustomCursor";
import HeroSection from "./components/HeroSection";
import FeatureSection from './components/FeatureSection';
import ProjectShowcase from './components/ProjectShowcase';
import ScrollingShowcase from './components/ScrollingShowcase';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="bg-black text-white">
      <CustomCursor />
      <HeroSection />
      <FeatureSection />
      <ProjectShowcase />
      <ScrollingShowcase />
      <CTASection />
    </div>
  );
}

export default App;
