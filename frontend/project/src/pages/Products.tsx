import React, { useState } from 'react';
import { ShoppingCart, Star, Filter } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'shampoo', name: 'Shampoos' },
    { id: 'condicionador', name: 'Condicionadores' },
    { id: 'mascara', name: 'Máscaras' },
    { id: 'finalizador', name: 'Finalizadores' },
    { id: 'coloracao', name: 'Coloração' }
  ];

  const products = [
    {
      id: '1',
      name: 'Shampoo Hidratante Premium',
      category: 'shampoo',
      price: 89.90,
      originalPrice: 120.00,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Shampoo nutritivo para cabelos secos e danificados'
    },
    {
      id: '2',
      name: 'Condicionador Reparador',
      category: 'condicionador',
      price: 95.90,
      originalPrice: 130.00,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Condicionador intensivo para reconstrução capilar'
    },
    {
      id: '3',
      name: 'Máscara de Tratamento Intensivo',
      category: 'mascara',
      price: 145.90,
      originalPrice: 200.00,
      rating: 5.0,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Tratamento profundo para cabelos muito danificados'
    },
    {
      id: '4',
      name: 'Óleo Finalizador Dourado',
      category: 'finalizador',
      price: 75.90,
      originalPrice: 95.00,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Óleo nutritivo com partículas douradas para brilho'
    },
    {
      id: '5',
      name: 'Kit Coloração Profissional',
      category: 'coloracao',
      price: 220.90,
      originalPrice: 280.00,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Kit completo para coloração em casa'
    },
    {
      id: '6',
      name: 'Spray Termoativado',
      category: 'finalizador',
      price: 68.90,
      originalPrice: 85.00,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Proteção térmica para chapinha e secador'
    }
  ];

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Nossa Loja</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Produtos profissionais para cuidar dos seus cabelos em casa
          </p>
        </div>

        {/* Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="fixed top-20 right-4 z-50 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-semibold">{getTotalItems()} itens no carrinho</span>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between mb-8 bg-gray-900 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Filter className="h-5 w-5 text-yellow-500" />
            <span className="text-white font-medium">Filtrar por categoria:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all duration-300 group"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">({product.rating})</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-yellow-500">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <span className="text-gray-500 line-through">
                      R$ {product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product.id)}
                  className="w-full bg-yellow-500 text-black py-3 px-4 font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Adicionar ao Carrinho</span>
                  {cart[product.id] && (
                    <span className="bg-black text-yellow-500 rounded-full px-2 py-1 text-xs">
                      {cart[product.id]}
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-400">
              Tente selecionar uma categoria diferente
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-yellow-600 to-yellow-500 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-black mb-4">
            Dúvidas sobre os produtos?
          </h2>
          <p className="text-black mb-6">
            Nossa equipe está pronta para te ajudar a escolher o melhor produto
          </p>
          <button className="bg-black text-yellow-500 px-8 py-3 font-semibold hover:bg-gray-900 transition-colors duration-300">
            Falar com Especialista
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;