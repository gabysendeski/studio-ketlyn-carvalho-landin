'use client'

import { Check, Sparkles, Calendar, Wallet, Clock, Star, Heart, Crown, TrendingUp, Smile } from 'lucide-react'

const WhyBeautyPass = () => {
  const introCards = [
    {
      icon: <Sparkles className="w-5 h-5 text-orange-500" />,
      title: "Rotina Elevada",
      description: "Sistema de assinatura mensal exclusivo."
    },
    {
      icon: <Wallet className="w-5 h-5 text-orange-500" />,
      title: "Economia Garantida",
      description: "Valor fixo mensal sem surpresas."
    },
    {
      icon: <Calendar className="w-5 h-5 text-orange-500" />,
      title: "Sem Agenda Lotada",
      description: "Prioridade nos agendamentos."
    },
    {
      icon: <Clock className="w-5 h-5 text-orange-500" />,
      title: "Experiência Única",
      description: "Qualidade premium garantida."
    }
  ]

  const benefits = [
    {
      icon: <Wallet className="w-6 h-6 text-orange-500" />,
      title: 'Você economiza sem abrir mão da qualidade',
      description: 'Com o valor de apenas dois atendimentos avulsos, você já garante um mês inteiro de cuidados com serviços premium.'
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
      title: 'Diga adeus às agendas lotadas',
      description: 'Quem tem Beauty Pass tem prioridade no agendamento, ou seja: mais conforto, mais organização e menos stress.'
    },
    {
      icon: <Crown className="w-6 h-6 text-orange-500" />,
      title: 'Vantagens exclusivas',
      description: 'Cashbacks, brindes, descontos em produtos e serviços, condições especiais em datas comemorativas e muito mais. Você faz parte de um clube seleto de clientes VIP.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      title: 'Mais constância nos cuidados',
      description: 'Com atendimentos mensais garantidos, sua beleza evolui de forma contínua. Nada de retoques em cima da hora ou procedimentos atrasados!'
    },
    {
      icon: <Heart className="w-6 h-6 text-orange-500" />,
      title: 'Transformação real da sua autoestima',
      description: 'Beleza não é luxo, é autocuidado. E com o Beauty Pass, você coloca isso como prioridade na sua vida, sem pesar no bolso.'
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="why-beauty-pass" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Header - Beauty Pass Introduction */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Beauty Pass – Sua <span className="text-orange-600">Rotina de Beleza</span><br />
              Elevada a Outro Nível!
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-5">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Você adora se cuidar, mas nem sempre consegue conciliar sua agenda ou orçamento 
                para isso? Para resolver essa questão, desenvolvemos o <span className="text-orange-600 font-semibold">Beauty Pass</span> – 
                um sistema de assinatura mensal exclusivo, criado para mulheres que buscam 
                praticidade, economia e qualidade em cada atendimento.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Imagine não precisar mais se preocupar em agendar procedimentos de última hora ou 
                calcular os gastos com seus cuidados de beleza a cada mês. Com o Beauty Pass, você 
                assegura sua rotina de beleza por um valor fixo mensal e desfruta de uma 
                <span className="text-orange-600 font-semibold"> experiência única, sem surpresas!</span>
              </p>
            </div>
          </div>

          {/* Intro Cards  */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
            {introCards.map((card, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-orange-200/50"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 p-2 bg-white rounded-full shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Section Header for Benefits */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Por que assinar o <span className="text-orange-600">Beauty Pass?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra todos os benefícios exclusivos que só quem tem Beauty Pass pode desfrutar
            </p>
          </div>

          {/* Benefits Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-100 h-full"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="beauty-card bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-200">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gray-900">
                  Pronta para transformar sua rotina de beleza?
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  Comece hoje mesmo e veja a diferença que o Beauty Pass pode fazer na sua vida.
                </p>
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  QUERO MEU BEAUTY PASS AGORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyBeautyPass