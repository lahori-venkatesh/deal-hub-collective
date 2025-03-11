
import React from 'react';
import { Info } from 'lucide-react';
import UserAvatar from '@/components/ui/UserAvatar';
import { formatDistanceToNow } from '@/utils/mockData';

interface DealDescriptionProps {
  description: string;
  postedBy: {
    name: string;
    avatar: string;
  };
  createdAt: string;
}

const DealDescription: React.FC<DealDescriptionProps> = ({
  description,
  postedBy,
  createdAt
}) => {
  return (
    <>
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Description</h2>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <UserAvatar src={postedBy.avatar} alt={postedBy.name} />
          <div className="ml-3">
            <p className="font-medium">{postedBy.name}</p>
            <p className="text-sm text-muted-foreground">
              Posted {formatDistanceToNow(createdAt)}
            </p>
          </div>
        </div>
        
        <button 
          className="text-xs text-muted-foreground hover:text-foreground flex items-center"
        >
          <Info size={14} className="mr-1" />
          Report Poster
        </button>
      </div>
    </>
  );
};

export default DealDescription;
