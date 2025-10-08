'use client'

import { useState } from 'react'
import { 
  Sparkles, 
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Eye,
  Scissors,
  Palette
} from 'lucide-react'

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      title: 'Design de Sobrancelhas',
      description: 'Modelagem perfeita que realça seu olhar e harmoniza com o formato do seu rosto.',
      icon: Eye,
      price: 'R$ 80',
      duration: '45 min',
      features: [
        'Análise facial personalizada',
        'Design exclusivo para seu rosto',
        'Técnica de fio a fio',
        'Coloração profissional',
        'Retoque em 15 dias incluso'
      ],
      image: '👁️'
    },
    {
      id: 2,
      title: 'Limpeza de Pele',
      description: 'Tratamento completo para renovar e purificar sua pele, deixando-a radiante.',
      icon: Sparkles,
      price: 'R$ 120',
      duration: '90 min',
      features: [
        'Análise detalhada da pele',
        'Limpeza profunda dos poros',
        'Extração de cravos',
        'Máscara hidratante',
        'Protetor solar incluso'
      ],
      image: '✨'
    },
    {
      id: 3,
      title: 'Manicure & Pedicure',
      description: 'Cuidado completo para suas unhas com técnicas profissionais.',
      icon: Palette,
      price: 'R$ 60',
      duration: '60 min',
      features: [
        'Cutilagem profissional',
        'Esfoliação e hidratação',
        'Esmaltação perfeita',
        'Nail art opcional',
        'Ambiente esterilizado'
      ],
      image: '💅'
    },
    {
      id: 4,
      title: 'Corte e Escova',
      description: 'Corte personalizado e escova modeladora para um visual impecável.',
      icon: Scissors,
      price: 'R$ 100',
      duration: '120 min',
      features: [
        'Consulta de estilo',
        'Corte personalizado',
        'Lavagem com produtos premium',
        'Escova modeladora',
        'Finalização profissional'
      ],
      image: '💇‍♀️'
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-pattern-dots"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span className="text-amber-700 font-semibold">Meus Serviços</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
              Tratamentos que <span className="gradient-text">Transformam</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Descubra minha seleção de tratamentos de beleza, cada um pensado 
              para realçar sua beleza natural com técnicas profissionais.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div 
                  key={service.id}
                  className="group beauty-card card-hover"
                >
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{service.image}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-600">{service.price}</div>
                      <div className="text-sm text-gray-500 flex items-center justify-end">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-8">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-amber-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-amber-600 ml-7 font-medium">
                        +{service.features.length - 3} benefícios inclusos
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button 
                      onClick={scrollToContact}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                    >
                      <span>Agendar Agora</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <button 
                      onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                      className="w-full border-2 border-amber-200 text-amber-700 py-3 px-6 rounded-full font-semibold hover:border-amber-300 hover:bg-amber-50 transition-all duration-300"
                    >
                      {selectedService === service.id ? 'Ocultar Detalhes' : 'Ver Todos os Benefícios'}
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {selectedService === service.id && (
                    <div className="mt-6 pt-6 border-t border-amber-200">
                      <h4 className="font-semibold text-gray-900 mb-3">Tudo que está incluído:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-amber-500 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center beauty-card bg-gradient-to-br from-amber-500 to-orange-500 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Pronta para Sua Transformação?
              </h3>
              <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
                Agende seu horário e descubra como meus tratamentos podem realçar 
                sua beleza natural de forma única e especial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToContact}
                  className="bg-white text-amber-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services