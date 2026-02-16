
import React from 'react';
import { SERVICES, COMPANY } from '../constants.tsx';
import { Check, ArrowRight, Layout, Layers, VolumeX, Box, Paintbrush, Sparkles } from 'lucide-react';

const ServiceIcon = ({ id }: { id: string }) => {
  const iconProps = { className: "w-8 h-8" };
  switch (id) {
    case 'teto': return <Layout {...iconProps} />;
    case 'paredes': return <Layers {...iconProps} />;
    case 'isolamento': return <VolumeX {...iconProps} />;
    case 'mobiliario': return <Box {...iconProps} />;
    case 'pintura': return <Paintbrush {...iconProps} />;
    case 'efeitos': return <Sparkles {...iconProps} />;
    default: return <Check {...iconProps} />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 reveal">
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">Nosso Portfólio</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">Hub de Serviços Especializados</h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium text-lg">
            Soluções completas em Drywall e Pintura com o selo de qualidade <span className="text-blue-900 font-bold">RER</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`reveal delay-${(index % 3) * 100} group flex flex-col bg-white rounded-3xl p-8 transition-all duration-500 border ${
                service.isMain 
                ? 'border-red-600 ring-4 ring-red-50 shadow-2xl relative scale-[1.02]' 
                : 'border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:border-blue-100'
              }`}
            >
              {service.isMain && (
                <div className="absolute -top-4 right-8 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-10 animate-bounce">
                  Mais Procurado
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                service.isMain ? 'bg-red-600 text-white shadow-lg shadow-red-200' : 'bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white group-hover:rotate-12'
              }`}>
                <ServiceIcon id={service.id} />
              </div>

              <h3 className="text-2xl font-extrabold text-blue-900 mb-4 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 font-medium mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-gray-500 transform transition-transform group-hover:translate-x-1" style={{transitionDelay: `${i * 50}ms`}}>
                    <Check className="w-4 h-4 mr-2 text-red-600 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn ${
                  service.isMain 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-blue-900 text-white hover:bg-red-600 shadow-lg shadow-blue-100 hover:shadow-red-100'
                }`}
              >
                {service.ctaLabel}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="reveal mt-14 bg-blue-900 rounded-[3rem] p-8 md:p-10 text-center text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Não encontrou o que precisava?</h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto font-medium relative z-10">
            Realizamos projetos personalizados sob medida. Entre em contato e peça uma avaliação técnica para o seu caso específico.
          </p>
          <a 
            href={COMPANY.whatsappUrl}
            className="relative z-10 inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-black hover:bg-red-600 hover:text-white transition-all shadow-xl hover:scale-105"
          >
            CONSULTAR OUTROS SERVIÇOS
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
