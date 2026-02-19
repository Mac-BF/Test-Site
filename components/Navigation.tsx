
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  opacity: any;
  isNightMode: boolean;
  toggleNightMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen, opacity, isNightMode, toggleNightMode }) => {
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <motion.nav 
        style={{ opacity }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 flex items-center justify-between pointer-events-auto"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-400 to-emerald-400 animate-pulse shadow-lg shadow-rose-100 dark:shadow-emerald-900/20" />
          <span className="text-2xl font-display font-medium tracking-tight text-gray-900 dark:text-white">Aura Bloom</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-rose-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <button 
            onClick={toggleNightMode}
            className="p-3 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-amber-300 rounded-full hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
            aria-label="Toggle Night Mode"
          >
            {isNightMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button className="px-8 py-3 bg-gray-900 dark:bg-rose-500 text-white rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-rose-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gray-200 dark:shadow-rose-900/20">
            Sign Up
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleNightMode}
            className="p-2 text-gray-600 dark:text-amber-300"
          >
            {isNightMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-gray-900 dark:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[60] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl p-8 flex flex-col"
          >
            <div className="flex justify-end mb-20">
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-900 dark:text-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-10 items-center">
              {['Features', 'Pricing', 'Testimonials', 'Sign Up'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-5xl font-display font-light text-gray-900 dark:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
