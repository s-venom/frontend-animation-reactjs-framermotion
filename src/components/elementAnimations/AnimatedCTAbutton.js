import { motion } from "framer-motion";


// AnimatedCTAButton component: creates a call-to-action button with hover and fade-in effects
const AnimatedCTAButton = ({ text }) => {
    return (

        // div for the gradient border effect
        <motion.div
            className="mt-6 z-20 relative p-[6px] rounded-full inline-block 
                        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ scale: 1, opacity: 0 }} // Start invisible
            animate={{ scale: 1, opacity: 1 }} // Fade in smoothly
            transition={{ delay: 1.5, duration: 1.0, ease: "easeOut" }} // Delayed smooth transition
        >
            {/* Button with animated hover effects */}
            <motion.a
                href="#"
                className="flex items-center justify-center 
                            px-6 py-3 text-lg font-semibold 
                            bg-gray-900 text-white rounded-full 
                            shadow-lg relative z-10"
                whileHover={{
                    backgroundColor: "transparent",                 // Turns background transparent on hover
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)", // Adds a hover shadow effect
                    transition: { duration: 0.3 },                  // Quick response time
                }}
            >
                {text} {/* the button text */}
            </motion.a>
        </motion.div>
    );
};


export default AnimatedCTAButton;
