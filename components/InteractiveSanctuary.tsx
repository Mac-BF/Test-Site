
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const InteractiveSanctuary: React.FC = () => {
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [vision, setVision] = useState<{ affirmation: string; visualization: string } | null>(null);

  const generateSanctuary = async () => {
    if (!mood.trim()) return;
    setLoading(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I feel: ${mood}. Describe a personalized 'Digital Sanctuary' for this emotion. Include a short 2-sentence poetic affirmation and a 3-sentence visual description of a room that would feel calming right now.`,
        config: {
          systemInstruction: "You are a biomorphic architect and emotional well-being expert. Your tone is incredibly serene, poetic, and nurturing. Use soft, sensory language.",
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              affirmation: { type: "STRING" },
              visualization: { type: "STRING" }
            },
            required: ["affirmation", "visualization"]
          }
        }
      });

      const data = JSON.parse(response.text);
      setVision(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="sanctuary" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-light mb-6 dark:text-white">Your Sanctuary <span className="text-amber-500 italic">Architecture</span></h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Tell us how you feel, and our AI will sculpt a personalized visual and emotional space for your current state.</p>
        </div>

        <div className="glass-panel rounded-[3rem] p-8 md:p-12 shadow-2xl dark:bg-white/5 dark:border-white/10">
          <div className="relative mb-8">
            <input 
              type="text" 
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="I feel curious and calm..."
              className="w-full bg-white/50 dark:bg-black/20 border-none rounded-full py-6 px-8 text-xl focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-900 outline-none transition-all pr-20 text-gray-800 dark:text-gray-200"
            />
            <button 
              onClick={generateSanctuary}
              disabled={loading || !mood.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {vision ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-10"
              >
                <div className="border-l-2 border-rose-200 dark:border-rose-900 pl-8 py-2">
                  <span className="text-xs uppercase tracking-widest text-gray-400 block mb-4">Affirmation</span>
                  <p className="text-2xl font-display italic text-gray-800 dark:text-gray-200 leading-relaxed">"{vision.affirmation}"</p>
                </div>
                
                <div className="bg-rose-50/50 dark:bg-rose-900/10 p-8 rounded-[2rem]">
                  <span className="text-xs uppercase tracking-widest text-gray-400 block mb-4">The Visualization</span>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">{vision.visualization}</p>
                </div>

                <div className="flex justify-center">
                  <button 
                    onClick={() => setVision(null)}
                    className="text-sm text-gray-400 dark:text-gray-500 hover:text-rose-500 transition-colors uppercase tracking-widest"
                  >
                    Reset Sanctuary
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-gray-300 dark:text-gray-700 gap-4"
              >
                <Sparkles className="w-12 h-12 opacity-20" />
                <p className="font-light italic">Waiting for your emotional seeds to bloom...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSanctuary;
