import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface FormBreadcrumbProps {
  currentStep: number;
  totalSteps: number;
}

const FormBreadcrumb: React.FC<FormBreadcrumbProps> = ({ currentStep, totalSteps }) => {
  const steps = [
    { id: 1, title: 'Contact Info'},
    { id: 2, title: 'Property Info'},
    { id: 3, title: 'Radon Info'}
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                step.id < currentStep
                  ? 'bg-[#7A0019] border-[#7A0019] text-white'
                  : step.id === currentStep
                  ? 'bg-white border-[#7A0019] text-[#7A0019]'
                  : 'bg-gray-100 border-gray-300 text-gray-400'
              }`}>
                {step.id < currentStep ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-medium">{step.id}</span>
                )}
              </div>
              <div className="mt-2 text-center">
                <p className={`text-xs font-medium ${
                  step.id <= currentStep ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {step.title}
                </p>
                <p className={`text-xs ${
                  step.id <= currentStep ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {step.description}
                </p>
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 transition-all duration-200 ${
                step.id < currentStep ? 'bg-[#7A0019]' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FormBreadcrumb; 