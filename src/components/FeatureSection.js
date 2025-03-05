
import FeatureItem from "./elementAnimations/FeatureItem";


// Define an array of feature objects
const features = [
    {
        id: 1,                                       // Unique identifier for mapping
        text: "We design seamless UI interactions.", // Feature description
        img: "https://st4.depositphotos.com/35744580/40428/i/450/depositphotos_404282100-stock-photo-feature-word-made-with-building.jpg", // Image URL
        direction: "left",                           // Direction of animation (assumed to be handled in FeatureItem)
    },
    {
        id: 2,
        text: "Our animations are smooth & engaging.",
        img: "https://media.gettyimages.com/id/1952340627/video/smooth-wave-motion-of-colored-fabric-stripes-with-trendy-neon-color-gradient-and-depth-of.jpg?s=640x640&k=20&c=qbPZaBTW_DnhQtEGkUzQfJ_pEOEyPPaCPU0_fOWR5Us=", 
        direction: "right",
    },
];

// FeatureSection component: displays a list of animated feature items
const FeatureSection = () => {
    return (

        // Section with padding, dark background, and white text
        <div className="py-16 bg-gray-900 text-white">

            <div className="container mx-auto px-6">

                {/* Map - features array -> FeatureItem for each item */}
                {features.map((feature) => (
                    <FeatureItem key={feature.id} {...feature} />
                ))}

            </div>
        </div>
    );
};

// Export FeatureSection for use in other components/pages
export default FeatureSection;
