import React from 'react';
import { artistInfo } from './mockData';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/2025-01-14.webp"
          alt="Cerâmica Barricôr"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="space-y-8 text-left">
            {/* Collection Badge */}
            <div className="inline-block">
              <span className="text-white/80 text-sm uppercase tracking-widest font-medium">
                COLEÇÃO ARTESANAL
              </span>
            </div>

            {/* Hero Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                BARRICÔR
                <span className="block text-4xl md:text-5xl font-light italic text-orange-300 mt-2">
                  Ateliê
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Cerâmica artesanal feita à mão por <strong className="text-orange-300">{artistInfo.name}</strong>
              </p>
              <p className="text-lg text-white/80 max-w-lg">
                Peças exclusivas e de alta qualidade para quem busca autenticidade e beleza em cada detalhe
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-white/80">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span className="text-lg">{artistInfo.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <button 
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-stone-800 hover:bg-orange-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Ver Portfólio
              </button>
              <a
                href="https://wa.me/5527998232603?text=Olá! Gostaria de saber mais sobre as peças da Barricôr Ateliê."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-stone-800 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Fazer Pedido
              </a>
            </div>
          </div>

          {/* Right side - Logo Badge */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <img 
                src="/images/logo-barricor-atuallizada.png"
                alt="Barricôr Ateliê Logo"
                className="w-48 h-48 object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;