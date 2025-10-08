'use client'

import { 
  MapPin, 
  Mail, 
  Instagram, 
  Heart,
  MessageSquare,
  BookOpen,
  Sparkles
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerCards = [
    {
      title: 'QUERO MEU BEAUTY PASS',
      icon: Heart,
      action: () => {
        const element = document.querySelector('#why-beauty-pass')
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      title: 'CONTATO',
      icon: MessageSquare,
      action: () => {
        const element = document.querySelector('#contact')
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      title: 'LOCALIZAÇÃO',
      icon: MapPin,
      action: () => {
        const element = document.querySelector('#location')
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      title: 'NOSSOS CURSOS',
      icon: BookOpen,
      action: () => {
        const element = document.querySelector('#courses')
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      title: 'NOSSOS PROCEDIMENTOS',
      icon: Sparkles,
      action: () => {
        const element = document.querySelector('#procedures')
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      title: 'INSTAGRAM',
      icon: Instagram,
      action: () => {
        window.open('https://www.instagram.com/kcbeautyacademy_/', '_blank')
      }
    }
  ]

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <footer className="relative overflow-hidden">
      
      {/* FOOTER PRINCIPAL */}
      <div className="bg-white relative overflow-hidden">
        {/* Background Elements sutis */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gray-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gray-50 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Footer Content */}
            <div className="py-10 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Studio Info */}
                <div className="lg:col-span-1">
                  <div className="mb-5">
                    <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-3">
                      Studio <span className="text-orange-600">Ketlyn Carvalho</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-5 text-sm">
                      Transformando sua beleza com carinho, técnica e profissionalismo. 
                      Seu bem-estar é nossa prioridade.
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">Rua Pardal, 242</div>
                        <div className="text-gray-600 text-xs">Jardim Cláudia - Pinhais/PR</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">(41) 3669-5677</div>
                        <div className="text-gray-600 text-xs">WhatsApp - Resposta rápida</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">contato@studioketlyn.com</div>
                        <div className="text-gray-600 text-xs">Resposta em até 2 horas</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-base md:text-lg font-serif font-bold text-gray-900 mb-4">
                    Navegação
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => handleLinkClick('#why-beauty-pass')}
                        className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center group font-medium text-sm"
                      >
                        <span className="mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        Beauty Pass
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLinkClick('#procedures')}
                        className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center group font-medium text-sm"
                      >
                        <span className="mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        Procedimentos
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLinkClick('#courses')}
                        className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center group font-medium text-sm"
                      >
                        <span className="mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        Cursos
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLinkClick('#testimonials')}
                        className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center group font-medium text-sm"
                      >
                        <span className="mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        Depoimentos
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLinkClick('#contact')}
                        className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center group font-medium text-sm"
                      >
                        <span className="mr-2 text-orange-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        Contato
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Social & CTA */}
                <div>
                  <h4 className="text-base md:text-lg font-serif font-bold text-gray-900 mb-4">
                    Conecte-se
                  </h4>
                  
                  {/* Social Links */}
                  <div className="space-y-3 mb-6">
                    <a
                      href="https://www.instagram.com/kcbeautyacademy_/"
                      
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2.5 text-gray-700 hover:text-pink-600 transition-colors duration-300 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Instagram className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">kcbeautyacademy_</div>
                        <div className="text-xs text-gray-600">Siga nosso trabalho</div>
                      </div>
                    </a>
                  </div>

                  {/* CTA SEM BORDA CINZA */}
                  <div className="bg-orange-50 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-5 h-5 text-orange-600" />
                    </div>
                    <h5 className="font-bold text-base mb-2 text-gray-900">Pronta para se transformar?</h5>
                    <p className="text-gray-600 text-xs mb-3">
                      Conheça nosso Beauty Pass e tenha acesso aos melhores procedimentos
                    </p>
                    {/* BOTÃO LARANJA ESCURO COM TEXTO BRANCO */}
                    <button 
                      onClick={() => handleLinkClick('#why-beauty-pass')}
                      className="footer-cta-button bg-orange-800 text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-orange-900 transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      QUERO CONHECER
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                <div className="text-gray-600 text-xs">
                  © {currentYear} Studio Ketlyn Carvalho. Todos os direitos reservados.
                </div>
                <div className="flex items-center space-x-2 text-gray-600 text-xs">
                  <span>Feito com</span>
                  <Heart className="w-3 h-3 text-orange-500" />
                  <span>para você</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer