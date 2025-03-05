import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {

    // If no project is selected, return null (modal won't render)
    if (!project) return null;

    return (
        // Modal Background (Backdrop) with fade-in and fade-out animations
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}          // Modal starts fully transparent
            animate={{ opacity: 1 }}          // Modal fades in when triggered
            exit={{ opacity: 0 }}             // Modal fades out when closed
        >
            {/* Modal Content Container with Zoom-in Animation */}
            <motion.div
                className="bg-gray-900 p-6 rounded-lg max-w-lg text-white shadow-lg"
                initial={{ scale: 0.8 }}       // Starts smaller
                animate={{ scale: 1 }}         // Scales to full size
                exit={{ scale: 0.8 }}          // Shrinks back when closed
                transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
            >
                {/* Project Title */}
                <h3 className="text-2xl font-bold">{project.title}</h3>

                {/* Project Description */}
                <p className="mt-2">{project.description}</p>

                {/* Close Button with Hover Effect */}
                <button
                    onClick={onClose}           // Triggers onClose function
                    className="mt-4 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Close
                </button>
            </motion.div>
        </motion.div>
    );
};


export default ProjectModal;
