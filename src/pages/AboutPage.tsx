import { PageIntro } from "@/components/site/PageIntro";
import { SeoMeta } from "@/components/site/SeoMeta";

export const AboutPage = () => (
  <>
    <SeoMeta
      title="About RB Enterprises | Mission & Story"
      description="Learn RB Enterprises mission, story, and commitment to premium hardware and interior excellence."
    />
    <PageIntro
      eyebrow="About"
      title="Built on trust, precision, and long-term partnerships"
      description="RB Enterprises began as a dedicated hardware sourcing partner and evolved into a dual-brand ecosystem with RB Interiors to deliver complete, high-quality project support."
    />
    <section className="container grid gap-8 pb-20 md:grid-cols-2">
      <article className="glass-panel p-8">
        <h2 className="text-2xl">Our Story</h2>
        <p className="section-copy">
          We work with homeowners, architects, and builders to simplify decisions around materials, fittings, and execution by combining category expertise and practical implementation.
        </p>
      </article>
      <article className="glass-panel p-8">
        <h2 className="text-2xl">Our Mission</h2>
        <p className="section-copy">
          To create durable, inspiring spaces through transparent consultation, dependable procurement, and site-aware planning.
        </p>
      </article>
    </section>
  </>
);
