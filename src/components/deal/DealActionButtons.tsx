
import React, { useState } from 'react';
import { ThumbsUp, Flag, Share2, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';

interface DealActionButtonsProps {
  verified: number;
  flagged: number;
  hasVerified: boolean;
  hasFlagged: boolean;
  handleVerify: () => void;
  handleFlag: () => void;
  verificationUrl?: string;
  isVerifiedByBusiness?: boolean;
  dealType: "in-store" | "online" | "affiliate";
}

const DealActionButtons: React.FC<DealActionButtonsProps> = ({
  verified,
  flagged,
  hasVerified,
  hasFlagged,
  handleVerify,
  handleFlag,
  verificationUrl,
  isVerifiedByBusiness,
  dealType
}) => {
  const [showVerificationDialog, setShowVerificationDialog] = useState(false);

  const copyVerificationLink = () => {
    if (verificationUrl) {
      navigator.clipboard.writeText(verificationUrl);
      toast({
        title: "Verification Link Copied!",
        description: "Share this link with the store owner to verify this deal.",
      });
      setShowVerificationDialog(false);
    }
  };
  
  return (
    <>
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

        {dealType === 'in-store' && (
          <>
            <div className="mx-1 border-r"></div>
            
            <button 
              className={cn(
                "flex-1 flex flex-col items-center justify-center py-3 rounded-lg transition-colors hover:bg-muted",
                isVerifiedByBusiness && "text-primary"
              )}
              onClick={() => setShowVerificationDialog(true)}
            >
              {isVerifiedByBusiness ? (
                <ShieldCheck size={20} className="mb-1 text-primary" />
              ) : (
                <Share2 size={20} className="mb-1" />
              )}
              <span className="text-sm">
                {isVerifiedByBusiness ? "Verified by Store" : "Share with Store"}
              </span>
            </button>
          </>
        )}
      </div>

      {/* Verification Link Dialog */}
      <Dialog open={showVerificationDialog} onOpenChange={setShowVerificationDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>
            {isVerifiedByBusiness ? (
              <div className="flex items-center text-primary">
                <ShieldCheck className="mr-2" size={20} />
                Deal Verified by Store
              </div>
            ) : (
              "Share with Store Owner"
            )}
          </DialogTitle>
          
          <DialogDescription className="pt-2">
            {isVerifiedByBusiness ? (
              <p>This deal has been officially verified by the store owner. Thank you for sharing an authentic deal!</p>
            ) : (
              <>
                <p className="mb-3">
                  Share this unique verification link with the store owner. When they verify the deal:
                </p>
                <ul className="space-y-2 mb-4 ml-4 list-disc">
                  <li>You'll earn reward coins for posting an authentic deal</li>
                  <li>The store owner will get 3 free boosted deals when they sign up</li>
                </ul>
                <div className="bg-muted p-3 rounded-md text-xs break-all mb-4">
                  {verificationUrl || "Generating verification link..."}
                </div>
              </>
            )}
          </DialogDescription>

          {!isVerifiedByBusiness && (
            <div className="flex justify-end">
              <Button onClick={copyVerificationLink}>
                Copy Link
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DealActionButtons;
