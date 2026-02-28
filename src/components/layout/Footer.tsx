import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link to="/home" className="inline-block">
              <span className="font-display text-2xl italic text-primary-foreground">
                Dream Streams
              </span>
            </Link>
            <p className="mt-3 text-primary-foreground/80 font-body text-sm">
              Wherever. Whenever. Together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-display text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/pricing" className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Pricing
              </Link>
              <Link to="/faq" className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h3 className="font-display text-lg mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a href="https://www.instagram.com/dreamstreams.ca" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/dreamstreams.ca" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@dreamstreams.ca" className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center justify-center md:justify-end gap-2">info@dreamstreams.ca<Mail className="w-4 h-4" />
                hello@dreamstreams.ca
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-sm text-primary-foreground/60">
            © {currentYear} Dream Streams. All rights reserved. Toronto, Ontario.
          </p>
        </div>
      </div>
    </footer>;
};