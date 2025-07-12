
import React, { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import PersonalInfoFields from './PersonalInfoFields';
import PropertyInfoFields from './PropertyInfoFields';

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
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = useCallback((data: FormData) => {
    console.log('Form submitted:', data);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free consultation.",
    });
    reset();
  }, [toast, reset]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-gray-50 rounded-xl p-8">
        <PersonalInfoFields register={register} errors={errors} />
        <PropertyInfoFields register={register} setValue={setValue} errors={errors} />

        <div>
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            placeholder="Tell us about any specific concerns, timeline, or questions..."
            {...register('additionalInfo')}
            className="mt-1"
            rows={4}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#7A0019] hover:bg-[#5A0013] text-white py-3 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
        >
          Get My Free Quote
        </Button>

        <p className="text-sm text-gray-600 text-center">
          By submitting this form, you agree to be contacted by ClearHaus regarding your radon mitigation needs. 
          We respect your privacy and will never share your information.
        </p>
      </form>
    </motion.div>
  );
});

QuoteFormContainer.displayName = 'QuoteFormContainer';

export default QuoteFormContainer;
