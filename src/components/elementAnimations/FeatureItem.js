import { motion } from "framer-motion";


// FeatureItem component: displays image, text, and animations
const FeatureItem = ({ text, img, direction }) => {
    return (

        // div for feature layout and entrance animation
        <motion.div
            className={`flex flex-col md:flex-row items-center gap-6 mb-16 ${
                direction === "left" ? "md:flex-row-reverse" : ""          // Reverse layout for "left" direction
            }`}
            initial={{ opacity: 0, x: direction === "left" ? 100 : -100 }} // Slide-in effect
            whileInView={{ opacity: 1, x: 0 }}                             // Reveal when in view
            transition={{ duration: 0.8, ease: "easeOut" }}                // Smooth transition
            viewport={{ once: true }}                                      // Animates only once when in viewport
        >
            {/* Image Wrapper with Overflow Hidden */}
            <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg">
                {/* Feature Image */}
                <img 
                    src={img} 
                    alt="Feature" 
                    className="w-full h-auto rounded-lg shadow-lg"
                />

                {/* Shine Effect - Moves across the image infinitely */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r 
                                from-transparent via-white/30 to-transparent rounded-lg"
                    initial={{ x: "-100%" }}  // Starts outside the left side
                    animate={{ x: "100%" }}   // Moves across to the right
                    transition={{
                        duration: 2,          // Time taken for one full movement
                        repeat: Infinity,     // Loops infinitely
                        repeatType: "loop",
                        ease: "linear",       // Moves at a constant speed
                    }}
                    style={{ clipPath: "inset(0 0 0 0)" }} // Keeps the shine effect within bounds
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                {/* Animated Heading */}
                <motion.h3
                    className="text-2xl font-semibold text-white"
                    initial={{ opacity: 0, y: 20 }}            // Starts slightly below
                    whileInView={{ opacity: 1, y: 0 }}         // Moves into place
                    transition={{ delay: 0.3, duration: 0.8 }} // Delayed fade-in effect
                >
                    {text} {/* feature text */}
                </motion.h3>
            </div>
        </motion.div>
    );
};

// Export FeatureItem for use in FeatureSection
export default FeatureItem;
