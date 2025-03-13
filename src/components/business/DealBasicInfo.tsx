
import React from 'react';
import { Tag, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DealBasicInfoProps {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  discount: string;
  setDiscount: (value: string) => void;
  expiryDate: string;
  setExpiryDate: (value: string) => void;
}

const DealBasicInfo: React.FC<DealBasicInfoProps> = ({
  title,
  setTitle,
  description,
  setDescription,
  category,
  setCategory,
  discount,
  setDiscount,
  expiryDate,
  setExpiryDate
}) => {
  const categoryOptions = [
    'Electronics', 'Groceries', 'Fashion', 'Dining', 'Travel', 
    'Entertainment', 'Health & Beauty', 'Home & Garden'
  ];

  return (
    <>
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">Deal Title *</label>
        <Input
          id="title"
          placeholder="e.g., 30% Off All Smartphones"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">Description *</label>
        <Textarea
          id="description"
          placeholder="Describe the deal and any terms & conditions"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-1">Category *</label>
          <Select value={category} onValueChange={setCategory} required>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categoryOptions.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="discount" className="block text-sm font-medium mb-1">Discount/Offer *</label>
            <Input
              id="discount"
              placeholder="e.g., 20% Off, Buy 1 Get 1 Free"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="expiry" className="block text-sm font-medium mb-1">Expiry Date *</label>
            <div className="relative">
              <Input
                id="expiry"
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealBasicInfo;
