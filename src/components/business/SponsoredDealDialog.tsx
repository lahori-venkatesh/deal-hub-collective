
import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface SponsoredDealDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SponsoredDealDialog: React.FC<SponsoredDealDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogTitle>Boost Your Deal</DialogTitle>
        
        <div className="space-y-4 py-3">
          <p className="text-sm text-muted-foreground">
            Sponsored deals receive premium placement and up to 5x more visibility. Choose a boost package:
          </p>
          
          <div className="space-y-3">
            <div className="bg-muted/30 rounded-lg p-3 border border-input flex justify-between items-center">
              <div>
                <p className="font-medium">3-Day Boost</p>
                <p className="text-xs text-muted-foreground">Perfect for short promotions</p>
              </div>
              <div className="text-primary font-bold">₹499</div>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 flex justify-between items-center">
              <div>
                <p className="font-medium">7-Day Boost</p>
                <p className="text-xs text-amber-700">Most popular option</p>
              </div>
              <div className="text-primary font-bold">₹899</div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-3 border border-input flex justify-between items-center">
              <div>
                <p className="font-medium">14-Day Boost</p>
                <p className="text-xs text-muted-foreground">Best value for extended campaigns</p>
              </div>
              <div className="text-primary font-bold">₹1499</div>
            </div>
          </div>
          
          <div className="pt-3 flex justify-end space-x-3">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              onOpenChange(false);
              toast.success('Deal boosted successfully!', {
                description: 'Your deal will receive premium placement'
              });
            }}>
              Boost Deal
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SponsoredDealDialog;
