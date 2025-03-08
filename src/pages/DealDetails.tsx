
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Share2, 
  MapPin, 
  Clock, 
  ThumbsUp, 
  Flag,
  ExternalLink,
  Info
} from 'lucide-react';
import Header from '@/components/layout/Header';
import BottomNavbar from '@/components/layout/BottomNavbar';
import UserAvatar from '@/components/ui/UserAvatar';
import { mockDeals, formatTimeRemaining, getExpiryColor, formatDistanceToNow } from '@/utils/mockData';
import { cn } from '@/lib/utils';

const DealDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [hasVerified, setHasVerified] = useState(false);
  const [hasFlagged, setHasFlagged] = useState(false);
  
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
      // In a real app, you would update the deal on the server
    }
  };
  
  const handleFlag = () => {
    if (!hasFlagged) {
      setHasFlagged(true);
      // In a real app, you would update the deal on the server
    }
  };
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header transparent />
      
      <div className="relative">
        <div className="relative w-full h-64 sm:h-80 bg-muted overflow-hidden">
          <img 
            src={deal.image} 
            alt={deal.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-sm"
        >
          <ArrowLeft size={20} />
        </button>
        
        <button 
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-sm"
        >
          <Share2 size={20} />
        </button>
      </div>
      
      <main className="px-4 -mt-16 relative z-10 max-w-3xl mx-auto">
        <div className="bg-background rounded-xl shadow-soft p-5 border animate-scale-in">
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground inline-block mb-2">
                  {deal.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold">{deal.title}</h1>
              </div>
              
              <div className={cn(
                "text-sm font-medium px-3 py-1 rounded-full",
                getExpiryColor(deal.expiresAt)
              )}>
                {formatTimeRemaining(deal.expiresAt)}
              </div>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground mt-2">
              <span className="font-medium text-foreground">{deal.store}</span>
              <span className="mx-1.5">•</span>
              <span className="flex items-center">
                <MapPin size={14} className="mr-0.5" />
                <span>{deal.location.address}</span>
              </span>
            </div>
          </div>
          
          <div className="bg-muted/50 p-3 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <div className="font-bold text-2xl sm:text-3xl text-primary">
                {deal.discount} OFF
              </div>
              
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center">
                <ExternalLink size={16} className="mr-2" />
                Redeem
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">Description</h2>
            <p className="text-muted-foreground">
              {deal.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <UserAvatar src={deal.postedBy.avatar} alt={deal.postedBy.name} />
              <div className="ml-3">
                <p className="font-medium">{deal.postedBy.name}</p>
                <p className="text-sm text-muted-foreground">
                  Posted {formatDistanceToNow(deal.createdAt)}
                </p>
              </div>
            </div>
            
            <button 
              className="text-xs text-muted-foreground hover:text-foreground flex items-center"
            >
              <Info size={14} className="mr-1" />
              Report Poster
            </button>
          </div>
          
          <div className="flex border-t pt-4">
            <button 
              className={cn(
                "flex-1 flex flex-col items-center justify-center py-3 rounded-lg transition-colors hover:bg-muted",
                hasVerified && "text-success"
              )}
              onClick={handleVerify}
            >
              <ThumbsUp size={20} className="mb-1" />
              <span className="text-sm">Verify ({deal.verified + (hasVerified ? 1 : 0)})</span>
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
              <span className="text-sm">Flag Expired ({deal.flagged + (hasFlagged ? 1 : 0)})</span>
            </button>
          </div>
        </div>
      </main>
      
      <BottomNavbar />
    </div>
  );
};

export default DealDetails;
