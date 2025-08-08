import React from 'react';
import { UseFormRegister, UseFormSetValue, FieldErrors } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, Info } from 'lucide-react';

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

interface RadonInfoFieldsProps {
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  errors: FieldErrors<FormData>;
}

const RadonInfoFields: React.FC<RadonInfoFieldsProps> = ({ register, setValue, errors }) => {
  return (
<div className="space-y-6">
 
       {/* Section Header */}
       <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Radon Information</h3>
        <p className="text-gray-600">Tell us if you know your current radon level or if you would like us to test your home for radon.</p>
      </div>
 {/* Radon Testing Section */}
      <div>
        <Label htmlFor="radonTesting" className="text-base font-medium text-gray-900">
          Radon Testing
        </Label>
        <p className="text-sm text-gray-600 mt-1 mb-2">
          If you don't know your radon levels, we can help you test
        </p>
        <input
          type="hidden"
          {...register('radonTesting')}
        />
        <Select onValueChange={(value) => setValue('radonTesting', value)}>
          <SelectTrigger className="mt-1 text-base">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes, please test my home</SelectItem>
            <SelectItem value="no">No, I'll test it myself</SelectItem>
            <SelectItem value="already-tested">Already tested</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Radon Level Section */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="radonLevel" className="text-base font-medium text-gray-900">
            Current Radon Level (if known)
          </Label>
          <p className="text-sm text-gray-600 mt-1 mb-2">
            The EPA recommends action if levels are 4.0 pCi/L or higher
          </p>
          <Input
            id="radonLevel"
            placeholder="e.g., 4.2 pCi/L"
            {...register('radonLevel')}
            className="mt-1 text-base"
          />
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <Label htmlFor="additionalInfo" className="text-base font-medium text-gray-900">
          Additional Information (Optional)
        </Label>
        <p className="text-sm text-gray-600 mt-1 mb-2">
          Tell us about any specific concerns, timeline, or questions you have
        </p>
        <Textarea
          id="additionalInfo"
          placeholder="e.g., I'm concerned about my children's health, I need this done before winter, I have questions about the process..."
          {...register('additionalInfo')}
          className="mt-1 text-base"
          rows={4}
        />
      </div>
    </div>
  );
};

export default RadonInfoFields; 