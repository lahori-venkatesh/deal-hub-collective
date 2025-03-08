
import React, { useState } from 'react';
import { Compass, Filter, Search, Tag, TrendingUp, MapPin, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import BottomNavbar from '@/components/layout/BottomNavbar';
import DealCard from '@/components/ui/DealCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockDeals, dealCategories, Deal } from '@/utils/mockData';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MapView from '@/components/ui/MapView';

type SortOption = 'newest' | 'expiring' | 'popular' | 'distance';
type ViewMode = 'grid' | 'map';

const sortOptions: { value: SortOption; label: string; icon: React.ElementType }[] = [
  { value: 'newest', label: 'Newest', icon: Clock },
  { value: 'expiring', label: 'Expiring Soon', icon: Clock },
  { value: 'popular', label: 'Most Popular', icon: TrendingUp },
  { value: 'distance', label: 'Nearest', icon: MapPin },
];

const Explore: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  
  // Filter and sort deals
  const filteredDeals = mockDeals.filter(deal => {
    // Filter by search query
    if (searchQuery && !deal.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !deal.store.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !deal.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by category
    if (selectedCategory && deal.category !== selectedCategory) {
      return false;
    }
    
    return true;
  });
  
  // Sort deals
  const sortedDeals = [...filteredDeals].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'expiring':
        return new Date(a.expiresAt).getTime() - new Date(b.expiresAt).getTime();
      case 'popular':
        return b.verified - a.verified;
      case 'distance':
        // In a real app, this would calculate actual distance from user
        // For now, we'll just use a random value
        return Math.random() - 0.5;
      default:
        return 0;
    }
  });

  const handleDealSelect = (deal: Deal) => {
    setSelectedDeal(deal);
  };
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header showSearch={false} />
      
      <main className="pt-16 px-4 max-w-7xl mx-auto">
        <div className="py-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Compass size={24} className="text-primary" />
              <h1 className="text-2xl font-bold">Explore Deals</h1>
            </div>
          </div>
          
          {/* Search bar */}
          <div className="relative mb-6 animate-slide-up">
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="text"
                  placeholder="Search deals, stores, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-full border w-full"
                />
              </div>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setShowFilters(!showFilters)}
                className={cn(
                  "rounded-full transition-colors",
                  showFilters ? "bg-primary text-primary-foreground" : ""
                )}
              >
                <Filter size={18} />
              </Button>
            </div>
            
            {/* Filter panel */}
            {showFilters && (
              <div className="mt-4 p-4 bg-background rounded-lg border shadow-md animate-scale-in">
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <Tag size={16} className="mr-2" />
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedCategory === null ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(null)}
                      className="rounded-full text-xs"
                    >
                      All Deals
                    </Button>
                    {dealCategories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="rounded-full text-xs"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <TrendingUp size={16} className="mr-2" />
                    Sort By
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sortOptions.map((option) => (
                      <Button
                        key={option.value}
                        variant={sortBy === option.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSortBy(option.value)}
                        className="rounded-full text-xs flex items-center"
                      >
                        <option.icon size={12} className="mr-1" />
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* View mode tabs */}
          <Tabs defaultValue="grid" value={viewMode} onValueChange={(value) => setViewMode(value as ViewMode)} className="mb-6">
            <TabsList className="grid w-full max-w-[200px] grid-cols-2">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="grid" className="mt-4">
              {sortedDeals.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedDeals.map((deal, index) => (
                    <DealCard
                      key={deal.id}
                      deal={deal}
                      className="animate-slide-up"
                      style={{ animationDelay: `${50 + index * 50}ms` }}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-medium mb-2">No deals found</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="map" className="mt-4">
              <MapView 
                onDealSelect={handleDealSelect} 
                className="rounded-xl shadow-md min-h-[400px]" 
              />
              
              {selectedDeal && (
                <div className="mt-4 animate-slide-up">
                  <h3 className="text-lg font-medium mb-2">Selected Deal</h3>
                  <DealCard deal={selectedDeal} />
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <BottomNavbar />
    </div>
  );
};

export default Explore;
