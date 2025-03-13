
import React from 'react';
import { Shield, Star } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface DealVerificationOptionsProps {
  isVerified: boolean;
  setIsVerified: (checked: boolean) => void;
  isSponsored: boolean;
  setIsSponsored: (checked: boolean) => void;
  showSponsoredDialog: () => void;
}

const DealVerificationOptions: React.FC<DealVerificationOptionsProps> = ({
  isVerified,
  setIsVerified,
  isSponsored,
  setIsSponsored,
  showSponsoredDialog
}) => {
  return (
    <div className="space-y-3 pt-2">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="verified" 
          checked={isVerified} 
          onCheckedChange={(checked) => setIsVerified(checked as boolean)} 
        />
        <label
          htmlFor="verified"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
        >
          <Shield className="h-4 w-4 mr-1 text-primary" />
          Mark as Verified Deal
        </label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="sponsored" 
          checked={isSponsored} 
          onCheckedChange={(checked) => {
            if (checked && !isSponsored) {
              showSponsoredDialog();
            }
            setIsSponsored(checked as boolean);
          }} 
        />
        <label
          htmlFor="sponsored"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
        >
          <Star className="h-4 w-4 mr-1 text-amber-500" />
          Boost as Sponsored Deal
        </label>
      </div>
    </div>
  );
};

export default DealVerificationOptions;
