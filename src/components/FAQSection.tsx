import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight, MessageCircle } from 'lucide-react';
import { FAQ_LIST, INTEREST_FORM_URL } from '../data/apartmentData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-stone-950 text-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Cinzel',serif] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Confira as principais informações sobre aquisição, prazos, documentação e financiamento.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-12">
          {FAQ_LIST.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-stone-900 border-amber-500/40 shadow-lg'
                    : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                }`}
              >
                <button
                  id={`faq-question-btn-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white font-['Cinzel',serif]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-stone-300 text-sm sm:text-base leading-relaxed border-t border-stone-800/80 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Question footer box */}
        <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base">Tem outra dúvida específica?</h4>
              <p className="text-xs text-stone-400">Preencha o formulário e fale diretamente com o gerente do projeto.</p>
            </div>
          </div>
          <a
            id="faq-interest-btn"
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition-all shrink-0"
          >
            <span>Tenho interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
