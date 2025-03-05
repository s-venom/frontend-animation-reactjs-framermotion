// Import motion from Framer Motion for animations
import { motion } from "framer-motion";


// AnimatedHeading component: animates each word separately for a pull-up effect
const AnimatedHeading = ({ text }) => {

    // Variants object to define animation states for each word
    //invisble -> visble - direction_up - for single word 
    const wordVariants = {
        hidden: { 
            opacity: 0,   // Start compleely invisible
            y: 50,       // Start lower on the Y-axis
            scale: 0.8, // Slightly shrunk
        },
        visible: (i) => ({
            opacity: 1, // Fully visible
            y: 0,      // Moves to normal position
            scale: 1, // Restores original size
            transition: { 
                delay: i * 0.15,   // Staggered animation effect
                duration: 0.5,    // Animation duration
                ease: "easeOut", // Smooth easing
            },
        }),
    };

    return (
        // Motion-enabled heading with fade-in and staggered word animation
        <motion.h1
            className="text-5xl md:text-6xl font-bold text-white uppercase leading-tight"
            initial="hidden"   // Initial animation state
            animate="visible" // Target animation state
        >
            {/* Split text into words and animate each one separately */}
            {text.split(" ").map((word, index) => (
                <motion.span
                    key={index}
                    custom={index}                  // Custom index for staggered delay
                    variants={wordVariants}        // Apply animation variants
                    className="inline-block mr-2" // Keeps words inline with spacing
                >
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
};

// Export AnimatedHeading for use in other components
export default AnimatedHeading;
