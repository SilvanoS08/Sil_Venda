import React, { useState } from 'react';
import { Calculator, ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/apartmentData';

export const FinancingSimulator: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState<number>(790000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [termYears, setTermYears] = useState<number>(30); // 360 months

  const presets = [
    { label: 'Studio (48m²)', value: 420000 },
    { label: '2 Suítes (82m²)', value: 790000 },
    { label: '3 Suítes (136m²)', value: 1350000 },
    { label: 'Penthouse (218m²)', value: 2490000 }
  ];

  const downPaymentValue = (propertyValue * downPaymentPercent) / 100;
  const financedAmount = propertyValue - downPaymentValue;
  
  // Approximate SAC / Price real estate interest rate calculation (~9.8% a.a. + TR)
  const monthlyRate = 0.0085;
  const totalMonths = termYears * 12;
  const estimatedMonthly =
    (financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  // Installment during construction (e.g., 36 months down payment split)
  const constructionInstallment = downPaymentValue / 36;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="simulador" className="py-24 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Condições Facilitadas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Cinzel',serif] mb-4">
            Simulador de Investimento & Financiamento
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Planeje a aquisição do seu novo apartamento com fluxo de pagamento direto durante o período de obras e opções bancárias flexíveis.
          </p>
        </div>

        {/* Simulator Card */}
        <div className="max-w-5xl mx-auto bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Quick Presets */}
          <div className="mb-8">
            <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
              Selecione uma planta de referência:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {presets.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setPropertyValue(p.value)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    propertyValue === p.value
                      ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md font-bold'
                      : 'bg-stone-950/70 text-stone-300 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <span className="block">{p.label}</span>
                  <span className="text-[11px] opacity-80">{formatCurrency(p.value)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Property Value Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-stone-300">Valor do Imóvel</span>
                  <span className="text-xl font-bold text-white font-['Cinzel',serif]">
                    {formatCurrency(propertyValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="400000"
                  max="3000000"
                  step="20000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>R$ 400 mil</span>
                  <span>R$ 1.5 mi</span>
                  <span>R$ 3.0 mi</span>
                </div>
              </div>

              {/* Down payment Percent */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-stone-300">
                    Entrada ({downPaymentPercent}%)
                  </span>
                  <span className="text-base font-semibold text-amber-400">
                    {formatCurrency(downPaymentValue)}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[10, 20, 30, 40].map((percent) => (
                    <button
                      key={percent}
                      type="button"
                      onClick={() => setDownPaymentPercent(percent)}
                      className={`py-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                        downPaymentPercent === percent
                          ? 'bg-stone-100 text-stone-950 border-stone-100'
                          : 'bg-stone-950/80 text-stone-300 border-stone-800 hover:bg-stone-800'
                      }`}
                    >
                      {percent}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Financing Term */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-stone-300">
                    Prazo do Financiamento
                  </span>
                  <span className="text-base font-semibold text-white">
                    {termYears} anos ({totalMonths} meses)
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[15, 25, 30].map((years) => (
                    <button
                      key={years}
                      type="button"
                      onClick={() => setTermYears(years)}
                      className={`py-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                        termYears === years
                          ? 'bg-stone-100 text-stone-950 border-stone-100'
                          : 'bg-stone-950/80 text-stone-300 border-stone-800 hover:bg-stone-800'
                      }`}
                    >
                      {years} anos
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="pt-4 border-t border-stone-800/80 space-y-2 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Entrada parcelada em até 36 meses sem juros remuneratórios</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Possibilidade de uso do FGTS e avaliação do seu veículo</span>
                </div>
              </div>
            </div>

            {/* Right Summary Box */}
            <div className="lg:col-span-5 bg-stone-950 rounded-2xl p-6 sm:p-8 border border-amber-500/20 shadow-xl flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-4">
                  Resultado Estimado
                </span>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs text-stone-400 block">Entrada durante as obras</span>
                    <div className="text-lg font-bold text-white">
                      36x de {formatCurrency(constructionInstallment)}
                    </div>
                    <span className="text-[11px] text-stone-400">Total de entrada: {formatCurrency(downPaymentValue)}</span>
                  </div>

                  <div className="pt-3 border-t border-stone-800">
                    <span className="text-xs text-stone-400 block">Saldo a financiar após a entrega</span>
                    <div className="text-sm font-semibold text-stone-200">
                      {formatCurrency(financedAmount)}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-800">
                    <span className="text-xs text-amber-400 font-medium block">
                      Parcela estimada do financiamento
                    </span>
                    <div className="text-3xl font-extrabold text-white font-['Cinzel',serif]">
                      {formatCurrency(estimatedMonthly)}
                      <span className="text-xs font-normal text-stone-400">/mês</span>
                    </div>
                    <span className="text-[10px] text-stone-400 block mt-0.5">
                      *Estimativa referencial com base em taxas vigentes. Sujeito a análise de crédito.
                    </span>
                  </div>
                </div>
              </div>

              {/* Interest Button directly to the Google Form */}
              <div className="space-y-2">
                <a
                  id="simulator-interest-cta"
                  href={INTEREST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-base shadow-lg shadow-amber-500/25 transition-all text-center group"
                >
                  <span>Tenho interesse</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <p className="text-center text-[11px] text-stone-400">
                  Receba uma proposta oficial detalhada para a sua renda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
