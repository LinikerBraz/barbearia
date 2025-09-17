import React, { useState } from 'react';
import { Instagram, ArrowLeft, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'todos', name: 'Todos os Trabalhos' },
    { id: 'masculino', name: 'Cortes Masculinos' },
    { id: 'feminino', name: 'Cortes Femininos' },
    { id: 'coloracao', name: 'Coloração' },
    { id: 'transformacao', name: 'Transformações' }
  ];

  const portfolioItems = [
    {
      id: '1',
      category: 'masculino',
      image: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Degradê Clássico',
      description: 'Corte masculino moderno com degradê lateral'
    },
    {
      id: '2',
      category: 'feminino',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Long Bob Moderno',
      description: 'Corte feminino com camadas e movimento'
    },
    {
      id: '3',
      category: 'coloracao',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Mechas Californianas',
      description: 'Técnica de luzes naturais com efeito degradê'
    },
    {
      id: '4',
      category: 'transformacao',
      image: 'https://images.pexels.com/photos/3065205/pexels-photo-3065205.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Transformação Completa',
      description: 'Mudança radical de visual com corte e cor'
    },
    {
      id: '5',
      category: 'masculino',
      image: 'https://images.pexels.com/photos/4440721/pexels-photo-4440721.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Pompadour Premium',
      description: 'Corte clássico com acabamento moderno'
    },
    {
      id: '6',
      category: 'feminino',
      image: 'https://images.pexels.com/photos/3065140/pexels-photo-3065140.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Pixie Cut Estiloso',
      description: 'Corte curto feminino com personalidade'
    },
    {
      id: '7',
      category: 'coloracao',
      image: 'https://images.pexels.com/photos/3372621/pexels-photo-3372621.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Ombré Hair',
      description: 'Técnica de degradê de cores suave'
    },
    {
      id: '8',
      category: 'transformacao',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Makeover Completo',
      description: 'Transformação total do visual'
    },
    {
      id: '9',
      category: 'masculino',
      image: 'https://images.pexels.com/photos/4440715/pexels-photo-4440715.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Undercut Moderno',
      description: 'Corte jovem com laterais raspadas'
    }
  ];

  const filteredItems = selectedCategory === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredItems.findIndex(item => item.image === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredItems[newIndex].image);
  };

  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Nosso Portfólio</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            Conheça alguns dos nossos melhores trabalhos e transformações
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Instagram className="h-5 w-5 text-yellow-500" />
            <span>Siga @elitehairstudio para mais inspirações</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-yellow-500 text-black transform scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(item.image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={index < 6 ? "eager" : "lazy"}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Nenhum trabalho encontrado
            </h3>
            <p className="text-gray-400">
              Tente selecionar uma categoria diferente
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-yellow-600 to-yellow-500 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-black mb-4">
            Gostou do que viu?
          </h2>
          <p className="text-black mb-6">
            Agende seu horário e seja nossa próxima transformação de sucesso
          </p>
          <button className="bg-black text-yellow-500 px-8 py-3 font-semibold hover:bg-gray-900 transition-colors duration-300">
            Agendar Transformação
          </button>
        </div>
      </div>

      {/* Modal para visualização das imagens */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-yellow-500 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-500 z-10"
            >
              <ArrowLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-500 z-10"
            >
              <ArrowRight className="h-8 w-8" />
            </button>
            
            <img
              src={selectedImage}
              alt="Portfolio item"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;