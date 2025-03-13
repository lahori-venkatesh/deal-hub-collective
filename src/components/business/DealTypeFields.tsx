
import React from 'react';
import { MapPin, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface DealTypeFieldsProps {
  dealType: 'in-store' | 'online' | 'affiliate';
}

const DealTypeFields: React.FC<DealTypeFieldsProps> = ({ dealType }) => {
  if (dealType === 'in-store') {
    return (
      <div>
        <label htmlFor="location" className="block text-sm font-medium mb-1">Store Location *</label>
        <div className="relative">
          <Input
            id="location"
            placeholder="Store address"
            required
          />
          <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>
    );
  }
  
  if (dealType === 'online') {
    return (
      <div>
        <label htmlFor="promo-code" className="block text-sm font-medium mb-1">Promo Code</label>
        <Input
          id="promo-code"
          placeholder="e.g., SUMMER30"
        />
      </div>
    );
  }
  
  if (dealType === 'affiliate') {
    return (
      <div>
        <label htmlFor="affiliate-url" className="block text-sm font-medium mb-1">Affiliate URL *</label>
        <Input
          id="affiliate-url"
          placeholder="https://example.com/deal?ref=dealhub"
          required
        />
      </div>
    );
  }
  
  return null;
};

export default DealTypeFields;
