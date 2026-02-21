
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Wind, Leaf, Heart, ArrowRight, Brain, Palette, Users, Twitter, Instagram, Globe, Video } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import InteractiveSanctuary from './components/InteractiveSanctuary';
import BentoFeatures from './components/BentoFeatures';
import Navigation from './components/Navigation';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  // Handle Night Mode class toggle
  useEffect(() => {
    if (isNightMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isNightMode]);

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-rose-100 selection:text-rose-900 transition-colors duration-700 bg-[#fdfbf7] dark:bg-[#0f172a]">
      <FluidBackground isNightMode={isNightMode} />
      
      <Navigation 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        opacity={headerOpacity}
        isNightMode={isNightMode}
        toggleNightMode={() => setIsNightMode(!isNightMode)}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 overflow-hidden">
        {/*https://naizooaeqziukaetimhe.supabase.co/storage/v1/object/sign/Web%20Creation%20Media/Office_Video_Generation_Request.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMTU2NjIwYS05ZjJhLTQwNTItOTM5OC1hNGJhMzRhNDJkNGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIgQ3JlYXRpb24gTWVkaWEvT2ZmaWNlX1ZpZGVvX0dlbmVyYXRpb25fUmVxdWVzdC5tcDQiLCJpYXQiOjE3NzE3MDUzNTgsImV4cCI6MTc3NDI5NzM1OH0.mcEEUDKCKVlHtrqadRmbLmwIq06YQff6d45-YF__aog*/}
        

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-display font-light tracking-tight leading-[1.1] text-gray-900 dark:text-white mb-12">
              Unlock Your <span className="text-rose-500 italic font-normal">Creative</span> Potential
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light mb-12 max-w-xl leading-relaxed">
              Effortless design tools powered by intelligent systems, shaped for the human spirit.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-4">
              <button className="px-10 py-5 bg-gray-900 dark:bg-rose-500 text-white rounded-2xl text-lg font-medium hover:bg-gray-800 dark:hover:bg-rose-600 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gray-300 dark:shadow-rose-900/20">
                Start Free Trial
              </button>
              <button className="px-10 py-5 bg-white/60 dark:bg-white/10 backdrop-blur-md text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-800 rounded-2xl text-lg font-medium hover:bg-white dark:hover:bg-white/20 hover:shadow-lg transition-all hover:scale-105 active:scale-95">
                Watch Demo
              </button>
            </div>
            <p className="text-sm text-gray-400 italic pl-2">No credit card required</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <video
              src="https://naizooaeqziukaetimhe.supabase.co/storage/v1/object/sign/Web%20Creation%20Media/Office_Video_Generation_Request.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMTU2NjIwYS05ZjJhLTQwNTItOTM5OC1hNGJhMzRhNDJkNGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIgQ3JlYXRpb24gTWVkaWEvT2ZmaWNlX1ZpZGVvX0dlbmVyYXRpb25fUmVxdWVzdC5tcDQiLCJpYXQiOjE3NzE3MDUzNTgsImV4cCI6MTc3NDI5NzM1OH0.mcEEUDKCKVlHtrqadRmbLmwIq06YQff6d45-YF__aog"
            
              controls
              className="rounded-3xl shadow-2xl w-full max-w-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Icons Row (Transition Section) */}
      <section className="py-24 px-6 border-b border-gray-50 dark:border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          <div className="flex flex-col items-center gap-6 group">
            <div className="w-20 h-20 rounded-full bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center text-rose-500 dark:text-rose-400 group-hover:scale-110 transition-transform shadow-inner">
              <Brain className="w-10 h-10" />
            </div>
            <span className="text-xl font-display text-gray-700 dark:text-gray-300 font-light text-center">Intelligent Ideas</span>
          </div>
          <div className="flex flex-col items-center gap-6 group">
            <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform shadow-inner">
              <Palette className="w-10 h-10" />
            </div>
            <span className="text-xl font-display text-gray-700 dark:text-gray-300 font-light text-center">Intuitive Design Tools</span>
          </div>
          <div className="flex flex-col items-center gap-6 group">
            <div className="w-20 h-20 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform shadow-inner">
              <Users className="w-10 h-10" />
            </div>
            <span className="text-xl font-display text-gray-700 dark:text-gray-300 font-light text-center">Collaborate with Ease</span>
          </div>
        </div>
      </section>

      {/* Philosophy / Features Bento */}
      <BentoFeatures />

      {/* Interactive Sanctuary Tool */}
      <InteractiveSanctuary />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <section className="py-40 px-6 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel p-16 md:p-24 rounded-[4rem] relative shadow-2xl dark:bg-white/5 dark:border-white/10"
          >
            <h2 className="text-5xl md:text-7xl font-display font-light mb-8 dark:text-white">Ready to Bloom?</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
              Join thousands of creators who have found their rhythm with Aura Bloom.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-rose-500 text-white rounded-2xl text-xl font-medium hover:bg-rose-600 transition-all shadow-xl shadow-rose-200 dark:shadow-rose-900/20">
                Claim 14-Day Trial
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 bg-white/40 dark:bg-black/20 backdrop-blur-md border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-400 to-emerald-400" />
                <span className="text-2xl font-display font-medium tracking-tight dark:text-white">Aura Bloom</span>
              </div>
              <p className="text-gray-400 dark:text-gray-500 font-light max-w-xs leading-relaxed">
                Nurturing digital growth through organic design and empathetic intelligence.
              </p>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-widest mb-8">Company</h4>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-light">
                <li><a href="#" className="hover:text-rose-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Ethics</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Newsroom</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-widest mb-8">Support</h4>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-light">
                <li><a href="#" className="hover:text-rose-500 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-widest mb-8">Follow Us</h4>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-rose-500 transition-all hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-rose-500 transition-all hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-rose-500 transition-all hover:scale-110">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 dark:text-gray-500 text-sm font-light italic">Builds trust through every interaction.</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm">© 2024 Aura Bloom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
