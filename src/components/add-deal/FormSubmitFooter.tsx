
import React from 'react';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DealFilter } from '@/utils/types';

interface FormSubmitFooterProps {
  isSubmitting: boolean;
  dealType: DealFilter;
  locationVerified: boolean;
  imageVerified: boolean;
  isDuplicateCode: boolean;
}

const FormSubmitFooter: React.FC<FormSubmitFooterProps> = ({
  isSubmitting,
  dealType,
  locationVerified,
  imageVerified,
  isDuplicateCode
}) => {
  return (
    <>
      <div className="flex items-center pt-4 text-xs text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
        <Info size={14} className="mr-2" />
        <p>By posting, you confirm this deal is legitimate and accurate. False information may result in account restrictions.</p>
      </div>
      
      <div className="pt-4 animate-slide-up" style={{ animationDelay: "150ms" }}>
        <Button
          type="submit"
          className="w-full py-3 font-medium"
          disabled={isSubmitting || 
            (dealType === 'in-store' && (!locationVerified || !imageVerified)) ||
            (dealType === 'online' && isDuplicateCode)
          }
        >
          {isSubmitting ? 'Posting...' : 'Post Deal'}
        </Button>
      </div>
    </>
  );
};

export default FormSubmitFooter;
