import { Link } from "react-router-dom";
import { PageIntro } from "@/components/site/PageIntro";
import { SeoMeta } from "@/components/site/SeoMeta";
import { interiorsServices, processSteps } from "@/data/siteContent";

export const InteriorsPage = () => (
  <>
    <SeoMeta
      title="RB Interiors | Services & Portfolio"
      description="Discover RB Interiors services, project process, and consultation-first interior execution model."
    />
    <PageIntro
      eyebrow="RB Interiors"
      title="Design-forward interiors delivered through practical execution"
      description="From concept to completion, our interior division combines aesthetics, function, and procurement intelligence."
    />

    <section className="container pb-12">
      <h2 className="section-title">Service Overview</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {interiorsServices.map((service) => (
          <div key={service} className="glass-panel p-5 text-sm">{service}</div>
        ))}
      </div>
    </section>

    <section className="container pb-16">
      <h2 className="section-title">Our Process</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {processSteps.map((step) => (
          <article key={step.title} className="glass-panel p-6">
            <h3 className="text-xl">{step.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
          </article>
        ))}
      </div>
      <Link to="/portfolio" className="mt-8 inline-block rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold">
        View Portfolio
      </Link>
    </section>
  </>
);
