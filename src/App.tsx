import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KeyMetrics } from './components/KeyMetrics';
import { Differentials } from './components/Differentials';
import { ApartmentTypologies } from './components/ApartmentTypologies';
import { InteractiveGallery } from './components/InteractiveGallery';
import { FinancingSimulator } from './components/FinancingSimulator';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-500 selection:text-stone-950">
      {/* Fixed Navigation Bar */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with main call to action */}
        <Hero />

        {/* Highlighted Project Metrics */}
        <KeyMetrics />

        {/* Plantas & Tipologias de Apartamentos */}
        <ApartmentTypologies />

        {/* Empreendimento & Diferenciais de Lazer */}
        <Differentials />

        {/* Galeria do Apartamento Decorado & Perspectivas */}
        <InteractiveGallery />

        {/* Simulador Interativo de Financiamento */}
        <FinancingSimulator />

        {/* Localização & Entorno */}
        <LocationSection />

        {/* Perguntas Frequentes (FAQ) */}
        <FAQSection />

        {/* Final Conversion Section */}
        <FinalCTA />
      </main>

      {/* Sticky Bottom Bar for Higher Conversion */}
      <StickyBottomBar />

      {/* Footer with Legal Disclaimers and Links */}
      <Footer />
    </div>
  );
}
