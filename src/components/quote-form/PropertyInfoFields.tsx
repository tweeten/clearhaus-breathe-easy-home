
import React from 'react';
import { UseFormRegister, UseFormSetValue, FieldErrors } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
    <>
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
    </>
  );
};

export default PropertyInfoFields;
