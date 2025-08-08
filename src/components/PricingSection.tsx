import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const pricingTiers = [
    {
      name: 'Mitigation System, Single Family Home',
      price: '$1,500 - $2,000',
      description: 'Standard radon mitigation system installed on the lowest level of your home',
      features: [
        'Sub-slab depressurization system',
        'Schedule 40PVC pipe installation',
        'Basic Radon fan (3" or 4")',
        'Electrical connection',
        'System labeling',
        'Post-installation testing',
        'Permit Fees Included'
      ],
      popular: false
    },
    
    {
      name: 'Mitigation System, Multi-Family Home',
      price: '$2,000 - $3,000',
      description: 'Specialized multi-family radon mitigation solutions',
      features: [
        'Sub-slab depressurization system',
        'Schedule 40PVC pipe installation',
        'High Performance Radon Fan',
        'Electrical connection',
        'System labeling',
        'Post-installation testing',
        'Permit Fees Included'
      ],
      popular: false
    },

    {
      name: 'Commercial Radon Mitigation Systems',
      price: 'Contact Us',
      description: 'Custom solutions for commercial applications',
      features: [
        'Multiple extraction points',
        'Advanced routing systems',
        'Additional sealing work',
        'Multiple fan systems',
        'Aesthetic considerations',
        'Complex foundation types',
        'Premium warranty'
      ],
      popular: false
    }
  ];

  const scrollToQuote = () => {
    const element = document.querySelector('#quote');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees, no surprises. Professional radon mitigation pricing that fits your needs and budget.
          </p>
        </motion.div>

        <motion.div
          className="text-center bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Every Installation Includes:
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#7A0019] mr-2" />
                <span>Free initial consultation</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#7A0019] mr-2" />
                <span>Post-installation testing</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#7A0019] mr-2" />
                <span>System monitoring gauge</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#7A0019] mr-2" />
                <span>Warranty coverage</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#7A0019] mr-2" />
                <span>Code-compliant installation</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-[#7A0019] mr-2" />
                <span>Ongoing support</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                tier.popular ? 'ring-2 ring-[#7A0019] scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: tier.popular ? 0 : -5 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#7A0019] text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tier.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-[#7A0019]">
                    {tier.price}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-[#7A0019] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToQuote}
                  className="w-full py-3 rounded-lg transition-all duration-200 bg-[#7A0019] hover:bg-[#5A0013] text-white"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
