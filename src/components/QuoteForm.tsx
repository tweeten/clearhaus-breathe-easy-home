
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

const QuoteForm = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free consultation.",
    });
    reset();
  };

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="container mx-auto px-4">
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

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose ClearHaus?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-[#7A0019] mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">NRPP Certified</h4>
                      <p className="text-gray-600">Licensed and certified radon professionals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-[#7A0019] mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">24-Hour Response</h4>
                      <p className="text-gray-600">Quick turnaround on quotes and scheduling</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#7A0019] mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                      <p className="text-gray-600">Minnesota-focused with local knowledge</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Contact Us Directly</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#7A0019] mr-3" />
                    <span className="text-gray-700">(641) 251-4510</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#7A0019] mr-3" />
                    <span className="text-gray-700">tyler@clearhausmn.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-[#7A0019] mr-3" />
                    <span className="text-gray-700">Serving Greater Twin Cities</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-gray-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="mt-1"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="mt-1"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="address">Property Address *</Label>
                  <Input
                    id="address"
                    {...register('address', { required: 'Address is required' })}
                    className="mt-1"
                  />
                  {errors.address && (
                    <p className="text-sm text-red-600 mt-1">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      {...register('city', { required: 'City is required' })}
                      className="mt-1"
                    />
                    {errors.city && (
                      <p className="text-sm text-red-600 mt-1">{errors.city.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      {...register('zipCode', { required: 'ZIP code is required' })}
                      className="mt-1"
                    />
                    {errors.zipCode && (
                      <p className="text-sm text-red-600 mt-1">{errors.zipCode.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="radonLevel">Current Radon Level (if known)</Label>
                    <Input
                      id="radonLevel"
                      placeholder="e.g., 4.2 pCi/L"
                      {...register('radonLevel')}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="foundationType">Foundation Type</Label>
                    <Select onValueChange={(value) => setValue('foundationType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select foundation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basement">Basement</SelectItem>
                        <SelectItem value="crawlspace">Crawlspace</SelectItem>
                        <SelectItem value="slab">Slab-on-grade</SelectItem>
                        <SelectItem value="mixed">Mixed/Multiple</SelectItem>
                        <SelectItem value="unknown">Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="radonTesting">If Radon level unknown, would you like us to test it?</Label>
                  <Select onValueChange={(value) => setValue('radonTesting', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes, please test it</SelectItem>
                      <SelectItem value="no">No, I'll test it myself</SelectItem>
                      <SelectItem value="already-tested">Already tested</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
