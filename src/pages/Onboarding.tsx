import { useState } from 'react';
import { useNavigate } from 'react-router';

import type {
  OnboardingFormData,
  ParentInfoStepProps,
  ChildrenInfoStepProps,
  ConfirmationStepProps
} from '../types';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingFormData>({
    parentName: '',
    email: '',
    children: []
  });
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit and navigate to dashboard
      navigate('/classes');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-8">
          {step === 1 && (
            <ParentInfoStep 
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 2 && (
            <ChildrenInfoStep 
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 3 && (
            <ConfirmationStep 
              formData={formData}
            />
          )}
          <div className="mt-8 flex">
            <div className="flex-grow">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
                >
                  Back
                </button>
              )}
            </div>
            <div>
              <button
              onClick={handleNext}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {step === 3 ? 'Complete Setup' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ParentInfoStep({ formData, setFormData }: ParentInfoStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Parent Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
          <input
            type="text"
            value={formData.parentName}
            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            className="appearance-none w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="appearance-none w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

function ChildrenInfoStep({ formData, setFormData }: ChildrenInfoStepProps) {
  const [childName, setChildName] = useState('');

  const handleAddChild = () => {
    if (childName.trim()) {
      setFormData({
        ...formData,
        children: [...formData.children, { name: childName, grade: '' }]
      });
      setChildName('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Children Information</h2>
      <div className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            placeholder="Child's Name"
            className="appearance-none flex-1 px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
          <button
            onClick={handleAddChild}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Add Child
          </button>
        </div>
        {formData.children.map((child, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-medium">{child.name}</span>
              <button
                onClick={() => {
                  const updatedChildren = formData.children.filter((_, i) => i !== index);
                  setFormData({ ...formData, children: updatedChildren });
                }}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConfirmationStep({ formData }: ConfirmationStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Confirmation</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Parent Information</h3>
          <p>Name: {formData.parentName}</p>
          <p>Email: {formData.email}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Children</h3>
          {formData.children.map((child, index) => (
            <p key={index}>{child.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
