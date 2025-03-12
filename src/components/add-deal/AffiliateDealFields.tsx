
import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AffiliateDealFieldsProps {
  affiliateUrl: string;
  setAffiliateUrl: (value: string) => void;
  affiliateDetails: {
    title?: string;
    description?: string;
    discount?: string;
    platform?: string;
  } | null;
  isLoadingAffiliateDetails: boolean;
  fetchAffiliateDetails: () => void;
}

const AffiliateDealFields: React.FC<AffiliateDealFieldsProps> = ({
  affiliateUrl,
  setAffiliateUrl,
  affiliateDetails,
  isLoadingAffiliateDetails,
  fetchAffiliateDetails
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="affiliateUrl" className="block text-sm font-medium mb-1">
          Affiliate URL <span className="text-xs text-muted-foreground">(Required)</span>
        </label>
        <div className="relative">
          <ExternalLink className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
          <input
            id="affiliateUrl"
            type="url"
            value={affiliateUrl}
            onChange={(e) => {
              setAffiliateUrl(e.target.value);
            }}
            placeholder="Paste your affiliate link here"
            className="w-full pl-10 pr-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            required
          />
        </div>
        <div className="mt-1 flex justify-end">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={fetchAffiliateDetails}
            disabled={isLoadingAffiliateDetails || !affiliateUrl}
            className="text-xs"
          >
            {isLoadingAffiliateDetails ? 'Fetching...' : 'Fetch Details'}
          </Button>
        </div>
      </div>
      
      {affiliateDetails && (
        <div className="bg-muted/30 p-3 rounded-lg border">
          <h3 className="text-sm font-medium mb-2 flex items-center">
            <CheckCircle size={16} className="mr-2 text-success" />
            Details extracted successfully
          </h3>
          <ul className="text-xs space-y-1 text-muted-foreground">
            <li><span className="font-medium">Title:</span> {affiliateDetails.title}</li>
            <li><span className="font-medium">Discount:</span> {affiliateDetails.discount}</li>
            <li><span className="font-medium">Platform:</span> {affiliateDetails.platform}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AffiliateDealFields;
