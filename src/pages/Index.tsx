import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import { projects } from "@/data/projects";
import heroImage from "@/assets/hero-architecture.jpg";
import studioTeam from "@/assets/studio-team.jpg";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  { title: "Urban Planning", description: "Designing sustainable districts that harmonize density with livability, creating vibrant communities." },
  { title: "Residential", description: "Crafting bespoke homes that reflect individuality while pushing the boundaries of modern living." },
  { title: "Commercial", description: "Building workspaces that inspire productivity and elevate the corporate experience." },
  { title: "Landmarks", description: "Creating cultural destinations that define skylines and enrich civic life." },
];

const Index = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.95]"
          >
            Crafting Iconic
            <br />
            Spaces With
            <br />
            Purpose
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full aspect-[16/7] overflow-hidden"
        >
          <img src={heroImage} alt="Modern architectural building" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* About snippet */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold uppercase mt-4 tracking-tight">
              Architecture That Speaks
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are a multidisciplinary architecture studio dedicated to creating spaces that transcend the ordinary. Every project begins with a conversation and evolves into a built narrative—one that responds to context, challenges convention, and stands the test of time.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm uppercase tracking-wide hover:gap-3 transition-all text-foreground">
              What We Do <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 border-t border-border">
        <motion.div {...fadeUp}>
          <SectionLabel>Selected Work</SectionLabel>
          <div className="flex items-end justify-between mt-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Featured Projects</h2>
            <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-wide hover:gap-3 transition-all text-muted-foreground hover:text-foreground">
              View All <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
        <Link to="/projects" className="md:hidden mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
          View All Projects <ArrowRight size={16} />
        </Link>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 border-t border-border">
        <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold uppercase mt-4 tracking-tight mb-6">
              Built On Vision,
              <br />
              Driven By Craft
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded with the belief that architecture can transform lives, our studio brings together a diverse team of thinkers, makers, and dreamers who share a commitment to excellence.
            </p>
            <Link to="/studio" className="inline-flex items-center gap-2 text-sm uppercase tracking-wide hover:gap-3 transition-all text-foreground">
              Read Our Story <ArrowRight size={16} />
            </Link>
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={studioTeam} alt="Our team at work" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 border-t border-border">
        <motion.div {...fadeUp}>
          <SectionLabel>Expertise</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold uppercase mt-4 tracking-tight mb-12">What We Do</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border p-6 hover:border-foreground/30 transition-colors"
            >
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 border-t border-border">
        <motion.div {...fadeUp} className="max-w-3xl">
          <SectionLabel>Testimonial</SectionLabel>
          <blockquote className="text-2xl md:text-4xl font-light leading-relaxed mt-6 mb-8">
            "Vertica transformed our vision into something far beyond what we imagined. Their attention to detail and understanding of space is unmatched."
          </blockquote>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">— Sarah Chen, CEO at Meridian Group</p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tight mb-8">
              Transform Your Vision
              <br />
              Into Reality
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
};

export default Index;
