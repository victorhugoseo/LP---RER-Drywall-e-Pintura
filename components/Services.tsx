
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">Serviços Especializados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium text-lg">
            Soluções completas com o selo de qualidade <span className="text-blue-900 font-bold">RER</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`reveal delay-${(index % 3) * 100} group flex flex-col bg-white rounded-3xl p-8 transition-all duration-500 border ${service.isMain ? 'border-red-600 ring-4 ring-red-50 shadow-2xl scale-[1.02]' : 'border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2'}`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.isMain ? 'bg-red-600 text-white shadow-lg shadow-red-200' : 'bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white'}`}>
                <ServiceIcon id={service.id} />
              </div>
              <h3 className="text-2xl font-extrabold text-blue-900 mb-4 group-hover:text-red-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 font-medium mb-8 flex-grow leading-relaxed">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-gray-500">
                    <Check className="w-4 h-4 mr-2 text-red-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={COMPANY.whatsappUrl} className={`w-full text-center py-4 rounded-2xl font-black text-sm uppercase transition-all flex items-center justify-center gap-2 ${service.isMain ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-blue-900 text-white hover:bg-red-600'}`}>
                {service.ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
