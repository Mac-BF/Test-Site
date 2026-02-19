
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: "Seed",
    price: "$0",
    description: "Perfect for exploring the fluid canvas.",
    features: ["Organic UI access", "3 AI-generated sanctuaries", "Basic emotional mapping", "Community support"],
    button: "Get Started",
    popular: false,
    color: "bg-emerald-50 dark:bg-emerald-900/10"
  },
  {
    name: "Bloom",
    price: "$19",
    description: "Unlock the full potential of your rhythm.",
    features: ["Unlimited AI sanctuaries", "Circadian theme engine", "Advanced data visualization", "Early access to new tools", "Priority rendering"],
    button: "Start Free Trial",
    popular: true,
    color: "bg-rose-50 dark:bg-rose-900/20"
  },
  {
    name: "Ecosystem",
    price: "$49",
    description: "For creative studios and teams.",
    features: ["Multi-user collaboration", "Team emotional sync", "Custom organic branding", "Dedicated support coach", "API access"],
    button: "Contact Sales",
    popular: false,
    color: "bg-amber-50 dark:bg-amber-900/10"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-widest text-rose-500 bg-rose-50 dark:bg-rose-900/20 rounded-full uppercase">
              Transparent & Flexible
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-light mb-6 dark:text-white tracking-tight">
              Pricing that <span className="text-rose-500 italic">Breathes</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light">
              Choose the rhythm that suits your creative journey. No hidden costs, just growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-[4rem] glass-panel dark:bg-white/5 dark:border-white/10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 ${plan.popular ? 'border-2 border-rose-200 dark:border-rose-500/30' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-rose-500 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}
              
              <div>
                <div className="mb-8">
                  <h3 className="text-3xl font-display font-medium mb-2 dark:text-white">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-display font-light dark:text-white">{plan.price}</span>
                    <span className="text-gray-400 font-light">/month</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed italic">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-12">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full py-5 rounded-3xl text-lg font-medium transition-all hover:scale-[1.02] active:scale-95 shadow-xl ${
                plan.popular 
                ? 'bg-rose-500 text-white shadow-rose-200 dark:shadow-rose-900/20 hover:bg-rose-600' 
                : 'bg-gray-900 dark:bg-white/10 text-white shadow-gray-200 dark:shadow-black/20 hover:bg-gray-800 dark:hover:bg-white/20'
              }`}>
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
