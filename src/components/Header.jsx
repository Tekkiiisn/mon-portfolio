import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-950/95 to-gray-950/80 backdrop-blur-lg border-b border-emerald-500/20">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold relative group">
            <span className="bg-gradient-to-r from-emerald-400 to-amber-300 bg-clip-text ">HM</span>
            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-emerald-400 to-amber-300 group-hover:w-full transition-all duration-500"></div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-emerald-300 transition-all duration-300 relative group text-sm font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-amber-300 group-hover:w-full transition-all duration-400"></span>
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-3 border-t border-emerald-500/10 pt-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-emerald-300 hover:pl-2 transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
