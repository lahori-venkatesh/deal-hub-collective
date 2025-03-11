
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { OnboardingStep, AccountType } from '@/components/explore/types';

// Import Onboarding Components
import SplashScreen from '@/components/onboarding/SplashScreen';
import AccountTypeSelection from '@/components/onboarding/AccountTypeSelection';
import VerificationStep from '@/components/onboarding/VerificationStep';
import UserProfileSetup from '@/components/onboarding/UserProfileSetup';
import BusinessProfileSetup from '@/components/onboarding/BusinessProfileSetup';
import SetupComplete from '@/components/onboarding/SetupComplete';
import AuthenticationModal from '@/components/onboarding/AuthenticationModal';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('splash');
  const [accountType, setAccountType] = useState<AccountType | null>(null);
  const [userData, setUserData] = useState({
    email: '',
    phone: '',
    password: '',
    name: '',
    dealPreferences: [],
    locationAccess: false,
    businessName: '',
    businessType: '',
    documents: [],
    businessEmail: '',
    businessContact: '',
    termsAccepted: false
  });
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  const handleSplashContinue = () => {
    setCurrentStep('account-type');
  };
  
  const handleAccountTypeSelect = (type: AccountType) => {
    setAccountType(type);
    setCurrentStep('verification');
  };
  
  const handleVerificationComplete = (data: { email: string; phone: string; password: string }) => {
    setUserData({
      ...userData,
      email: data.email,
      phone: data.phone,
      password: data.password
    });
    setCurrentStep('profile-setup');
  };
  
  const handleUserProfileComplete = (data: { name: string; preferences: any[]; locationAccess: boolean }) => {
    setUserData({
      ...userData,
      name: data.name,
      dealPreferences: data.preferences,
      locationAccess: data.locationAccess
    });
    setCurrentStep('complete');
    
    // In a real app, this would create a user account
    toast.success('Account created successfully!', {
      description: 'Welcome to DealHub'
    });
  };
  
  const handleBusinessProfileComplete = (data: {
    businessName: string;
    businessType: string;
    documents: string[];
    businessEmail: string;
    businessContact: string;
    termsAccepted: boolean;
  }) => {
    setUserData({
      ...userData,
      businessName: data.businessName,
      businessType: data.businessType,
      documents: data.documents,
      businessEmail: data.businessEmail,
      businessContact: data.businessContact,
      termsAccepted: data.termsAccepted
    });
    setCurrentStep('complete');
    
    // In a real app, this would create a business account
    toast.success('Business account created!', {
      description: 'Your profile is pending verification'
    });
  };
  
  const handleSetupFinish = () => {
    if (accountType === 'business') {
      navigate('/business-dashboard');
    } else {
      navigate('/');
    }
  };
  
  const handleBack = () => {
    if (currentStep === 'account-type') {
      setCurrentStep('splash');
    } else if (currentStep === 'verification') {
      setCurrentStep('account-type');
    } else if (currentStep === 'profile-setup') {
      setCurrentStep('verification');
    }
  };
  
  const handleShowLogin = () => {
    setShowLoginModal(true);
  };
  
  const handleAuthenticated = () => {
    // In a real app, this would set the auth state
    navigate('/');
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      {currentStep === 'splash' && (
        <div className="fixed inset-0 z-10">
          <SplashScreen onContinue={handleSplashContinue} />
          
          <div className="absolute bottom-4 w-full text-center">
            <button 
              onClick={handleShowLogin}
              className="text-sm text-primary underline"
            >
              Already have an account? Log in
            </button>
          </div>
        </div>
      )}
      
      {currentStep === 'account-type' && (
        <div className="fixed inset-0 z-10">
          <AccountTypeSelection 
            onSelect={handleAccountTypeSelect} 
            onBack={handleBack}
          />
        </div>
      )}
      
      {currentStep === 'verification' && (
        <div className="fixed inset-0 z-10">
          <VerificationStep 
            onContinue={handleVerificationComplete} 
            onBack={handleBack}
          />
        </div>
      )}
      
      {currentStep === 'profile-setup' && accountType === 'user' && (
        <div className="fixed inset-0 z-10">
          <UserProfileSetup 
            onComplete={handleUserProfileComplete} 
            onBack={handleBack}
          />
        </div>
      )}
      
      {currentStep === 'profile-setup' && accountType === 'business' && (
        <div className="fixed inset-0 z-10">
          <BusinessProfileSetup 
            onComplete={handleBusinessProfileComplete} 
            onBack={handleBack}
          />
        </div>
      )}
      
      {currentStep === 'complete' && accountType && (
        <div className="fixed inset-0 z-10">
          <SetupComplete 
            accountType={accountType} 
            onFinish={handleSetupFinish}
          />
        </div>
      )}
      
      <AuthenticationModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
        onAuthenticated={handleAuthenticated}
      />
    </div>
  );
};

export default Onboarding;
