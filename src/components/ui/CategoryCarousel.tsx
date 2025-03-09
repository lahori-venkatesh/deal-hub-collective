
import React, { useRef } from 'react';
import { Deal } from '@/utils/types';
import DealCard from './DealCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './button';

interface CategoryCarouselProps {
  deals: Deal[];
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ deals }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Adjust as needed
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative group">
      <div 
        className="flex overflow-x-auto pb-4 scrollbar-hide gap-4 snap-x snap-mandatory scroll-smooth"
        ref={scrollRef}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {deals.map((deal, index) => (
          <div 
            key={deal.id} 
            className="min-w-[270px] md:min-w-[300px] snap-start"
            style={{ animationDelay: `${100 + index * 50}ms` }}
          >
            <DealCard
              deal={deal}
              compact
              className="h-full animate-slide-up"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-80 transition-opacity rounded-full bg-background border shadow-md"
        onClick={() => scroll('left')}
      >
        <ChevronLeft size={18} />
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-80 transition-opacity rounded-full bg-background border shadow-md"
        onClick={() => scroll('right')}
      >
        <ChevronRight size={18} />
      </Button>
    </div>
  );
};

export default CategoryCarousel;
