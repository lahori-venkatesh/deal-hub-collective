
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import BottomNavbar from '@/components/layout/BottomNavbar';
import MapView from '@/components/ui/MapView';
import DealCard from '@/components/ui/DealCard';
import AddDealButton from '@/components/ui/AddDealButton';
import { mockDeals, dealCategories } from '@/utils/mockData';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Deals");
  
  // Filter deals by category if needed
  const filteredDeals = selectedCategory === "All Deals" 
    ? mockDeals 
    : mockDeals.filter(deal => deal.category === selectedCategory);
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header />
      
      <main className="pt-16 px-4 max-w-7xl mx-auto">
        <div className="py-4">
          <h1 className="text-3xl font-bold tracking-tight mb-2 animate-slide-up">
            SaveSphere
          </h1>
          <p className="text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "50ms" }}>
            Discover crowd-sourced deals, verified by your community.
          </p>
          
          {/* Map section */}
          <section className="mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Nearby Deals</h2>
              <button className="text-sm text-primary flex items-center hover:underline">
                View all <ChevronRight size={16} />
              </button>
            </div>
            
            <MapView className="shadow-soft" />
          </section>
          
          {/* Categories */}
          <section className="mb-6 animate-slide-up" style={{ animationDelay: "150ms" }}>
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
          <section className="mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
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
                  style={{ animationDelay: `${250 + index * 50}ms` }}
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
