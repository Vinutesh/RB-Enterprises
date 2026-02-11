import { PageIntro } from "@/components/site/PageIntro";
import { SeoMeta } from "@/components/site/SeoMeta";

const timeline = [
  "2008 · RB Enterprises established for premium hardware sourcing",
  "2014 · Expanded into project-level consulting for builders and studios",
  "2019 · RB Interiors launched for turnkey interior delivery",
  "2024 · Unified brand ecosystem for hardware + interiors",
];

export const StudioPage = () => (
  <>
    <SeoMeta
      title="Studio | Team, Story & Philosophy"
      description="Meet the RB Enterprises and RB Interiors team, philosophy, and company evolution timeline."
    />
    <PageIntro
      eyebrow="Studio"
      title="People, philosophy, and brand journey"
      description="A collaborative studio blending technical category knowledge and design empathy for premium outcomes."
    />

    <section className="container grid gap-6 pb-12 lg:grid-cols-2">
      <article className="glass-panel p-8">
        <h2 className="text-2xl">Team Placeholder</h2>
        <p className="section-copy">Replace this area with founder profiles, design leads, and procurement specialists.</p>
      </article>
      <article className="glass-panel p-8">
        <h2 className="text-2xl">Brand Philosophy</h2>
        <p className="section-copy">We believe premium projects succeed when design intent and execution intelligence stay tightly aligned.</p>
      </article>
    </section>

    <section className="container pb-20">
      <h2 className="section-title">Timeline</h2>
      <div className="mt-6 space-y-3">
        {timeline.map((item) => (
          <div key={item} className="glass-panel p-4 text-sm text-muted-foreground">{item}</div>
        ))}
      </div>
    </section>
  </>
);
