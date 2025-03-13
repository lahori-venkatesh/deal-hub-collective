
import React from 'react';
import { Building, Globe, ExternalLink } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DealTypeSelectorProps {
  dealType: 'in-store' | 'online' | 'affiliate';
  onDealTypeChange: (value: 'in-store' | 'online' | 'affiliate') => void;
}

const DealTypeSelector: React.FC<DealTypeSelectorProps> = ({ 
  dealType, 
  onDealTypeChange 
}) => {
  return (
    <div>
      <label htmlFor="deal-type" className="block text-sm font-medium mb-1">Deal Type *</label>
      <Select 
        value={dealType} 
        onValueChange={(value) => onDealTypeChange(value as 'in-store' | 'online' | 'affiliate')}
      >
        <SelectTrigger id="deal-type">
          <SelectValue placeholder="Select deal type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="in-store">
            <div className="flex items-center">
              <Building className="h-4 w-4 mr-2" />
              In-Store
            </div>
          </SelectItem>
          <SelectItem value="online">
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              Online
            </div>
          </SelectItem>
          <SelectItem value="affiliate">
            <div className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-2" />
              Affiliate
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DealTypeSelector;
