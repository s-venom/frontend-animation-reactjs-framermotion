
import ParallaxText from "./elementAnimations/ParallaxText";

const ScrollingShowcase = () => {
  return (
    // Section with a fixed height, centered content, and dark background
    <div className="h-[50vh] flex flex-col justify-center items-center bg-gray-900 scrolling-font">
      
      {/* Parallax scrolling text moving in opposite directions */}
      <ParallaxText text="• Framer Motion is Smooth • Scrolling" baseVelocity={-4} />
      <ParallaxText text="• Scroll Velocity-Based Interactions • Scrolling" baseVelocity={4} />
      
    </div>
  );
};

// Export ScrollingShowcase for use in other components/pages
export default ScrollingShowcase;
