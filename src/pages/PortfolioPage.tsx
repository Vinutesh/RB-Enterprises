import { useMemo, useState } from "react";
import { PageIntro } from "@/components/site/PageIntro";
import { SeoMeta } from "@/components/site/SeoMeta";
import { portfolioItems, PortfolioCategory } from "@/data/siteContent";

const categories: Array<PortfolioCategory | "All"> = ["All", "Residential", "Commercial", "Hospitality", "Hardware Showcase"];

export const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SeoMeta
        title="Portfolio | RB Enterprises & RB Interiors"
        description="Browse RB Enterprises project portfolio with filtered categories for residential, commercial, hospitality, and hardware showcases."
      />
      <PageIntro
        eyebrow="Portfolio"
        title="Project gallery"
        description="Replace Unsplash placeholders with approved final project imagery as assets become available."
      />

      <section className="container pb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm ${
                activeCategory === category ? "bg-primary text-black" : "border border-white/20 text-foreground/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="container grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <article key={item.id} className="glass-panel overflow-hidden">
            <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs uppercase tracking-wider text-primary">{item.category}</p>
              <h3 className="mt-2 text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              <p className="mt-3 text-xs text-foreground/70">{item.location}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};
