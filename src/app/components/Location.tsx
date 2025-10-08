'use client'

import { MapPin, Navigation, Clock, Phone } from 'lucide-react'

const Location = () => {
  const coordinates = {
    lat: -25.4284,
    lng: -49.1896
  }

  const address = {
    street: "Rua Pardal, 242",
    neighborhood: "Comércio, Jardim Cláudia", 
    city: "Pinhais - PR",
    zipCode: "CEP: 83326-410"
  }

  const referencePoints = [
    "Perto da Avenida Jacob Macanhan",
    "Ponto de ônibus com fácil acesso", 
    "Perto do Mercado Salla"
  ]

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`
    window.open(url, '_blank')
  }

  const openWaze = () => {
    const url = `https://waze.com/ul?ll=${coordinates.lat},${coordinates.lng}&navigate=yes`
    window.open(url, '_blank')
  }

  return (
    <section id="location" className="section-padding bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full mb-5">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
              Nossa <span className="text-orange-600">Localização</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Venha nos visitar! Estamos localizadas em um ponto estratégico e de fácil acesso em Pinhais.
            </p>
          </div>

          {/* Mapa Integrado com Endereço - MENOR */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
              
              <div className="relative mb-6">
                {/* MAPA COM ALTURA REDUZIDA */}
                <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8!2d-49.1896!3d-25.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Pardal%2C%20242%20-%20Jardim%20Cl%C3%A1udia%2C%20Pinhais%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Studio Ketlyn Carvalho - Rua Pardal, 242, Pinhais"
                    className="rounded-lg"
                  ></iframe>
                </div>
                
                {/* Overlay com informações */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-md max-w-xs">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Studio Ketlyn Carvalho</h3>
                      <p className="text-xs text-gray-600 leading-tight">
                        {address.street}<br />
                        {address.neighborhood}<br />
                        {address.city}<br />
                        {address.zipCode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações Detalhadas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Endereço e Referências */}
                <div className="space-y-5">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                      Endereço Completo
                    </h3>
                    <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                      <p className="text-gray-900 font-medium text-sm">{address.street}</p>
                      <p className="text-gray-700 text-sm">{address.neighborhood}</p>
                      <p className="text-gray-700 text-sm">{address.city}</p>
                      <p className="text-gray-700 font-medium text-sm">{address.zipCode}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                      <Navigation className="w-4 h-4 mr-2 text-orange-500" />
                      Pontos de Referência
                    </h4>
                    <ul className="space-y-1.5 text-sm">
                      {referencePoints.map((point, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botões de Navegação e Dicas */}
                <div className="space-y-5">
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                      <Navigation className="w-4 h-4 mr-2 text-orange-500" />
                      Como Chegar
                    </h4>
                    <div className="space-y-2.5">
                      <button
                        onClick={openGoogleMaps}
                        className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-lg py-3 px-3 transition-all duration-300 group shadow-sm hover:shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                              <MapPin className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-left">
                              <div className="font-bold text-gray-900 text-sm">Google Maps</div>
                              <div className="text-xs text-gray-600">Navegação completa</div>
                            </div>
                          </div>
                          <Navigation className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </button>

                      <button
                        onClick={openWaze}
                        className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-lg py-3 px-3 transition-all duration-300 group shadow-sm hover:shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                              <Navigation className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-left">
                              <div className="font-bold text-gray-900 text-sm">Waze</div>
                              <div className="text-xs text-gray-600">Melhor rota em tempo real</div>
                            </div>
                          </div>
                          <Navigation className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Dicas Extras */}
                  <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                    <h5 className="font-bold text-gray-900 text-sm mb-2 flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-2 text-orange-500" />
                      Dicas para sua Visita
                    </h5>
                    <ul className="space-y-1.5 text-xs text-gray-700">
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        Use o GPS com nosso endereço completo para chegar facilmente
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        Estacionamento disponível na região
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        Ponto de ônibus próximo para quem vem de transporte público
                      </li>
                    </ul>
                  </div>

                  {/* Contato Rápido */}
                  <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                    <h5 className="font-bold text-gray-900 text-sm mb-2 flex items-center">
                      <Phone className="w-3.5 h-3.5 mr-2 text-orange-500" />
                      Dúvidas sobre Localização?
                    </h5>
                    <p className="text-xs text-gray-700 mb-2">
                      Se tiver dificuldades para encontrar, entre em contato conosco!
                    </p>
                    <a
                      href="https://api.whatsapp.com/send/?phone=554136695677&text=Ol%C3%A1%2C+gostaria+de+garantir+meu+BEAUTY+PASS.&type=phone_number&app_absent=0"
                      
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-md transition-colors duration-300 text-xs font-medium"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location