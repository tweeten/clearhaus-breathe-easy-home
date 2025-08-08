
import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { AlertCircle, User, Mail, Phone } from 'lucide-react';

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

interface PersonalInfoFieldsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const PersonalInfoFields: React.FC<PersonalInfoFieldsProps> = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Get Started</h3>
        <p className="text-gray-600">We'll need some basic information to provide you with a free, personalized quote.</p>
      </div>

      {/* Name and Phone Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base font-medium text-gray-900 flex items-center gap-2">
            <User className="w-4 h-4 text-[#7A0019]" />
            Full Name *
          </Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            {...register('name', { 
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
            className="text-base py-3 px-4 border-gray-300 focus:border-[#7A0019] focus:ring-[#7A0019]"
          />
          {errors.name && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.name.message}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-base font-medium text-gray-900 flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#7A0019]" />
            Phone Number *
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            {...register('phone', { 
              required: 'Phone number is required',
              pattern: {
                value: /^[\+]?[1-9][\d]{0,15}$/,
                message: 'Please enter a valid phone number'
              }
            })}
            className="text-base py-3 px-4 border-gray-300 focus:border-[#7A0019] focus:ring-[#7A0019]"
          />
          {errors.phone && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-base font-medium text-gray-900 flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#7A0019]" />
          Email Address *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email address'
            }
          })}
          className="text-base py-3 px-4 border-gray-300 focus:border-[#7A0019] focus:ring-[#7A0019]"
        />
        {errors.email && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Privacy Assurance */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800 text-center">
          <strong>Your privacy is protected.</strong> We only use this information to provide your quote and will never share it with third parties.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoFields;
