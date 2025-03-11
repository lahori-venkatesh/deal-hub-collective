
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/layout/Header';
import BottomNavbar from '@/components/layout/BottomNavbar';
import { mockDeals } from '@/utils/mockData';
import DealHeader from '@/components/deal/DealHeader';
import DealInfoCard from '@/components/deal/DealInfoCard';
import DealDiscountSection from '@/components/deal/DealDiscountSection';
import DealDescription from '@/components/deal/DealDescription';
import DealActionButtons from '@/components/deal/DealActionButtons';
import DealRedemptionDialog from '@/components/deal/DealRedemptionDialog';
import ReceiptUploadDialog from '@/components/deal/ReceiptUploadDialog';

const DealDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [hasVerified, setHasVerified] = useState(false);
  const [hasFlagged, setHasFlagged] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [showReceiptUpload, setShowReceiptUpload] = useState(false);
  const [receiptUploaded, setReceiptUploaded] = useState(false);
  
  // Find the deal in our mock data
  const deal = mockDeals.find(d => d.id === id);
  
  if (!deal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Deal not found</h2>
          <p className="text-muted-foreground mb-4">
            The deal you're looking for doesn't exist or has been removed.
          </p>
          <button 
            onClick={() => navigate('/')} 
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }
  
  const handleVerify = () => {
    if (!hasVerified) {
      setHasVerified(true);
      toast({
        title: "Deal Verified",
        description: "Thanks for verifying this deal! You've earned 5 points.",
      });
    }
  };
  
  const handleFlag = () => {
    if (!hasFlagged) {
      setHasFlagged(true);
      toast({
        title: "Deal Flagged",
        description: "Thanks for letting us know this deal might have expired.",
      });
    }
  };

  const copyPromoCode = () => {
    if (deal.promoCode) {
      navigator.clipboard.writeText(deal.promoCode);
      toast({
        title: "Code Copied!",
        description: `${deal.promoCode} has been copied to your clipboard.`,
      });
    }
  };

  const showRedemptionCode = () => {
    setShowQRCode(true);
  };

  const markAsRedeemed = () => {
    setIsRedeemed(true);
    setShowQRCode(false);
    
    if (deal.dealType === 'in-store') {
      toast({
        title: "Deal Redeemed!",
        description: "Please upload your receipt to earn 10 points.",
      });
      setShowReceiptUpload(true);
    } else if (deal.dealType === 'online') {
      toast({
        title: "Deal Marked as Used",
        description: "You've earned 5 points for using this deal.",
      });
    } else {
      toast({
        title: "Deal Redeemed!",
        description: "Thanks for using this affiliate deal.",
      });
    }
  };

  const handleShopNow = () => {
    // In a real app, this would redirect to the store with your affiliate link
    window.open(deal.affiliateUrl || `https://${deal.platform?.toLowerCase()}.com`, '_blank');
    
    setTimeout(() => {
      toast({
        title: "Shopping at " + deal.platform,
        description: "Remember to mark as used when you complete your purchase!",
      });
    }, 1000);
  };

  const handleAffiliateRedirect = () => {
    // In a real app, this would redirect with your affiliate code auto-applied
    window.open(deal.affiliateUrl, '_blank');
    setTimeout(() => {
      toast({
        title: "Discount Auto-Applied",
        description: "Your discount will be applied at checkout.",
      });
      setIsRedeemed(true);
    }, 1000);
  };

  const handleReceiptUpload = () => {
    // Simulate receipt upload
    setReceiptUploaded(true);
    setShowReceiptUpload(false);
    toast({
      title: "Receipt Uploaded",
      description: "Your receipt is being verified. You've earned 10 points!",
    });
  };
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header transparent />
      
      <DealHeader image={deal.image} title={deal.title} />
      
      <main className="px-4 -mt-16 relative z-10 max-w-3xl mx-auto">
        <DealInfoCard deal={deal} />
        
        <div className="bg-background rounded-xl shadow-soft p-5 border animate-scale-in">
          <DealDiscountSection 
            deal={deal}
            isRedeemed={isRedeemed}
            showRedemptionCode={showRedemptionCode}
            handleShopNow={handleShopNow}
            handleAffiliateRedirect={handleAffiliateRedirect}
            copyPromoCode={copyPromoCode}
            setShowReceiptUpload={setShowReceiptUpload}
            receiptUploaded={receiptUploaded}
          />
          
          <DealDescription 
            description={deal.description}
            postedBy={deal.postedBy}
            createdAt={deal.createdAt}
          />
          
          <DealActionButtons 
            verified={deal.verified}
            flagged={deal.flagged}
            hasVerified={hasVerified}
            hasFlagged={hasFlagged}
            handleVerify={handleVerify}
            handleFlag={handleFlag}
          />
        </div>
      </main>
      
      <DealRedemptionDialog 
        open={showQRCode}
        setOpen={setShowQRCode}
        redemptionId={deal.redemptionId}
        markAsRedeemed={markAsRedeemed}
      />

      <ReceiptUploadDialog 
        open={showReceiptUpload}
        setOpen={setShowReceiptUpload}
        handleReceiptUpload={handleReceiptUpload}
      />
      
      <BottomNavbar />
    </div>
  );
};

export default DealDetails;
