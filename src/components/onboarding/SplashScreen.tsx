
import React from 'react';
import { ArrowRight, ShoppingBag, Award, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SplashScreenProps {
  onContinue: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onContinue }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-gradient-to-b from-background to-purple-50 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center text-primary mb-2">Welcome to DealHub</h1>
        <p className="text-center text-muted-foreground">Find, share and save with the best deals around you</p>
      </div>
      
      <div className="space-y-6 w-full max-w-md mb-8">
        <div className="bg-card rounded-xl p-4 shadow-soft flex items-center">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <ShoppingBag className="text-primary h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">Discover Local Deals</h3>
            <p className="text-sm text-muted-foreground">Find verified deals near you from your favorite stores</p>
          </div>
        </div>
        
        <div className="bg-card rounded-xl p-4 shadow-soft flex items-center">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Award className="text-primary h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">Earn Rewards</h3>
            <p className="text-sm text-muted-foreground">Get points for sharing and verifying deals that others can use</p>
          </div>
        </div>
        
        <div className="bg-card rounded-xl p-4 shadow-soft flex items-center">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Store className="text-primary h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">Business Promotions</h3>
            <p className="text-sm text-muted-foreground">Promote your business with verified deals that reach thousands</p>
          </div>
        </div>
      </div>
      
      <Button onClick={onContinue} className="w-full max-w-md" size="lg">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default SplashScreen;
