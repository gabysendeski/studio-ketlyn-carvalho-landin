'use client'

import { ArrowDown, Sparkles, Eye, Brush } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-150 to-orange-200 overflow-hidden pt-20"
    >
      {/* Background Beauty Elements - Mais visíveis com fundo escuro */}
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

        {/* Makeup Brush Strokes - Artistic Elements */}
        <div className="absolute bottom-1/4 left-16 opacity-[0.06] rotate-45">
          <div className="w-64 h-8 bg-gradient-to-r from-transparent via-orange-300/60 to-transparent rounded-full"></div>
        </div>

        <div className="absolute top-1/3 right-16 opacity-[0.06] rotate-[-30deg]">
          <div className="w-48 h-6 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent rounded-full"></div>
        </div>

        {/* Decorative Beauty Icons - Around Profile */}
        <div className="absolute top-1/4 left-1/3 opacity-[0.12]">
          <Sparkles className="w-12 h-12 text-orange-500" />
        </div>

        <div className="absolute bottom-1/3 right-1/3 opacity-[0.12]">
          <Eye className="w-14 h-14 text-orange-600" />
        </div>

        <div className="absolute top-2/3 left-1/4 opacity-[0.12]">
          <Brush className="w-10 h-10 text-orange-500" />
        </div>

        {/* Subtle Geometric Elements - Mais visíveis */}
        <div className="absolute top-1/5 right-1/5 w-32 h-32 border border-orange-300/30 rounded-full opacity-[0.08]"></div>
        <div className="absolute bottom-1/4 left-1/5 w-24 h-24 border border-orange-400/25 rounded-full opacity-[0.06]"></div>
        
        {/* Professional Beauty Products Silhouettes */}
        <div className="absolute bottom-16 right-1/4 opacity-[0.05] rotate-15">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
            {/* Mascara */}
            <rect x="20" y="60" width="8" height="50" fill="#D97706" rx="2"/>
            <ellipse cx="24" cy="55" rx="6" ry="8" fill="#92400E"/>
            {/* Lipstick */}
            <rect x="40" y="70" width="12" height="40" fill="#F59E0B" rx="3"/>
            <path d="M44 70 Q 46 55, 48 70" fill="#DC2626"/>
            {/* Brush */}
            <rect x="65" y="80" width="6" height="30" fill="#D97706" rx="1"/>
            <ellipse cx="68" cy="75" rx="4" ry="10" fill="#FEF3C7"/>
          </svg>
        </div>

        {/* Additional Beauty Elements - Mais visíveis */}
        <div className="absolute top-1/2 left-8 opacity-[0.04] rotate-[60deg]">
          <div className="w-32 h-4 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent rounded-full"></div>
        </div>

        <div className="absolute bottom-1/2 right-8 opacity-[0.04] rotate-[-45deg]">
          <div className="w-28 h-3 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent rounded-full"></div>
        </div>

      </div>

      {/* Main Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="animate-slide-up">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-orange-200 text-orange-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Especialistas em Beleza Feminina
                </div>

                {/* Main Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Beauty Academy <span className="text-orange-700">Ketlyn</span>
                  <br />
                  <span className="text-orange-700">Carvalho</span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-800 mb-12 leading-relaxed font-light">
                  Transforme sua beleza com nossos tratamentos especializados em 
                  <span className="text-orange-700 font-medium"> cílios, sobrancelhas e maquiagem profissional</span>.
                </p>

                {/* CTA Button - APENAS BEAUTY PASS */}
                <div className="flex justify-center lg:justify-start">
                  <button 
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-orange-700 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    QUERO MEU BEAUTY PASS
                  </button>
                </div>

              </div>
            </div>

            {/* Right Column - Professional Image */}
            <div className="relative">
              <div className="animate-slide-up">
                
                {/* Main Profile Image */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                  
                  {/* Decorative Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-300/40 to-orange-400/30 rounded-full transform rotate-6"></div>
                  
                  {/* Profile Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                      src="/images/ketlyn-perfil.jpg" 
                      alt="Ketlyn Carvalho - Especialista em Beleza e Estética"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Elements Around Image */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                    <Sparkles className="w-6 h-6 text-orange-600" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                    <Eye className="w-6 h-6 text-orange-600" />
                  </div>
                  
                  <div className="absolute top-1/2 -right-8 bg-white rounded-full p-3 shadow-lg transform -translate-y-1/2">
                    <Brush className="w-5 h-5 text-orange-600" />
                  </div>

                </div>

                {/* Professional Credentials  */}
                <div className="mt-8 text-center">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200">
                    <h3 className="font-bold text-gray-900 mb-2">Ketlyn Carvalho</h3>
                    <p className="text-gray-700 text-sm mb-3">Especialista Certificada em Cílios e Sobrancelhas</p>
                    <div className="flex justify-center text-xs text-gray-600">
                      <span>• +5 anos de experiência</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-16">
            <button 
              onClick={scrollToBeautyPass}
              className="animate-bounce text-gray-700 hover:text-orange-700 transition-colors duration-300"
            >
              <ArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero