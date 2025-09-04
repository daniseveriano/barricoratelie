import React, { useState } from 'react';
import { artistInfo, testimonials } from './mockData';
import { Phone, MapPin, MessageCircle, Star, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = () => {
    const message = formData.name && formData.message 
      ? `Olá! Meu nome é ${formData.name}. ${formData.message}`
      : "Olá! Gostaria de saber mais sobre as peças da Barricôr Ateliê.";
    
    const whatsappUrl = `https://wa.me/${artistInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para conversar conosco!",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Pronto para ter uma peça única da Barricôr Ateliê? Entre em contato conosco 
            e vamos criar algo especial para você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-stone-800 mb-6">
                Fale Conosco
              </h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-800 focus:border-transparent transition-colors duration-200"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-800 focus:border-transparent transition-colors duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-800 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Conte-nos sobre o que você está procurando..."
                  />
                </div>
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Enviar via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-stone-50 p-8 rounded-2xl">
              <h4 className="text-lg font-semibold text-stone-800 mb-6">
                Informações de Contato
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-800 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-stone-600">Telefone</p>
                    <p className="font-medium text-stone-800">{artistInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-800 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-stone-600">Localização</p>
                    <p className="font-medium text-stone-800">{artistInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-stone-600">WhatsApp</p>
                    <p className="font-medium text-stone-800">Resposta rápida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-stone-800 mb-6">
                O que Nossos Clientes Dizem
              </h3>
              <div className="space-y-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <p className="text-stone-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-stone-800">{testimonial.name}</p>
                      <p className="text-sm text-stone-600">{testimonial.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-orange-800 to-orange-900 p-8 rounded-2xl text-white">
              <h4 className="text-xl font-semibold mb-4">
                Peças Personalizadas
              </h4>
              <p className="mb-6 opacity-90">
                Tem uma ideia especial? Criamos peças personalizadas sob medida para suas necessidades.
              </p>
              <a
                href={`https://wa.me/${artistInfo.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre peças personalizadas da Barricôr Ateliê.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-orange-800 px-6 py-3 rounded-full font-medium hover:bg-stone-100 transition-colors duration-200"
              >
                <Send size={16} />
                <span>Solicitar Orçamento</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;