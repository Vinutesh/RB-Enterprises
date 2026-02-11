import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg text-primary">RB Enterprises</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Premium hardware sourcing and interior consulting with site-visit-first lead qualification.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-foreground/80">Sitemap</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/about" className="gold-link">About</Link>
            <Link to="/rb-enterprises" className="gold-link">RB Enterprises</Link>
            <Link to="/rb-interiors" className="gold-link">RB Interiors</Link>
            <Link to="/portfolio" className="gold-link">Portfolio</Link>
            <Link to="/services" className="gold-link">Services</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-foreground/80">Contact</h4>
          <p className="mt-3 text-sm text-muted-foreground">+91 99999 99999</p>
          <p className="text-sm text-muted-foreground">test@gmail.com</p>
          <p className="text-sm text-muted-foreground">Unit 12, Premium Business Park, Navi Mumbai</p>
          <div className="mt-4 flex gap-4 text-xs text-muted-foreground"><span>Privacy Policy</span><span>•</span><span>Terms & Conditions</span></div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RB Enterprises. All rights reserved.
      </div>
    </footer>
  );
};
