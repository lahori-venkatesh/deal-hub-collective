
import React from 'react';
import { Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BusinessModeButtonProps {
  isBusinessAccount: boolean;
  toggleBusinessMode: () => void;
}

const BusinessModeButton: React.FC<BusinessModeButtonProps> = ({ 
  isBusinessAccount, 
  toggleBusinessMode 
}) => {
  if (isBusinessAccount) {
    return (
      <div className="flex items-center gap-1 text-primary text-xs font-medium">
        <Building size={14} />
        Business Account
      </div>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleBusinessMode}
      className="flex items-center gap-1 text-xs"
    >
      <Building size={14} />
      Business Mode
    </Button>
  );
};

export default BusinessModeButton;
