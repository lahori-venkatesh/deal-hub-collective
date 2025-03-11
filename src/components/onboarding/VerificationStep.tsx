
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface VerificationStepProps {
  onContinue: (data: { email: string; phone: string; password: string }) => void;
  onBack: () => void;
}

const VerificationStep: React.FC<VerificationStepProps> = ({ onContinue, onBack }) => {
  const [activeTab, setActiveTab] = useState('mobile');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState<'contact' | 'otp' | 'password'>('contact');
  const [isOtpSent, setIsOtpSent] = useState(false);
  
  const handleSendOtp = () => {
    // In a real app, this would send an OTP to the phone or email
    setIsOtpSent(true);
    setStep('otp');
  };
  
  const handleVerifyOtp = () => {
    // In a real app, this would verify the OTP
    setStep('password');
  };
  
  const handleSetPassword = () => {
    if (password !== confirmPassword) {
      // Show error
      return;
    }
    
    onContinue({
      email,
      phone,
      password
    });
  };
  
  return (
    <div className="flex flex-col h-full p-6 animate-fade-in">
      <div className="w-full flex items-center mb-6">
        <button onClick={onBack} className="p-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold mx-auto pr-8">Verification</h1>
      </div>
      
      {step === 'contact' && (
        <div className="w-full max-w-md mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mobile" className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 99999 99999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  We'll send a verification code to this number
                </p>
              </div>
              
              <Button 
                onClick={handleSendOtp} 
                className="w-full" 
                disabled={!phone || phone.length < 10}
              >
                Send OTP <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </TabsContent>
            
            <TabsContent value="email" className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  We'll send a verification link to this email
                </p>
              </div>
              
              <Button 
                onClick={handleSendOtp} 
                className="w-full" 
                disabled={!email || !email.includes('@')}
              >
                Send Verification <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      )}
      
      {step === 'otp' && (
        <div className="w-full max-w-md mx-auto space-y-4">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium mb-1">Verification Code</label>
            <Input
              id="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full text-center text-xl tracking-widest"
              maxLength={6}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Enter the code sent to {activeTab === 'mobile' ? phone : email}
            </p>
          </div>
          
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep('contact')}>
              Change {activeTab === 'mobile' ? 'Phone' : 'Email'}
            </Button>
            <Button onClick={handleVerifyOtp} disabled={otp.length < 4}>
              Verify <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      {step === 'password' && (
        <div className="w-full max-w-md mx-auto space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Set Password</label>
            <Input
              id="password"
              type="password"
              placeholder="Min 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Must contain 8+ characters, 1 uppercase & 1 number
            </p>
          </div>
          
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">Confirm Password</label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full"
            />
          </div>
          
          <Button
            onClick={handleSetPassword}
            className="w-full"
            disabled={password.length < 8 || password !== confirmPassword}
          >
            Set Password <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default VerificationStep;
