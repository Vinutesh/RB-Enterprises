import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold tracking-wider uppercase mb-4">Vertica</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Crafting iconic spaces that inspire, endure, and transform the way people experience the built environment.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-wider uppercase mb-4">Navigation</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Our Projects", href: "/projects" },
              { label: "Our Studio", href: "/studio" },
              { label: "What We Do", href: "/services" },
              { label: "Let's Talk", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-wider uppercase mb-4">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>hello@vertica.studio</span>
            <span>+1 (555) 000-0000</span>
            <span>New York, NY</span>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vertica Studio. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
