'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      title: 'Design de Sobrancelhas',
      category: 'sobrancelhas',
      placeholder: '👁️'
    },
    {
      id: 2,
      title: 'Limpeza de Pele',
      category: 'facial',
      placeholder: '✨'
    },
    {
      id: 3,
      title: 'Manicure Perfeita',
      category: 'unhas',
      placeholder: '💅'
    },
    {
      id: 4,
      title: 'Resultado Incrível',
      category: 'antes-depois',
      placeholder: '🌟'
    },
    {
      id: 5,
      title: 'Ambiente Acolhedor',
      category: 'ambiente',
      placeholder: '🏠'
    },
    {
      id: 6,
      title: 'Produtos Premium',
      category: 'produtos',
      placeholder: '��'
    }
  ]

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100/60 rounded-full px-6 py-3 mb-6">
              <Heart className="w-5 h-5 text-amber-600" />
              <span className="text-amber-700 font-semibold">Galeria</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
              Meus <span className="gradient-text">Trabalhos</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Veja alguns dos resultados incríveis que conseguimos juntas. 
              Cada transformação é única e especial.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group beauty-card card-hover cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl overflow-hidden mb-4">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    {image.placeholder}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-500 capitalize">{image.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para visualização */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-8xl mb-4">
                {galleryImages[selectedImage].placeholder}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-gray-600">
                Categoria: {galleryImages[selectedImage].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery