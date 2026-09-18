import React from 'react';
import { Maximize2, BedDouble, Car, Sparkles, Building } from 'lucide-react';

export const KeyMetrics: React.FC = () => {
  const metrics = [
    {
      icon: Maximize2,
      value: '48m² a 218m²',
      label: 'Área Privativa',
      subtext: 'Opções tipo, duplex e penthouses'
    },
    {
      icon: BedDouble,
      value: '1 a 4 Suítes',
      label: 'Conforto e Espaço',
      subtext: 'Com suíte master e closet integrado'
    },
    {
      icon: Car,
      value: '1 a 4 Vagas',
      label: 'Garagem Coberta',
      subtext: 'Com ponto de recarga elétrica'
    },
    {
      icon: Building,
      value: '1.800 m²',
      label: 'Lazer Resort',
      subtext: 'Áreas entregues decoradas e equipadas'
    },
    {
      icon: Sparkles,
      value: 'Tabela Zero',
      label: 'Condição Especial',
      subtext: 'Descontos exclusivos de lançamento'
    }
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-stone-900/95 backdrop-blur-md rounded-2xl border border-stone-800 p-6 sm:p-8 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start border-l-2 border-amber-500/40 pl-4 py-1"
              >
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Icon className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    {metric.label}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  {metric.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
