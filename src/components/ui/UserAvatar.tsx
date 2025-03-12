
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';

interface UserAvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  border?: boolean;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  src,
  alt,
  size = 'md',
  className,
  border = false,
}) => {
  const [imageError, setImageError] = useState(false);
  
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32,
  };
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <div 
      className={cn(
        "rounded-full overflow-hidden bg-muted flex-shrink-0 flex items-center justify-center",
        sizeClasses[size],
        border && "border-2 border-background",
        className
      )}
    >
      {!imageError ? (
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={handleImageError}
        />
      ) : (
        <User size={iconSizes[size]} className="text-muted-foreground" />
      )}
    </div>
  );
};

export default UserAvatar;
