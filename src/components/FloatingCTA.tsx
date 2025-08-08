import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, X } from 'lucide-react';
import { throttle } from '@/utils/performance';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(
    throttle(() => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Show floating CTA after scrolling past hero section
        if (scrollPosition > heroBottom && !isDismissed) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    }, 100), // Throttle to 100ms
    [isDismissed]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToQuote = useCallback(() => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Dismiss the floating CTA when "Get Quote" is clicked
    setIsDismissed(true);
    setIsVisible(false);
  }, []);

  const dismissCTA = useCallback(() => {
    setIsDismissed(true);
    setIsVisible(false);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-sm">
            {/* Close Button */}
            <button
              onClick={dismissCTA}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* CTA Content */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-[#7A0019]" />
                <h4 className="font-semibold text-gray-900">Get Your Free Quote</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Protect your family from radon. Get a free consultation in under 2 minutes.
              </p>
              
              <Button
                onClick={scrollToQuote}
                className="w-full bg-[#7A0019] hover:bg-[#5A0013] text-white text-sm py-2"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA; 