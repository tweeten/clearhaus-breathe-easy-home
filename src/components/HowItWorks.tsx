
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Search, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Test & Assess',
    description: 'We conduct comprehensive radon testing and assess your home\'s unique mitigation needs.',
    step: '01'
  },
  {
    icon: Wrench,
    title: 'Install & Seal',
    description: 'Professional installation of mitigation systems with proper sealing and ventilation.',
    step: '02'
  },
  {
    icon: CheckCircle,
    title: 'Verify & Monitor',
    description: 'Post-installation testing to ensure effective radon reduction and ongoing monitoring.',
    step: '03'
  }
];

const HowItWorks = memo(() => {
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
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven 3-step process ensures effective radon mitigation for your Minnesota home.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#7A0019] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-[#7A0019]/10 rounded-full mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-[#7A0019]" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#7A0019]/20 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

HowItWorks.displayName = 'HowItWorks';

export default HowItWorks;
