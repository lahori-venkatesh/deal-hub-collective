
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AccountType } from '@/components/explore/types';

interface SetupCompleteProps {
  accountType: AccountType;
  onFinish: () => void;
}

const SetupComplete: React.FC<SetupCompleteProps> = ({ accountType, onFinish }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-gradient-to-b from-background to-green-50 animate-fade-in">
      <div className="bg-success/20 p-4 rounded-full mb-6">
        <CheckCircle className="h-12 w-12 text-success" />
      </div>
      
      <h1 className="text-3xl font-bold text-center mb-2">
        Setup Complete!
      </h1>
      
      <p className="text-center text-muted-foreground mb-8 max-w-md">
        {accountType === 'user' 
          ? "Your account has been created successfully. Start exploring deals near you!" 
          : "Your business profile has been submitted for verification. You can start posting deals right away!"}
      </p>
      
      <div className="bg-card rounded-xl p-5 shadow-soft w-full max-w-md mb-8">
        <h3 className="font-semibold text-lg mb-3">
          {accountType === 'user' ? "What's Next?" : "While We Verify Your Business"}
        </h3>
        
        <ul className="space-y-3">
          {accountType === 'user' ? (
            <>
              <li className="flex items-center text-sm">
                <span className="bg-primary/20 text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2">1</span>
                Browse local deals in your area
              </li>
              <li className="flex items-center text-sm">
                <span className="bg-primary/20 text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2">2</span>
                Save your favorite deals for later
              </li>
              <li className="flex items-center text-sm">
                <span className="bg-primary/20 text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2">3</span>
                Share deals and earn reward points
              </li>
            </>
          ) : (
            <>
              <li className="flex items-center text-sm">
                <span className="bg-primary/20 text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2">1</span>
                Post your first deal to attract customers
              </li>
              <li className="flex items-center text-sm">
                <span className="bg-primary/20 text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2">2</span>
                Set up your business profile completely
              </li>
              <li className="flex items-center text-sm">
                <span className="bg-primary/20 text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2">3</span>
                Explore the business dashboard analytics
              </li>
            </>
          )}
        </ul>
      </div>
      
      <Button onClick={onFinish} className="w-full max-w-md" size="lg">
        {accountType === 'user' ? "Start Exploring" : "Go to Dashboard"} 
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default SetupComplete;
