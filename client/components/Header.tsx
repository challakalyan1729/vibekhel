import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Logo */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F81116c852a0a476cac76e5d4cd666d5e%2Faf2a025afd0645d682299759cadb7a82?format=webp&width=80&height=120"
                alt="Vibekhel"
                className="relative w-8 h-8 object-contain"
              />
            </div>
            <span className="hidden sm:block font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vibekhel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/sports"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sports
            </Link>
            <Link
              to="/booking"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Book Slot
            </Link>
            <Link
              to="/players"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Players
            </Link>
            <Link
              to="/playgrounds"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Playgrounds
            </Link>
            <a
              href="https://www.youtube.com/@Vibekhelcom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              YouTube
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
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
          <nav className="md:hidden pb-4 border-t border-border">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/sports"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Sports
            </Link>
            <Link
              to="/booking"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Book Slot
            </Link>
            <Link
              to="/players"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Players
            </Link>
            <Link
              to="/playgrounds"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Playgrounds
            </Link>
            <a
              href="https://www.youtube.com/@Vibekhelcom"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              YouTube
            </a>
            <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
