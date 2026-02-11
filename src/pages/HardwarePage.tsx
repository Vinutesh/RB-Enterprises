import { Link } from "react-router-dom";
import { PageIntro } from "@/components/site/PageIntro";
import { SeoMeta } from "@/components/site/SeoMeta";
import { associatedBrands, hardwareCategories } from "@/data/siteContent";

export const HardwarePage = () => (
  <>
    <SeoMeta
      title="RB Enterprises Hardware | Bulk Categories & Brands"
      description="Explore RB Enterprises hardware categories, associated premium brands, and bulk order support."
    />
    <PageIntro
      eyebrow="RB Enterprises"
      title="Hardware solutions for residential, commercial, and bulk needs"
      description="Category-led sourcing with reliable lead times, brand-backed products, and project-aligned recommendations."
    />

    <section className="container pb-12">
      <h2 className="section-title">Bulk Hardware Categories</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {hardwareCategories.map((category) => (
          <div key={category} className="glass-panel p-5 text-sm">{category}</div>
        ))}
      </div>
    </section>

    <section className="container pb-16">
      <h2 className="section-title">Associated Brands</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {associatedBrands.map((brand) => (
          <div key={brand} className="glass-panel p-5 text-sm">{brand}</div>
        ))}
      </div>
      <Link to="/contact" className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-black">
        Request Hardware Quote
      </Link>
    </section>
  </>
);
