import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  onOpenContact: () => void;
}

const Navigation = ({ onOpenContact }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services", isAnchor: true },
    { label: "How It Works", href: "#how-it-works", isAnchor: true },
    { label: "Pricing", href: "/pricing", isAnchor: false },
    { label: "About", href: "#about", isAnchor: true },
    { label: "Testimonials", href: "#testimonials", isAnchor: true },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      if (!isHomePage) {
        window.location.href = "/" + href;
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link
              to="/"
              className={`text-2xl font-bold tracking-tight transition-colors ${
                isScrolled || !isHomePage ? "text-foreground" : "text-white"
              }`}
            >
              CFO<span className="text-primary">Pilot</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled || !isHomePage ? "text-muted-foreground" : "text-white/80"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled || !isHomePage ? "text-muted-foreground" : "text-white/80"
                  } ${location.pathname === link.href ? "text-primary" : ""}`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Button
              onClick={onOpenContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
            >
              Book a Conversation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled || !isHomePage ? "text-foreground" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-border/20"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map((link) => (
                  link.isAnchor ? (
                    <button
                      key={link.label}
                      onClick={() => scrollToSection(link.href)}
                      className={`text-left text-sm font-medium transition-colors hover:text-primary ${
                        isScrolled || !isHomePage ? "text-muted-foreground" : "text-white/80"
                      }`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-left text-sm font-medium transition-colors hover:text-primary ${
                        isScrolled || !isHomePage ? "text-muted-foreground" : "text-white/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
                <Button
                  onClick={() => {
                    onOpenContact();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full"
                >
                  Book a Conversation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;
