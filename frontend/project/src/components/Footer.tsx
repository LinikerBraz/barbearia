import React from 'react';
import { Scissors, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold text-white">Igoor Corttes</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformamos sua imagem com estilo e sofisticação. 
              Mais de 5 anos de experiência em cortes modernos e tratamentos capilares.
            </p>
            <div className="flex space-x-4">
              <a
                  href="https://www.instagram.com/https://www.instagram.com/igoorcorttes/"
                  target="_blank"
                  rel="noopener noreferrer"
  >
                  <Instagram className="h-6 w-6 text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
  </a>

  <a
                  href="https://www.facebook.com/seuPerfil"
                  target="_blank"
                  rel="noopener noreferrer"
  >
                  <Facebook className="h-6 w-6 text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
  </a>
</div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                  href="tel:+5535991886416"
                  className="flex items-center space-x-2 text-gray-400 hover:text-yellow-500 transition-colors"
target='_blank' rel='noopener noreferrer'>
                  <Phone className="h-4 w-4" />
                  <span>(35) 99188-6416</span>
</a>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contato@igoorcorttes.com</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Rua da Beleza, 123<br />Santa Rita, Monsenhor Paulo - MG</span>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Horário</h3>
            <div className="space-y-2 text-gray-400">
              <p>Segunda a Sexta: 9h às 20h</p>
              <p>Sábado: 8h às 18h</p>
              <p>Domingo: 10h às 16h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Igoor Corttes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;