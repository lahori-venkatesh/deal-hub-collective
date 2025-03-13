
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/layout/Header';
import BottomNavbar from '@/components/layout/BottomNavbar';
import { mockDeals } from '@/utils/mockDeals';
import DealHeader from '@/components/deal/DealHeader';
import DealInfoCard from '@/components/deal/DealInfoCard';
import DealDiscountSection from '@/components/deal/DealDiscountSection';
import DealDescription from '@/components/deal/DealDescription';
import DealActionButtons from '@/components/deal/DealActionButtons';
import DealRedemptionDialog from '@/components/deal/DealRedemptionDialog';
import ReceiptUploadDialog from '@/components/deal/ReceiptUploadDialog';
import { Deal } from '@/utils/types';

const DealDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [hasVerified, setHasVerified] = useState(false);
  const [hasFlagged, setHasFlagged] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [showReceiptUpload, setShowReceiptUpload] = useState(false);
  const [receiptUploaded, setReceiptUploaded] = useState(false);
  const [currentDeal, setCurrentDeal] = useState<Deal | null>(null);
  
  // Find the deal in our mock data and generate verification URL if needed
  useEffect(() => {
    const deal = mockDeals.find(d => d.id === id);
    
    if (deal) {
      // Generate verification token and URL if it's an in-store deal and doesn't already have one
      if (deal.dealType === 'in-store' && !deal.verificationToken) {
        // In a real app, this would be generated on the server
        const token = Math.random().toString(36).substring(2, 15);
        const verificationUrl = `${window.location.origin}/verify/${token}`;
        
        // Update the deal with the verification info
        const updatedDeal = {
          ...deal,
          verificationToken: token,
          verificationUrl: verificationUrl
        };
        
        setCurrentDeal(updatedDeal);
      } else {
        setCurrentDeal(deal);
      }
    }
  }, [id]);
  
  if (!currentDeal) {
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
    if (currentDeal.promoCode) {
      navigator.clipboard.writeText(currentDeal.promoCode);
      toast({
        title: "Code Copied!",
        description: `${currentDeal.promoCode} has been copied to your clipboard.`,
      });
    }
  };

  const showRedemptionCode = () => {
    setShowQRCode(true);
  };

  const markAsRedeemed = () => {
    setIsRedeemed(true);
    setShowQRCode(false);
    
    if (currentDeal.dealType === 'in-store') {
      toast({
        title: "Deal Redeemed!",
        description: "Please upload your receipt to earn 10 points.",
      });
      setShowReceiptUpload(true);
    } else if (currentDeal.dealType === 'online') {
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
    window.open(currentDeal.affiliateUrl || `https://${currentDeal.platform?.toLowerCase()}.com`, '_blank');
    
    setTimeout(() => {
      toast({
        title: "Shopping at " + currentDeal.platform,
        description: "Remember to mark as used when you complete your purchase!",
      });
    }, 1000);
  };

  const handleAffiliateRedirect = () => {
    // In a real app, this would redirect with your affiliate code auto-applied
    window.open(currentDeal.affiliateUrl, '_blank');
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
      
      <DealHeader image={currentDeal.image} title={currentDeal.title} />
      
      <main className="px-4 -mt-16 relative z-10 max-w-3xl mx-auto">
        <DealInfoCard deal={currentDeal} />
        
        <div className="bg-background rounded-xl shadow-soft p-5 border animate-scale-in">
          <DealDiscountSection 
            deal={currentDeal}
            isRedeemed={isRedeemed}
            showRedemptionCode={showRedemptionCode}
            handleShopNow={handleShopNow}
            handleAffiliateRedirect={handleAffiliateRedirect}
            copyPromoCode={copyPromoCode}
            setShowReceiptUpload={setShowReceiptUpload}
            receiptUploaded={receiptUploaded}
          />
          
          <DealDescription 
            description={currentDeal.description}
            postedBy={currentDeal.postedBy}
            createdAt={currentDeal.createdAt}
          />
          
          <DealActionButtons 
            verified={currentDeal.verified}
            flagged={currentDeal.flagged}
            hasVerified={hasVerified}
            hasFlagged={hasFlagged}
            handleVerify={handleVerify}
            handleFlag={handleFlag}
            verificationUrl={currentDeal.verificationUrl}
            isVerifiedByBusiness={currentDeal.isVerifiedByBusiness}
            dealType={currentDeal.dealType}
          />
        </div>
      </main>
      
      <DealRedemptionDialog 
        open={showQRCode}
        setOpen={setShowQRCode}
        redemptionId={currentDeal.redemptionId}
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
