'use client'

import { ArrowDown, Sparkles, Eye, Brush } from 'lucide-react'

const Hero = () => {
  // Função para obter o caminho correto da imagem
  const getImagePath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/studio-ketlyn-carvalho-landin' : '';
    return `${basePath}${path}`;
  };

  const scrollToBeautyPass = () => {
    const element = document.querySelector('#why-beauty-pass')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-150 to-orange-200 overflow-hidden pt-24 sm:pt-28 lg:pt-20"
    >
      {/* Background Beauty Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Elegant Eyelash Pattern - Top */}
        <div className="absolute top-16 left-1/4 opacity-[0.08] rotate-12">
          <svg width="200" height="80" viewBox="0 0 200 80" fill="none">
            <g stroke="#D97706" strokeWidth="2" fill="none">
              <path d="M20 40 Q 30 20, 40 40" opacity="0.6"/>
              <path d="M30 40 Q 40 15, 50 40" opacity="0.8"/>
              <path d="M40 40 Q 50 10, 60 40" opacity="1"/>
              <path d="M50 40 Q 60 15, 70 40" opacity="0.8"/>
              <path d="M60 40 Q 70 20, 80 40" opacity="0.6"/>
              <path d="M90 40 Q 100 20, 110 40" opacity="0.6"/>
              <path d="M100 40 Q 110 15, 120 40" opacity="0.8"/>
              <path d="M110 40 Q 120 10, 130 40" opacity="1"/>
              <path d="M120 40 Q 130 15, 140 40" opacity="0.8"/>
              <path d="M130 40 Q 140 20, 150 40" opacity="0.6"/>
            </g>
          </svg>
        </div>

        {/* Professional Eyebrow Arch - Top Right */}
        <div className="absolute top-20 right-1/4 opacity-[0.1] rotate-[-8deg]">
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none">
            <path d="M20 40 Q 50 15, 90 20 Q 130 18, 160 40" 
                  stroke="#D97706" 
                  strokeWidth="4" 
                  fill="none" 
                  opacity="0.7"/>
            <path d="M25 42 Q 55 18, 95 23 Q 135 21, 155 42" 
                  stroke="#F59E0B" 
                  strokeWidth="2" 
                  fill="none" 
                  opacity="0.5"/>
          </svg>
        </div>

        {/* Decorative Beauty Icons */}
        <div className="absolute top-1/4 left-1/3 opacity-[0.12]">
          <Sparkles className="w-12 h-12 text-orange-500" />
        </div>

        <div className="absolute bottom-1/3 right-1/3 opacity-[0.12]">
          <Eye className="w-14 h-14 text-orange-600" />
        </div>

        <div className="absolute top-2/3 left-1/4 opacity-[0.12]">
          <Brush className="w-10 h-10 text-orange-500" />
        </div>

      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* MOBILE FIRST - Imagem no topo em mobile */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Mobile: Imagem primeiro, Desktop: Texto primeiro */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="animate-slide-up">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-orange-200 text-orange-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  Especialistas em Beleza Feminina
                </div>

                {/* Main Title - Proporcional */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                  Beauty Academy <span className="text-orange-700">Ketlyn</span>
                  <br />
                  <span className="text-orange-700">Carvalho</span>
                </h1>
                
                {/* Subtitle - Proporcional */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-800 mb-6 lg:mb-8 leading-relaxed font-light px-2 lg:px-0">
                  Transforme sua beleza com nossos tratamentos especializados em 
                  <span className="text-orange-700 font-medium"> cílios, sobrancelhas e maquiagem profissional</span>.
                </p>

                {/* CTA Button - MENOR E PROPORCIONAL */}
                <div className="flex justify-center lg:justify-start px-4 lg:px-0">
                  <button 
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-orange-600 to-orange-700 text-white 
                             px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 
                             rounded-full font-bold 
                             text-sm sm:text-base lg:text-lg 
                             hover:from-orange-700 hover:to-orange-800 
                             transition-all duration-300 transform hover:scale-105 
                             shadow-lg hover:shadow-xl
                             max-w-xs sm:max-w-sm lg:max-w-none"
                  >
                    QUERO MEU BEAUTY PASS
                  </button>
                </div>

              </div>
            </div>

            {/* Mobile: Imagem no topo, Desktop: Imagem à direita */}
            <div className="order-1 lg:order-2 relative mt-4 sm:mt-6 lg:mt-0">
              <div className="animate-slide-up">
                
                {/* Main Profile Image - Proporcional */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto">
                  
                  {/* Decorative Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-300/40 to-orange-400/30 rounded-full transform rotate-6"></div>
                  
                  {/* Profile Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl">
                    <img
                      src={getImagePath('/images/ketlyn-perfil.jpg')}
                      alt="Ketlyn Carvalho - Especialista em Beleza e Estética"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Elements - Proporcionais */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 lg:-top-4 lg:-right-4 bg-white rounded-full p-1.5 sm:p-2 lg:p-4 shadow-lg">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-orange-600" />
                  </div>
                  
                  <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 lg:-bottom-4 lg:-left-4 bg-white rounded-full p-1.5 sm:p-2 lg:p-4 shadow-lg">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-orange-600" />
                  </div>
                  
                  <div className="absolute top-1/2 -right-3 sm:-right-4 lg:-right-8 bg-white rounded-full p-1.5 sm:p-2 lg:p-3 shadow-lg transform -translate-y-1/2">
                    <Brush className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-600" />
                  </div>

                </div>

                {/* Professional Credentials - Proporcional */}
                <div className="mt-4 sm:mt-6 lg:mt-8 text-center px-2 lg:px-0">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-orange-200">
                    <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Ketlyn Carvalho</h3>
                    <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-3">Especialista Certificada em Cílios e Sobrancelhas</p>
                    <div className="flex justify-center text-xs text-gray-600">
                      <span>• +5 anos de experiência</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <button 
              onClick={scrollToBeautyPass}
              className="animate-bounce text-gray-700 hover:text-orange-700 transition-colors duration-300"
            >
              <ArrowDown className="w-6 h-6 lg:w-8 lg:h-8 mx-auto" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero