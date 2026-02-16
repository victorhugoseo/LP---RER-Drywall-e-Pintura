
import React from 'react';
import { ShieldCheck, TrendingUp, Wallet, Award, Construction, Sparkles, CheckCircle2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { 
      icon: <ShieldCheck className="w-6 h-6" />, 
      title: "Zero Retrabalho", 
      desc: "Processos técnicos rigorosos que garantem perfeição na primeira execução.",
      isSpecial: false
    },
    { 
      icon: <Wallet className="w-6 h-6" />, 
      title: "Economia Real", 
      desc: "Redução de desperdício de material e custos extras de manutenção.",
      isSpecial: true // Este será o card azul em destaque
    },
    { 
      icon: <Construction className="w-6 h-6" />, 
      title: "Segurança Total", 
      desc: "Uso de ferragens e placas certificadas pelas normas ABNT vigentes.",
      isSpecial: false
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "Padrão Premium", 
      desc: "Acabamento liso e impecável, pronto para receber qualquer pintura.",
      isSpecial: false
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: "Valorização", 
      desc: "Aumente o valor de mercado do seu imóvel com um design moderno.",
      isSpecial: false
    },
    { 
      icon: <Sparkles className="w-6 h-6" />, 
      title: "Obra Limpa", 
      desc: "Sistema de montagem rápida com o mínimo de sujeira e entulho.",
      isSpecial: false
    }
  ];

  return (
    <section className="py-14 bg-[#fcfdfe] relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white text-blue-900 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-sm border border-gray-100">
            <CheckCircle2 className="w-4 h-4 text-red-600" />
            Diferenciais Exclusivos
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4">
            Por que escolher a <span className="text-red-600">RER Drywall?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Oferecemos mais do que apenas um serviço de gesso. Entregamos tranquilidade, economia e um acabamento que você não encontra em qualquer lugar.
          </p>
        </div>

        {/* Hub de 6 Cards com Movimento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`group relative p-8 rounded-[2.5rem] transition-all duration-500 flex flex-col items-center text-center border overflow-hidden cursor-default ${
                benefit.isSpecial 
                ? 'bg-blue-900 border-blue-800 shadow-2xl shadow-blue-200 scale-105 z-20' 
                : 'bg-white border-gray-100 shadow-xl shadow-gray-50 hover:border-blue-200 hover:z-10'
              } hover:-translate-y-4 hover:rotate-1`}
            >
              {/* Efeito de brilho ao passar o mouse */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Ícone com Círculo de Fundo e Movimento */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                benefit.isSpecial 
                ? 'bg-white/10 text-white' 
                : 'bg-blue-50 text-blue-900'
              }`}>
                {benefit.icon}
              </div>
              
              <h3 className={`text-xl font-black mb-3 transition-colors duration-300 ${
                benefit.isSpecial ? 'text-white' : 'text-blue-900 group-hover:text-red-600'
              }`}>
                {benefit.title}
              </h3>
              
              <p className={`text-sm font-bold leading-relaxed mb-6 transition-colors duration-300 ${
                benefit.isSpecial ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {benefit.desc}
              </p>

              {/* Detalhe de acabamento dinâmico */}
              <div className={`h-1.5 rounded-full transition-all duration-500 w-12 group-hover:w-24 ${
                benefit.isSpecial ? 'bg-red-500' : 'bg-blue-900 group-hover:bg-red-600'
              }`}></div>
              
              {/* Badge indicativa para o card especial */}
              {benefit.isSpecial && (
                <div className="mt-6 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                   <span className="text-[10px] font-black text-white uppercase tracking-tighter">Nosso maior diferencial</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Botão de Chamada para Ação Abaixo do Hub - Texto Reduzido + Emoji */}
        <div className="mt-14 text-center">
          <a 
            href="https://wa.me/5521999353977" 
            className="group inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-blue-900 transition-all shadow-2xl shadow-red-200 hover:scale-105 active:scale-95"
          >
            Quero essas vantagens na minha obra 📲
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
