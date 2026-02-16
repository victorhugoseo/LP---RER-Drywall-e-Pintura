
import React from 'react';
import { MessageSquare, ClipboardList, PenTool, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    { icon: <MessageSquare className="w-8 h-8" />, title: "Contato", desc: "Mande uma mensagem pelo WhatsApp e conte sobre seu projeto." },
    { icon: <ClipboardList className="w-8 h-8" />, title: "Avaliação", desc: "Analisamos suas necessidades para oferecer a melhor solution técnica." },
    { icon: <PenTool className="w-8 h-8" />, title: "Orçamento", desc: "Enviamos um orçamento transparente, detalhado e sem compromisso." },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Execução", desc: "Realizamos o serviço com rapidez, limpeza e garantia total." }
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-10 reveal">Como funciona o nosso processo</h2>
        
        <div className="flex flex-wrap justify-center gap-10 lg:gap-20 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-1/2 w-4/5 -translate-x-1/2 h-0.5 bg-blue-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`reveal delay-${index * 150} max-w-[220px] group`}>
              <div className="w-24 h-24 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:bg-red-600 transition-all duration-500 relative transform group-hover:scale-110 group-hover:-rotate-6">
                <span className="absolute -top-2 -left-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-md transition-transform group-hover:rotate-6">{index + 1}</span>
                <div className="transform transition-transform group-hover:scale-110">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-wide group-hover:text-red-600 transition-colors">{step.title}</h3>
              <p className="text-gray-600 font-medium leading-tight group-hover:text-gray-900 transition-colors">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;