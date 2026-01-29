import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
const navItems = [{
  label: "HOME",
  path: "/home"
}, {
  label: "ABOUT",
  path: "/about"
}, {
  label: "SERVICES",
  path: "/services"
}, {
  label: "PRICING",
  path: "/pricing"
}, {
  label: "BLOG",
  path: "/blog"
}, {
  label: "FAQ",
  path: "/faq"
}, {
  label: "PORTFOLIO",
  path: "/portfolio"
}, {
  label: "TESTIMONIALS",
  path: "/testimonials"
}, {
  label: "CONTACT US",
  path: "/contact"
}];
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/home" className="flex-shrink-0">
            <span className="font-display text-2xl md:text-3xl text-primary italic">
              Dream Streams
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => <NavLink key={item.path} to={item.path} className="px-3 py-2 text-sm font-body font-medium text-foreground/80 hover:text-accent transition-colors" activeClassName="text-accent">
                {item.label}
              </NavLink>)}
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://www.instagram.com/dreamstreamsca/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/DreamStreamsCA" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <Button variant="ghost" size="icon" aria-label="Search">
              
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map(item => <NavLink key={item.path} to={item.path} className="px-4 py-3 text-sm font-body font-medium text-foreground/80 hover:text-accent hover:bg-muted rounded-md transition-colors" activeClassName="text-accent bg-muted" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </NavLink>)}
              <div className="flex items-center gap-4 px-4 pt-4 mt-2 border-t border-border">
                <a href="https://www.instagram.com/dreamstreamsca/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/DreamStreamsCA" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </nav>}
      </div>
    </header>;
};