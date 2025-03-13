
import React, { memo } from 'react';
import { QrCode, ShoppingCart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Deal } from '@/utils/types';

interface DealActionsProps {
  deal: Deal;
  onRedeem?: (deal: Deal) => void;
}

// Button configurations for different deal types
const dealTypeButtons = {
  'in-store': {
    icon: QrCode,
    text: 'Show Code'
  },
  'online': {
    icon: ShoppingCart,
    text: 'Shop Now'
  },
  'affiliate': {
    icon: ExternalLink,
    text: 'Get Deal',
    variant: 'default' as const
  }
};

const DealActions: React.FC<DealActionsProps> = memo(({
  deal,
  onRedeem
}) => {
  if (!onRedeem) return null;

  const handleRedeem = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onRedeem(deal);
  };

  const buttonConfig = dealTypeButtons[deal.dealType];
  const ButtonIcon = buttonConfig.icon;
  const variant = buttonConfig.variant || 'outline';

  return (
    <div className="flex space-x-2 mb-4">
      <Button 
        variant={variant} 
        size="sm" 
        className="w-full flex items-center justify-center"
        onClick={handleRedeem}
      >
        <ButtonIcon size={14} className="mr-1" />
        {buttonConfig.text}
      </Button>
    </div>
  );
});

DealActions.displayName = 'DealActions';

export default DealActions;
