
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import BottomNavbar from '@/components/layout/BottomNavbar';
import { toast } from '@/components/ui/use-toast';
import { DealFilter } from '@/utils/types';
import AddDealForm from '@/components/add-deal/AddDealForm';
import BusinessModeButton from '@/components/add-deal/BusinessModeButton';
import UserCategoryIndicator from '@/components/add-deal/UserCategoryIndicator';
import DealTypeTabs from '@/components/add-deal/DealTypeTabs';

const AddDeal: React.FC = () => {
  const navigate = useNavigate();
  
  const [dealType, setDealType] = useState<DealFilter>('in-store');
  const [isBusinessAccount, setIsBusinessAccount] = useState(false);
  
  // Simulate the current user with a category
  const currentUser = {
    category: 'student'
  };

  // Function to toggle business mode
  const useBusinessTemplate = () => {
    setIsBusinessAccount(true);
    // Set longer expiry for business accounts (7 days)
    toast({
      title: "Business Template Applied",
      description: "You're now posting as a business account",
    });
  };

  // Handle deal type change
  const handleDealTypeChange = (type: string) => {
    setDealType(type as DealFilter);
  };
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header />
      
      <main className="pt-16 px-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 text-foreground/80 hover:text-foreground"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-2xl font-bold ml-2">Add New Deal</h1>
          </div>
          
          <BusinessModeButton 
            isBusinessAccount={isBusinessAccount} 
            toggleBusinessMode={useBusinessTemplate} 
          />
        </div>
        
        {/* User Category Indicator */}
        <UserCategoryIndicator category={currentUser.category} />
        
        {/* Deal Type Tabs */}
        <DealTypeTabs dealType={dealType} onValueChange={handleDealTypeChange} />
        
        {/* Deal Form */}
        <AddDealForm 
          dealType={dealType}
          isBusinessAccount={isBusinessAccount}
        />
      </main>
      
      <BottomNavbar />
    </div>
  );
};

export default AddDeal;
