import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/data/siteContent";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divisionOpen, setDivisionOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-wide text-primary">RB</span>
          <span className="text-sm uppercase tracking-[0.25em] text-foreground/80">Enterprises</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) =>
            link.label === "RB Enterprises" ? (
              <div key={link.path} className="relative">
                <button
                  className="flex items-center gap-1 text-sm text-foreground/80 hover:text-primary"
                  onClick={() => setDivisionOpen((prev) => !prev)}
                >
                  Divisions <ChevronDown className="h-4 w-4" />
                </button>
                {divisionOpen && (
                  <div className="glass-panel absolute right-0 mt-3 w-64 p-3">
                    <NavLink to="/rb-enterprises" className="block rounded-md px-3 py-2 text-sm hover:bg-white/5">
                      RB Enterprises (Hardware)
                    </NavLink>
                    <NavLink to="/rb-interiors" className="mt-2 block rounded-md px-3 py-2 text-sm hover:bg-white/5">
                      RB Interiors (Services)
                    </NavLink>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"}`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <button className="lg:hidden" onClick={() => setMobileOpen((prev) => !prev)} aria-label="Toggle navigation menu">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-black px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm ${isActive ? "bg-white/10 text-primary" : "text-foreground/85 hover:bg-white/5"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
