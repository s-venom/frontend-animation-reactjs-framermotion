// Import individual floating icon component
import FloatingIcon from "./FloatingIcons"; 


const FloatingIconsContainer = () => {
    // Define an array of colors for the floating icons
    const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6"];

    return (
        <div 
            className="absolute top-100 left-0 w-full h-full z-5"
        >
            {/* Render multiple floating icons */}
            {[...Array(10)].map((_, index) => (
                <FloatingIcon key={index} colors={colors} />
            ))}
            
        </div>
    );
};

export default FloatingIconsContainer;
