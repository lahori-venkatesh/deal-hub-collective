
import React, { useState } from 'react';
import { ChevronRight, QrCode, GraduationCap, Users, Briefcase, Award, TrendingUp } from 'lucide-react';
import Header from '@/components/layout/Header';
import BottomNavbar from '@/components/layout/BottomNavbar';
import MapView from '@/components/ui/MapView';
import DealCard from '@/components/ui/DealCard';
import AddDealButton from '@/components/ui/AddDealButton';
import { mockDeals, dealCategories, currentUser } from '@/utils/mockData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CategoryCarousel from '@/components/ui/CategoryCarousel';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Deals");
  
  // Filter deals by category if needed
  const filteredDeals = selectedCategory === "All Deals" 
    ? mockDeals 
    : mockDeals.filter(deal => deal.category === selectedCategory);
  
  // Get personalized deals based on user category
  const getPersonalizedDeals = () => {
    if (!currentUser.category) return mockDeals.slice(0, 3);
    return mockDeals
      .filter(deal => deal.userCategories?.includes(currentUser.category as any))
      .slice(0, 3);
  };

  // Get category-specific deals
  const getStudentDeals = () => {
    return mockDeals
      .filter(deal => deal.userCategories?.includes("student"))
      .slice(0, 4);
  };

  const getFamilyDeals = () => {
    return mockDeals
      .filter(deal => deal.userCategories?.includes("family"))
      .slice(0, 4);
  };

  const getProfessionalDeals = () => {
    return mockDeals
      .filter(deal => deal.userCategories?.includes("professional"))
      .slice(0, 4);
  };
  
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
          
          {/* Personalized Deals Section */}
          <section className="mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Award size={20} className="text-primary" />
                {currentUser.category === "student" ? "Deals for Students" : 
                 currentUser.category === "family" ? "Family Specials" : 
                 currentUser.category === "professional" ? "Office Goer Specials" : 
                 "Recommended for You"}
              </h2>
              <button className="text-sm text-primary flex items-center hover:underline">
                View all <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {getPersonalizedDeals().map((deal, index) => (
                <DealCard
                  key={deal.id}
                  deal={deal}
                  compact
                  className="animate-slide-up"
                  style={{ animationDelay: `${150 + index * 50}ms` }}
                />
              ))}
            </div>
          </section>
          
          {/* Map section */}
          <section className="mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Nearby Deals</h2>
              <button className="text-sm text-primary flex items-center hover:underline">
                View all <ChevronRight size={16} />
              </button>
            </div>
            
            <MapView className="shadow-soft" />
          </section>
          
          {/* Trending Sections */}
          <section className="mb-8 animate-slide-up" style={{ animationDelay: "250ms" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                <span>Trending Now</span>
              </h2>
            </div>
            
            {/* Students Love These */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <GraduationCap size={18} className="mr-2 text-primary" />
                  <h3 className="font-medium">Students Love These</h3>
                </div>
                <Link to="/explore?category=student" className="text-sm text-primary flex items-center hover:underline">
                  View all <ChevronRight size={16} />
                </Link>
              </div>
              <CategoryCarousel deals={getStudentDeals()} />
            </div>
            
            {/* Top Savings for Families */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Users size={18} className="mr-2 text-primary" />
                  <h3 className="font-medium">Top Savings for Families</h3>
                </div>
                <Link to="/explore?category=family" className="text-sm text-primary flex items-center hover:underline">
                  View all <ChevronRight size={16} />
                </Link>
              </div>
              <CategoryCarousel deals={getFamilyDeals()} />
            </div>
            
            {/* Office Goer Specials */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Briefcase size={18} className="mr-2 text-primary" />
                  <h3 className="font-medium">Office Goer Specials</h3>
                </div>
                <Link to="/explore?category=professional" className="text-sm text-primary flex items-center hover:underline">
                  View all <ChevronRight size={16} />
                </Link>
              </div>
              <CategoryCarousel deals={getProfessionalDeals()} />
            </div>
          </section>
          
          {/* Categories */}
          <section className="mb-6 animate-slide-up" style={{ animationDelay: "650ms" }}>
            <div className="overflow-x-auto pb-2">
              <div className="flex space-x-2">
                {dealCategories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>
          
          {/* Featured deals */}
          <section className="mb-8 animate-slide-up" style={{ animationDelay: "700ms" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                {selectedCategory === "All Deals" ? "Featured Deals" : selectedCategory}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDeals.map((deal, index) => (
                <DealCard
                  key={deal.id}
                  deal={deal}
                  className="animate-slide-up"
                  style={{ animationDelay: `${750 + index * 50}ms` }}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <AddDealButton />
      <BottomNavbar />
    </div>
  );
};

export default Home;
