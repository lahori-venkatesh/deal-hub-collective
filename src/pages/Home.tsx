
import React, { useState } from 'react';
import { QrCode } from 'lucide-react';
import Header from '@/components/layout/Header';
import BottomNavbar from '@/components/layout/BottomNavbar';
import AddDealButton from '@/components/ui/AddDealButton';
import { mockDeals, dealCategories } from '@/utils/dealsData';
import { currentUser } from '@/utils/userData'; // Import currentUser from userData instead
import { Button } from '@/components/ui/button';
import NearbyDealsSection from '@/components/home/NearbyDealsSection';
import PersonalizedDealsSection from '@/components/home/PersonalizedDealsSection';
import TrendingSection from '@/components/home/TrendingSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import FeaturedDealsSection from '@/components/home/FeaturedDealsSection';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Deals");
  
  // Ensure mockDeals exists and has data
  const deals = mockDeals || [];
  
  // Filter deals by category if needed
  const filteredDeals = selectedCategory === "All Deals" 
    ? deals 
    : deals.filter(deal => deal.category === selectedCategory);
  
  // Get personalized deals based on user category
  const getPersonalizedDeals = () => {
    if (!currentUser?.category || !deals.length) return [];
    
    return deals
      .filter(deal => deal.userCategories?.includes(currentUser.category as any))
      .slice(0, 3);
  };

  // Get category-specific deals
  const getStudentDeals = () => {
    if (!deals.length) return [];
    
    return deals
      .filter(deal => deal.userCategories?.includes("student"))
      .slice(0, 4);
  };

  const getFamilyDeals = () => {
    if (!deals.length) return [];
    
    return deals
      .filter(deal => deal.userCategories?.includes("family"))
      .slice(0, 4);
  };

  const getProfessionalDeals = () => {
    if (!deals.length) return [];
    
    return deals
      .filter(deal => deal.userCategories?.includes("professional"))
      .slice(0, 4);
  };

  // Get the deals for each category
  const studentDeals = getStudentDeals();
  const familyDeals = getFamilyDeals();
  const professionalDeals = getProfessionalDeals();
  const personalizedDeals = getPersonalizedDeals();
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header />
      
      <main className="pt-16 px-4 max-w-7xl mx-auto">
        <div className="py-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold tracking-tight animate-slide-up">
              SaveSphere
            </h1>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 rounded-full animate-slide-up"
            >
              <QrCode size={16} />
              <span>Scan</span>
            </Button>
          </div>
          <p className="text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "50ms" }}>
            Discover crowd-sourced deals, verified by your community.
          </p>
          
          {/* Map section */}
          <NearbyDealsSection />
          
          {/* Personalized Deals Section */}
          {personalizedDeals.length > 0 && (
            <PersonalizedDealsSection 
              currentUser={currentUser}
              deals={personalizedDeals}
            />
          )}
          
          {/* Trending Sections */}
          <TrendingSection 
            studentDeals={studentDeals}
            familyDeals={familyDeals}
            professionalDeals={professionalDeals}
          />
          
          {/* Categories */}
          {dealCategories && dealCategories.length > 0 && (
            <CategoriesSection 
              categories={dealCategories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          )}
          
          {/* Featured deals */}
          {filteredDeals.length > 0 && (
            <FeaturedDealsSection 
              deals={filteredDeals}
              selectedCategory={selectedCategory}
            />
          )}
        </div>
      </main>
      
      <AddDealButton />
      <BottomNavbar />
    </div>
  );
};

export default Home;
