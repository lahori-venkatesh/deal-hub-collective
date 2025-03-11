
import React from 'react';
import { QrCode, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';

interface DealRedemptionDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  redemptionId?: string;
  markAsRedeemed: () => void;
}

const DealRedemptionDialog: React.FC<DealRedemptionDialogProps> = ({
  open,
  setOpen,
  redemptionId,
  markAsRedeemed
}) => {
  const generatedId = redemptionId || 'SS-' + Math.random().toString(36).substring(2, 8).toUpperCase();
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Show this to the cashier</DialogTitle>
          <DialogDescription>
            The store will scan this QR code or enter the redemption ID to apply your discount.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center py-4">
          <div className="bg-white p-4 rounded-lg shadow-inner mb-4">
            <QrCode size={200} className="text-primary" />
          </div>
          <p className="text-lg font-mono text-center mb-4">
            {generatedId}
          </p>
          <Button onClick={markAsRedeemed} className="w-full">
            <CheckCircle size={16} className="mr-2" />
            Mark as Redeemed
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DealRedemptionDialog;
