
import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SortOption } from '@/components/explore/types';

interface SortOptionsProps {
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
  sortOptions: { value: SortOption; label: string; icon: React.ElementType }[];
}

const SortOptions: React.FC<SortOptionsProps> = ({
  sortBy,
  setSortBy,
  sortOptions
}) => {
  return (
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
  );
};

export default SortOptions;
