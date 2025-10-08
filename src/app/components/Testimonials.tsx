'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Instagram } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Cliente Cílios',
      username: '@clientecilios',
      content: 'Olá Ketlyn, o que tenho a dizer nesses anos de atendimento é que você é uma profissional muito atenciosa com suas clientes, tem flexibilidade nos agendamentos procurando entender o que o cliente precisa até quando nós mesmos não sabemos, eu sou prova disso, pois, não sabia que precisava de cílios até eu fazer os cílios com você!! Hoje não vivo sem!! A praticidade de acordar se sentindo bela apenas pelo olhar é incrível. Você diversas vezes me recomendou e eu não acreditava que fazia diferença, até que um dia me rendi e foi uma das melhores escolhas que fiz 🥰 continue assim, prevendo as necessidades dos clientes de forma atenciosa e respeitosa como sempre fez! Agradeço por ter feito eu tomar essa decisão, como tantas outras durante nossa jornada juntas como profissional e cliente 🥰 E não esquece que dezembro quero meus horários pra renovar os olhares para as festas de fim de ano 🤗 Um grande beijo, e obrigada por tudo ❤️',
      avatar: '👀',
      rating: 5,
      service: 'Extensão de Cílios',
      verified: true
    },
    {
      id: 2,
      name: 'Cliente Studio',
      username: '@clientestudio',
      content: 'Oii amo ir ao Studio me sinto muito bem, o ambiente é aconchegante e acolhedor. Eu não gostava de ir ao salão achava uma tortura kkk mas tudo mudou quando conheci o seu Studio e seus serviços são excelentes você realmente tem um dom, amo fazer as sobrancelhas contigo elas ficam lindas sempre. Obrigada pelo cuidado que sempre recebo quando vou ao Studio!!!! 🥰😍❤️',
      avatar: '🏠',
      rating: 5,
      service: 'Design de Sobrancelhas',
      verified: true
    },
    {
      id: 3,
      name: 'Cliente Feliz',
      username: '@clientefeliz',
      content: 'Boa Noite! Ketlyn é uma ótima profissional, faz um atendimento com excelência, sempre atenciosa e trata com muito zelo e carinho, gosto muito do atendimento e a forma com que faz com que eu me sinta com a alto estima boa e segura, o studio e um ambiente tranquilo e muito aconchegante. Sou grata pelo cuidado comigo. Deus continue te usando sempre pra fazer transformações e renovações na alto estima das mulheres. 🌹😍💅',
      avatar: '💖',
      rating: 5,
      service: 'Transformação de Autoestima',
      verified: true
    },
    {
      id: 4,
      name: 'Cliente Transformada',
      username: '@clientetransformada',
      content: 'Oi, Ketlyn, tudo bem, e você? Seu atendimento é maravilhoso desde o momento em que mandamos uma mensagem para marcar, pois você é muito atenciosa. Durante todos os anos que você me atendeu as transformações mais radicais foram aí no studio e não poderiam ter ficado melhores. Sua atenção está em todos os detalhes e você é sempre solicita em explicar passo a passo de todo o atendimento e isso passa muita confiança para quem está ali, acho que essa é a parte que eu mais gosto. É difícil escolher só uma, pois todo o ambiente trás uma sensação boa de tranquilidade, inclusive você. Sempre que eu saio do studio me sinto a mulher mais linda do mundo e com a confiança nas alturas, e sou muito grata a isso 🙏 Inclusive não vejo a hora do próximo atendimento 🤗',
      avatar: '👑',
      rating: 5,
      service: 'Experiência Completa',
      verified: true
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 8000) 
    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100/60 rounded-full px-5 py-2 mb-5">
              <Heart className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 font-semibold text-sm">Depoimentos</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
              Veja as experiências das nossas <span className="text-orange-600">clientes</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A satisfação das nossas clientes é nossa maior recompensa. 
              Confira alguns depoimentos reais de quem já viveu essa experiência transformadora.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl p-4 shadow-md hover:scale-[1.02] transition-all duration-300 border border-gray-100"
              >
                {/* Header estilo Instagram */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-base">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-semibold text-gray-900 text-sm">{testimonial.name}</span>
                        {testimonial.verified && (
                          <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs leading-none">✓</span>
                          </div>
                        )}
                      </div>
                      <span className="text-gray-500 text-xs">{testimonial.username}</span>
                    </div>
                  </div>
                  <Instagram className="w-4 h-4 text-gray-400" />
                </div>

                {/* Content */}
                <div className="max-h-32 overflow-y-auto mb-3">
                  <p className="text-gray-700 leading-snug text-sm">
                    <Quote className="inline-block w-3 h-3 text-orange-400 mr-1 translate-y-0.5" />
                    {testimonial.content}
                  </p>
                </div>

                {/* Service & Rating */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="bg-orange-50 text-orange-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {testimonial.service}
                  </div>
                  <div className="flex items-center space-x-0.5">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action - LARGURA TOTAL DOS DOIS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-100 w-full">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-5">
                    Seja nossa próxima cliente satisfeita!
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 mb-7">
                    Junte-se às centenas de mulheres que já transformaram sua autoestima conosco.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button 
                      onClick={() => {
                        const element = document.querySelector('#contact')
                        if (element) element.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-bold text-base hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      QUERO MEU BEAUTY PASS
                    </button>
                    <button 
                      onClick={() => window.open('https://www.instagram.com/kcbeautyacademy_/', '_blank')}
                      className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-full font-bold text-base hover:bg-orange-50 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Ver mais no Instagram</span>
                    </button>
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

export default Testimonials