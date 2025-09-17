import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você enviaria os dados para o backend
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estamos aqui para atender você. Entre em contato conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                {/* Endereço */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Endereço</h3>
                    <p className="text-gray-400">
                      Rua da Beleza, 123<br />
                      Centro, São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefone</h3>
                    <p className="text-gray-400">(11) 99999-9999</p>
                    <p className="text-gray-400">(11) 3333-3333</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">contato@elitehairstudio.com</p>
                    <p className="text-gray-400">agendamento@elitehairstudio.com</p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Horário de Funcionamento</h3>
                    <div className="text-gray-400 space-y-1">
                      <p>Segunda a Sexta: 9h às 20h</p>
                      <p>Sábado: 8h às 18h</p>
                      <p>Domingo: 10h às 16h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-500 transition-colors duration-300 group">
                  <Instagram className="h-6 w-6 text-yellow-500 group-hover:text-black" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-500 transition-colors duration-300 group">
                  <Facebook className="h-6 w-6 text-yellow-500 group-hover:text-black" />
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-white font-semibold mb-4">Nossa Localização</h3>
              <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Mapa interativo seria carregado aqui</p>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Email e Telefone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-yellow-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-yellow-500 transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Assunto
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="agendamento">Agendamento</option>
                    <option value="produtos">Produtos</option>
                    <option value="servicos">Serviços</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>

                {/* Botão Submit */}
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black py-3 px-6 font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>

            {/* Informações Adicionais */}
            <div className="mt-6 bg-gradient-to-r from-yellow-600 to-yellow-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-2">Atendimento Rápido</h3>
              <p className="text-black">
                Respondemos todas as mensagens em até 24 horas. 
                Para agendamentos urgentes, ligue diretamente!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;