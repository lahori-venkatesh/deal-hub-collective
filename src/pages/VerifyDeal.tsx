
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Shield, CheckCircle, Store, Gift, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { mockDeals } from '@/utils/mockDeals';
import { VerificationResult } from '@/utils/types';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const VerifyDeal: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showBusinessSignupDialog, setShowBusinessSignupDialog] = useState(false);
  
  // Simulate the verification process
  useEffect(() => {
    const verifyDeal = async () => {
      try {
        setIsLoading(true);
        
        // In a real app, we'd make an API call to verify the token
        // Here we're simulating the process with a timeout and mock data
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const deal = mockDeals.find(d => d.verificationToken === token);
        
        if (deal) {
          setVerificationResult({
            success: true,
            message: "Deal verified successfully!",
            dealId: deal.id,
            storeName: deal.store
          });
          // In a real app, we would update the deal in the database to mark it as verified
        } else {
          setVerificationResult({
            success: false,
            message: "Invalid or expired verification link"
          });
        }
      } catch (error) {
        setVerificationResult({
          success: false,
          message: "An error occurred during verification"
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    verifyDeal();
  }, [token]);
  
  const handleBusinessSignup = () => {
    setShowBusinessSignupDialog(true);
  };
  
  const completeBusinessSignup = () => {
    setShowBusinessSignupDialog(false);
    
    // In a real app, this would redirect to the business onboarding flow
    // with the store information pre-filled
    navigate('/onboarding', { 
      state: { 
        accountType: 'business', 
        storeName: verificationResult?.storeName 
      } 
    });
    
    toast({
      title: "Welcome to DealHub!",
      description: "Your business account is being set up with 3 free boosted deals.",
    });
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="animate-pulse flex flex-col items-center text-center max-w-md">
          <Shield className="h-12 w-12 text-primary mb-4" />
          <h1 className="text-2xl font-bold mb-2">Verifying Deal</h1>
          <p className="text-muted-foreground">Please wait while we verify the deal information...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/30">
      <div className="bg-background rounded-xl border shadow-soft max-w-md w-full p-6 text-center">
        {verificationResult?.success ? (
          <>
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">Deal Verified!</h1>
            <p className="text-muted-foreground mb-6">
              You've successfully verified this deal for {verificationResult.storeName}.
            </p>
            
            <div className="bg-muted/30 rounded-lg p-4 mb-6">
              <h3 className="font-medium mb-2 flex items-center justify-center">
                <Gift className="h-5 w-5 mr-2 text-primary" />
                Your Business Benefits
              </h3>
              <ul className="text-left space-y-3">
                <li className="flex">
                  <Star className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0" />
                  <span>3 free boosted deals to promote your business</span>
                </li>
                <li className="flex">
                  <Star className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0" />
                  <span>Verified business badge on your profile</span>
                </li>
                <li className="flex">
                  <Star className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0" />
                  <span>Access to business analytics dashboard</span>
                </li>
              </ul>
            </div>
            
            <Button 
              className="w-full" 
              onClick={handleBusinessSignup}
            >
              <Store className="mr-2 h-5 w-5" />
              Claim Your Business Benefits
            </Button>
          </>
        ) : (
          <>
            <div className="text-destructive mb-4">
              <Shield className="h-12 w-12 mx-auto" />
            </div>
            <h1 className="text-xl font-bold mb-2">Verification Failed</h1>
            <p className="text-muted-foreground mb-6">
              {verificationResult?.message || "This verification link is invalid or has expired."}
            </p>
            <Button onClick={() => navigate('/')}>
              Return to Home
            </Button>
          </>
        )}
      </div>
      
      {/* Business Signup Dialog */}
      <Dialog open={showBusinessSignupDialog} onOpenChange={setShowBusinessSignupDialog}>
        <DialogContent>
          <DialogTitle>Create Your Business Account</DialogTitle>
          <DialogDescription className="pt-2">
            <p className="mb-4">
              Set up your business profile to claim your 3 free boosted deals and start managing your deals on DealHub.
            </p>
            
            <div className="space-y-4 mb-4">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Store size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">{verificationResult?.storeName}</p>
                  <p className="text-sm text-muted-foreground">Your business name</p>
                </div>
              </div>
            </div>
          </DialogDescription>
          
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={() => setShowBusinessSignupDialog(false)}>
              Later
            </Button>
            <Button onClick={completeBusinessSignup}>
              Continue to Setup
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VerifyDeal;
