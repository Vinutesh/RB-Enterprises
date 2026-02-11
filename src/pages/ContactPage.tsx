import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PageIntro } from "@/components/site/PageIntro";
import { SeoMeta } from "@/components/site/SeoMeta";

export const ContactPage = () => (
  <>
    <SeoMeta
      title="Contact RB Enterprises | Enquiry & Site Visit"
      description="Contact RB Enterprises for hardware bulk orders and RB Interiors consultation. Site visit is the first lead step."
    />
    <PageIntro
      eyebrow="Contact"
      title="Book a consultation or bulk hardware enquiry"
      description="Share your requirement to trigger a WhatsApp + email lead handoff. We schedule a site visit first."
    />

    <section className="container grid gap-8 pb-20 lg:grid-cols-[1.2fr,0.8fr]">
      <EnquiryForm />
      <aside className="glass-panel p-6 md:p-8">
        <h2 className="text-2xl">Office & Direct Lines</h2>
        <p className="mt-4 text-sm text-muted-foreground">Unit 12, Premium Business Park, Navi Mumbai</p>
        <a href="https://wa.me/919999999999" className="mt-4 block text-sm text-primary">WhatsApp: +91 99999 99999</a>
        <a href="tel:+919999999999" className="mt-2 block text-sm text-primary">Click-to-Call: +91 99999 99999</a>
        <a href="mailto:test@gmail.com" className="mt-2 block text-sm text-primary">Email: test@gmail.com</a>
      </aside>
    </section>
  </>
);
