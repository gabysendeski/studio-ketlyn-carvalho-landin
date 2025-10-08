'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigationItems = [
    { label: 'CONTATO', href: '#contact' },
    { label: 'LOCALIZAÇÃO', href: '#location' },
    { label: 'NOSSOS CURSOS', href: '#courses' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-gradient-to-br from-orange-100 via-orange-150 to-orange-200 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo - Studio Ketlyn Carvalho */}
          <button 
            onClick={scrollToTop}
            className="text-xl md:text-2xl font-serif font-bold text-gray-900 transition-all duration-300 hover:text-orange-600 cursor-pointer tracking-wide whitespace-nowrap"
          >
            <span className="font-light">Beauty Academy</span>{' '}
            <span className="font-bold text-orange-600">Ketlyn Carvalho</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="font-medium text-sm tracking-wide text-gray-800 hover:text-orange-600 transition-all duration-300 hover:scale-105 relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              QUERO MEU BEAUTY PASS
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-gray-800 hover:bg-orange-100/50 transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 py-6 bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100">
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-6 py-4 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 font-medium rounded-xl mx-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="px-4 pt-4 border-t border-gray-100 mt-4">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                QUERO MEU BEAUTY PASS
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header