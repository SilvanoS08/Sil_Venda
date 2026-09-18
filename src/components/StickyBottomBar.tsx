import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, X } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/apartmentData';

export const StickyBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show once scrolled past 400px
      if (window.scrollY > 450 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 animate-slide-up">
      <div className="max-w-5xl mx-auto bg-stone-900/95 backdrop-blur-md border border-amber-500/40 rounded-2xl p-3 sm:px-6 sm:py-3.5 shadow-2xl shadow-black/80 flex items-center justify-between gap-4">
        {/* Left Information */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-xs sm:text-sm font-['Cinzel',serif]">
                AURORA RESIDENCIAL
              </span>
              <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300">
                Lançamento
              </span>
            </div>
            <p className="text-[11px] text-stone-300 line-clamp-1">
              Garanta sua unidade com tabela promocional e entrada parcelada em 36x
            </p>
          </div>
        </div>

        {/* Right CTA and Dismiss */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            id="sticky-bar-interest-btn"
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Tenho interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-2 text-stone-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar barra de interesse"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
