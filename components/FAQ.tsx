
import React, { useState } from 'react';
import { FAQS } from '../constants.tsx';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 3]);

  const toggleIndex = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Dúvidas Frequentes</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            {FAQS.slice(0, 3).map((faq, index) => {
              const isOpen = openIndices.includes(index);
              return (
                <div key={faq.id} className="reveal border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <button className="w-full flex items-center justify-between p-5 text-left bg-white" onClick={() => toggleIndex(index)}>
                    <span className={`font-bold transition-colors ${isOpen ? 'text-red-600' : 'text-blue-900'}`}>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-red-600' : 'text-gray-400'}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="p-5 bg-blue-50/50 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-4">
            {FAQS.slice(3, 6).map((faq, index) => {
              const actualIndex = index + 3;
              const isOpen = openIndices.includes(actualIndex);
              return (
                <div key={faq.id} className="reveal border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <button className="w-full flex items-center justify-between p-5 text-left bg-white" onClick={() => toggleIndex(actualIndex)}>
                    <span className={`font-bold transition-colors ${isOpen ? 'text-red-600' : 'text-blue-900'}`}>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-red-600' : 'text-gray-400'}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="p-5 bg-blue-50/50 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
