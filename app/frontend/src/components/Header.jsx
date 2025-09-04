import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <img 
            src="/images/logo-barricor-atuallizada-transp.png"
            alt="Barricôr Ateliê"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-stone-700 hover:text-orange-800 transition-colors duration-200 font-medium"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-stone-700 hover:text-orange-800 transition-colors duration-200 font-medium"
          >
            Portfólio
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-stone-700 hover:text-orange-800 transition-colors duration-200 font-medium"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-stone-700 hover:text-orange-800 transition-colors duration-200 font-medium"
          >
            Contato
          </button>
        </nav>

        {/* WhatsApp CTA Desktop */}
        <a
          href="https://wa.me/5527998232603?text=Olá! Gostaria de saber mais sobre as peças da Barricôr Ateliê."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium"
        >
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-stone-700 hover:text-orange-800 transition-colors duration-200"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <nav className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-stone-700 hover:text-orange-800 transition-colors duration-200 font-medium py-2"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left text-stone-700 hover:text-orange-800 transition-colors duration-200 font-medium py-2"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-stone-700 hover:text-orange-800 transition-colors duration-200 font-medium py-2"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-stone-700 hover:text-orange-800 transition-colors duration-200 font-medium py-2"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5527998232603?text=Olá! Gostaria de saber mais sobre as peças da Barricôr Ateliê."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 hover:bg-green-700 text-white text-center px-6 py-3 rounded-full transition-colors duration-200 font-medium mt-4"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;