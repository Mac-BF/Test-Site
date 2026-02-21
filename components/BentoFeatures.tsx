
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sun, Moon, Cloud, Zap, Shield, Wand2, Fingerprint } from 'lucide-react';

const features = [
  {
    title: "Circadian Transitions",
    desc: "The interface gently shifts its color palette to match your local sun cycle, reducing eye strain and aligning with your biology.",
    icon: <Sun className="w-6 h-6" />,
    color: "bg-amber-50 dark:bg-amber-900/10 text-amber-600 dark:text-amber-400",
    size: "col-span-1 md:col-span-2"
  },
  {
    title: "Tactile Breathing",
    desc: "Visual pulses that guide your nervous system into coherence through rhythmic interactions.",
    icon: <Cloud className="w-6 h-6" />,
    color: "bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400",
    size: "col-span-1"
  },
  {
    title: "Soft Privacy",
    desc: "Zero tracking. Your emotional data never leaves your device, encrypted at the source.",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400",
    size: "col-span-1"
  },
  {
    title: "Emotional Mapping",
    desc: "A biomorphic dashboard that visualizes your well-being journey over time through fluid data art.",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-rose-50 dark:bg-rose-900/10 text-rose-600 dark:text-rose-400",
    size: "col-span-1 md:col-span-2"
  },
  {
    title: "Generative Canvas",
    desc: "Adaptive design tools that align with your style and mood automatically.",
    icon: <Wand2 className="w-6 h-6" />,
    color: "bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400",
    size: "col-span-1"
  },
  {
    title: "Biometric Sync",
    desc: "Optional sync with wearables to adjust the sanctuary layout based on real-time heart rate variability.",
    icon: <Fingerprint className="w-6 h-6" />,
    color: "bg-indigo-50 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-400",
    size: "col-span-1"
  }
];

const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl text-left">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6 dark:text-white">The Anatomy of <span className="text-emerald-500 italic">Serenity</span></h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">Traditional apps demand attention. We respect it. Every feature is built to serve your peace, not compete for your focus.</p>
          </div>
          <div className="flex gap-4">
             {/* Decorative indicator */}
             <div className="h-px w-20 bg-gray-200 dark:bg-gray-800 mb-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[3rem] ${f.color} flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-500 ${f.size}`}
            >
              <div className="mb-12 flex justify-between items-start">
                <div className="p-4 bg-white dark:bg-gray-800/50 rounded-2xl shadow-sm group-hover:rotate-6 transition-transform">
                  {f.icon}
                </div>
                <Zap className="w-5 h-5 opacity-0 group-hover:opacity-30 transition-opacity" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-medium mb-4">{f.title}</h3>
                <p className="opacity-80 leading-relaxed font-light">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
