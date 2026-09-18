import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Eye, Sparkles } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/apartmentData';
import { trackInterestClick } from '../utils/analytics';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background architectural image with subtle zoom effect & rich gradient masks */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85"
          alt="Fachada do Residencial Aurora"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform duration-1000 ease-out"
        />
        {/* Multilayer gradient overlays for optimal text contrast and architectural depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-stone-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>OPORTUNIDADE DE LANÇAMENTO • TABELA ZERO DIRETO COM A CONSTRUTORA</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-['Cinzel',serif]">
            Viva o extraordinário no novo ícone da cidade.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-stone-300 mb-8 leading-relaxed font-normal">
            Apartamentos de alto padrão de <strong className="text-white font-semibold">48m² a 218m²</strong> com 
            <strong className="text-white font-semibold"> 1 a 4 suítes</strong>, varanda gourmet com churrasqueira integrada, 
            e lazer estilo resort nas alturas. Descubra a união perfeita entre arquitetura autoral e localização nobre.
          </p>

          {/* Location pill */}
          <div className="flex items-center gap-2 text-stone-300 text-sm mb-10">
            <div className="p-1 rounded-full bg-amber-500/20 text-amber-400">
              <MapPin className="w-4 h-4" />
            </div>
            <span>Região nobre, a poucos passos do Parque Central e dos melhores restaurantes</span>
          </div>

          {/* Main CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              id="hero-main-interest-cta"
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInterestClick('hero_section')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-lg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
            >
              <span>Tenho interesse</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              id="hero-explore-units-btn"
              href="#plantas"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-white font-semibold text-base border border-stone-700/80 transition-all backdrop-blur-sm"
            >
              <Eye className="w-5 h-5 text-amber-400" />
              <span>Conhecer as Plantas</span>
            </a>
          </div>

          {/* Trust bullet indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-stone-800/80 text-xs sm:text-sm text-stone-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Entrada facilitada durante obras</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Personalização de acabamentos</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Patrimônio de afetação registrado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
