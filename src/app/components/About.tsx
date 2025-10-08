'use client'

import { Heart, Award, Users, Clock, CheckCircle, Sparkles } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Cuidado Personalizado',
      description: 'Cada cliente recebe um atendimento único e exclusivo, pensado especialmente para suas necessidades.'
    },
    {
      icon: Award,
      title: 'Profissional Qualificada',
      description: 'Formação especializada e anos de experiência para garantir os melhores resultados.'
    },
    {
      icon: Users,
      title: 'Ambiente Acolhedor',
      description: 'Espaço pensado para seu conforto e bem-estar, onde você se sente em casa.'
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Agendamentos que se adaptam à sua rotina, incluindo finais de semana.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content - Image */}
            <div className="relative animate-slide-in-left">
              <div className="relative">
                {/* Main About Image */}
                <div className="w-full h-[500px] bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl shadow-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-amber-200/50 to-orange-200/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">👩‍💼</span>
                      </div>
                      <p className="text-amber-800/60 text-lg">Ketlyn Carvalho</p>
                    </div>
                  </div>
                </div>

                {/* Floating Achievement */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl animate-float">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">5+ Anos</div>
                    <div className="text-sm text-gray-600">de Experiência</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="animate-slide-in-right">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-amber-100/60 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="text-amber-700 font-medium text-sm">Sobre Mim</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                  Olá, eu sou a <span className="gradient-text">Ketlyn</span>
                </h2>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Sou especialista em beleza feminina com mais de 5 anos de experiência. 
                  Minha missão é realçar a beleza natural de cada mulher, proporcionando 
                  momentos de autocuidado e bem-estar em um ambiente acolhedor e profissional.
                </p>

                <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                  Acredito que cada cliente é única e merece um atendimento personalizado. 
                  Por isso, dedico tempo para entender suas necessidades e criar tratamentos 
                  exclusivos que destacam sua beleza de forma natural e elegante.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div 
                      key={index}
                      className="group beauty-card hover:scale-105 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h4>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Clientes Atendidas' },
              { number: '5+', label: 'Anos de Experiência' },
              { number: '98%', label: 'Satisfação' },
              { number: '24h', label: 'Resposta Rápida' }
            ].map((stat, index) => (
              <div key={index} className="text-center beauty-card hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About