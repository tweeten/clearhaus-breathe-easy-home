
import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

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
    <>
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
    </>
  );
};

export default PersonalInfoFields;
