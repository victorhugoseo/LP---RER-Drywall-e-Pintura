
import React from 'react';
import { COMPANY, SERVICES } from '../constants';
import { Instagram, Phone, MapPin, ExternalLink, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/YCk8o7exeAY76TWq6";

  return (
    <footer className="bg-blue-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column - Logo Centralizada com Fundo Branco para Destaque */}
          <div className="flex flex-col items-start">
            <div className="mb-8 p-4 bg-white rounded-[2.5rem] inline-block shadow-2xl transition-transform hover:scale-105 duration-500">
              <img 
                src="logo.png" 
                alt="Logo RER Drywall Oficial" 
                className="w-64 md:w-72 h-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-blue-200 mb-8 text-base leading-relaxed font-bold max-w-xs">
              Sua referência em serviços de acabamento no Rio de Janeiro. Transformamos sonhos em ambientes reais.
            </p>
            <div className="flex space-x-5">
              <a href={COMPANY.instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-red-600 p-3 rounded-2xl transition-all hover:-translate-y-2">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-green-600 p-3 rounded-2xl transition-all hover:-translate-y-2">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-8 border-l-4 border-red-600 pl-4 uppercase tracking-widest text-white">Nossos Serviços</h4>
            <ul className="space-y-4 text-blue-200 text-sm font-black">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black mb-8 border-l-4 border-red-600 pl-4 uppercase tracking-widest text-white">Fale Conosco</h4>
            <ul className="space-y-5 text-blue-200 text-sm font-bold">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 text-red-600 shrink-0" />
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors leading-snug">
                  {COMPANY.address}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-red-600 shrink-0" />
                <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {COMPANY.whatsapp}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-red-600 shrink-0" />
                <span className="break-all">atendimento@rerdrywall.com.br</span>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xl font-black mb-8 border-l-4 border-red-600 pl-4 uppercase tracking-widest text-white">Área de Atendimento</h4>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {COMPANY.cities.map((city, i) => (
                <span key={i} className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-xl text-[11px] font-black text-blue-100 uppercase tracking-widest hover:bg-red-600/20 hover:border-red-600/50 transition-colors cursor-default">
                  {city}
                </span>
              ))}
            </div>
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-2xl text-xs font-black transition-all shadow-xl active:scale-95 uppercase tracking-widest"
            >
              Google Meu Negócio <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center">
          <p className="text-blue-400 text-[11px] font-black mb-3 uppercase tracking-[0.2em]">
            CNPJ: {COMPANY.cnpj} | Horário: {COMPANY.hours}
          </p>
          <p className="text-blue-500 text-[11px] font-black tracking-[0.4em] uppercase opacity-80">
            &copy; {new Date().getFullYear()} RER DRYWALL & PINTURAS. EXCELÊNCIA EM CADA DETALHE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
