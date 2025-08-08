
import React, { memo, useCallback, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Shield, AlertCircle, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import PersonalInfoFields from './PersonalInfoFields';
import PropertyInfoFields from './PropertyInfoFields';
import RadonInfoFields from './RadonInfoFields';
import FormBreadcrumb from './FormBreadcrumb';
import SuccessModal from './SuccessModal';
import ErrorModal from './ErrorModal';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  radonLevel: string;
  foundationType: string;
  radonTesting: string;
  additionalInfo: string;
}

const QuoteFormContainer = memo(() => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<FormData>();
  const { toast } = useToast();

  const watchedFields = watch();
  
  // Memoize progress calculation to prevent unnecessary recalculations
  const progress = useMemo(() => {
    const requiredFields = [
      watchedFields.name,
      watchedFields.email, 
      watchedFields.phone,
      watchedFields.address,
      watchedFields.city,
      watchedFields.zipCode,
      watchedFields.foundationType
    ];
    const completedFields = requiredFields.filter(Boolean).length;
    return (completedFields / requiredFields.length) * 100;
  }, [watchedFields.name, watchedFields.email, watchedFields.phone, watchedFields.address, watchedFields.city, watchedFields.zipCode, watchedFields.foundationType]);

  // Memoize step validation to prevent unnecessary recalculations
  const stepValidation = useMemo(() => {
    const step1Valid = watchedFields.name && watchedFields.email && watchedFields.phone;
    const step2Valid = watchedFields.address && watchedFields.city && watchedFields.zipCode && watchedFields.foundationType;
    const step3Valid = true; // Step 3 is optional
    
    return { step1Valid, step2Valid, step3Valid };
  }, [watchedFields.name, watchedFields.email, watchedFields.phone, watchedFields.address, watchedFields.city, watchedFields.zipCode, watchedFields.foundationType]);

  // Simulate database submission with potential errors
  const submitToDatabase = useCallback(async (data: FormData): Promise<{ success: boolean; error?: string }> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate random database failures (10% chance for testing)
    const shouldFail = Math.random() < 0.1;
    
    if (shouldFail) {
      // Simulate different types of database errors
      const errorTypes = [
        "Database connection timeout. Please try again.",
        "Server is temporarily unavailable.",
        "Network error occurred while saving your data.",
        "Database service is experiencing issues."
      ];
      const randomError = errorTypes[Math.floor(Math.random() * errorTypes.length)];
      throw new Error(randomError);
    }
    
    // Simulate successful submission
    console.log('Form submitted to database:', data);
    return { success: true };
  }, []);

  const onSubmit = useCallback(async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const result = await submitToDatabase(data);
      
      if (result.success) {
        setShowSuccessModal(true);
        // Don't reset form immediately - let user see success modal first
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [submitToDatabase]);

  const handleSuccessModalClose = useCallback(() => {
    setShowSuccessModal(false);
    reset();
    setCurrentStep(1);
  }, [reset]);

  const handleErrorModalClose = useCallback(() => {
    setShowErrorModal(false);
    setErrorMessage('');
  }, []);

  const handleRetry = useCallback(() => {
    setShowErrorModal(false);
    setErrorMessage('');
    // Re-submit the form
    const formData = watch();
    onSubmit(formData);
  }, [watch, onSubmit]);

  const nextStep = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    const isStepValid = (step: number) => {
      switch (step) {
        case 1: return stepValidation.step1Valid;
        case 2: return stepValidation.step2Valid;
        case 3: return stepValidation.step3Valid;
        default: return false;
      }
    };
    
    if (currentStep < 3 && isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep, stepValidation]);

  const prevStep = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const isStepValid = useCallback((step: number) => {
    switch (step) {
      case 1: return stepValidation.step1Valid;
      case 2: return stepValidation.step2Valid;
      case 3: return stepValidation.step3Valid;
      default: return false;
    }
  }, [stepValidation]);

  const renderStep = useCallback(() => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoFields register={register} errors={errors} />;
      case 2:
        return <PropertyInfoFields register={register} setValue={setValue} errors={errors} />;
      case 3:
        return <RadonInfoFields register={register} setValue={setValue} errors={errors} />;
      default:
        return null;
    }
  }, [currentStep, register, setValue, errors]);

  const getStepTitle = useCallback((step: number) => {
    switch (step) {
      case 1: return "Contact Information";
      case 2: return "Property Details";
      case 3: return "Radon Information";
      default: return "";
    }
  }, []);

  // Memoize form data for modals
  const formDataForModals = useMemo(() => ({
    name: watchedFields.name || '',
    email: watchedFields.email || '',
    phone: watchedFields.phone || '',
    address: watchedFields.address || '',
    city: watchedFields.city || ''
  }), [watchedFields.name, watchedFields.email, watchedFields.phone, watchedFields.address, watchedFields.city]);

  // If showing success modal, hide the form
  if (showSuccessModal) {
    return (
      <SuccessModal 
        onClose={handleSuccessModalClose}
        formData={formDataForModals}
      />
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="space-y-8 bg-gray-50 rounded-xl p-8">
          {/* Form Breadcrumb */}
          <FormBreadcrumb currentStep={currentStep} totalSteps={3} />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Form Fields */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <Button
                type="button"
                onClick={(e) => prevStep(e)}
                disabled={currentStep === 1 || isSubmitting}
                variant="outline"
                className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={(e) => nextStep(e)}
                  disabled={!isStepValid(currentStep) || isSubmitting}
                  className="flex items-center gap-2 bg-[#7A0019] hover:bg-[#5A0013] text-white px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-[#7A0019] hover:bg-[#5A0013] text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5" />
                      Get My Free Quote
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </div>
      </motion.div>

      {/* Error Modal */}
      <AnimatePresence>
        {showErrorModal && (
          <ErrorModal
            onClose={handleErrorModalClose}
            onRetry={handleRetry}
            error={errorMessage}
            formData={formDataForModals}
          />
        )}
      </AnimatePresence>
    </>
  );
});

QuoteFormContainer.displayName = 'QuoteFormContainer';

export default QuoteFormContainer;
