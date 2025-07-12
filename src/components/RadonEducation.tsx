
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, TrendingDown } from 'lucide-react';

const RadonEducation = () => {
  const stats = [
    {
      icon: AlertTriangle,
      number: '#2',
      label: 'Cause of lung cancer',
      description: 'Radon is the second leading cause of lung cancer after smoking'
    },
    {
      icon: Home,
      number: '1 in 3',
      label: 'MN homes test high',
      description: 'Minnesota has some of the highest radon levels in the nation'
    },
    {
      icon: TrendingDown,
      number: '95%+',
      label: 'Risk reduction',
      description: 'Professional mitigation reduces radon levels by 95% or more'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-[#7A0019] to-[#5A0013] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Radon Matters
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Radon is a colorless, odorless gas that poses serious health risks. 
            Here's what every Minnesota homeowner should know.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 mx-auto">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="text-5xl font-bold mb-2 text-white">
                {stat.number}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">
                {stat.label}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-white/90 mb-6">
            Don't wait to protect your family's health
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#quote');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-[#7A0019] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
          >
            Get Your Free Quote Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RadonEducation;
