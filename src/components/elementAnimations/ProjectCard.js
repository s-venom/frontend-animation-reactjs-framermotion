import { motion } from "framer-motion";


const ProjectCard = ({ project, onClick }) => {
    return (
        // div as a clickable project card with hover & tap animations
        <motion.div
            className="hover-target relative w-72 h-96 bg-gray-800 rounded-lg 
                        overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 1 }}   // Slight scaling & rotation on hover
            whileTap={{ scale: 0.98 }}                // Shrinks slightly when clicked
            onClick={() => onClick(project)}          // Calls the onClick function with project data
        >

            {/* Hover Effect: Subtle overlay that appears when hovered */}
            <motion.div
                className="absolute inset-0 bg-white/10 opacity-0"
                whileHover={{ opacity: 0.2 }}          // Lightens on hover for a glow effect
            />

            {/* Project Image */}
            <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover" // Ensures the image covers the card
            />

            {/* Title Overlay: Appears at the bottom with a semi-transparent background */}
            <div className="absolute bottom-0 w-full bg-black/60 p-4 text-center">
                <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>

        </motion.div>
    );
};


export default ProjectCard;
