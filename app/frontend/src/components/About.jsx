import React from 'react';
import { artistInfo } from './mockData';
import { Award, Heart, MapPin, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-stone-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
                Sobre o Ateliê
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed mb-8">
                {artistInfo.about}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-800 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">
                    Feito à Mão
                  </h3>
                  <p className="text-stone-600">
                    Cada peça é única, criada com técnicas tradicionais e muito amor pelos detalhes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-800 rounded-full flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">
                    Alta Qualidade
                  </h3>
                  <p className="text-stone-600">
                    Utilizamos apenas materiais de primeira qualidade para garantir durabilidade e beleza.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-800 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">
                    Entrega Regional
                  </h3>
                  <p className="text-stone-600">
                    Atendemos toda a região de Cariacica e arredores com entregas rápidas e seguras.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-800 rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">
                    Peças Exclusivas
                  </h3>
                  <p className="text-stone-600">
                    Produtos únicos e exclusivos, perfeitos para casa ou presentes especiais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative">
            <div className="w-full rounded-2xl shadow-lg overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-2xl"
              >
                <source src="/images/videoplayback.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-800 mb-1">
                  20+
                </div>
                <div className="text-sm text-stone-600">
                  Peças Criadas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;