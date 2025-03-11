
import React, { useState } from 'react';
import { 
  Upload, 
  Calendar, 
  Tag, 
  Globe, 
  MapPin, 
  Building, 
  ExternalLink, 
  Shield,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';

const AddDealPanel: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [dealType, setDealType] = useState<'in-store' | 'online' | 'affiliate'>('in-store');
  const [discount, setDiscount] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isSponsored, setIsSponsored] = useState(false);
  const [showSponsoredDialog, setShowSponsoredDialog] = useState(false);
  
  const categoryOptions = [
    'Electronics', 'Groceries', 'Fashion', 'Dining', 'Travel', 
    'Entertainment', 'Health & Beauty', 'Home & Garden'
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!title || !description || !category || !discount || !expiryDate) {
      toast.error('Please fill all required fields');
      return;
    }
    
    // In a real app, this would create a new deal
    toast.success('Deal created successfully!', {
      description: 'Your deal is now live on the platform'
    });
    
    // Reset form
    setTitle('');
    setDescription('');
    setCategory('');
    setDealType('in-store');
    setDiscount('');
    setExpiryDate('');
    setIsVerified(false);
    setIsSponsored(false);
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Add New Deal</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="bg-card rounded-xl p-5 border shadow-soft space-y-4">
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
            
            <div>
              <label htmlFor="deal-type" className="block text-sm font-medium mb-1">Deal Type *</label>
              <Select 
                value={dealType} 
                onValueChange={(value) => setDealType(value as 'in-store' | 'online' | 'affiliate')}
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
          
          {dealType === 'in-store' && (
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1">Store Location *</label>
              <div className="relative">
                <Input
                  id="location"
                  placeholder="Store address"
                  required={dealType === 'in-store'}
                />
                <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          )}
          
          {dealType === 'online' && (
            <div>
              <label htmlFor="promo-code" className="block text-sm font-medium mb-1">Promo Code</label>
              <Input
                id="promo-code"
                placeholder="e.g., SUMMER30"
              />
            </div>
          )}
          
          {dealType === 'affiliate' && (
            <div>
              <label htmlFor="affiliate-url" className="block text-sm font-medium mb-1">Affiliate URL *</label>
              <Input
                id="affiliate-url"
                placeholder="https://example.com/deal?ref=dealhub"
                required={dealType === 'affiliate'}
              />
            </div>
          )}
          
          <div>
            <label htmlFor="deal-image" className="block text-sm font-medium mb-1">Deal Image</label>
            <div className="border-2 border-dashed border-input rounded-lg p-4 flex flex-col items-center justify-center hover:bg-muted/30 transition-colors">
              <Upload className="h-6 w-6 text-muted-foreground mb-2" />
              <p className="font-medium">Upload Image</p>
              <p className="text-xs text-muted-foreground">JPG, PNG or GIF, max 5MB</p>
            </div>
          </div>
          
          <div className="space-y-3 pt-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="verified" 
                checked={isVerified} 
                onCheckedChange={(checked) => setIsVerified(checked as boolean)} 
              />
              <label
                htmlFor="verified"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Shield className="h-4 w-4 mr-1 text-primary" />
                Mark as Verified Deal
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="sponsored" 
                checked={isSponsored} 
                onCheckedChange={(checked) => {
                  if (checked && !isSponsored) {
                    setShowSponsoredDialog(true);
                  }
                  setIsSponsored(checked as boolean);
                }} 
              />
              <label
                htmlFor="sponsored"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Star className="h-4 w-4 mr-1 text-amber-500" />
                Boost as Sponsored Deal
              </label>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-3">
          <Button type="button" variant="outline">Cancel</Button>
          <Button type="submit">Create Deal</Button>
        </div>
      </form>
      
      {/* Sponsored Deal Dialog */}
      <Dialog open={showSponsoredDialog} onOpenChange={setShowSponsoredDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Boost Your Deal</DialogTitle>
          
          <div className="space-y-4 py-3">
            <p className="text-sm text-muted-foreground">
              Sponsored deals receive premium placement and up to 5x more visibility. Choose a boost package:
            </p>
            
            <div className="space-y-3">
              <div className="bg-muted/30 rounded-lg p-3 border border-input flex justify-between items-center">
                <div>
                  <p className="font-medium">3-Day Boost</p>
                  <p className="text-xs text-muted-foreground">Perfect for short promotions</p>
                </div>
                <div className="text-primary font-bold">₹499</div>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 flex justify-between items-center">
                <div>
                  <p className="font-medium">7-Day Boost</p>
                  <p className="text-xs text-amber-700">Most popular option</p>
                </div>
                <div className="text-primary font-bold">₹899</div>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-3 border border-input flex justify-between items-center">
                <div>
                  <p className="font-medium">14-Day Boost</p>
                  <p className="text-xs text-muted-foreground">Best value for extended campaigns</p>
                </div>
                <div className="text-primary font-bold">₹1499</div>
              </div>
            </div>
            
            <div className="pt-3 flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setShowSponsoredDialog(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                setShowSponsoredDialog(false);
                toast.success('Deal boosted successfully!', {
                  description: 'Your deal will receive premium placement'
                });
              }}>
                Boost Deal
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddDealPanel;
