import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import { projects } from "@/data/projects";

const Projects = () => (
  <Layout>
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel>Portfolio</SectionLabel>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tight mt-4 mb-16">
          The Work That
          <br />
          Defines Us
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link to={`/projects/${project.id}`} className="group block">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold uppercase tracking-wide">{project.title}</h3>
                <span className="font-mono-label text-xs text-muted-foreground">( {project.category} )</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Projects;
