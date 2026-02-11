import { Link } from "react-router-dom";
import { PageIntro } from "@/components/site/PageIntro";
import { SeoMeta } from "@/components/site/SeoMeta";
import { associatedBrands, heroStats, testimonialsPlaceholder } from "@/data/siteContent";

export const HomePage = () => {
  return (
    <>
      <SeoMeta
        title="RB Enterprises | Premium Hardware & Interiors"
        description="RB Enterprises delivers premium hardware sourcing and interior consulting with site-visit-first project planning."
      />
      <section className="page-shell grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Premium Architectural Solutions</p>
          <h1 className="mt-4 text-5xl md:text-6xl">Crafting spaces through precision hardware and interior expertise.</h1>
          <p className="section-copy max-w-2xl">
            RB Enterprises and RB Interiors collaborate to deliver reliable sourcing, design direction, and execution support for
            homeowners, architects, and developers.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-black">
              Enquire for Hardware / Bulk Orders
            </Link>
            <Link to="/services" className="rounded-lg border border-white/20 px-6 py-3 text-center text-sm font-semibold">
              Get Interior Consultation
            </Link>
          </div>
        </div>
        <div className="glass-panel p-6">
          <img
            src="https://images.unsplash.com/photo-1465800872432-6a6cd0d232f4?auto=format&fit=crop&w=1200&q=80"
            alt="Premium architectural interior"
            className="h-80 w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="container grid gap-4 pb-16 md:grid-cols-4">
        {heroStats.map((stat) => (
          <div key={stat.label} className="glass-panel p-5">
            <p className="text-2xl font-semibold text-primary">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </section>

      <PageIntro
        eyebrow="Why Choose RB"
        title="Enterprise reliability with design-led execution"
        description="From hardware procurement to full interior rollouts, our team integrates planning, quality checks, and delivery transparency at each stage."
      />

      <section className="container grid gap-4 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {associatedBrands.map((brand) => (
          <div key={brand} className="glass-panel p-5 text-sm text-foreground/90">
            Trusted Brand Placeholder: {brand}
          </div>
        ))}
      </section>

      <section className="container pb-20">
        <h2 className="section-title">Testimonials Placeholder</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {testimonialsPlaceholder.map((testimonial) => (
            <article key={testimonial.name} className="glass-panel p-6">
              <p className="text-sm text-muted-foreground">{testimonial.text}</p>
              <p className="mt-4 text-sm text-primary">— {testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
