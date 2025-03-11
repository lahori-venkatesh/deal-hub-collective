
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface AuthenticationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated: () => void;
}

const AuthenticationModal: React.FC<AuthenticationModalProps> = ({
  isOpen,
  onClose,
  onAuthenticated
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  
  const handleLogin = () => {
    if (!email || !password) {
      toast.error('Please enter your email and password');
      return;
    }
    
    // Simulate login success
    toast.success('Logged in successfully!');
    onAuthenticated();
    onClose();
  };
  
  const handleSendOtp = () => {
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    
    setIsSendingOtp(true);
    
    // Simulate OTP sending
    setTimeout(() => {
      setIsSendingOtp(false);
      setIsOtpSent(true);
      toast.success('OTP sent to your email', {
        description: 'Please check your inbox'
      });
    }, 1500);
  };
  
  const handleResetPassword = () => {
    if (!otp || otp.length < 4) {
      toast.error('Please enter a valid OTP');
      return;
    }
    
    // Simulate password reset success
    toast.success('Password reset successful!', {
      description: 'You can now login with your new password'
    });
    setActiveTab('login');
    setIsOtpSent(false);
    setOtp('');
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'login' | 'forgot')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="forgot">Forgot Password</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <Button onClick={handleLogin} className="w-full">
              Log In
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </TabsContent>
          
          <TabsContent value="forgot" className="space-y-4">
            {!isOtpSent ? (
              <>
                <div>
                  <label htmlFor="reset-email" className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    id="reset-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    We'll send a one-time password to this email
                  </p>
                </div>
                
                <Button 
                  onClick={handleSendOtp} 
                  className="w-full"
                  disabled={isSendingOtp}
                >
                  {isSendingOtp ? 'Sending...' : 'Send OTP'}
                </Button>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium mb-1">One-Time Password</label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="text-center text-xl tracking-wider"
                    maxLength={6}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter the code sent to {email}
                  </p>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setIsOtpSent(false)}>
                    Change Email
                  </Button>
                  <Button onClick={handleResetPassword}>
                    Reset Password
                  </Button>
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthenticationModal;
