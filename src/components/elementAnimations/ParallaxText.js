import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";

// Function to wrap motion value within a defined range to prevent overflow
const wrapValue = (min, max, value) => {
    const range = max - min;
    return ((value - min) % range + range) % range + min;
};

// ParallaxText Component: Creates a smooth scrolling text effect
const ParallaxText = ({ text, baseVelocity = 100 }) => {
    // Base motion value for controlling horizontal position
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll(); // Track vertical scroll position

    // Calculate scroll velocity and smooth it out to prevent abrupt jumps
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

    // Transform velocity to a usable animation factor
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

    const directionFactor = useRef(1); // Controls left/right movement

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // Reverse direction based on velocity
        if (velocityFactor.get() < 0) directionFactor.current = -1;
        else if (velocityFactor.get() > 0) directionFactor.current = 1;

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        // Update motion value while keeping it within bounds
        baseX.set(baseX.get() + moveBy);
    });

    // Adjust x transformation to prevent overflow
    const x = useTransform(baseX, (v) => `${wrapValue(-50, 0, v)}%`);

    return (
        // Wrapper div with constrained width and hidden overflow
        <div className="overflow-hidden w-screen whitespace-nowrap flex">
            {/* Motion-enabled text container with smooth horizontal movement */}
            <motion.div
                className="scroller flex gap-8 text-5xl md:text-7xl font-bold uppercase text-white"
                style={{ x, minWidth: "100vw" }} // Constrain width to prevent excessive overflow
            >
                {/* Duplicate text multiple times for a seamless effect */}
                {[...Array(4)].map((_, index) => (
                    <span key={index}>{text}</span>
                ))}
            </motion.div>
        </div>
    );
};

export default ParallaxText;
