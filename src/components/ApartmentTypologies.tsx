import React, { useState } from 'react';
import {
  Maximize2,
  BedDouble,
  Bath,
  Car,
  Check,
  ArrowUpRight,
  Info,
  X,
  Sparkles
} from 'lucide-react';
import { APARTMENT_UNITS, INTEREST_FORM_URL } from '../data/apartmentData';
import { ApartmentUnit } from '../types';

export const ApartmentTypologies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalUnit, setActiveModalUnit] = useState<ApartmentUnit | null>(null);

  const categories = [
    { id: 'all', label: 'Todas as Unidades' },
    { id: 'studio', label: 'Studio & 1 Suíte (48m²)' },
    { id: '2suites', label: '2 Suítes (82m²)' },
    { id: '3suites', label: '3 Suítes (136m²)' },
    { id: 'penthouse', label: 'Penthouse Duplex (218m²)' }
  ];

  const filteredUnits = selectedCategory === 'all'
    ? APARTMENT_UNITS
    : APARTMENT_UNITS.filter((unit) => unit.category === selectedCategory);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="plantas" className="py-24 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Plantas Humanizadas & Tipologias
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Cinzel',serif] mb-4">
            Apartamentos planejados para cada momento de vida
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Projetos que priorizam a iluminação natural, circulação inteligente e amplos espaços sociais para receber convidados.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-tab-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 scale-105'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="bg-stone-900/80 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 flex flex-col justify-between"
            >
              {/* Image & Tag */}
              <div className="relative h-64 sm:h-72 overflow-hidden group">
                <img
                  src={unit.image}
                  alt={unit.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    {unit.tag}
                  </span>
                </div>

                {/* Area badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-extrabold text-white font-['Cinzel',serif]">
                      {unit.area} m²
                    </span>
                    <span className="text-xs text-stone-300 block uppercase tracking-wider">
                      Área Privativa
                    </span>
                  </div>
                  <button
                    id={`btn-view-details-${unit.id}`}
                    onClick={() => setActiveModalUnit(unit)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-stone-950/80 hover:bg-stone-800 text-xs font-medium text-stone-200 border border-stone-700 backdrop-blur-sm transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ver Planta</span>
                  </button>
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Cinzel',serif]">
                    {unit.name}
                  </h3>
                  <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                    {unit.description}
                  </p>

                  {/* Spec pills */}
                  <div className="grid grid-cols-4 gap-2 py-3 px-4 rounded-xl bg-stone-950/80 border border-stone-800/80 mb-6 text-center">
                    <div>
                      <div className="flex items-center justify-center gap-1 text-amber-400 text-xs mb-1">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-bold text-white block">{unit.area}m²</span>
                      <span className="text-[10px] text-stone-400 uppercase">Privativo</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-amber-400 text-xs mb-1">
                        <BedDouble className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-bold text-white block">{unit.suites}</span>
                      <span className="text-[10px] text-stone-400 uppercase">Suíte{unit.suites > 1 ? 's' : ''}</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-amber-400 text-xs mb-1">
                        <Bath className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-bold text-white block">{unit.bathrooms}</span>
                      <span className="text-[10px] text-stone-400 uppercase">Banh.</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-amber-400 text-xs mb-1">
                        <Car className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-bold text-white block">{unit.parkingSpots}</span>
                      <span className="text-[10px] text-stone-400 uppercase">Vaga{unit.parkingSpots > 1 ? 's' : ''}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {unit.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                  <div>
                    <span className="text-xs text-stone-400 block">Valores a partir de</span>
                    <div className="text-2xl font-bold text-white">
                      {formatCurrency(unit.startingPrice)}
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium">
                      Entrada facilitada durante o período de obras
                    </span>
                  </div>

                  <a
                    id={`btn-interest-${unit.id}`}
                    href={INTEREST_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all cursor-pointer"
                  >
                    <span>Tenho interesse</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Unit Floor Plan Modal */}
        {activeModalUnit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 overflow-hidden relative shadow-2xl">
              {/* Close button */}
              <button
                id="close-unit-modal-btn"
                onClick={() => setActiveModalUnit(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  {activeModalUnit.tag}
                </span>
                <h3 className="text-2xl font-bold text-white font-['Cinzel',serif]">
                  {activeModalUnit.name} ({activeModalUnit.area}m²)
                </h3>
              </div>

              {/* Floor plan rendering image */}
              <div className="relative rounded-xl overflow-hidden mb-6 border border-stone-800 bg-stone-950 max-h-72">
                <img
                  src={activeModalUnit.floorPlanImage}
                  alt={`Planta ${activeModalUnit.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-sm px-3 py-1 rounded text-xs text-stone-300 border border-stone-700">
                  Perspectiva artística do decorado
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                  Destaques desta planta:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-300">
                  {activeModalUnit.highlights.map((hl, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-stone-400 block">Condição de Lançamento</span>
                  <span className="text-xl font-bold text-white">
                    {formatCurrency(activeModalUnit.startingPrice)}
                  </span>
                </div>

                <a
                  id="modal-unit-interest-cta"
                  href={INTEREST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Tenho interesse nesta planta</span>
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
