import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sprout, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Seed Finder", path: "/seed-recommendation" },
  { label: "Weather", path: "/weather" },
  { label: "Learn", path: "/education" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-leaf group-hover:scale-105 transition-transform">
              <Sprout className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-poppins font-bold text-xl text-foreground leading-tight">
                Smart Seed
              </h1>
              <p className="text-xs text-muted-foreground -mt-0.5">Selector</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-xl text-base font-medium transition-all duration-200",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild variant="default">
              <Link to="/seed-recommendation">Find Seeds</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="default" className="mt-2">
                <Link to="/seed-recommendation" onClick={() => setIsOpen(false)}>
                  Find Seeds Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
