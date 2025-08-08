
import React, { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, TrendingDown } from 'lucide-react';

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

const RadonEducation = memo(() => {
  const scrollToQuote = useCallback(() => {
    const element = document.querySelector('#quote');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-[#7A0019] to-[#5A0013] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Radon Mitigation Matters
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Radon is a colorless, odorless gas that poses serious health risks. 
            Here's what every Minnesota homeowner should know.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
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
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </section>
  );
});

RadonEducation.displayName = 'RadonEducation';

export default RadonEducation;
