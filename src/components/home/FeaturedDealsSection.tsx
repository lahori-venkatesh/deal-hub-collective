
import React, { memo } from 'react';
import DealCard from '@/components/ui/DealCard';
import { Deal } from '@/utils/types';

interface FeaturedDealsSectionProps {
  deals: Deal[];
  selectedCategory: string;
}

const FeaturedDealsSection: React.FC<FeaturedDealsSectionProps> = memo(({
  deals,
  selectedCategory
}) => {
  // Don't render if no deals available
  if (!deals || deals.length === 0) {
    return null;
  }

  return (
    <section className="mb-8 animate-slide-up" style={{ animationDelay: "700ms" }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          {selectedCategory === "All Deals" ? "Featured Deals" : selectedCategory}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <DealCard
            key={deal.id}
            deal={deal}
            className="animate-slide-up"
            style={{ animationDelay: `${750 + index * 50}ms` }}
          />
        ))}
      </div>
    </section>
  );
});

FeaturedDealsSection.displayName = 'FeaturedDealsSection';

export default FeaturedDealsSection;
