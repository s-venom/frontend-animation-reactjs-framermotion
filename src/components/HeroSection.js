// Import motion from Framer Motion for animation capabilities
import { motion } from "framer-motion";


// Import custom animated components for heading, tagline, and CTA button
import AnimatedHeading from "./elementAnimations/AnimatedHeading";
import AnimatedTagline from "./elementAnimations/AnimatedTagline";
import AnimatedCTAbutton from "./elementAnimations/AnimatedCTAbutton";


// Define the HeroSection component
const HeroSection = () => {
    return (
        // Full-screen container with a gradient background and centered content
        <div 
            className="h-screen flex items-center justify-center 
                        bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] 
                        text-white overflow-hidden" 
            data-scroll-container // Attribute for handling scroll-based animations
        >

            {/* Motion wrapper to apply smooth scrolling effects */}
            <motion.div
                data-scroll
                data-scroll-speed="-2"   // Slower scrolling effect for parallax feel
                className="text-center"  // Centers text and elements
            >
                {/* a pull-up animation */}
                <AnimatedHeading text="We Craft Digital Experiences" />

                {/* a fade-up animation */}
                <AnimatedTagline text="Creative, Smooth, and Interactive." />

                {/* a hover effect animation */}
                <AnimatedCTAbutton text="Get Started →" />
            </motion.div>
        </div>
    );
};

// Export the HeroSection component for use in other parts of the application
export default HeroSection;
