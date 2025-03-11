
import React from 'react';
import { Copy, ShoppingCart, ExternalLink, CheckCircle, Upload, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Deal } from '@/utils/types';

interface DealDiscountSectionProps {
  deal: Deal;
  isRedeemed: boolean;
  showRedemptionCode: () => void;
  handleShopNow: () => void;
  handleAffiliateRedirect: () => void;
  copyPromoCode: () => void;
  setShowReceiptUpload: React.Dispatch<React.SetStateAction<boolean>>;
  receiptUploaded: boolean;
}

const DealDiscountSection: React.FC<DealDiscountSectionProps> = ({
  deal,
  isRedeemed,
  showRedemptionCode,
  handleShopNow,
  handleAffiliateRedirect,
  copyPromoCode,
  setShowReceiptUpload,
  receiptUploaded
}) => {
  return (
    <div className="bg-muted/50 p-4 rounded-lg mb-6">
      <div className="flex justify-between items-center">
        <div className="font-bold text-2xl sm:text-3xl text-primary">
          {deal.discount} OFF
        </div>
        
        {!isRedeemed ? (
          <div className="flex space-x-2">
            {deal.dealType === 'in-store' && (
              <Button 
                onClick={showRedemptionCode}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center"
              >
                <QrCode size={16} className="mr-2" />
                Show Code
              </Button>
            )}
            
            {deal.dealType === 'online' && deal.promoCode && (
              <div className="flex space-x-2">
                <Button 
                  variant="outline"
                  onClick={copyPromoCode}
                  className="hover:bg-muted transition-colors flex items-center"
                >
                  <Copy size={16} className="mr-2" />
                  Copy Code
                </Button>
                
                <Button 
                  onClick={handleShopNow}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Shop Now
                </Button>
              </div>
            )}
            
            {deal.dealType === 'affiliate' && (
              <Button 
                onClick={handleAffiliateRedirect}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center"
              >
                <ExternalLink size={16} className="mr-2" />
                Order Now
              </Button>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-2 text-success">
            <CheckCircle size={20} />
            <span className="font-medium">Redeemed</span>
            
            {deal.dealType === 'in-store' && !receiptUploaded && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowReceiptUpload(true)}
                className="ml-2 text-xs"
              >
                <Upload size={14} className="mr-1" />
                Upload Receipt
              </Button>
            )}
          </div>
        )}
      </div>
      
      {deal.dealType === 'online' && deal.promoCode && (
        <div className="mt-4 flex items-center">
          <div className="bg-muted p-2 rounded border flex-1 text-center font-mono">
            {deal.promoCode}
          </div>
        </div>
      )}
    </div>
  );
};

export default DealDiscountSection;
