import React from 'react';
import { artistInfo } from './mockData';
import { Phone, MapPin, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/images/logo-barricor-nova.png"
                alt="Barricôr Ateliê"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-stone-300 text-sm leading-relaxed">
              Cerâmica artesanal feita à mão com amor e dedicação. 
              Peças únicas para momentos especiais.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-stone-300 hover:text-orange-400 transition-colors duration-200 block"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-stone-300 hover:text-orange-400 transition-colors duration-200 block"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-stone-300 hover:text-orange-400 transition-colors duration-200 block"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-stone-300 hover:text-orange-400 transition-colors duration-200 block"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Produtos</h4>
            <ul className="space-y-2 text-stone-300 text-sm">
              <li>Pratos Artesanais</li>
              <li>Tigelas & Cumbucas</li>
              <li>Objetos Decorativos</li>
              <li>Peças Personalizadas</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="text-orange-400" size={16} />
                <span className="text-stone-300 text-sm">{artistInfo.location}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-orange-400" size={16} />
                <span className="text-stone-300 text-sm">{artistInfo.phone}</span>
              </li>
              <li>
                <a
                  href={`https://wa.me/${artistInfo.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as peças da Barricôr Ateliê.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-stone-400 text-sm flex items-center space-x-1">
              <span>© {currentYear} Barricôr Ateliê. Feito com</span>
              <Heart className="text-red-500 fill-current" size={14} />
              <span>por {artistInfo.name}</span>
            </p>
            <div className="text-stone-400 text-sm">
              <span>Cerâmica artesanal • {artistInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;