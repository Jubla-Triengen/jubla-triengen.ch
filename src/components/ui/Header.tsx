import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useCmsData } from "../../cms/context";

interface NavItem {
  label: string;
  href: string;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const data = useCmsData();

  const brandConfig = data.settings.brand ?? { name: "Jubla Triengen" };
  const ctaButton = data.settings.header_cta ?? {
    label: "Mitmachen",
    href: "/kontakt",
  };

  const navItems: NavItem[] = data.navigation
    .filter((item) => item.location === "header" && Boolean(item.href))
    .map((item) => ({ label: item.label, href: item.href as string }));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (item: NavItem) => {
    setIsMobileMenuOpen(false);
    navigate(item.href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <Logo
              className={`w-14 h-14 ${
                isScrolled ? "text-jubla-yellow" : "text-white"
              }`}
            />
            <span
              className={`font-amatic text-3xl font-bold ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {brandConfig.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={`font-mundial font-normal transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-jubla-yellow"
                    : "text-white hover:text-jubla-yellow"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate(ctaButton.href)}
              className="bg-jubla-yellow hover:bg-jubla-yellow-dark text-black font-mundial font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {ctaButton.label}
            </button>
          </nav>

          <button
            className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className="block w-full text-left py-2 text-gray-700 hover:text-jubla-yellow font-mundial"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate(ctaButton.href)}
              className="w-full bg-jubla-yellow hover:bg-jubla-yellow-dark text-black font-mundial font-semibold px-6 py-3 rounded-full transition-colors"
            >
              {ctaButton.label}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
