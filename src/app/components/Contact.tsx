'use client'

import { useState } from 'react'
import { 
  Phone, 
  Instagram, 
  Mail, 
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react'

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const services = [
    'Beauty Pass Básico',
    'Beauty Pass Premium', 
    'Beauty Pass VIP',
    'Curso de Design de Sobrancelhas',
    'Curso de Extensão de Cílios',
    'Curso de Micropigmentação',
    'Curso Completo Beauty Expert',
    'Agendamento de Procedimento',
    'Dúvidas Gerais',
    'Outro'
  ]

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header - AJUSTADO */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
              Entre em <span className="text-orange-600">Contato</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para cuidar da sua beleza com carinho e profissionalismo. 
              Escolha a melhor forma de entrar em contato conosco.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            {/* Formulário - COMPACTO */}
            <div className="xl:col-span-2">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900">
                    Envie sua Mensagem
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm bg-white placeholder-gray-400"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm bg-white placeholder-gray-400"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm bg-white placeholder-gray-400"
                        placeholder="(41) 3669-5677"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Interesse *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm bg-white"
                      >
                        <option value="">Selecione seu interesse</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2.5 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none text-sm bg-white placeholder-gray-400"
                      placeholder="Conte-nos mais sobre seu interesse..."
                    />
                  </div>

                  {/* Submit Status - COMPACTO */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <div>
                          <div className="font-semibold text-green-800 text-sm">Mensagem enviada com sucesso!</div>
                          <div className="text-green-700 text-xs">Entraremos em contato em breve.</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
                      <div className="flex items-center">
                        <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                        <div>
                          <div className="font-semibold text-red-800 text-sm">Erro ao enviar mensagem</div>
                          <div className="text-red-700 text-xs">Tente novamente ou entre em contato pelo WhatsApp.</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-bold text-sm hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar - COMPACTA */}
            <div className="space-y-5">
              
              {/* Contato Direto - COMPACTO */}
              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-base font-serif font-bold text-gray-900 mb-4 flex items-center">
                  <Phone className="w-4 h-4 text-orange-500 mr-2" />
                  Contato Direto
                </h3>
                
                <div className="space-y-3">
                  <a
                    href="https://api.whatsapp.com/send/?phone=554136695677&text=Ol%C3%A1%2C+gostaria+de+garantir+meu+BEAUTY+PASS.&type=phone_number&app_absent=0"
                    
                    rel="noopener noreferrer"
                    className="flex items-center p-2.5 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center mr-2.5 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">WhatsApp</div>
                      <div className="text-gray-700 text-xs">(41) 3669-5677</div>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/kcbeautyacademy_/"
                    
                    rel="noopener noreferrer"
                    className="flex items-center p-2.5 bg-pink-50 rounded-lg hover:bg-pink-100 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center mr-2.5 group-hover:scale-110 transition-transform">
                      <Instagram className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Instagram</div>
                      <div className="text-gray-700 text-xs">kcbeautyacademy_</div>
                    </div>
                  </a>

                  <div className="flex items-center p-2.5 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center mr-2.5">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">E-mail</div>
                      <div className="text-gray-700 text-xs">contato@studioketlyn.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horário de Atendimento - COMPACTO */}
              <div className="p-5 rounded-xl shadow-md bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <div className="flex items-center mb-3">
                  <Clock className="w-4 h-4 text-white mr-2" />
                  <h3 className="text-base font-bold text-white">
                    Horário de Atendimento
                  </h3>
                </div>
                
                <div className="mb-3 text-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white">Segunda a Sexta:</span>
                    <span className="font-bold text-white">9h às 18h</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white">Sábado:</span>
                    <span className="font-bold text-white">9h às 16h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Domingo:</span>
                    <span className="font-bold text-white">Fechado</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/20">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs text-white">Respondendo agora</span>
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

export default Contact