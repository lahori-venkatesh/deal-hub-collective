
import React, { useState } from 'react';
import { Compass, Filter, Search, Tag, TrendingUp, MapPin, Clock, Store, Globe, ExternalLink, ShoppingCart } from 'lucide-react';
import Header from '@/components/layout/Header';
import BottomNavbar from '@/components/layout/BottomNavbar';
import DealCard from '@/components/ui/DealCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockDeals, dealCategories } from '@/utils/mockData';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MapView from '@/components/ui/MapView';
import { Deal, DealFilter } from '@/utils/types';
import { toast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

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
  const [selectedDealType, setSelectedDealType] = useState<DealFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [showRedemptionDialog, setShowRedemptionDialog] = useState(false);
  
  // Filter and sort deals
  const filteredDeals = mockDeals.filter(deal => {
    // Filter by deal type
    if (selectedDealType !== 'all' && deal.dealType !== selectedDealType) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !deal.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !deal.store.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !deal.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !(deal.promoCode && deal.promoCode.toLowerCase().includes(searchQuery.toLowerCase())) &&
        !(deal.platform && deal.platform.toLowerCase().includes(searchQuery.toLowerCase()))
    ) {
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
  
  const handleRedeemDeal = (deal: Deal) => {
    setSelectedDeal(deal);
    
    if (deal.dealType === 'in-store') {
      setShowRedemptionDialog(true);
    } else if (deal.dealType === 'online') {
      // Copy promo code and open website
      if (deal.promoCode) {
        navigator.clipboard.writeText(deal.promoCode);
        toast({
          title: "Promo code copied!",
          description: `${deal.promoCode} has been copied to your clipboard.`,
        });
      }
      
      // Open website
      window.open(deal.affiliateUrl || `https://${deal.platform?.toLowerCase()}.com`, '_blank');
    } else if (deal.dealType === 'affiliate') {
      // Direct redirect with auto-applied discount
      window.open(deal.affiliateUrl, '_blank');
      toast({
        title: "Redirecting with discount",
        description: "Your discount will be automatically applied.",
      });
    }
  };
  
  const markAsRedeemed = () => {
    setShowRedemptionDialog(false);
    toast({
      title: "Deal Redeemed!",
      description: "Upload your receipt to earn 10 points.",
    });
  };

  // Get the icon for deal type filter
  const getDealTypeIcon = (type: DealFilter) => {
    switch (type) {
      case 'in-store':
        return <Store size={16} className="mr-2" />;
      case 'online':
        return <Globe size={16} className="mr-2" />;
      case 'affiliate':
        return <ExternalLink size={16} className="mr-2" />;
      default:
        return null;
    }
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
                  placeholder="Search deals, stores, or promo codes..."
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
            
            {/* Deal Type Filter Tabs */}
            <div className="mt-4">
              <Tabs
                defaultValue="all"
                value={selectedDealType}
                onValueChange={(value) => setSelectedDealType(value as DealFilter)}
                className="w-full"
              >
                <TabsList className="w-full grid grid-cols-4">
                  <TabsTrigger value="all">All Deals</TabsTrigger>
                  <TabsTrigger value="in-store" className="flex items-center justify-center">
                    <Store size={14} className="mr-1" />
                    In-Store
                  </TabsTrigger>
                  <TabsTrigger value="online" className="flex items-center justify-center">
                    <Globe size={14} className="mr-1" />
                    Online
                  </TabsTrigger>
                  <TabsTrigger value="affiliate" className="flex items-center justify-center">
                    <ExternalLink size={14} className="mr-1" />
                    Affiliate
                  </TabsTrigger>
                </TabsList>
              </Tabs>
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
                    {dealCategories.filter(c => c !== "All Deals").map((category) => (
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
                      onRedeem={handleRedeemDeal}
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
                  <DealCard 
                    deal={selectedDeal} 
                    onRedeem={handleRedeemDeal}
                  />
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      {/* QR Code Redemption Dialog */}
      <Dialog open={showRedemptionDialog} onOpenChange={setShowRedemptionDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Show this to the cashier</DialogTitle>
            <DialogDescription>
              The store will scan this QR code or enter the redemption ID to apply your discount.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="bg-white p-4 rounded-lg shadow-inner mb-4">
              {/* In a real app, this would be a dynamically generated QR code */}
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SAVESPHERE-12345"
                alt="QR Code"
                className="w-[200px] h-[200px]"
              />
            </div>
            <p className="text-lg font-mono text-center mb-4">
              SS-{Math.random().toString(36).substring(2, 8).toUpperCase()}
            </p>
            <Button onClick={markAsRedeemed} className="w-full">
              Mark as Redeemed
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <BottomNavbar />
    </div>
  );
};

export default Explore;
