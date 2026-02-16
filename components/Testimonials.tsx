
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Badge de Destaque Google */}
          <div className="flex items-center justify-center gap-2 mb-4 bg-white py-2 px-5 rounded-full border border-gray-200 w-fit mx-auto shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
            <div className="flex text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-blue-900 font-black text-sm uppercase tracking-tight">Avaliado com 5 Estrelas no Google</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4">O que nossos clientes dizem</h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto text-lg">
            A satisfação dos nossos clientes é o resultado do nosso compromisso com a perfeição em cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div>
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="italic text-gray-700 font-medium leading-relaxed mb-8 text-lg">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center text-white font-black text-xl mr-4 uppercase shadow-lg group-hover:bg-red-600 transition-colors">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-blue-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
