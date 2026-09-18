import React from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck, Clock, Award } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/apartmentData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 text-stone-100 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>ÚLTIMAS UNIDADES COM TABELA DE LANÇAMENTO</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Cinzel',serif] mb-6 leading-tight">
          O seu próximo capítulo começa aqui.
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Garanta sua prioridade na escolha dos andares mais altos e das melhores plantas. Clique abaixo para registrar seu interesse e receber a apresentação executiva e a tabela de valores.
        </p>

        {/* Big Central CTA Button with the requested link */}
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <a
            id="final-cta-interest-btn"
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 cursor-pointer group"
          >
            <span>Tenho interesse</span>
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <span className="text-xs text-stone-400">
            Formulário rápido • Atendimento exclusivo em menos de 10 minutos
          </span>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-stone-800/80 max-w-3xl mx-auto text-left">
          <div className="flex items-start gap-3 bg-stone-900/60 p-4 rounded-xl border border-stone-800">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Segurança Jurídica</h4>
              <p className="text-xs text-stone-400">Incorporação e memorial auditados e registrados em cartório.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-stone-900/60 p-4 rounded-xl border border-stone-800">
            <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Pontualidade na Entrega</h4>
              <p className="text-xs text-stone-400">Cronograma de obras com seguro de garantia contratual.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-stone-900/60 p-4 rounded-xl border border-stone-800">
            <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Acabamento Premium</h4>
              <p className="text-xs text-stone-400">Materiais nobres assinados pelas melhores marcas do mercado.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
