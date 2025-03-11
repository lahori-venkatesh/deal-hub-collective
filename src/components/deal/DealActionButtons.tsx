
import React from 'react';
import { ThumbsUp, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DealActionButtonsProps {
  verified: number;
  flagged: number;
  hasVerified: boolean;
  hasFlagged: boolean;
  handleVerify: () => void;
  handleFlag: () => void;
}

const DealActionButtons: React.FC<DealActionButtonsProps> = ({
  verified,
  flagged,
  hasVerified,
  hasFlagged,
  handleVerify,
  handleFlag
}) => {
  return (
    <div className="flex border-t pt-4">
      <button 
        className={cn(
          "flex-1 flex flex-col items-center justify-center py-3 rounded-lg transition-colors hover:bg-muted",
          hasVerified && "text-success"
        )}
        onClick={handleVerify}
      >
        <ThumbsUp size={20} className="mb-1" />
        <span className="text-sm">Verify ({verified + (hasVerified ? 1 : 0)})</span>
      </button>
      
      <div className="mx-1 border-r"></div>
      
      <button 
        className={cn(
          "flex-1 flex flex-col items-center justify-center py-3 rounded-lg transition-colors hover:bg-muted",
          hasFlagged && "text-destructive"
        )}
        onClick={handleFlag}
      >
        <Flag size={20} className="mb-1" />
        <span className="text-sm">Flag Expired ({flagged + (hasFlagged ? 1 : 0)})</span>
      </button>
    </div>
  );
};

export default DealActionButtons;
