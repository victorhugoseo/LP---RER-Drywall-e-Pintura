
import React, { useState } from 'react';
import { Settings, Image as ImageIcon, Check, RefreshCcw, Sparkles, Loader2, Send } from 'lucide-react';
import { IMAGES } from '../constants.tsx';
import { GoogleGenAI } from "@google/genai";

interface AdminToolsProps {
  currentImage: string;
  onImageChange: (newUrl: string) => void;
}

const AdminTools: React.FC<AdminToolsProps> = ({ currentImage, onImageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'manual' | 'ai'>('ai');
  const [urlInput, setUrlInput] = useState(currentImage);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    onImageChange(urlInput);
    setIsOpen(false);
  };

  const handleReset = () => {
    const defaultImg = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200";
    setUrlInput(defaultImg);
    onImageChange(defaultImg);
  };

  const handleAiAction = async () => {
    if (!aiPrompt.trim()) return;

    setIsGenerating(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let contents: any;
      
      // Se houver uma imagem atual e o usuário estiver pedindo uma "edição" (detectado por palavras chave ou apenas por padrão)
      // Vamos tentar baixar a imagem atual para enviar ao modelo como base64
      // Nota: Muitas imagens do Unsplash podem ter problemas de CORS ao tentar fetch direto. 
      // Por simplicidade e robustez técnica, se o prompt for de criação, enviamos apenas texto.
      // Se o usuário quiser editar, tentamos passar a imagem.
      
      const isEditing = aiPrompt.toLowerCase().includes('adicione') || 
                        aiPrompt.toLowerCase().includes('remova') || 
                        aiPrompt.toLowerCase().includes('filtro') ||
                        aiPrompt.toLowerCase().includes('mude');

      if (isEditing && currentImage.startsWith('data:image')) {
        // Se já for uma imagem data-uri (gerada anteriormente), enviamos para edição
        const base64Data = currentImage.split(',')[1];
        contents = {
          parts: [
            { inlineData: { data: base64Data, mimeType: 'image/png' } },
            { text: aiPrompt }
          ]
        };
      } else {
        // Geração pura
        contents = { parts: [{ text: `Gere uma imagem profissional de alta qualidade: ${aiPrompt}` }] };
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: contents,
      });

      const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (part?.inlineData) {
        const newImageData = `data:image/png;base64,${part.inlineData.data}`;
        setUrlInput(newImageData);
        onImageChange(newImageData);
        setAiPrompt('');
      } else {
        throw new Error("Não foi possível gerar a imagem.");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao processar com IA. Verifique sua conexão ou tente outro prompt.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-900/80 backdrop-blur-md text-white p-4 rounded-full shadow-2xl border border-white/10 hover:bg-slate-800 transition-all hover:rotate-90 group"
        title="Configurações de Imagem"
      >
        <Settings className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {isOpen && (
        <div className="absolute bottom-20 left-0 w-80 bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 p-6 animate-fade-up">
          <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
            <button 
              onClick={() => setActiveTab('ai')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-black transition-all ${activeTab === 'ai' ? 'bg-white shadow-sm text-red-600' : 'text-gray-500'}`}
            >
              <Sparkles className="w-3 h-3" /> IA MAGIC
            </button>
            <button 
              onClick={() => setActiveTab('manual')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-black transition-all ${activeTab === 'manual' ? 'bg-white shadow-sm text-red-600' : 'text-gray-500'}`}
            >
              <ImageIcon className="w-3 h-3" /> MANUAL
            </button>
          </div>

          {activeTab === 'ai' ? (
            <div className="space-y-4">
              <div className="bg-red-50 p-3 rounded-2xl border border-red-100">
                <p className="text-red-900 text-[10px] font-bold uppercase tracking-tight mb-2 flex items-center gap-1">
                   <Sparkles className="w-3 h-3" /> Gemini 2.5 Flash Image
                </p>
                <textarea 
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Ex: Profissional instalando drywall em uma sala moderna com teto rebaixado..."
                  className="w-full p-3 bg-white border border-red-200 rounded-xl text-xs min-h-[100px] focus:ring-2 focus:ring-red-500 outline-none resize-none font-medium text-gray-700"
                />
              </div>

              {error && <p className="text-[10px] text-red-500 font-bold text-center">{error}</p>}

              <button 
                onClick={handleAiAction}
                disabled={isGenerating || !aiPrompt.trim()}
                className="w-full bg-red-600 text-white py-4 rounded-2xl font-black text-xs flex items-center justify-center gap-2 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-200"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    GERANDO...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    GERAR IMAGEM COM IA
                  </>
                )}
              </button>
              
              <p className="text-[9px] text-gray-400 text-center font-bold uppercase italic">
                Tente: "Adicione um filtro retrô" ou "Gere um profissional trabalhando"
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">URL da Imagem</label>
                <input 
                  type="text" 
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://exemplo.com/imagem.jpg"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs mb-4 focus:ring-2 focus:ring-blue-500 outline-none font-medium"
                />
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={handleSave}
                  className="flex-1 bg-blue-900 text-white py-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 hover:bg-blue-800"
                >
                  <Check className="w-4 h-4" /> SALVAR
                </button>
                <button 
                  onClick={handleReset}
                  className="bg-gray-100 text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-200 transition-colors"
                  title="Resetar para padrão"
                >
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
          
          <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
            <div className="flex -space-x-2">
               <div className="w-6 h-6 rounded-full bg-red-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-red-600">AI</div>
               <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-600">v2</div>
            </div>
            <p className="text-[9px] text-gray-300 font-bold uppercase tracking-widest">
              RER Admin Panel v1.5
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTools;
