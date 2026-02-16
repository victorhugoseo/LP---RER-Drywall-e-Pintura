
import React from 'react';
import { ArrowRight, Star, CheckCircle, Clock } from 'lucide-react';
import { COMPANY } from '../constants.tsx';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background Image com Overlay de Transparência Leve */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000" 
          alt="Background Drywall" 
          className="w-full h-full object-cover opacity-30 transition-transform duration-[10s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Lado Esquerdo: Conteúdo Textual - Centralizado no Mobile */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            
            {/* Badge de 5 Estrelas - Entrada Animada */}
            <div className="animate-fade-up opacity-0 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl mb-10 shadow-xl mx-auto lg:mx-0" style={{animationDelay: '100ms'}}>
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-white text-xs font-black uppercase tracking-wider">
                Avaliação 5.0 no Google
              </span>
            </div>

            {/* Headline - Entrada Animada */}
            <h1 className="animate-fade-up opacity-0 text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-white" style={{animationDelay: '300ms'}}>
              <span className="block opacity-90">Referência em</span>
              <span className="text-red-500 block drop-shadow-sm">Drywall e Pintura</span>
              <span className="block opacity-90">no Rio de Janeiro.</span>
            </h1>

            {/* Descrição - Entrada Animada */}
            <div className="animate-fade-up opacity-0 space-y-6 mb-12" style={{animationDelay: '500ms'}}>
              <p className="text-slate-200 text-lg md:text-xl font-bold leading-relaxed max-w-xl mx-auto lg:mx-0">
                Entregamos acabamento de elite com <span className="text-red-500 underline decoration-2 underline-offset-4">precisão técnica</span> e rapidez para projetos residenciais e comerciais.
              </p>
              
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <div className="flex items-center gap-3 text-white font-extrabold text-base md:text-lg transition-transform hover:translate-x-2 duration-300">
                  <div className="bg-green-500/20 p-1.5 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  Orçamento gratuito e detalhado
                </div>
                <div className="flex items-center gap-3 text-white font-extrabold text-base md:text-lg transition-transform hover:translate-x-2 duration-300">
                  <div className="bg-green-500/20 p-1.5 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  Mão de obra certificada e ágil
                </div>
              </div>
            </div>

            {/* Botão Único */}
            <div className="animate-fade-up opacity-0 flex flex-col sm:flex-row items-center justify-center lg:justify-start" style={{animationDelay: '700ms'}}>
              <a 
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-2xl text-base font-black shadow-[0_20px_50px_-12px_rgba(220,38,38,0.5)] hover:bg-red-500 transition-all flex items-center justify-center hover:scale-105 active:scale-95"
              >
                SOLICITAR ORÇAMENTO AGORA
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* Lado Direito: Imagem com Efeito de Flutuação */}
          <div className="w-full lg:w-1/2 relative animate-fade-up opacity-0" style={{animationDelay: '400ms'}}>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_0_80px_-20px_rgba(220,38,38,0.3)] border-[8px] border-white/5 group">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
                alt="Execução de Drywall Premium" 
                className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Card Flutuante */}
              <div className="absolute bottom-8 left-8 right-8 bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex items-center gap-5 border border-white/10 transform transition-transform duration-500 hover:-translate-y-2 text-left">
                <div className="bg-red-600 p-4 rounded-2xl text-white shadow-lg shadow-red-900/50 animate-pulse">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-white font-black text-lg uppercase tracking-tight leading-none mb-1">
                    Início Imediato
                  </h4>
                  <p className="text-slate-400 font-bold text-sm">
                    Equipes prontas para sua obra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
