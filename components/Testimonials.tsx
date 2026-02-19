
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah K.",
    role: "Digital Artist",
    quote: "Revolutionized my workflow! The fluid interface actually helps me think better.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=f5d0fe"
  },
  {
    name: "Alex L.",
    role: "Product Designer",
    quote: "Finally, design made easy! It feels less like a tool and more like an extension of my hands.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=dcfce7"
  },
  {
    name: "Ben T.",
    role: "Art Director",
    quote: "Finally, design for the team. We haven't felt this synchronized in years.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ben&backgroundColor=fef3c7"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 px-6 bg-rose-50/20 dark:bg-black/20 transition-colors duration-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-light mb-6 tracking-tight dark:text-white">What Our Users Say</h2>
          <div className="h-1 w-24 bg-rose-200 dark:bg-rose-900 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-panel p-10 rounded-[3rem] text-center group hover:shadow-2xl transition-all duration-500 dark:bg-white/5 dark:border-white/10"
            >
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-rose-200 dark:bg-rose-900 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-24 h-24 rounded-full relative z-10 border-4 border-white dark:border-gray-800 shadow-lg mx-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <p className="text-2xl font-display font-light text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="space-y-1">
                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">— {t.name}</h4>
                <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
