import React from 'react';
import {
  Waves,
  UtensilsCrossed,
  Dumbbell,
  Briefcase,
  Zap,
  ShieldCheck,
  Sparkles,
  PackageCheck,
  Trophy,
  ArrowUpRight
} from 'lucide-react';
import { AMENITIES, INTEREST_FORM_URL } from '../data/apartmentData';

// Map string icon names to Lucide icons
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Waves,
  UtensilsCrossed,
  Dumbbell,
  Briefcase,
  Zap,
  ShieldCheck,
  Sparkles,
  PackageCheck,
  Trophy
};

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Lazer, Conforto & Tecnologia
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Cinzel',serif] mb-4">
            Diferenciais pensados para elevar a sua rotina
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Cada detalhe do empreendimento foi planejado para oferecer uma experiência de hotel 5 estrelas dentro do seu próprio lar.
          </p>
        </div>

        {/* Grid of amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {AMENITIES.map((item) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="group relative bg-stone-950/60 hover:bg-stone-950 border border-stone-800 hover:border-amber-500/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
              >
                {item.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[11px] font-semibold">
                      Destaque
                    </span>
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Intermediate CTA banner */}
        <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-amber-500/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white font-['Cinzel',serif] mb-2">
              Deseja receber o book completo com todas as plantas e memorial descritivo?
            </h3>
            <p className="text-stone-300 text-sm max-w-xl">
              Cadastre-se para falar com um de nossos consultores e receber em primeira mão o material detalhado em PDF e os vídeos do decorado.
            </p>
          </div>
          <a
            id="differentials-cta-btn"
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all"
          >
            <span>Tenho interesse</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
