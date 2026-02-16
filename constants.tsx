
import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  Award, 
  MapPin, 
  Layers, 
  Paintbrush, 
  Layout, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  VolumeX,
  Box,
  Palette,
  Sparkles
} from 'lucide-react';
import { ServiceItem, Testimonial, FAQItem } from './types.ts';

export const COMPANY = {
  name: "RER Drywall e Pintura",
  cnpj: "44.314.187/0001-73",
  address: "Rua Curitiba 1030 – Realengo – RJ",
  cities: ["Rio de Janeiro", "Nova Iguaçu", "Niterói", "Duque de Caxias", "Queimados"],
  whatsapp: "(21) 99935-3977",
  whatsappUrl: "https://wa.me/5521999353977",
  hours: "08h às 18h",
  instagram: "@rerdrywal",
  instagramUrl: "https://instagram.com/rerdrywal"
};

export const DIFFERENTIATORS = [
  { icon: <Award className="w-8 h-8 text-red-600" />, text: "Qualidade extrema no acabamento" },
  { icon: <Clock className="w-8 h-8 text-red-600" />, text: "Cumprimento rigoroso de prazos" },
  { icon: <MessageCircle className="w-8 h-8 text-red-600" />, text: "Atendimento direto via WhatsApp" },
  { icon: <Layers className="w-8 h-8 text-red-600" />, text: "Especialização em projetos de Drywall" },
  { icon: <MapPin className="w-8 h-8 text-red-600" />, text: "Atendimento em várias cidades do RJ" }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "teto",
    title: "Rebaixamento de Teto",
    description: "Design moderno com sancas e iluminação embutida para valorizar sua sala ou quarto.",
    features: ["Sancas", "Gesso Liso", "Iluminação"],
    ctaLabel: "Orçamento de Teto",
    isMain: true
  },
  {
    id: "paredes",
    title: "Paredes e Divisórias",
    description: "Crie novos ambientes sem sujeira e com rapidez usando sistemas de drywall estruturados.",
    features: ["Divisórias", "Separação de salas", "Closets"],
    ctaLabel: "Orçamento de Paredes"
  },
  {
    id: "isolamento",
    title: "Isolamento Acústico",
    description: "Conforto e privacidade total para seu escritório ou quarto, eliminando ruídos externos.",
    features: ["Lã de vidro/rocha", "Silêncio total", "Privacidade"],
    ctaLabel: "Orçamento de Acústico"
  },
  {
    id: "mobiliario",
    title: "Mobiliário e Nichos",
    description: "Nichos, balcões e closets personalizados integrados à arquitetura do seu imóvel.",
    features: ["Nichos", "Balcões", "Closets sob medida"],
    ctaLabel: "Orçamento de Nichos"
  },
  {
    id: "pintura",
    title: "Pintura Profissional",
    description: "Acabamento premium residencial e comercial com tratamento de umidade e infiltração.",
    features: ["Pintura Fina", "Tratamento umidade", "Interior/Exterior"],
    ctaLabel: "Orçamento de Pintura"
  },
  {
    id: "efeitos",
    title: "Efeitos Decorativos",
    description: "Efeito Marmorato, cimento queimado e texturas que transformam paredes em obras de arte.",
    features: ["Marmorato", "Textura", "Cimento Queimado"],
    ctaLabel: "Orçamento de Efeitos"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Carlos M.",
    location: "Niterói",
    rating: 5,
    content: "Excelente acabamento e cumpriram o prazo à risca. Fiz o teto da minha sala em drywall e ficou impecável."
  },
  {
    id: "2",
    name: "Mariana S.",
    location: "Rio de Janeiro",
    rating: 5,
    content: "Contratei para fazer as divisórias do meu escritório. Serviço limpo, rápido e o atendimento pelo WhatsApp foi muito ágil."
  },
  {
    id: "3",
    name: "Roberto F.",
    location: "Nova Iguaçu",
    rating: 5,
    content: "O efeito marmorato que fizeram na minha parede superou as expectativas. Profissionais de confiança!"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Como faço para solicitar um orçamento?",
    answer: "Você pode solicitar seu orçamento de forma rápida pelo WhatsApp. Basta enviar uma mensagem com algumas informações sobre o serviço desejado que retornamos com as orientações."
  },
  {
    id: "faq2",
    question: "O orçamento é gratuito?",
    answer: "Sim. A RER Drywall e Pintura realiza orçamento sem compromisso, com avaliação clara e transparente para você saber exatamente o que será executado."
  },
  {
    id: "faq3",
    question: "Vocês atendem urgências?",
    answer: "O atendimento é realizado mediante agendamento, mas buscamos sempre encaixar solicitações com prioridade conforme a disponibilidade da equipe."
  },
  {
    id: "faq4",
    question: "Em quais cidades vocês atendem?",
    answer: "Atendemos Rio de Janeiro, Nova Iguaçu, Niterói, Duque de Caxias e Queimados. Caso esteja em outra região próxima, entre em contato para verificar disponibilidade."
  },
  {
    id: "faq5",
    question: "Quanto tempo leva para iniciar o serviço?",
    answer: "Após a aprovação do orçamento, alinhamos a data de início conforme agenda e complexidade do projeto. Prezamos por organização e cumprimento de prazos."
  },
  {
    id: "faq6",
    question: "Vocês oferecem garantia no serviço?",
    answer: "Sim. Trabalhamos com foco em qualidade e acabamento profissional, garantindo segurança e satisfação total no resultado final."
  }
];
