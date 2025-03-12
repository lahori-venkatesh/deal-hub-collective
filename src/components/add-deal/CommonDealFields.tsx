
import React from 'react';
import { Tag, Store, Calendar } from 'lucide-react';
import { DealFilter } from '@/utils/types';

interface CommonDealFieldsProps {
  title: string;
  setTitle: (value: string) => void;
  discount: string;
  setDiscount: (value: string) => void;
  store: string;
  setStore: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  expiryDate: string;
  setExpiryDate: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  dealType: DealFilter;
  isBusinessAccount: boolean;
}

const CommonDealFields: React.FC<CommonDealFieldsProps> = ({
  title,
  setTitle,
  discount,
  setDiscount,
  store,
  setStore,
  category,
  setCategory,
  expiryDate,
  setExpiryDate,
  description,
  setDescription,
  dealType,
  isBusinessAccount
}) => {
  // Mock data for categories
  const dealCategories = [
    'Electronics', 'Groceries', 'Fashion', 'Dining', 'Travel', 
    'Entertainment', 'Health & Beauty', 'Home & Garden', 'Retail'
  ];

  return (
    <div className="space-y-4 animate-slide-up" style={{ animationDelay: "50ms" }}>
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Deal Title
        </label>
        <div className="relative">
          <Tag className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={
              dealType === 'in-store' 
                ? (isBusinessAccount ? "e.g., Grand Opening Sale 50% Off" : "e.g., 50% Off All Produce") 
                : dealType === 'online'
                ? "e.g., FLAT ₹500 OFF on Electronics"
                : "e.g., 40% off on Zomato orders"
            }
            className="w-full pl-10 pr-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="discount" className="block text-sm font-medium mb-1">
          Discount
        </label>
        <input
          id="discount"
          type="text"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="e.g., 20%, BOGO, $5 OFF"
          className="w-full px-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          required
        />
      </div>
      
      <div>
        <label htmlFor="store" className="block text-sm font-medium mb-1">
          Store/Brand Name
        </label>
        <div className="relative">
          <Store className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
          <input
            id="store"
            type="text"
            value={store}
            onChange={(e) => setStore(e.target.value)}
            placeholder={
              dealType === 'in-store'
                ? "e.g., Whole Foods, Target"
                : "e.g., Amazon, Myntra, Swiggy"
            }
            className="w-full pl-10 pr-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          required
        >
          <option value="">Select a category</option>
          {dealCategories.filter(cat => cat !== "All Deals").map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="expiry" className="block text-sm font-medium mb-1">
          Expiry Date <span className="text-xs text-muted-foreground">(Required)</span>
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
          <input
            id="expiry"
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            required
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {isBusinessAccount 
            ? "Business deals can stay active for up to 7 days" 
            : "Regular deals expire after 24 hours by default"}
        </p>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={
            dealType === 'in-store'
              ? (isBusinessAccount ? "Enter details about your business promotion..." : "Add details about the deal...")
              : "Enter details, terms & conditions, or restrictions..."
          }
          className="w-full px-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none min-h-[100px]"
        ></textarea>
      </div>
    </div>
  );
};

export default CommonDealFields;
