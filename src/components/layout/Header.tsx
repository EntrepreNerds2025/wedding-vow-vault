import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Instagram, Facebook, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Logo from "@/assets/Dream_Streams_Logo.png";

const serviceSubItems = [
  { label: "Weddings", path: "/services/weddings" },
  { label: "Funerals", path: "/funerallivestreaming" },
  { label: "Additional Services", path: "/services/additional" },
];

const pricingSubItems = [
  { label: "Weddings", path: "/pricing" },
  { label: "Funerals", path: "/funerallivestreaming" },
];

const navItems = [
  { label: "HOME", path: "/home" },
  { label: "ABOUT", path: "/about" },
  { label: "SERVICES", path: "/services", hasDropdown: true, subItems: serviceSubItems },
  { label: "PRICING", path: "/pricing", hasDropdown: true, subItems: pricingSubItems },
  { label: "FAQ", path: "/faq" },
  { label: "PORTFOLIO", path: "/portfolio" },
  { label: "TESTIMONIALS", path: "/testimonials" },
  { label: "CONTACT US", path: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/home" className="flex-shrink-0">
            <img src={Logo} alt="Dream Streams" className="h-12 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <DropdownMenu key={item.path}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-body font-medium text-foreground/80 hover:text-accent transition-colors outline-none">
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-[200px]">
                    {item.subItems?.map((sub) => (
                      <DropdownMenuItem
                        key={sub.path}
                        className="cursor-pointer font-body text-sm"
                        onClick={() => navigate(sub.path)}
                      >
                        {sub.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 text-sm font-body font-medium text-foreground/80 hover:text-accent transition-colors"
                  activeClassName="text-accent"
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://www.instagram.com/dreamstreams.ca" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/dreamstreams.ca" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.path}>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-body font-medium text-foreground/80 hover:text-accent hover:bg-muted rounded-md transition-colors"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="ml-4 flex flex-col gap-1">
                        {serviceSubItems.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            className="px-4 py-2 text-sm font-body text-foreground/60 hover:text-accent hover:bg-muted rounded-md transition-colors"
                            activeClassName="text-accent bg-muted"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="px-4 py-3 text-sm font-body font-medium text-foreground/80 hover:text-accent hover:bg-muted rounded-md transition-colors"
                    activeClassName="text-accent bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
              <div className="flex items-center gap-4 px-4 pt-4 mt-2 border-t border-border">
                <a href="https://www.instagram.com/dreamstreams.ca" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/dreamstreams.ca" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
