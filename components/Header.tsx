
import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo Oficial - Espaço otimizado para a imagem com personagem vertical */}
          <a href="/" className="relative flex items-center">
            <img 
              src="logo.png" 
              alt="RER Drywall e Pinturas" 
              className="h-24 md:h-32 lg:h-36 w-auto object-contain transition-all duration-300 hover:scale-105"
              style={{ minWidth: '140px' }}
              loading="eager"
            />
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          <a href="#servicos" className="text-sm font-black text-blue-900 hover:text-red-600 transition-colors uppercase tracking-widest">Serviços</a>
          <a href="#sobre" className="text-sm font-black text-blue-900 hover:text-red-600 transition-colors uppercase tracking-widest">Sobre Nós</a>
          <a href="#faq" className="text-sm font-black text-blue-900 hover:text-red-600 transition-colors uppercase tracking-widest">Dúvidas</a>
        </div>

        <div className="flex items-center space-x-6">
          <a 
            href={COMPANY.whatsappUrl} 
            className="hidden sm:flex items-center text-sm font-black text-blue-900 hover:text-red-600 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2 text-red-600 animate-pulse" />
            {COMPANY.whatsapp}
          </a>
          <a 
            href={COMPANY.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-8 py-4 rounded-full text-xs font-black shadow-[0_10px_20px_-5px_rgba(220,38,38,0.4)] hover:bg-red-700 transition-all active:scale-95 uppercase tracking-tighter"
          >
            Orçamento Grátis
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
