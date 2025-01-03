export interface EventType {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  organizer: string;
  description: string;
};

export interface ClassType {
  id: string;
  title: string;
  subject: string;
  schedule: string;
  instructor: string;
  description: string;
  location: string;
  price: number;
}

export interface ChildInfo {
  name: string;
  grade: string;
}

export interface OnboardingFormData {
  parentName: string;
  email: string;
  children: ChildInfo[];
}

export interface ParentInfoStepProps {
  formData: OnboardingFormData;
  setFormData: React.Dispatch<React.SetStateAction<OnboardingFormData>>;
}

export interface ChildrenInfoStepProps {
  formData: OnboardingFormData;
  setFormData: React.Dispatch<React.SetStateAction<OnboardingFormData>>;
}

export interface ConfirmationStepProps {
  formData: OnboardingFormData;
}
