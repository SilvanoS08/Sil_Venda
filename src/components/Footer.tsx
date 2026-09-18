import React from 'react';
import { Building2, ArrowUpRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/apartmentData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800/80 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Presentation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-['Cinzel',serif] tracking-wider text-lg font-bold text-white block">
                  AURORA
                </span>
                <span className="text-[10px] tracking-widest text-amber-400 uppercase font-medium block">
                  Residencial Exclusivo
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              O novo marco residencial de alto padrão, combinando arquitetura contemporânea, lazer estilo resort e localização estratégica.
            </p>
            <div className="flex items-center gap-2 text-stone-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Patrimônio de Afetação Constituído</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white font-['Cinzel',serif] mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">
                  Diferenciais & Lazer
                </a>
              </li>
              <li>
                <a href="#plantas" className="hover:text-amber-400 transition-colors">
                  Plantas & Tipologias
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-400 transition-colors">
                  Apartamento Decorado
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Simulador de Financiamento
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">
                  Localização Privilegiada
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Atendimento & Plantão */}
          <div>
            <h4 className="text-sm font-bold text-white font-['Cinzel',serif] mb-4">
              Atendimento Exclusivo
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Espaço de Vendas & Decorado: Av. das Magnólias, 1420 - Bairro Nobre</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contato@auroraresidencial.com.br</span>
              </div>
              <div className="pt-2">
                <span className="block text-[11px] text-stone-400">Horário de funcionamento:</span>
                <span className="text-stone-200">Segunda a Domingo, das 9h às 19h</span>
              </div>
            </div>
          </div>

          {/* Col 4: Direct Form link */}
          <div className="bg-stone-900/60 p-5 rounded-2xl border border-stone-800 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-white font-['Cinzel',serif] mb-2">
                Cadastre seu Interesse
              </h4>
              <p className="text-stone-400 text-xs mb-4">
                Preencha o formulário rápido de interesse para receber atendimento personalizado de um consultor de imóveis credenciado.
              </p>
            </div>

            <a
              id="footer-interest-btn"
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors shadow-md"
            >
              <span>Tenho interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-stone-900 space-y-3 text-[11px] text-stone-400 leading-relaxed">
          <p>
            <strong>Informações Legais:</strong> Memorial de Incorporação registrado sob o R.I. nº 184.920 perante o Oficial de Registro de Imóveis competente. As ilustrações artísticas, perspectivas, plantas e fotos contidas neste material são meramente ilustrativas e possuem caráter de sugestão de decoração. Os acabamentos, equipamentos e revestimentos serão entregues rigorosamente conforme o Memorial Descritivo do empreendimento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
            <p>© {new Date().getFullYear()} AURORA Residencial Exclusivo. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <span className="text-stone-400">Política de Privacidade & Termos</span>
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline"
              >
                Formulário de Interesse Oficial
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
