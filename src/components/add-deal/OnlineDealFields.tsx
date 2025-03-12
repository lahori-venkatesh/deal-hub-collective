
import React from 'react';
import { Globe, Tag, Link, AlertTriangle, CheckCircle } from 'lucide-react';

interface OnlineDealFieldsProps {
  platform: string;
  setPlatform: (value: string) => void;
  promoCode: string;
  setPromoCode: (value: string) => void;
  isDuplicateCode: boolean;
  setIsDuplicateCode: (value: boolean) => void;
  sourceUrl: string;
  setSourceUrl: (value: string) => void;
  verifyPromoCode: () => void;
}

const OnlineDealFields: React.FC<OnlineDealFieldsProps> = ({
  platform,
  setPlatform,
  promoCode,
  setPromoCode,
  isDuplicateCode,
  setIsDuplicateCode,
  sourceUrl,
  setSourceUrl,
  verifyPromoCode
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="platform" className="block text-sm font-medium mb-1">
          Platform <span className="text-xs text-muted-foreground">(Required)</span>
        </label>
        <div className="relative">
          <Globe className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
          <select
            id="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            required
          >
            <option value="">Select platform</option>
            <option value="Amazon">Amazon</option>
            <option value="Flipkart">Flipkart</option>
            <option value="Myntra">Myntra</option>
            <option value="Ajio">Ajio</option>
            <option value="Swiggy">Swiggy</option>
            <option value="Zomato">Zomato</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="promoCode" className="block text-sm font-medium mb-1">
          Promo Code <span className="text-xs text-muted-foreground">(Required)</span>
        </label>
        <div className="relative">
          <Tag className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
          <input
            id="promoCode"
            type="text"
            value={promoCode}
            onChange={(e) => {
              setPromoCode(e.target.value.toUpperCase());
              setIsDuplicateCode(false);
            }}
            placeholder="e.g., SUMMER50, MYNTRA20"
            className={`w-full pl-10 pr-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none ${isDuplicateCode ? 'border-destructive' : ''}`}
            required
          />
          {isDuplicateCode && (
            <AlertTriangle size={18} className="absolute right-3 top-2.5 text-destructive" />
          )}
        </div>
        <div className="mt-1 flex justify-between items-center">
          <p className="text-xs text-muted-foreground">
            {isDuplicateCode 
              ? "This code already exists in our system" 
              : "Enter the exact code as shown on the platform"}
          </p>
          <button
            type="button"
            onClick={verifyPromoCode}
            className="text-xs text-primary flex items-center"
          >
            <CheckCircle size={12} className="mr-1" />
            Verify Code
          </button>
        </div>
      </div>
      
      <div>
        <label htmlFor="sourceUrl" className="block text-sm font-medium mb-1">
          Source URL <span className="text-xs text-muted-foreground">(Optional)</span>
        </label>
        <div className="relative">
          <Link className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
          <input
            id="sourceUrl"
            type="url"
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
            placeholder="e.g., https://www.amazon.in/deals"
            className="w-full pl-10 pr-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Where did you find this deal? (Twitter, Reddit, etc.)
        </p>
      </div>
    </div>
  );
};

export default OnlineDealFields;
