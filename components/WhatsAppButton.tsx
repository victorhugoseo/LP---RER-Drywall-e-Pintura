
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={COMPANY.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageSquare className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
