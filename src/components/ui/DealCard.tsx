
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  MapPin, 
  ThumbsUp, 
  Flag, 
  ExternalLink, 
  ShoppingCart, 
  QrCode, 
  Copy, 
  CheckCircle,
  Store,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Deal } from '@/utils/types';
import { formatTimeRemaining, getExpiryColor, formatDistanceToNow } from '@/utils/utils';
import UserAvatar from './UserAvatar';
import { Button } from './button';
import { toast } from '../ui/use-toast';

interface DealCardProps {
  deal: Deal;
  compact?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onRedeem?: (deal: Deal) => void;
}

const DealCard: React.FC<DealCardProps> = ({
  deal,
  compact = false,
  className,
  style,
  onRedeem
}) => {
  const copyPromoCode = (e: React.MouseEvent, code: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    toast({
      title: "Code Copied!",
      description: `${code} has been copied to your clipboard.`,
    });
  };

  const handleRedeem = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onRedeem) {
      onRedeem(deal);
    }
  };

  const getDealTypeIcon = () => {
    switch (deal.dealType) {
      case 'in-store':
        return <Store size={14} className="mr-1 text-primary" />;
      case 'online':
        return <Globe size={14} className="mr-1 text-blue-500" />;
      case 'affiliate':
        return <ExternalLink size={14} className="mr-1 text-orange-500" />;
      default:
        return null;
    }
  };

  return (
    <Link 
      to={`/deal/${deal.id}`}
      className={cn(
        "deal-card block rounded-xl overflow-hidden bg-background border shadow-soft hover:shadow-md transition-all duration-300 transform hover:-translate-y-1",
        compact ? "h-full" : "",
        className
      )}
      style={style}
    >
      <div className="relative">
        <div className="aspect-[5/3] bg-muted overflow-hidden">
          <img 
            src={deal.image} 
            alt={deal.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <div className="absolute top-3 left-3 flex space-x-2">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-foreground">
            {deal.category}
          </span>
        </div>
        
        <div className="absolute top-3 right-3">
          <span className={cn(
            "text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm",
            getExpiryColor(deal.expiresAt)
          )}>
            {formatTimeRemaining(deal.expiresAt)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-semibold line-clamp-1">{deal.title}</h3>
          <span className="text-xs flex items-center px-2 py-0.5 rounded-full bg-muted/50">
            {getDealTypeIcon()}
            {deal.dealType === 'in-store' ? 'In-Store' : 
             deal.dealType === 'online' ? 'Online' : 'Affiliate'}
          </span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <span className="font-medium text-foreground">{deal.store}</span>
          <span className="mx-1.5">•</span>
          {deal.dealType === 'in-store' ? (
            <span className="text-xs flex items-center">
              <MapPin size={12} className="mr-0.5" />
              <span className="truncate max-w-[120px]">{deal.location.address.split(',')[0]}</span>
            </span>
          ) : (
            <span className="text-xs flex items-center">
              {deal.platform && (
                <>
                  <Globe size={12} className="mr-0.5" />
                  <span>{deal.platform}</span>
                </>
              )}
            </span>
          )}
        </div>
        
        <div className="mb-3">
          <span className="font-bold text-xl text-primary">
            {deal.discount} OFF
          </span>
        </div>
        
        {!compact && deal.dealType === 'online' && deal.promoCode && (
          <div className="bg-muted/70 p-2 rounded-md flex items-center justify-between mb-3">
            <code className="text-sm font-mono">{deal.promoCode}</code>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7"
              onClick={(e) => copyPromoCode(e, deal.promoCode!)}
            >
              <Copy size={14} />
            </Button>
          </div>
        )}
        
        {!compact && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {deal.description}
          </p>
        )}
        
        {!compact && (
          <div className="flex space-x-2 mb-4">
            {deal.dealType === 'in-store' && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full flex items-center justify-center"
                onClick={handleRedeem}
              >
                <QrCode size={14} className="mr-1" />
                Show Code
              </Button>
            )}
            
            {deal.dealType === 'online' && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full flex items-center justify-center"
                onClick={handleRedeem}
              >
                <ShoppingCart size={14} className="mr-1" />
                Shop Now
              </Button>
            )}
            
            {deal.dealType === 'affiliate' && (
              <Button 
                variant="default" 
                size="sm" 
                className="w-full flex items-center justify-center"
                onClick={handleRedeem}
              >
                <ExternalLink size={14} className="mr-1" />
                Get Deal
              </Button>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2">
            <UserAvatar src={deal.postedBy.avatar} alt={deal.postedBy.name} size="sm" />
            <div className="flex flex-col">
              <span className="text-xs line-clamp-1">{deal.postedBy.name}</span>
              <span className="text-xs text-muted-foreground">{formatDistanceToNow(deal.createdAt)}</span>
            </div>
          </div>
          
          <div className="flex space-x-3 text-muted-foreground">
            <div className="flex items-center text-xs">
              <ThumbsUp size={14} className="mr-1 text-success" />
              <span>{deal.verified}</span>
            </div>
            
            {deal.flagged > 0 && (
              <div className="flex items-center text-xs">
                <Flag size={14} className="mr-1 text-destructive" />
                <span>{deal.flagged}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DealCard;
