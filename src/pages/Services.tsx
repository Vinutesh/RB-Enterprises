import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import projectUrban from "@/assets/project-urban.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectLandmark from "@/assets/project-landmark.jpg";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  {
    title: "Urban Planning",
    description: "We design cities for people. Our urban planning practice creates sustainable, walkable districts that balance density with green space, commercial activity with residential calm. From master plans to streetscape details, we shape places that thrive.",
    image: projectUrban,
  },
  {
    title: "Residential",
    description: "Every home tells a story. Our residential practice spans single-family homes to luxury condominiums, each one tailored to its inhabitants and environment. We believe the best homes feel inevitable—as though they could exist nowhere else.",
    image: projectResidential,
  },
  {
    title: "Commercial",
    description: "The modern workplace demands more than efficiency. Our commercial projects create inspiring environments that attract talent, foster collaboration, and project corporate identity. From boutique offices to mixed-use towers, we build for business.",
    image: projectCommercial,
  },
  {
    title: "Landmarks",
    description: "Cultural buildings carry the weight of public aspiration. Our landmark projects—museums, civic centers, performing arts venues—are designed to inspire wonder and serve as gathering places for communities. They are built to endure.",
    image: projectLandmark,
  },
];

const Services = () => (
  <Layout>
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel>Services</SectionLabel>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tight mt-4">
          What We Do
        </h1>
      </motion.div>
    </section>

    {services.map((service, i) => (
      <section key={service.title} className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <motion.div {...fadeUp} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <SectionLabel>{service.title}</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mt-4 mb-6">{service.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{service.description}</p>
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm uppercase tracking-wide hover:gap-3 transition-all text-foreground">
                View Projects <ArrowRight size={16} />
              </Link>
            </div>
            <div className={`aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">
            Have a Project in Mind?
          </h2>
          <Link
            to="/contact"
            className="inline-block text-sm tracking-wide uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors"
          >
            Let's Talk
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Services;
