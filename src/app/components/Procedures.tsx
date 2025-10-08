'use client'

import { useState } from 'react'
import { Eye, Sparkles, Clock, CheckCircle } from 'lucide-react'

const Procedures = () => {
  const [selectedCategory, setSelectedCategory] = useState('sobrancelhas')

  const categories = [
    { id: 'sobrancelhas', label: 'Sobrancelhas', icon: '👁️' },
    { id: 'cilios', label: 'Cílios', icon: '👀' }
  ]

  const procedures = [
    // Sobrancelhas
    {
      id: 1,
      title: 'Design de Sobrancelhas',
      description: 'Modelagem perfeita que realça seu olhar e harmoniza com o formato do seu rosto.',
      category: 'sobrancelhas',
      duration: '45 min',
      features: [
        'Análise facial personalizada',
        'Design exclusivo para seu rosto',
        'Técnica de fio a fio',
        'Coloração profissional',
        'Retoque em 15 dias incluso'
      ],
      icon: '👁️',
      image: '/images/design-sobrancelhas.jpg'
    },
    {
      id: 2,
      title: 'Micropigmentação de Sobrancelhas',
      description: 'Técnica avançada para sobrancelhas naturais e duradouras.',
      category: 'sobrancelhas',
      duration: '120 min',
      features: [
        'Técnica fio a fio',
        'Pigmentos importados',
        'Resultado natural',
        'Duração de 1 a 2 anos',
        'Retoque incluso'
      ],
      icon: '🎨',
      image: '/images/micropigmentacao.jpg'
    },
    {
      id: 3,
      title: 'Henna para Sobrancelhas',
      description: 'Coloração natural que realça e define suas sobrancelhas.',
      category: 'sobrancelhas',
      duration: '30 min',
      features: [
        'Produto 100% natural',
        'Coloração temporária',
        'Várias tonalidades',
        'Duração de 15 dias',
        'Sem contraindicações'
      ],
      icon: '🌿',
      image: '/images/henna-sobrancelhas.jpg'
    },
    {
      id: 4,
      title: 'Laminação de Sobrancelhas',
      description: 'Técnica que alinha e fixa os fios para um resultado natural e duradouro.',
      category: 'sobrancelhas',
      duration: '60 min',
      features: [
        'Alinhamento dos fios',
        'Efeito natural',
        'Duração de 6 a 8 semanas',
        'Sem danos aos fios',
        'Resultado imediato'
      ],
      icon: '✨',
      image: '/images/laminacao-sobrancelhas.jpg'
    },
    // Cílios
    {
      id: 5,
      title: 'Extensão de Cílios',
      description: 'Cílios longos e volumosos para um olhar marcante e natural.',
      category: 'cilios',
      duration: '90 min',
      features: [
        'Fios sintéticos premium',
        'Aplicação fio a fio',
        'Resultado natural',
        'Duração de 3 a 4 semanas',
        'Manutenção inclusa'
      ],
      icon: '👀',
      image: '/images/extensao-cilios.jpg'
    },
    {
      id: 6,
      title: 'Lifting de Cílios',
      description: 'Curvatura natural e duradoura para seus cílios.',
      category: 'cilios',
      duration: '60 min',
      features: [
        'Curvatura natural',
        'Produtos profissionais',
        'Sem danos aos cílios',
        'Duração de 6 a 8 semanas',
        'Efeito máscara permanente'
      ],
      icon: '🌙',
      image: '/images/lifting-cilios.jpg'
    },
    {
      id: 7,
      title: 'Tintura de Cílios',
      description: 'Coloração profissional para cílios mais marcantes.',
      category: 'cilios',
      duration: '30 min',
      features: [
        'Coloração profissional',
        'Várias tonalidades',
        'Produto hipoalergênico',
        'Duração de 4 a 6 semanas',
        'Olhar mais marcante'
      ],
      icon: '🎨',
      image: '/images/tintura-cilios.jpg'
    },
    {
      id: 8,
      title: 'Volume Russo',
      description: 'Técnica avançada para máximo volume e densidade nos cílios.',
      category: 'cilios',
      duration: '120 min',
      features: [
        'Técnica volume russo',
        'Máxima densidade',
        'Fios ultra finos',
        'Resultado dramático',
        'Duração prolongada'
      ],
      icon: '💫',
      image: '/images/volume-russo.jpg'
    }
  ]

  const filteredProcedures = procedures.filter(procedure => procedure.category === selectedCategory)

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="procedures" className="section-padding bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Mas, afinal, quais são os <span className="text-orange-600">procedimentos</span>
              <br />que nós oferecemos?
            </h2>
            <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Conheça todos os procedimentos inclusos no seu Beauty Pass. 
              Acesso ilimitado aos melhores tratamentos de beleza especializados em sobrancelhas e cílios.
            </p>

            {/* Category Filter */}
            <div className="flex justify-center flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md scale-105'
                      : 'bg-white text-gray-700 hover:bg-orange-50 border-2 border-orange-200 hover:shadow-sm hover:scale-105'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 
            OPÇÃO 1: Layout 2x2 (RECOMENDADO)
            Descomente esta seção e comente a Opção 2 para usar o layout 2x2
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
            {filteredProcedures.map((procedure, index) => (
              <div 
                key={procedure.id}
                className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group h-full flex flex-col"
              >
                {/* Procedure Image Placeholder */}
                <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-3xl mb-1">{procedure.icon}</div>
                    <p className="text-orange-700 font-medium text-xs">Imagem do procedimento</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-tight flex-1">
                    {procedure.title}
                  </h3>
                  <div className="text-xs text-gray-500 flex items-center ml-3 flex-shrink-0">
                    <Clock className="w-3 h-3 mr-1" />
                    {procedure.duration}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {procedure.description}
                </p>

                {/* Features */}
                <div className="space-y-1.5 mb-5 flex-grow">
                  {procedure.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 px-4 rounded-full font-medium text-sm hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  AGENDAR PROCEDIMENTO
                </button>
              </div>
            ))}
          </div>

          {/* 
            OPÇÃO 2: Layout 4 lado a lado (ALTERNATIVA)
            Descomente esta seção e comente a Opção 1 para usar 4 cards lado a lado
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {filteredProcedures.map((procedure, index) => (
              <div 
                key={procedure.id}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group h-full flex flex-col"
              >
                <div className="w-full h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-2xl mb-1">{procedure.icon}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-tight">
                    {procedure.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-3 leading-relaxed text-xs">
                  {procedure.description}
                </p>

                <div className="space-y-1 mb-4 flex-grow">
                  {procedure.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-700">
                      <CheckCircle className="w-2.5 h-2.5 text-orange-500 mr-1.5 flex-shrink-0" />
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                  {procedure.features.length > 3 && (
                    <div className="text-xs text-gray-500 italic">
                      +{procedure.features.length - 3} benefícios
                    </div>
                  )}
                </div>

                <button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-3 rounded-full font-medium text-xs hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  AGENDAR
                </button>
              </div>
            ))}
          </div>
          */}
        </div>
      </div>
    </section>
  )
}

export default Procedures