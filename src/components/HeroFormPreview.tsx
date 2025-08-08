import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, ArrowRight, CheckCircle } from 'lucide-react';

const HeroFormPreview: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Scroll to full form
      const quoteSection = document.getElementById('quote');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToForm = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 max-w-md mx-auto"
    >
      {!isSubmitted ? (
        <>
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-[#7A0019]" />
              <h3 className="font-semibold text-gray-900">Get Started in 30 Seconds</h3>
            </div>
            <p className="text-sm text-gray-600">
              Quick quote form - no commitment required
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-base py-3 px-4 border-gray-300 focus:border-[#7A0019] focus:ring-[#7A0019]"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-[#7A0019] hover:bg-[#5A0013] text-white py-3 text-base rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              Start Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-500" />
              Free
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-500" />
              No Obligation
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-500" />
              2 Min
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">Great! Let's Continue</h3>
          <p className="text-sm text-gray-600 mb-4">
            We'll need a few more details to provide your personalized quote.
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-[#7A0019] hover:bg-[#5A0013] text-white py-2 px-4 text-sm rounded-lg"
          >
            Complete Form
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default HeroFormPreview; 