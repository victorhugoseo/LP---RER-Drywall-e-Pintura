
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import WhyUs from './components/WhyUs.tsx';
import Services from './components/Services.tsx';
import Benefits from './components/Benefits.tsx';
import Process from './components/Process.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import { COMPANY } from './constants.tsx';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900">
      <Header />
      
      <main>
        <Hero />
        
        <WhyUs />
        
        <Services />
        
        <Benefits />
        
        <Process />
        
        <Testimonials />
        
        <FAQ />
        
        {/* CTA FINAL FORTE */}
        <section className="py-12 bg-blue-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-full -ml-32 -mb-32"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Seu projeto merece qualidade profissional. <br />
              <span className="text-red-500">Fale agora com a RER Drywall e Pintura.</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-medium">
              Não perca tempo e dinheiro com amadores. Tenha a garantia de um serviço de alto padrão e cumprimento de prazos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={COMPANY.whatsappUrl}
                className="w-full sm:w-auto bg-green-500 text-white px-10 py-5 rounded-full text-xl font-black shadow-2xl hover:bg-green-600 transition-all flex items-center justify-center hover:scale-105 active:scale-95 animate-pulse"
              >
                SOLICITAR ORÇAMENTO PELO WHATSAPP
                <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </div>
            <p className="mt-8 text-blue-300 font-bold uppercase tracking-widest text-sm">
              Atendimento de Segunda a Sexta: {COMPANY.hours}
            </p>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Buttons */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
