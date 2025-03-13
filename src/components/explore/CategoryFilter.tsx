
import React from 'react';
import { Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  categories: string[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
  categories
}) => {
  return (
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
        {categories.map((category) => (
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
  );
};

export default CategoryFilter;
