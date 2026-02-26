import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavItem {
  label: string;
  sectionId?: string;
  path?: string;
}

const brandConfig = {
  name: 'Jubla Triengen',
  icon: Logo,
};

const navItems: NavItem[] = [
  { label: 'Über uns', sectionId: 'about', path: '/about' },
  { label: 'Angebote', sectionId: 'angebote', path: '/home' }, // Assuming functionality stays similar
  { label: 'Programm', sectionId: 'highlights', path: '/activities' }, 
  { label: 'News', path: '/posts' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const ctaButton = {
    label: 'Mitmachen',
    action: () => navigate('/contact'),
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: NavItem) => {
    setIsMobileMenuOpen(false);
    
    if (item.path) {
      if (item.path.startsWith('/#')) {
          // Handle hash navigation if needed, but simple path generic here
      }
      navigate(item.path);
      // If there's a sectionId and we're navigating to home, we might want to scroll after nav
      // For now, let's keep it simple: direct link or scroll
    } else if (item.sectionId) {
       // logic for scroll only if on home
       if (location.pathname !== '/home' && location.pathname !== '/') {
           navigate(`/?section=${item.sectionId}`); // Simplified approach, or just navigate home
           setTimeout(() => {
                const element = document.getElementById(item.sectionId!);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
           }, 100);
       } else {
            const element = document.getElementById(item.sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
       }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <brandConfig.icon className={`w-14 h-14 ${isScrolled ? 'text-jubla-yellow' : 'text-white'}`} />
            <span
              className={`font-amatic text-3xl font-bold ${
                isScrolled ? 'text-black' : 'text-white'
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
                  isScrolled ? 'text-gray-700 hover:text-jubla-yellow' : 'text-white hover:text-jubla-yellow'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={ctaButton.action}
              className="bg-jubla-yellow hover:bg-jubla-yellow-dark text-black font-mundial font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {ctaButton.label}
            </button>
          </nav>

          <button
            className={`md:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              onClick={ctaButton.action}
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
