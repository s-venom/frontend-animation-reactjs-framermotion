
import AnimatedContactButton from "./elementAnimations/AnimatedContactButton";
import FloatingIcons from "./elementAnimations/FloatingIconsConatiner"; 

const CTASection = () => {
    return (
        // Full-height section with a gradient background, centered content, and white text
        <div className="flex flex-col items-center justify-center h-[100vh] 
                        bg-gradient-to-b from-gray-900 to-gray-800 
                        text-white text-center px-6">
            

            {/* bold and shadow */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 z-20 shadow-lg">
                Let's Build Something Amazing.
            </h2>


            {/* a pulse and ripple animation */}
            <AnimatedContactButton text="Get in Touch" />
            

            {/* Random Animated Floating icons */}
            <FloatingIcons />
            
        </div>
    );
};

// Export CTASection for use in other components/pages
export default CTASection;
