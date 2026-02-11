import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold uppercase mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full aspect-[16/7] overflow-hidden"
      >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </motion.div>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft size={16} /> All Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionLabel>{project.category}</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mt-4 mb-8">{project.title}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
            <div className="flex flex-col gap-4 border-l border-border pl-6">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">Year</span>
                <p className="font-semibold">{project.year}</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">Location</span>
                <p className="font-semibold">{project.location}</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">Category</span>
                <p className="font-semibold">{project.category}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img src={img} alt={`${project.title} gallery ${i + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
