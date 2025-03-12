
import React from 'react';
import { Store, Globe, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DealFilter } from '@/utils/types';

interface DealTypeTabsProps {
  dealType: DealFilter;
  onValueChange: (value: string) => void;
}

const DealTypeTabs: React.FC<DealTypeTabsProps> = ({ 
  dealType,
  onValueChange
}) => {
  return (
    <Tabs
      defaultValue="in-store"
      value={dealType}
      onValueChange={onValueChange}
      className="mb-6"
    >
      <TabsList className="w-full grid grid-cols-3">
        <TabsTrigger value="in-store" className="flex items-center">
          <Store size={16} className="mr-2" />
          In-Store
        </TabsTrigger>
        <TabsTrigger value="online" className="flex items-center">
          <Globe size={16} className="mr-2" />
          Online
        </TabsTrigger>
        <TabsTrigger value="affiliate" className="flex items-center">
          <ExternalLink size={16} className="mr-2" />
          Affiliate
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default DealTypeTabs;
