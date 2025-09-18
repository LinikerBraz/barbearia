import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, Award, Users } from 'lucide-react';
import { url } from 'inspector';

const Home = () => {
  const services = [
    {
      title: 'Cortes Masculinos',
      description: 'Cortes modernos e clássicos com técnicas avançadas',
      image: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Cortes Femininos',
      description: 'Transformação completa com cortes personalizados',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Coloração',
      description: 'Técnicas de coloração profissional e tendências',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const stats = [
    { icon: Users, value: '5000+', label: 'Clientes Satisfeitos' },
    { icon: Award, value: '5+', label: 'Anos de Experiência' },
    { icon: Star, value: '4.9', label: 'Avaliação Média' },
    { icon: Calendar, value: '1000+', label: 'Cortes por Mês' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/img1.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"style={{
            textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)'
          }}>
            IGOOR CORTTES
            <span className="block text-yellow-500">BARBER SHOP</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agendamento"
              className="bg-yellow-500 text-black px-8 py-4 text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105"
            >
              Agendar Horário
            </Link>
            <Link
              to="/servicos"
              className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 text-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para transformar seu visual
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servicos"
              className="inline-block bg-yellow-500 text-black px-8 py-3 font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-6">
            Pronto para Transformar seu Visual?
          </h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Agende seu horário hoje mesmo e descubra por que somos referência em São Paulo
          </p>
          <Link
            to="/agendamento"
            className="inline-block bg-black text-yellow-500 px-12 py-4 text-lg font-semibold hover:bg-gray-900 transition-colors duration-300 transform hover:scale-105"
          >
            Agendar Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;