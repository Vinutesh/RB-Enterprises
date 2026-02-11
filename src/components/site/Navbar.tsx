import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/data/siteContent";

// ✅ Logo import (works in Vite)
import logo from "../../assets/logo.png";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divisionOpen, setDivisionOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        {/* ✅ LOGO + BRAND */}
        <Link to="/" className="flex items-center gap-3">
          {/* Premium logo container */}
          <div className="h-11 w-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
            <img
              src={logo}
              alt="RB Enterprises Logo"
              className="h-9 w-9 object-contain"
              draggable={false}
            />
          </div>

          <div className="leading-tight">
            <div className="text-sm uppercase tracking-[0.25em] text-foreground/80">
              RB Enterprises
            </div>
            <div className="text-[11px] uppercase tracking-widest text-foreground/50">
              Hardware • Interiors
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) =>
            link.label === "RB Enterprises" ? (
              <div key={link.path} className="relative">
                <button
                  className="flex items-center gap-1 text-sm text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setDivisionOpen((prev) => !prev)}
                >
                  Divisions <ChevronDown className="h-4 w-4" />
                </button>

                {divisionOpen && (
                  <div className="glass-panel absolute right-0 mt-3 w-64 p-3">
                    <NavLink
                      to="/rb-enterprises"
                      className="block rounded-md px-3 py-2 text-sm hover:bg-white/5"
                      onClick={() => setDivisionOpen(false)}
                    >
                      RB Enterprises (Hardware)
                    </NavLink>

                    <NavLink
                      to="/rb-interiors"
                      className="mt-2 block rounded-md px-3 py-2 text-sm hover:bg-white/5"
                      onClick={() => setDivisionOpen(false)}
                    >
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
                  `text-sm transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-black px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm ${
                    isActive
                      ? "bg-white/10 text-primary"
                      : "text-foreground/85 hover:bg-white/5"
                  }`
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
