import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Phone, Mail, RefreshCw, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorModalProps {
  onClose: () => void;
  onRetry: () => void;
  error: string;
  formData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };
}

const ErrorModal: React.FC<ErrorModalProps> = ({ onClose, onRetry, error, formData }) => {
  const handleClose = () => {
    onClose();
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetry = () => {
    onRetry();
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
        {/* Error Icon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Submission Error
          </h2>
          <p className="text-gray-600">
            We encountered an issue processing your request. Don't worry - we've got you covered!
          </p>
        </div>

        {/* Error Details */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-red-800 mb-2">What happened?</h3>
          <p className="text-sm text-red-700 mb-3">
            {error || "Our system is temporarily unavailable. This is likely a temporary issue."}
          </p>
          <p className="text-sm text-red-700">
            Your information is safe and hasn't been lost.
          </p>
        </div>

        {/* Alternative Contact Methods */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Contact us directly:</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#7A0019]" />
              <div>
                <p className="font-medium text-gray-900">Call us now</p>
                <p className="text-sm text-gray-600">(641) 251-4510</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#7A0019]" />
              <div>
                <p className="font-medium text-gray-900">Email us</p>
                <p className="text-sm text-gray-600">tyler@clearhausmn.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleRetry}
            variant="outline"
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button
            onClick={handleClose}
            className="flex-1 bg-[#7A0019] hover:bg-[#5A0013] text-white"
          >
            Contact Directly
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ErrorModal; 