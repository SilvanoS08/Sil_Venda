import React, { useState, useEffect } from 'react';
import { Building2, ArrowUpRight, Menu, X, PhoneCall, Sparkles } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/apartmentData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro announcement bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium">
              <Sparkles className="w-3 h-3 text-amber-400" /> Tabela Especial de Lançamento
            </span>
            <span className="hidden md:inline text-stone-400">
              Entrada facilitada em até 36x • Visitas ao decorado abertas
            </span>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <span className="flex items-center gap-1.5 text-xs text-stone-300">
              <PhoneCall className="w-3 h-3 text-amber-400" /> Plantão de Atendimento Exclusivo
            </span>
            <a
              id="header-top-cta"
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-2 flex items-center gap-0.5 transition-colors"
            >
              Tenho interesse <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-stone-800 py-3'
            : 'bg-stone-900/80 backdrop-blur-sm border-b border-stone-800/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-['Cinzel',serif] tracking-wider text-lg font-bold text-white block leading-tight">
                AURORA
              </span>
              <span className="text-[10px] tracking-widest text-amber-400 uppercase font-medium block">
                Residencial Exclusivo
              </span>
            </div>
          </a>

          {/* Desktop navigation links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#diferenciais" className="text-sm text-stone-300 hover:text-amber-400 font-medium transition-colors">
              Diferenciais
            </a>
            <a href="#plantas" className="text-sm text-stone-300 hover:text-amber-400 font-medium transition-colors">
              Plantas & Apartamentos
            </a>
            <a href="#galeria" className="text-sm text-stone-300 hover:text-amber-400 font-medium transition-colors">
              Galeria do Decorado
            </a>
            <a href="#localizacao" className="text-sm text-stone-300 hover:text-amber-400 font-medium transition-colors">
              Localização
            </a>
            <a href="#simulador" className="text-sm text-stone-300 hover:text-amber-400 font-medium transition-colors">
              Simulador
            </a>
            <a href="#faq" className="text-sm text-stone-300 hover:text-amber-400 font-medium transition-colors">
              FAQ
            </a>
          </nav>

          {/* Primary CTA button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              id="header-nav-cta-btn"
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-semibold text-sm shadow-md shadow-amber-600/30 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Tenho interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800/80 font-medium text-sm transition-colors"
            >
              Diferenciais
            </a>
            <a
              href="#plantas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800/80 font-medium text-sm transition-colors"
            >
              Plantas & Apartamentos
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800/80 font-medium text-sm transition-colors"
            >
              Galeria do Decorado
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800/80 font-medium text-sm transition-colors"
            >
              Localização
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800/80 font-medium text-sm transition-colors"
            >
              Simulador de Financiamento
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800/80 font-medium text-sm transition-colors"
            >
              Dúvidas Frequentes
            </a>
          </nav>

          <div className="pt-2 border-t border-stone-800">
            <a
              id="mobile-menu-cta-btn"
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-base shadow-lg shadow-amber-600/30 active:scale-[0.98] transition-all"
            >
              <span>Tenho interesse</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <p className="text-center text-xs text-stone-400 mt-2">
              Receba a tabela oficial de preços e agende sua visita
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
