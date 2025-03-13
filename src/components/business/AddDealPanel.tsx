
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import DealBasicInfo from './DealBasicInfo';
import DealTypeSelector from './DealTypeSelector';
import DealTypeFields from './DealTypeFields';
import DealImageUpload from './DealImageUpload';
import DealVerificationOptions from './DealVerificationOptions';
import SponsoredDealDialog from './SponsoredDealDialog';

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
          <DealBasicInfo 
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            category={category}
            setCategory={setCategory}
            discount={discount}
            setDiscount={setDiscount}
            expiryDate={expiryDate}
            setExpiryDate={setExpiryDate}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DealTypeSelector 
              dealType={dealType} 
              onDealTypeChange={(type) => setDealType(type)} 
            />
          </div>
          
          <DealTypeFields dealType={dealType} />
          
          <DealImageUpload />
          
          <DealVerificationOptions 
            isVerified={isVerified}
            setIsVerified={setIsVerified}
            isSponsored={isSponsored}
            setIsSponsored={setIsSponsored}
            showSponsoredDialog={() => setShowSponsoredDialog(true)}
          />
        </div>
        
        <div className="flex justify-end space-x-3">
          <Button type="button" variant="outline">Cancel</Button>
          <Button type="submit">Create Deal</Button>
        </div>
      </form>
      
      <SponsoredDealDialog 
        open={showSponsoredDialog} 
        onOpenChange={setShowSponsoredDialog} 
      />
    </div>
  );
};

export default AddDealPanel;
