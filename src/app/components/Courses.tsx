'use client'

import { BookOpen, Users, Award, Clock, Star, ArrowRight, Crown, Sparkles, Infinity } from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Classic Beauty',
      description: 'Plano ideal para quem está começando sua jornada de beleza com economia.',
      price: 'R\$ 187,00',
      period: 'mensais',
      savings: 'Nesse plano você economiza 43,00R$',
      features: [
        '2 design de sobrancelhas',
        '1 extensão de cílios',
        '10% off em qualquer procedimento'
      ],
      level: 'Básico',
      icon: '✨',
      popular: true
    },
    {
      id: 2,
      title: 'Royal Beauty',
      description: 'Perfeito para quem quer mais benefícios e desconto para dependente.',
      price: 'R\$ 199,00',
      period: 'Mensais',
      savings: 'Nesse plano você economiza 61,00R$',
      features: [
        '1 extensão de cílios',
        '2 design com henna',
        '15% off em qualquer procedimento (esse desconto é válido pra você e mais uma dependente)'
      ],
      level: 'Intermediário',
      icon: '👑',
      popular: false
    },
    {
      id: 3,
      title: 'Exclusive Beauty',
      description: 'Plano completo com agendamentos VIP e presentes especiais.',
      price: 'R\$ 329,00',
      period: 'Mensais',
      savings: 'Nesse plano você economiza 76,00R$',
      features: [
        '1 extensão de cílios',
        '1 manutenção',
        '4 design de sobrancelhas',
        '1 presente especial toda renovação',
        '20% off em qualquer procedimento',
        'Agendamentos Vip'
      ],
      level: 'Premium',
      icon: '💎',
      popular: false
    },
    {
      id: 4,
      title: 'Extraordinary Beauty',
      description: 'O mais completo! Inclui maquiagem profissional e benefícios exclusivos.',
      price: 'R\$ 459,00',
      period: 'Mensais',
      savings: 'Nesse plano você economiza 121,00R$',
      features: [
        '1 Extensão de cílios',
        '1 Manutenção',
        '2 design de sobrancelhas',
        '2 design com henna',
        '1 maquiagem profissional',
        '1 Presente Especial toda renovação',
        '20% Off em todos os procedimentos (válido pra você e uma dependente)',
        'Agendamentos Vip'
      ],
      level: 'Luxo',
      icon: '🌟',
      popular: true
    },
    {
      id: 5,
      title: 'Infinity Beauty',
      description: 'Personalização total para uma experiência única e exclusiva.',
      price: 'R\$ 179,00',
      period: 'Mensais',
      pricePrefix: 'Planos a partir de',
      savings: 'Solicite seu orçamento',
      features: [
        'Personalização Total: você escolhe os procedimentos para incluir no seu plano',
        'Valor Fixo Mensal: aproveite seus cuidados sem surpresas no preço',
        'Flexibilidade e Conforto: adapte os procedimentos à sua rotina e necessidades',
        'Atendimento Exclusivo: sua experiência de beleza elevada a outro nível'
      ],
      level: 'Personalizado',
      icon: '♾️',
      popular: false,
      isCustom: true
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="courses" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100/60 rounded-full px-5 py-2 mb-5">
              <Crown className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 font-semibold text-sm">Planos de Assinatura</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
              Beauty <span className="text-orange-600">Pass</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Escolha o plano ideal para você e tenha acesso aos melhores procedimentos 
              de beleza com economia garantida e benefícios exclusivos.
            </p>
          </div>

          {/* Cards Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
            {courses.map((plan, index) => (
              <div 
                key={plan.id}
                className={`relative p-5 bg-white rounded-xl shadow-lg border border-gray-100 
                  ${plan.popular ? 'border-2 border-orange-500 shadow-orange-200/50' : ''} 
                  hover:scale-[1.02] transition-all duration-300 group flex flex-col h-full`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2.5 py-1 rounded-full text-xs font-bold z-10">
                    POPULAR
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{plan.icon}</div>
                  <div className="text-right">
                    {plan.pricePrefix && (
                      <div className="text-xs text-gray-500 mb-1">{plan.pricePrefix}</div>
                    )}
                    <div className="text-lg font-bold text-orange-600">{plan.price}</div>
                    <div className="text-xs text-gray-500">{plan.period}</div>
                  </div>
                </div>

                <div className="mb-4 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                      {plan.level}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors leading-tight">
                    {plan.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features  */}
                  <div className="space-y-1.5 mb-4 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span className={plan.isCustom ? 'font-medium' : ''}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Savings */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-4 mt-auto">
                  <p className="text-green-700 font-semibold text-xs text-center">
                    {plan.savings}
                  </p>
                </div>

                {/* CTA Buttons  */}
                <div className="space-y-2">
                  <button 
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 px-4 rounded-full font-semibold text-sm hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>{plan.isCustom ? 'SOLICITAR ORÇAMENTO' : 'QUERO ASSINAR'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  
                  <button 
                    onClick={scrollToContact}
                    className="w-full border-2 border-orange-200 text-orange-700 py-2.5 px-4 rounded-full font-semibold text-sm hover:border-orange-300 hover:bg-orange-50 transition-all duration-300"
                  >
                    Mais informações
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-5 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">Economia Garantida</h4>
              <p className="text-gray-600 text-sm">Todos os planos oferecem economia significativa</p>
            </div>
            
            <div className="text-center p-5 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">Flexibilidade Total</h4>
              <p className="text-gray-600 text-sm">Agendamentos conforme sua disponibilidade</p>
            </div>
            
            <div className="text-center p-5 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">Benefícios Exclusivos</h4>
              <p className="text-gray-600 text-sm">Descontos, presentes e atendimento VIP</p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default Courses