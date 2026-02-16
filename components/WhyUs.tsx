
import React from 'react';
import { COMPANY } from '../constants';
import { Award, Clock, HardHat, ShieldCheck, CheckCircle2 } from 'lucide-react';

const WhyUs: React.FC = () => {
  const authorityPoints = [
    {
      title: "Excelência Comprovada",
      desc: "Anos de experiência no mercado carioca com centenas de projetos entregues com perfeição técnica.",
      icon: <Award className="w-10 h-10 text-red-600" />
    },
    {
      title: "Cronograma Rigoroso",
      desc: "Respeitamos seu tempo. Planejamento que garante a entrega na data combinada, sem surpresas.",
      icon: <Clock className="w-10 h-10 text-red-600" />
    },
    {
      title: "Mão de Obra Especializada",
      desc: "Equipe em treinamento constante para dominar as técnicas mais modernas e seguras de drywall.",
      icon: <HardHat className="w-10 h-10 text-red-600" />
    },
    {
      title: "Materiais de 1ª Linha",
      desc: "Utilizamos apenas placas e perfis certificados pelas normas ABNT para máxima durabilidade.",
      icon: <ShieldCheck className="w-10 h-10 text-red-600" />
    }
  ];

  return (
    <section id="sobre" className="py-14 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Cabeçalho */}
        <div className="text-center mb-10 reveal">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-blue-900 text-xs font-bold uppercase tracking-widest">Autoridade Confirmada</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 leading-tight mb-4 max-w-4xl mx-auto">
            Sua obra em boas mãos: <span className="text-red-600">Confiança</span> e Qualidade que geram resultados reais.
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            Na RER Drywall e Pintura, unimos a precisão técnica do Drywall com o acabamento refinado da pintura profissional para valorizar seu imóvel.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {authorityPoints.map((point, index) => (
            <div 
              key={index} 
              className={`reveal delay-${index * 100} bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:border-red-100 transition-all duration-500 group flex flex-col items-center text-center hover:-translate-y-3`}
            >
              <div className="bg-blue-50 w-20 h-20 rounded-3xl shadow-inner flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors duration-500 group-hover:rotate-6">
                <div className="group-hover:text-white transition-colors duration-500">
                  {point.icon}
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-blue-900 mb-4 group-hover:text-red-600 transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-500 font-semibold leading-relaxed text-sm">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Rodapé da Seção */}
        <div className="reveal bg-white rounded-[3rem] p-8 md:p-10 shadow-2xl border border-gray-100 flex flex-col items-center transform transition-transform hover:scale-[1.01]">
          <div className="flex flex-col sm:flex-row flex-wrap justify-start sm:justify-center gap-6 md:gap-12 mb-8 w-full sm:w-auto">
            <div className="flex items-center gap-3 transition-transform hover:scale-110">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <span className="font-bold text-blue-900 text-sm md:text-base">Atendimento em todo o RJ</span>
            </div>
            <div className="flex items-center gap-3 transition-transform hover:scale-110">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <span className="font-bold text-blue-900 text-sm md:text-base">Garantia total de 1 ano</span>
            </div>
            <div className="flex items-center gap-3 transition-transform hover:scale-110">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <span className="font-bold text-blue-900 text-sm md:text-base">Suporte Direto WhatsApp</span>
            </div>
          </div>

          <a 
            href={COMPANY.whatsappUrl}
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-2xl font-black text-base hover:bg-blue-900 transition-all shadow-xl hover:scale-105 active:scale-95 group"
          >
            FALAR COM NOSSO ESPECIALISTA 📲
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
