import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const services = [
    'Corte Masculino - R$ 45',
    'Corte Feminino - R$ 80',
    'Corte + Barba - R$ 85',
    'Coloração - R$ 200',
    'Luzes/Mechas - R$ 350',
    'Hidratação - R$ 80',
    'Progressiva - R$ 600',
    'Botox Capilar - R$ 250'
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você enviaria os dados para o backend
    alert('Agendamento enviado com sucesso! Entraremos em contato para confirmar.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Agendar Horário</h1>
          <p className="text-xl text-gray-400">
            Preencha o formulário abaixo e transforme seu visual
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label className="flex items-center text-sm font-medium text-white mb-2">
                    <User className="h-4 w-4 mr-2 text-yellow-500" />
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

                {/* Email */}
                <div>
                  <label className="flex items-center text-sm font-medium text-white mb-2">
                    <Mail className="h-4 w-4 mr-2 text-yellow-500" />
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

                {/* Telefone */}
                <div>
                  <label className="flex items-center text-sm font-medium text-white mb-2">
                    <Phone className="h-4 w-4 mr-2 text-yellow-500" />
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                {/* Serviço */}
                <div>
                  <label className="flex items-center text-sm font-medium text-white mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-yellow-500" />
                    Serviço
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Data */}
                <div>
                  <label className="flex items-center text-sm font-medium text-white mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-yellow-500" />
                    Data Preferida
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  />
                </div>

                {/* Horário */}
                <div>
                  <label className="flex items-center text-sm font-medium text-white mb-2">
                    <Clock className="h-4 w-4 mr-2 text-yellow-500" />
                    Horário Preferido
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  >
                    <option value="">Selecione um horário</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Observações */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-white mb-2">
                  Observações (Opcional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                  placeholder="Alguma observação especial?"
                ></textarea>
              </div>

              {/* Botão Submit */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black py-3 px-6 font-semibold hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105"
                >
                  Confirmar Agendamento
                </button>
              </div>
            </form>
          </div>

          {/* Informações Laterais */}
          <div className="space-y-6">
            {/* Horários de Funcionamento */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2 text-gray-400">
                <p><span className="text-white">Segunda a Sexta:</span> 9h às 20h</p>
                <p><span className="text-white">Sábado:</span> 8h às 18h</p>
                <p><span className="text-white">Domingo:</span> 10h às 16h</p>
              </div>
            </div>

            {/* Política de Cancelamento */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Política de Cancelamento</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>• Cancelamentos até 2h antes: sem taxa</p>
                <p>• Cancelamentos com menos de 2h: taxa de 50%</p>
                <p>• Não comparecimento: cobrança integral</p>
              </div>
            </div>

            {/* Contato */}
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-4">Precisa de Ajuda?</h3>
              <p className="text-black mb-3">Entre em contato conosco:</p>
              <p className="text-black font-semibold">(11) 99999-9999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;