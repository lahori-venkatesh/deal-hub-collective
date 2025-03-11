
import React from 'react';
import { User, Briefcase, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AccountType } from '@/components/explore/types';

interface AccountTypeSelectionProps {
  onSelect: (type: AccountType) => void;
  onBack: () => void;
}

const AccountTypeSelection: React.FC<AccountTypeSelectionProps> = ({ onSelect, onBack }) => {
  return (
    <div className="flex flex-col items-center h-full p-6 animate-fade-in">
      <div className="w-full flex items-center mb-6">
        <button onClick={onBack} className="p-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold mx-auto pr-8">Choose Account Type</h1>
      </div>
      
      <div className="flex flex-col space-y-6 w-full max-w-md mt-8">
        <button 
          onClick={() => onSelect('user')}
          className="bg-card hover:bg-muted/50 border border-input rounded-xl p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-soft"
        >
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <User className="text-primary h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">User Account</h3>
              <p className="text-muted-foreground mt-1">For browsing & posting deals</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center text-sm">
                  <span className="bg-primary/20 text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2">✓</span>
                  Discover local & online deals
                </li>
                <li className="flex items-center text-sm">
                  <span className="bg-primary/20 text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2">✓</span>
                  Share deals & earn rewards
                </li>
                <li className="flex items-center text-sm">
                  <span className="bg-primary/20 text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2">✓</span>
                  Build reputation as a deal hunter
                </li>
              </ul>
            </div>
          </div>
        </button>
        
        <button 
          onClick={() => onSelect('business')}
          className="bg-card hover:bg-muted/50 border border-input rounded-xl p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-soft"
        >
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Briefcase className="text-primary h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Business Account</h3>
              <p className="text-muted-foreground mt-1">For posting & managing deals</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center text-sm">
                  <span className="bg-primary/20 text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2">✓</span>
                  Promote your business with deals
                </li>
                <li className="flex items-center text-sm">
                  <span className="bg-primary/20 text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2">✓</span>
                  Get verified status for trust
                </li>
                <li className="flex items-center text-sm">
                  <span className="bg-primary/20 text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center mr-2">✓</span>
                  Access business dashboard & insights
                </li>
              </ul>
            </div>
          </div>
        </button>
      </div>
      
      <p className="mt-auto text-sm text-center text-muted-foreground pt-6">
        You can change your account type later in settings
      </p>
    </div>
  );
};

export default AccountTypeSelection;
