
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ThumbsUp, Flag, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Deal, formatTimeRemaining, getExpiryColor, formatDistanceToNow } from '@/utils/mockData';
import UserAvatar from './UserAvatar';

interface DealCardProps {
  deal: Deal;
  compact?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const DealCard: React.FC<DealCardProps> = ({
  deal,
  compact = false,
  className,
  style,
}) => {
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
        <h3 className="text-lg font-semibold line-clamp-1 mb-1">{deal.title}</h3>
        
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <span className="font-medium text-foreground">{deal.store}</span>
          <span className="mx-1.5">•</span>
          <span className="text-xs flex items-center">
            <MapPin size={12} className="mr-0.5" />
            <span className="truncate max-w-[120px]">{deal.location.address.split(',')[0]}</span>
          </span>
        </div>
        
        <div className="mb-3">
          <span className="font-bold text-xl text-primary">
            {deal.discount} OFF
          </span>
        </div>
        
        {!compact && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {deal.description}
          </p>
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
