
import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { COMPANY } from '../constants.tsx';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Contratar', href: '#processo' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4 py-1 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="relative flex items-center py-1">
            <img 
              src="https://rerdpintura.com.br/wp-content/uploads/2026/01/logo-rer-drywall-e-pintura-1-e1768917919900.png" 
              alt="RER Drywall e Pinturas" 
              className="h-12 w-auto md:h-16 min-w-[64px] object-contain transition-all duration-300 hover:scale-105"
              loading="eager"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-sm font-bold text-gray-600 hover:text-red-600 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
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
            className="bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-black shadow-lg shadow-red-200 hover:bg-red-700 transition-all active:scale-95 uppercase tracking-tighter"
          >
            Fazer Orçamento
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-blue-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-xl animate-fade-up">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="py-4 text-sm font-black text-blue-900 border-b border-gray-50 last:border-0 uppercase tracking-widest flex justify-between items-center"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 p-4 bg-gray-50 rounded-2xl flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Atendimento</span>
              <a 
                href={COMPANY.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-black text-blue-900 hover:text-red-600 transition-colors"
              >
                {COMPANY.whatsapp}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
