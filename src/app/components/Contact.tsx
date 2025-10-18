'use client'

import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react'

const Contact = () => {
  const phoneNumber = "554136695677" 
  const email = "contato@studioketlyncarvalho.com"
  const instagramUrl = "https://www.instagram.com/kcbeautyacademy_/"
  
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de mais informações sobre o Beauty Pass e os tratamentos da Beauty Academy Ketlyn Carvalho."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleEmail = () => {
    const subject = "Contato - Beauty Academy Ketlyn Carvalho"
    const body = "Olá! Gostaria de mais informações sobre o Beauty Pass e tratamentos."
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(url, '_blank')
  }

  const handleInstagram = () => {
    window.open(instagramUrl, '_blank')
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          
          {/* Header - Proporcional com outras seções */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100/60 rounded-full px-5 py-2 mb-5">
              <MessageCircle className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 font-semibold text-sm">Entre em Contato</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
              Entre em <span className="text-orange-600">Contato</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para atendê-la! Escolha a forma de contato que preferir
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Contact Options */}
            <div className="space-y-6">
              
              {/* WhatsApp - Principal */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">WhatsApp</h3>
                    <p className="text-sm text-gray-600">Atendimento rápido e personalizado</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Fale conosco pelo WhatsApp e tire todas as suas dúvidas sobre o Beauty Pass e nossos tratamentos.
                </p>
                
                <button 
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-full font-bold text-sm hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  FALAR NO WHATSAPP
                </button>
              </div>

              {/* Instagram */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Instagram</h3>
                    <p className="text-sm text-gray-600">Acompanhe nossos trabalhos</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Siga nosso Instagram para ver os resultados incríveis dos nossos tratamentos e novidades.
                </p>
                
                <button 
                  onClick={handleInstagram}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-full font-bold text-sm hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  SEGUIR NO INSTAGRAM
                </button>
              </div>

            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              
              {/* Endereço */}
              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <h3 className="text-base font-bold text-gray-900">Localização</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Rua Pardal, 242<br />
                  Comércio, Jardim Cláudia<br />
                  Pinhais - PR, CEP: 83326-410
                </p>
              </div>

              {/* Horários */}
              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <h3 className="text-base font-bold text-gray-900">Horário de Atendimento</h3>
                </div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-medium">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-medium">9h às 16h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-medium text-orange-600">Fechado</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <h3 className="text-base font-bold text-gray-900">E-mail</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Para dúvidas mais detalhadas sobre o Beauty Pass
                </p>
                <button 
                  onClick={handleEmail}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-full font-bold text-sm hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  ENVIAR E-MAIL
                </button>
              </div>


            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact