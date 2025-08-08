
import React from 'react';
import { UseFormRegister, UseFormSetValue, FieldErrors } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, MapPin, Building, Home } from 'lucide-react';

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

interface PropertyInfoFieldsProps {
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  errors: FieldErrors<FormData>;
}

const PropertyInfoFields: React.FC<PropertyInfoFieldsProps> = ({ register, setValue, errors }) => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Property Information</h3>
        <p className="text-gray-600">Tell us about your home so we can provide the most accurate quote.</p>
      </div>

      {/* Property Address */}
      <div className="space-y-2">
        <Label htmlFor="address" className="text-base font-medium text-gray-900 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#7A0019]" />
          Property Address *
        </Label>
        <Input
          id="address"
          placeholder="123 Main Street"
          {...register('address', { 
            required: 'Address is required',
            minLength: { value: 5, message: 'Please enter a complete address' }
          })}
          className="text-base py-3 px-4 border-gray-300 focus:border-[#7A0019] focus:ring-[#7A0019]"
        />
        {errors.address && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.address.message}
          </p>
        )}
      </div>

      {/* City and ZIP Code */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-base font-medium text-gray-900 flex items-center gap-2">
            <Building className="w-4 h-4 text-[#7A0019]" />
            City *
          </Label>
          <Input
            id="city"
            placeholder="Minneapolis"
            {...register('city', { 
              required: 'City is required',
              minLength: { value: 2, message: 'Please enter a valid city name' }
            })}
            className="text-base py-3 px-4 border-gray-300 focus:border-[#7A0019] focus:ring-[#7A0019]"
          />
          {errors.city && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.city.message}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="zipCode" className="text-base font-medium text-gray-900 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#7A0019]" />
            ZIP Code *
          </Label>
          <Input
            id="zipCode"
            placeholder="55401"
            {...register('zipCode', { 
              required: 'ZIP code is required',
              pattern: {
                value: /^\d{5}(-\d{4})?$/,
                message: 'Please enter a valid ZIP code'
              }
            })}
            className="text-base py-3 px-4 border-gray-300 focus:border-[#7A0019] focus:ring-[#7A0019]"
          />
          {errors.zipCode && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.zipCode.message}
            </p>
          )}
        </div>
      </div>

      {/* Foundation Type */}
      <div className="space-y-2">
        <Label htmlFor="foundationType" className="text-base font-medium text-gray-900 flex items-center gap-2">
          <Home className="w-4 h-4 text-[#7A0019]" />
          Foundation Type *
        </Label>
        <p className="text-sm text-gray-600">
          This helps us determine the best mitigation approach for your home
        </p>
        <input
          type="hidden"
          {...register('foundationType', { required: 'Foundation type is required' })}
        />
        <Select 
          onValueChange={(value) => setValue('foundationType', value)}
        >
          <SelectTrigger className="text-base py-3 px-4 border-gray-300 focus:border-[#7A0019] focus:ring-[#7A0019]">
            <SelectValue placeholder="Select your foundation type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="basement">Basement</SelectItem>
            <SelectItem value="crawlspace">Crawlspace</SelectItem>
            <SelectItem value="slab">Slab-on-grade</SelectItem>
            <SelectItem value="mixed">Mixed/Multiple</SelectItem>
            <SelectItem value="unknown">Not sure</SelectItem>
          </SelectContent>
        </Select>
        {errors.foundationType && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.foundationType.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyInfoFields;
