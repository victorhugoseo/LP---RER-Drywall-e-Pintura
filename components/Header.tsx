
import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY } from '../constants.tsx';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4 py-1 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo Oficial atualizada com o novo link fornecido */}
          <a href="/" className="relative flex items-center py-1">
            <img 
              src="https://rerdpintura.com.br/wp-content/uploads/2026/01/logo-rer-drywall-e-pintura-1-e1768917919900.png" 
              alt="RER Drywall e Pinturas" 
              className="h-14 w-auto md:h-16 min-w-[64px] object-contain transition-all duration-300 hover:scale-105"
              loading="eager"
            />
            {/* Fallback visual */}
            <noscript>
               <span className="text-xl font-black text-blue-900 ml-2">RER DRYWALL</span>
            </noscript>
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <a href="#servicos" className="text-sm font-bold text-gray-600 hover:text-red-600 transition-colors uppercase tracking-wider">Serviços</a>
          <a href="#sobre" className="text-sm font-bold text-gray-600 hover:text-red-600 transition-colors uppercase tracking-wider">Sobre Nós</a>
          <a href="#faq" className="text-sm font-bold text-gray-600 hover:text-red-600 transition-colors uppercase tracking-wider">Dúvidas</a>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href={COMPANY.whatsappUrl} 
            className="hidden sm:flex items-center text-sm font-black text-blue-900 hover:text-red-600 transition-colors"
          >
            <Phone className="w-4 h-4 mr-2 text-red-600" />
            {COMPANY.whatsapp}
          </a>
          <a 
            href={COMPANY.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-full text-xs font-black shadow-lg shadow-red-200 hover:bg-red-700 transition-all active:scale-95 uppercase tracking-tighter"
          >
            Fazer Orçamento
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
