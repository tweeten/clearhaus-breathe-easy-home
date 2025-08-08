import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuccessModalProps {
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose, formData }) => {
  const handleClose = () => {
    onClose();
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Icon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Quote Request Submitted!
          </h2>
          <p className="text-gray-600">
            Thank you, {formData.name}! We've received your request and will contact you within 2 hours.
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#7A0019]" />
            What happens next?
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>We'll review your property details and radon information</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Our certified technician will call you within 2 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>We'll schedule a free consultation at your convenience</span>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-200 pt-4 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Need immediate assistance?</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#7A0019]" />
              <span className="text-gray-700">(641) 251-4510</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#7A0019]" />
              <span className="text-gray-700">tyler@clearhausmn.com</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleClose}
            className="flex-1 bg-[#7A0019] hover:bg-[#5A0013] text-white"
          >
            Return to Homepage
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SuccessModal; 