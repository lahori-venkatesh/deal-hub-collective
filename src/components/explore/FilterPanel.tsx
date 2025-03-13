
import React, { memo } from 'react';
import { SortOption } from '@/components/explore/types';
import CategoryFilter from './CategoryFilter';
import SortOptions from './SortOptions';

interface FilterPanelProps {
  showFilters: boolean;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
  sortOptions: { value: SortOption; label: string; icon: React.ElementType }[];
}

// List of categories as simple strings
const categories = [
  "Electronics",
  "Fashion",
  "Groceries",
  "Dining",
  "Travel",
  "Entertainment",
  "Beauty",
  "Home"
];

// Use memo to prevent unnecessary re-renders
const FilterPanel: React.FC<FilterPanelProps> = memo(({
  showFilters,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  sortOptions,
}) => {
  if (!showFilters) return null;

  return (
    <div className="mt-4 p-4 bg-background rounded-lg border shadow-md animate-scale-in">
      <CategoryFilter 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      
      <SortOptions 
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOptions={sortOptions}
      />
    </div>
  );
});

FilterPanel.displayName = 'FilterPanel';

export default FilterPanel;
