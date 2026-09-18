import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ArrowUpRight, Compass } from 'lucide-react';
import { NEARBY_POINTS, INTEREST_FORM_URL } from '../data/apartmentData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Localização Nobre & Privilegiada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Cinzel',serif] mb-4">
            Tudo o que você precisa a poucos minutos de casa
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Um endereço estratégico em uma das regiões mais valorizadas e arborizadas da cidade, combinando tranquilidade residencial com conveniência urbana total.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Nearby list */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 font-['Cinzel',serif] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Pontos de Destaque no Entorno</span>
            </h3>

            <div className="space-y-3">
              {NEARBY_POINTS.map((pt, idx) => (
                <div
                  key={idx}
                  className="bg-stone-950/80 border border-stone-800 rounded-xl p-4 flex items-center justify-between hover:border-amber-500/40 transition-colors"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                      {pt.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {pt.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 text-right">
                    <div className="text-right">
                      <span className="text-xs font-bold text-stone-200 block">{pt.distance}</span>
                      <span className="text-[11px] text-stone-400 flex items-center justify-end gap-1">
                        <Clock className="w-3 h-3 text-amber-400" /> {pt.timeMinutes} min
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                id="location-interest-btn"
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-md transition-all"
              >
                <span>Tenho interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-stone-400 text-center sm:text-left">
                Agende uma visita guiada à região e conheça o terreno
              </span>
            </div>
          </div>

          {/* Map & Neighborhood Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-stone-800 bg-stone-950 shadow-2xl">
              {/* Architectural neighborhood render */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Vista aérea da região privilegiada"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                {/* Pin pin marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce">
                  <div className="px-3 py-1.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs shadow-xl flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 fill-current" />
                    <span>AURORA RESIDENCIAL</span>
                  </div>
                  <div className="w-3 h-3 bg-amber-500 rotate-45 -mt-1.5 shadow-md" />
                </div>
              </div>

              {/* Bottom Card details */}
              <div className="p-6 sm:p-8 bg-stone-950">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white font-['Cinzel',serif]">
                      Bairro Jardins / Região Nobre
                    </h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Rua arborizada, calçadas largas e monitoramento integrado 24 horas.
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shrink-0 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Bairro Seguro
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs py-3 border-t border-stone-800">
                  <div>
                    <span className="font-bold text-white block">98/100</span>
                    <span className="text-[10px] text-stone-400 uppercase">Walk Score</span>
                  </div>
                  <div>
                    <span className="font-bold text-white block">350m</span>
                    <span className="text-[10px] text-stone-400 uppercase">Ciclovia</span>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Acesso Rápido</span>
                    <span className="text-[10px] text-stone-400 uppercase">Vias Expressas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
