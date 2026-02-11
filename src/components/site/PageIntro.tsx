type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export const PageIntro = ({ eyebrow, title, description }: PageIntroProps) => (
  <section className="page-shell">
    <p className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
    <h1 className="mt-3 text-4xl md:text-5xl">{title}</h1>
    <p className="section-copy max-w-3xl">{description}</p>
  </section>
);
