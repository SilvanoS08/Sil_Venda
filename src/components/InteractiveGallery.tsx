import React, { useState } from 'react';
import { GALLERY_ITEMS, INTEREST_FORM_URL } from '../data/apartmentData';
import { GalleryItem } from '../types';
import { ArrowUpRight, ZoomIn, X, Sparkles } from 'lucide-react';

export const InteractiveGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filters = ['Todos', 'Fachada', 'Apartamento', 'Interiores', 'Lazer', 'Áreas Comuns'];

  const filteredItems = selectedFilter === 'Todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section id="galeria" className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Perspectivas & Decorado
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Cinzel',serif] mb-4">
            Conheça cada ambiente em detalhes
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Imagens reais e perspectivas artísticas do projeto que redefinirá o horizonte e o seu bem-estar.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                  : 'bg-stone-950/60 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-stone-800 hover:border-amber-500/50 shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-sm border border-stone-700 text-amber-300 text-xs font-semibold">
                  {item.category}
                </span>
              </div>

              {/* Zoom icon hint */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-950/80 backdrop-blur-sm text-stone-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-amber-400" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-2xl bg-stone-950/90 border border-stone-800">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <p className="text-sm sm:text-base text-stone-200">
                Gostaria de agendar uma visita guiada exclusiva ao apartamento decorado?
              </p>
            </div>
            <a
              id="gallery-schedule-visit-cta"
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition-all shrink-0"
            >
              <span>Tenho interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Lightbox Modal */}
        {activeLightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveLightbox(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-stone-950 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative max-h-[70vh] overflow-hidden">
                <img
                  src={activeLightbox.imageUrl}
                  alt={activeLightbox.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                    {activeLightbox.category}
                  </span>
                  <h3 className="text-xl font-bold text-white font-['Cinzel',serif]">
                    {activeLightbox.title}
                  </h3>
                  <p className="text-sm text-stone-300 mt-1">
                    {activeLightbox.description}
                  </p>
                </div>

                <a
                  id="lightbox-interest-btn"
                  href={INTEREST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-sm shadow-md hover:from-amber-400 hover:to-amber-500 transition-all shrink-0"
                >
                  <span>Tenho interesse</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
