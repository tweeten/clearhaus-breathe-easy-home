
import React from 'react';
import { motion } from 'framer-motion';

const QuoteFormHeader = () => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        Get Your Free Quote
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Ready to protect your family? Get a personalized quote for your radon mitigation system.
      </p>
    </motion.div>
  );
};

export default QuoteFormHeader;
