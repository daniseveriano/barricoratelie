import React, { useState } from 'react';
import { ceramicPieces, categories } from './mockData';
import { Heart, Eye } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedPiece, setSelectedPiece] = useState(null);

  const filteredPieces = selectedCategory === 'Todos' 
    ? ceramicPieces 
    : ceramicPieces.filter(piece => piece.category === selectedCategory);

  const handleWhatsAppOrder = (piece) => {
    const message = `Olá! Gostaria de saber mais sobre esta peça: "${piece.description}". Está disponível?`;
    const whatsappUrl = `https://wa.me/5527998232603?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            Portfólio
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Cada peça é criada com amor e dedicação, utilizando técnicas tradicionais de cerâmica. 
            Descubra a beleza única do artesanal.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-orange-800 text-white shadow-lg'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPieces.map((piece) => (
            <div
              key={piece.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Featured Badge */}
              {piece.featured && (
                <div className="absolute top-4 left-4 z-10 bg-orange-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Destaque
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedPiece(piece)}
                      className="bg-white/90 hover:bg-white text-stone-800 p-3 rounded-full transition-colors duration-200"
                    >
                      <Eye size={20} />
                    </button>
                    <button
                      onClick={() => handleWhatsAppOrder(piece)}
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors duration-200"
                    >
                      <Heart size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                  {piece.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-stone-100 text-stone-700 text-xs rounded-full">
                    {piece.category}
                  </span>
                  <button
                    onClick={() => handleWhatsAppOrder(piece)}
                    className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                  >
                    Pedir no WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for piece details */}
        {selectedPiece && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75" onClick={() => setSelectedPiece(null)}>
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-square">
                <img
                  src={selectedPiece.image}
                  alt={selectedPiece.description}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-8">
                <p className="text-stone-600 mb-6 text-lg">
                  {selectedPiece.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full">
                    {selectedPiece.category}
                  </span>
                  <button
                    onClick={() => handleWhatsAppOrder(selectedPiece)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
                  >
                    Pedir no WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;