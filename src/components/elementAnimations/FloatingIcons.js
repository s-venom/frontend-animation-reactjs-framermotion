import { motion } from "framer-motion";
import { useState } from "react";

const FloatingIcons = ({ colors }) => {
    // Generate random values for each icon when the component mounts
    const [randomValues] = useState({
        top: `${Math.random() * 80}vh`,        // vertical position (0-80% of viewport height)
        left: `${Math.random() * 80}vw`,       // horizontal position (0-80% of viewport width)
        size: `${Math.random() * 40 + 20}px`,  // size between 20px and 60px
        duration: Math.random() * 3 + 2,       // animation duration (2s to 5s)
        delay: Math.random() * 2,              // animation delay (0s to 2s)
        color: colors[Math.floor(Math.random() * colors.length)] // Randomly select a color
    });

    return (
        <motion.div
            className="absolute rounded-full opacity-70"
            style={{
                top: randomValues.top,
                left: randomValues.left,
                width: randomValues.size,
                height: randomValues.size,
                backgroundColor: randomValues.color
            }}
            animate={{ y: [0, 20, 0] }} // Floating animation (moves up & down)
            transition={{
                duration: randomValues.duration, // Random duration for each icon
                repeat: Infinity,                // Infinite loop for continuous animation
                repeatType: "reverse",           // Moves back and forth instead of resetting
                ease: "easeInOut",               // Smooth easing effect
                delay: randomValues.delay        // Delays start of animation for randomness
            }}
        />
    );
};

export default FloatingIcons;
