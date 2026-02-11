import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectLandmark from "@/assets/project-landmark.jpg";
import projectUrban from "@/assets/project-urban.jpg";
import projectInterior from "@/assets/project-interior.jpg";
import projectWaterfront from "@/assets/project-waterfront.jpg";
import heroArchitecture from "@/assets/hero-architecture.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery: string[];
  year: string;
  location: string;
}

export const projects: Project[] = [
  {
    id: "horizon-residence",
    title: "Horizon Residence",
    category: "RESIDENTIAL",
    description: "A luxury hillside home that seamlessly merges indoor and outdoor living. Floor-to-ceiling windows frame panoramic views while cantilevered volumes create dramatic overhangs and sheltered terraces. Natural materials ground the structure in its landscape.",
    image: projectResidential,
    gallery: [projectResidential, projectInterior],
    year: "2024",
    location: "Malibu, California",
  },
  {
    id: "vertex-tower",
    title: "Vertex Tower",
    category: "COMMERCIAL",
    description: "A 42-story mixed-use tower that redefines the city skyline. The faceted glass curtain wall reflects the urban context while optimizing natural light and energy performance. Ground-level retail activates the streetscape.",
    image: projectCommercial,
    gallery: [projectCommercial, heroArchitecture],
    year: "2023",
    location: "Chicago, Illinois",
  },
  {
    id: "cultural-nexus",
    title: "Cultural Nexus",
    category: "LANDMARK",
    description: "A civic cultural center whose angular concrete forms create a striking sculptural presence. Interior galleries flow through interconnected volumes of varying scale, from intimate chambers to grand exhibition halls.",
    image: projectLandmark,
    gallery: [projectLandmark, projectInterior],
    year: "2023",
    location: "Berlin, Germany",
  },
  {
    id: "green-quarter",
    title: "Green Quarter",
    category: "URBAN PLANNING",
    description: "A masterplanned sustainable district integrating residential towers with lush public gardens and pedestrian corridors. Green roofs and vertical gardens blur the boundary between architecture and nature.",
    image: projectUrban,
    gallery: [projectUrban, projectWaterfront],
    year: "2024",
    location: "Singapore",
  },
  {
    id: "maritime-hub",
    title: "Maritime Hub",
    category: "COMMERCIAL",
    description: "A waterfront office complex that draws inspiration from nautical forms. The transparent facade creates a lantern effect at dusk, while the ground-level promenade connects the city to its harbor.",
    image: projectWaterfront,
    gallery: [projectWaterfront, projectCommercial],
    year: "2022",
    location: "Copenhagen, Denmark",
  },
  {
    id: "light-pavilion",
    title: "Light Pavilion",
    category: "LANDMARK",
    description: "A meditation pavilion where light itself becomes the primary material. Precise apertures in the concrete shell create shifting patterns throughout the day, transforming the interior experience with each passing hour.",
    image: projectInterior,
    gallery: [projectInterior, heroArchitecture],
    year: "2024",
    location: "Kyoto, Japan",
  },
];
