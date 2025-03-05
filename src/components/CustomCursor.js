import { useEffect, useState } from "react";

const CustomCursor = () => {
    // State to track the cursor position
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // State to track if the cursor is hovering over a target element
    const [isHovering, setIsHovering] = useState(false);

    // Effect to update cursor position on mouse movement
    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // Add event listener for mouse movement
        window.addEventListener("mousemove", updateCursor);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("mousemove", updateCursor);
    }, []);

    // Effect to track hover state when the cursor enters or leaves specific elements
    useEffect(() => {
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Select all elements with the "hover-target" class
        const hoverTargets = document.querySelectorAll(".hover-target");

        // Attach event listeners to each hover target
        hoverTargets.forEach((target) => {
            target.addEventListener("mouseenter", handleMouseEnter);
            target.addEventListener("mouseleave", handleMouseLeave);
        });

        // Cleanup event listeners on component unmount
        return () => {
            hoverTargets.forEach((target) => {
                target.removeEventListener("mouseenter", handleMouseEnter);
                target.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            className={`fixed flex items-center justify-center transition-all duration-0 ease-out 
                ${isHovering ? "w-24 h-24 z-50 text-white text-sm font-bold mix-blend-normal" : "w-5 h-5 z-10 mix-blend-difference"}
            `}
            style={{
                // Position cursor at the current mouse location
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)", // Center the cursor element
                borderRadius: "50%",                // Make it circular
                backgroundColor: "white",
                pointerEvents: "none",              // Prevents interfering with other elements
            }}
        >
            {/* Show text only when hovering over a target */}
            {isHovering && <span className="text-black font-bold">Display</span>}
        </div>
    );
};

export default CustomCursor;
