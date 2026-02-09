import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Logistics", href: "/#logistics" },
    { name: "Travel", href: "/#travel" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (location !== "/") {
        // If we are on another page and clicking an anchor, navigate home first
        window.location.href = href;
      }
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block text-sm">
        <div className="container-width flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary" /> +91-11-41010800
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary" /> info@cg-tt.com
            </span>
          </div>
          <div className="flex gap-4 opacity-90">
            <span>New Delhi</span>
            <span>|</span>
            <span>Dubai</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500 border-b border-transparent",
          scrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2 border-border/40" : "bg-white py-5"
        )}
      >
        <div className="container-width flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-12 h-12 bg-gradient-to-br from-primary via-blue-800 to-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl group-hover:shadow-primary/30 transition-all duration-300"
            >
              CG
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl leading-none tracking-tight text-primary group-hover:text-secondary transition-colors duration-300">CGTT</span>
              <span className="text-[11px] tracking-[0.2em] text-muted-foreground font-bold uppercase mt-0.5">Group</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-lg shadow-secondary/20"
              onClick={() => handleNavClick("/#contact")}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-border shadow-xl animate-in slide-in-from-top-5">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full bg-secondary text-secondary-foreground" onClick={() => handleNavClick("/#contact")}>
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
