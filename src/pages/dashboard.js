import React, { useState } from 'react';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';
import FundWithdrawalForm from '../components/fundWithdrawal';

function DashboardPage() {
  const [currentStep, setCurrentStep] = useState(5);
  const [selectedBank, setSelectedBank] = useState(null);

  const steps = [
    { id: 1, name: 'Check Merchant' },
    { id: 2, name: 'Distribution Detail' },
    { id: 3, name: 'Business Type' },
    { id: 4, name: 'Business Detail' },
    { id: 5, name: 'Business Owner' },
    { id: 6, name: 'Fund Withdraw' },
    { id: 7, name: 'Review' },
  ];

  const banks = [
    { id: 'commercial', name: 'Commercial Bank of Ethiopia' },
    { id: 'dashen', name: 'Dashen Bank' },
    { id: 'awash', name: 'Awash Bank' },
    { id: 'abyssinia', name: 'Bank of Abyssinia' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen w-[] bg-gray-50 flex flex-col items-start justify-center pt-16">
      <div className="w-full mx-44 w-[75vw] mt-20 bg-white rounded-lg shadow-sm p-6">
        <div className="mb-8">
          <div className="flex items-center">
            <div className="flex-grow border-t border-t-2 border-emerald-500 mr-2" />
            <h2 className="text-xl text-center font-semibold text-gray-700 ">Partner Onboarding</h2>
            <div className="flex-grow border-t border-t-2 border-emerald-500 ml-2" />
          </div>
          
          <div className="relative mt-10">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className="flex items-center cursor-pointer"
                  onClick={() => setCurrentStep(index)}
                >
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center transition-colors
                    ${index < currentStep ? 'bg-emerald-500' : index === currentStep ? 'bg-emerald-500' : 'bg-gray-200'}
                    ${index <= currentStep ? 'cursor-pointer hover:bg-emerald-600' : ''}
                  `}>
                    {index < currentStep ? (
                      <Check className="h-5 w-5 text-white" />
                    ) : (
                      <span className={`text-sm ${index === currentStep ? 'text-white' : 'text-gray-500'}`}>
                        {step.id}
                      </span>
                    )}
                  </div>
                  
                  <span className={`
                    ml-2 text-sm whitespace-nowrap transition-colors
                    ${index <= currentStep ? 'text-gray-700' : 'text-gray-400'}
                  `}>
                    {step.name}
                  </span>
                  
                  {index < steps.length - 1 && (
                    <div className="flex-grow mx-4">
                      <div className={`h-[2px] transition-colors ${index < currentStep ? 'bg-emerald-500' : 'bg-gray-200'}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
           
          <div className="flex items-center">
            <div className="flex-grow border-t border-t-2 border-emerald-500 mr-2" />
            <h2 className="text-xl text-center font-semibold text-gray-700 ">Fund Withdraw Option</h2>
            <div className="flex-grow border-t border-t-2 border-emerald-500 ml-2" />
          </div>
          
          <div className='space-x-3 bg-white px-3 py-2 border border-1'>
            <input type='checkbox'/>
            <span>Back</span>
            
          </div>

          <div className="flex justify-end mt-8 space-x-3">
            <button 
              onClick={handleBack}
              className={`
                px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 flex items-center
                ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}
              `}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </button>
            <button 
              onClick={handleNext}
              className={`
                px-4 py-2 text-white bg-emerald-500 rounded-md hover:bg-emerald-600 flex items-center
                ${currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}
              `}
              disabled={currentStep === steps.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
      {/* form section */}
      <div>
      <FundWithdrawalForm />
      </div>
    </div>
  );
}

export default DashboardPage;