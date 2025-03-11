
import React from 'react';
import { MapPin, Globe, Store } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatTimeRemaining, getExpiryColor } from '@/utils/mockData';
import { Deal } from '@/utils/types';
import DealTypeIndicator from '@/components/ui/deal/DealTypeIndicator';

interface DealInfoCardProps {
  deal: Deal;
}

const DealInfoCard: React.FC<DealInfoCardProps> = ({ deal }) => {
  const getDealTypeIcon = () => {
    switch (deal.dealType) {
      case 'in-store':
        return <Store size={18} className="mr-2 text-primary" />;
      case 'online':
        return <Globe size={18} className="mr-2 text-blue-500" />;
      case 'affiliate':
        return <Globe size={18} className="mr-2 text-orange-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-background rounded-xl shadow-soft p-5 border animate-scale-in">
      <div className="mb-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex space-x-2 mb-2">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground inline-block">
                {deal.category}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary inline-block flex items-center">
                {getDealTypeIcon()}
                {deal.dealType === 'in-store' ? 'In-Store' : 
                 deal.dealType === 'online' ? 'Online' : 'Affiliate'}
              </span>
            </div>
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
          {deal.dealType === 'in-store' ? (
            <span className="flex items-center">
              <MapPin size={14} className="mr-0.5" />
              <span>{deal.location.address}</span>
            </span>
          ) : (
            <span className="flex items-center">
              {deal.platform && (
                <>
                  <Globe size={14} className="mr-0.5" />
                  <span>{deal.platform}</span>
                </>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DealInfoCard;
