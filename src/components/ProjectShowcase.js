// Import React's useState hook for managing selected project state
import { useState } from "react";



import ProjectCard from "./elementAnimations/ProjectCard";
import ProjectModal from "./elementAnimations/ProjectModal";


// Define an array of project objects with details
const projects = [
    {
        id: 1,                                                                  // Unique identifier for mapping
        title: "Interactive Portfolio Design",                                  // Project title
        img: "https://img.freepik.com/free-vector/hand-drawn-portfolio-template_52683-79648.jpg?semt=ais_hybrid", // Image URL
        description: "A dynamic and interactive portfolio using Framer Motion.", // Short description
    },
    {
        id: 2,
        title: "Next-Gen UI Motion Framework",
        img: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169854.jpg", 
        description: "A cutting-edge motion UI framework for smooth animations.",
    },
];

// ProjectShowcase component: displays a gallery of projects with a modal for details
const ProjectShowcase = () => {

    // State to track the selected project for the modal
    const [selectedProject, setSelectedProject] = useState(null);

    return (

        // Section with padding, dark background, and white text
        <div className="py-16 bg-gray-900 text-white">

            {/* Section title */}
            <h2 className="text-3xl font-bold text-center mb-8">Project Showcase</h2>

            {/* Project grid layout with spacing */}
            <div className="flex flex-wrap justify-center gap-8">

                {/* Map - projects array -> ProjectCard for each item */}
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
                ))}

            </div>

            {/* Conditional rendering: Show modal only if a project is selected */}
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} // Close modal on click
                />
            )}
        </div>
    );
};

// Export ProjectShowcase for use in other parts of the application
export default ProjectShowcase;
