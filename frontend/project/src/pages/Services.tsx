import React from 'react';
import { Clock, Star } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Cortes Masculinos',
      services: [
        { name: 'Corte Clássico', duration: '30 min', price: 'R$ 45', rating: 4.9 },
        { name: 'Corte Moderno', duration: '45 min', price: 'R$ 60', rating: 4.8 },
        { name: 'Degradê Premium', duration: '50 min', price: 'R$ 70', rating: 5.0 },
        { name: 'Barba Completa', duration: '40 min', price: 'R$ 40', rating: 4.9 }
      ]
    },
    {
      title: 'Cortes Femininos',
      services: [
        { name: 'Corte Feminino', duration: '60 min', price: 'R$ 80', rating: 4.9 },
        { name: 'Corte + Escova', duration: '90 min', price: 'R$ 120', rating: 4.8 },
        { name: 'Corte + Hidratação', duration: '120 min', price: 'R$ 150', rating: 5.0 },
        { name: 'Transformação Completa', duration: '180 min', price: 'R$ 300', rating: 5.0 }
      ]
    },
    {
      title: 'Coloração & Química',
      services: [
        { name: 'Coloração Simples', duration: '120 min', price: 'R$ 200', rating: 4.7 },
        { name: 'Luzes/Mechas', duration: '180 min', price: 'R$ 350', rating: 4.9 },
        { name: 'Ombré Hair', duration: '240 min', price: 'R$ 450', rating: 4.8 },
        { name: 'Progressiva Premium', duration: '300 min', price: 'R$ 600', rating: 5.0 }
      ]
    },
    {
      title: 'Tratamentos',
      services: [
        { name: 'Hidratação Profunda', duration: '60 min', price: 'R$ 80', rating: 4.8 },
        { name: 'Cauterização', duration: '90 min', price: 'R$ 150', rating: 4.9 },
        { name: 'Botox Capilar', duration: '120 min', price: 'R$ 250', rating: 5.0 },
        { name: 'Cronograma Capilar', duration: '150 min', price: 'R$ 300', rating: 4.9 }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Nossos Serviços</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubra nossa ampla gama de serviços profissionais para transformar seu visual
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-yellow-500 mb-8 text-center">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-yellow-500 transition-colors duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-2xl font-bold text-yellow-500">
                        {service.price}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-white">{service.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-yellow-600 to-yellow-500 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-black mb-4">
            Interessado em algum serviço?
          </h2>
          <p className="text-black mb-6">
            Agende seu horário e transforme seu visual com nossos profissionais
          </p>
          <button className="bg-black text-yellow-500 px-8 py-3 font-semibold hover:bg-gray-900 transition-colors duration-300">
            Agendar Horário
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;