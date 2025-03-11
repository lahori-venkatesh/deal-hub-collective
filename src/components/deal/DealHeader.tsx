
import React from 'react';
import { ArrowLeft, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DealHeaderProps {
  image: string;
  title: string;
}

const DealHeader: React.FC<DealHeaderProps> = ({ image, title }) => {
  const navigate = useNavigate();
  
  return (
    <div className="relative">
      <div className="relative w-full h-64 sm:h-80 bg-muted overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-sm"
      >
        <ArrowLeft size={20} />
      </button>
      
      <button 
        className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-sm"
      >
        <Share2 size={20} />
      </button>
    </div>
  );
};

export default DealHeader;
