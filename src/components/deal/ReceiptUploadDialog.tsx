
import React from 'react';
import { Camera, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';

interface ReceiptUploadDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleReceiptUpload: () => void;
}

const ReceiptUploadDialog: React.FC<ReceiptUploadDialogProps> = ({
  open,
  setOpen,
  handleReceiptUpload
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Receipt for Verification</DialogTitle>
          <DialogDescription>
            Upload a photo of your receipt to verify your purchase and earn 10 points.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center py-4">
          <div className="w-full h-48 bg-muted/50 rounded-lg flex flex-col items-center justify-center mb-4 border-2 border-dashed border-muted-foreground/20">
            <Camera size={48} className="text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">Tap to take a photo or upload</p>
          </div>
          <Button onClick={handleReceiptUpload} className="w-full">
            <Upload size={16} className="mr-2" />
            Upload Receipt
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReceiptUploadDialog;
