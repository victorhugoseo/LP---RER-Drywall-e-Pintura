
import React from 'react';
import { COMPANY, SERVICES } from '../constants';
import { Instagram, Phone, MapPin, ExternalLink, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/YCk8o7exeAY76TWq6";

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column - Somente a Logo com alta visibilidade */}
          <div className="flex flex-col items-start">
            <div className="mb-8 bg-white/5 p-4 rounded-2xl border border-white/10 shadow-inner inline-block">
              <img 
                src="logo.png" 
                alt="RER Drywall e Pinturas Logo" 
                className="w-48 h-auto object-contain brightness-110 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
                loading="lazy"
              />
            </div>
            <p className="text-blue-200 mb-6 text-sm leading-relaxed font-medium max-w-xs">
              Sua referência em serviços de acabamento no Rio de Janeiro. Transformamos sonhos em ambientes reais com profissionalismo e qualidade superior.
            </p>
            <div className="flex space-x-4">
              <a href={COMPANY.instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-red-600 p-2.5 rounded-xl transition-all hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-green-600 p-2.5 rounded-xl transition-all hover:-translate-y-1">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-6 border-l-4 border-red-600 pl-3 uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-3 text-blue-200 text-sm font-bold">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors flex items-center gap-1">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors font-bold text-red-400">
                  + Rebaixamento de Teto
                </a>
              </li>
              <li>
                <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors font-bold text-red-400">
                  + Efeito Marmorato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-6 border-l-4 border-red-600 pl-3 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4 text-blue-200 text-sm font-bold">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-red-600 shrink-0" />
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {COMPANY.address}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-red-600 shrink-0" />
                <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {COMPANY.whatsapp}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-red-600 shrink-0" />
                <span>atendimento@rerdrywall.com.br</span>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-black mb-6 border-l-4 border-red-600 pl-3 uppercase tracking-wider">Atendimento</h4>
            <div className="flex flex-wrap gap-2">
              {COMPANY.cities.map((city, i) => (
                <span key={i} className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-[10px] font-black text-blue-100 uppercase tracking-widest">
                  {city}
                </span>
              ))}
            </div>
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-8 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl text-xs font-black transition-all shadow-lg active:scale-95 uppercase tracking-tighter"
            >
              Ver no Google Maps <ExternalLink className="ml-2 w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-blue-400 text-[10px] font-bold mb-2 uppercase tracking-widest">
            CNPJ: {COMPANY.cnpj} | {COMPANY.hours}
          </p>
          <p className="text-blue-500 text-[10px] font-black tracking-[0.3em] uppercase">
            &copy; {new Date().getFullYear()} RER DRYWALL & PINTURAS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
