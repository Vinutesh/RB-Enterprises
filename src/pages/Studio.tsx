import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import studioTeam from "@/assets/studio-team.jpg";
import heroImage from "@/assets/hero-architecture.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const values = [
  { title: "Context First", description: "Every project begins with a deep understanding of its place—the culture, climate, and community it serves." },
  { title: "Material Honesty", description: "We celebrate the inherent beauty of materials, letting them age gracefully and tell a story of their own." },
  { title: "Sustainable Vision", description: "Environmental responsibility is woven into every decision, from site selection to material sourcing." },
  { title: "Human Scale", description: "Architecture exists for people. We design spaces that feel intuitive, comfortable, and deeply personal." },
];

const Studio = () => (
  <Layout>
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel>Our Studio</SectionLabel>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tight mt-4">
          The Vision
          <br />
          That Drives Us
        </h1>
      </motion.div>
    </section>

    <motion.div {...fadeUp} className="w-full aspect-[16/7] overflow-hidden">
      <img src={studioTeam} alt="Our studio team" className="w-full h-full object-cover" />
    </motion.div>

    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Our Philosophy</h2>
        </div>
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vertica was founded on the conviction that architecture is more than shelter—it's a catalyst for human experience. We approach every project as an opportunity to create something meaningful, something that resonates with the people who inhabit it.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our multidisciplinary team brings together architects, urban designers, landscape architects, and sustainability consultants who collaborate from day one. This integrated approach ensures that every project benefits from diverse perspectives and deep expertise.
          </p>
        </div>
      </motion.div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 border-t border-border">
      <motion.div {...fadeUp}>
        <SectionLabel>Principles</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mt-4 mb-12">What We Believe</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border border-border p-8 hover:border-foreground/30 transition-colors"
          >
            <h3 className="text-xl font-semibold uppercase tracking-wide mb-3">{v.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{v.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <div className="w-full aspect-[16/7] overflow-hidden">
      <img src={heroImage} alt="Our work" className="w-full h-full object-cover" />
    </div>
  </Layout>
);

export default Studio;
