import { PageIntro } from "@/components/site/PageIntro";
import { SeoMeta } from "@/components/site/SeoMeta";

export const ServicesPage = () => (
  <>
    <SeoMeta
      title="Services | Interior + Hardware Consulting"
      description="Detailed service offerings for RB Interiors and RB Enterprises hardware consulting."
    />
    <PageIntro
      eyebrow="Services"
      title="Detailed consulting tracks for interiors and hardware"
      description="Choose service packages based on your project stage, budget alignment, and execution support requirements."
    />

    <section className="container grid gap-6 pb-20 lg:grid-cols-2">
      <article className="glass-panel p-8">
        <h2 className="text-2xl">Interior Consulting</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Concept development and layout planning.</li>
          <li>Material and finish curation with brand options.</li>
          <li>Execution oversight, vendor coordination, and final handover.</li>
        </ul>
      </article>
      <article className="glass-panel p-8">
        <h2 className="text-2xl">Hardware Consulting</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Specification support for architectural and modular hardware.</li>
          <li>Bulk order planning for contractors and builders.</li>
          <li>Brand comparison, lead-time planning, and project logistics.</li>
        </ul>
      </article>
    </section>
  </>
);
