import { motion } from "framer-motion";
import { useState } from "react";


const AnimatedContactButton = ({ text }) => {
    // State to track ripple effects
    const [ripple, setRipple] = useState([]);

    // Function to create a ripple effect on button click
    const createRipple = (e) => {
        const { clientX, clientY, target } = e;
        const rect = target.getBoundingClientRect();
        
        // Calculate the x, y position of the ripple relative to the button
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        // Add new ripple effect to the array
        setRipple([...ripple, { x, y, id: Date.now() }]);

        // Remove the ripple after animation completes (600ms)
        setTimeout(() => {
            setRipple((prev) => prev.filter((r) => r.id !== Date.now()));
        }, 600);
    };

    return (
        <motion.button
            // Initial animation when the button comes into view
            whileInView={{
                createRipple, // Trigger the ripple effect
                scale: 1.5,
                y: -4,
                boxShadow: "0px 0px 25px rgba(0, 204, 255, 0.5)",          // Glowing shadow effect
                background: "linear-gradient(135deg, #00c3ff, #0066ff)", // Gradient color
            }}
            whileTap={{ scale: 0.95 }} // Scale effect when tapped
            animate={{
                // Continuous pulsing shadow effect for a glowing look
                boxShadow: [
                    "0px 0px 10px rgba(0, 204, 255, 0.2)", 
                    "0px 0px 20px rgba(0, 204, 255, 0.5)"
                ],
            }}
            transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse", // Alternates between two shadow intensities
            }} 
            className="relative overflow-hidden mt-6 px-8 py-4 z-20 
                text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 
                transition-all duration-300 focus:outline-none"
            onClick={createRipple}     // Attach the ripple effect to button click
        >
            {text}

            {/* Render ripples dynamically */}
            {ripple.map((r) => (
                <span
                    key={r.id}
                    className="absolute bg-white/30 rounded-full animate-ripple"
                    style={{
                        left: r.x,
                        top: r.y,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}
        </motion.button>
    );
};


export default AnimatedContactButton;
