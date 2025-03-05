import { motion } from "framer-motion";


// AnimatedTagline component: animates a tagline with a smooth fade-up effect
const AnimatedTagline = ({ text }) => {
    return (

        // Motion-enabled paragraph with fade-in and upward motion
        <motion.p
            className="mt-4 text-lg opacity-70"                       // Styling for subtle emphasis
            initial={{ opacity: 0, y: 20 }}                           // Start invisible and slightly lower
            animate={{ opacity: 1, y: 0 }}                            // Fade in and move up to normal position
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }} // Smooth transition
        >
            {text} {/* the provided tagline text */}
        </motion.p>
    );
};


export default AnimatedTagline;
