
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UserAvatar from '@/components/ui/UserAvatar';
import PointsBadge from '@/components/ui/PointsBadge';
import { CrownIcon, MapPin } from 'lucide-react';
import { User } from '@/utils/types';

interface ProfileHeaderProps {
  user: User;
  isPremium: boolean;
  roleBadge: {
    icon: React.ReactNode;
    name: string;
  };
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, isPremium, roleBadge }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-foreground/80 hover:text-foreground"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold ml-2">Profile</h1>
      </div>
      
      <div className="bg-primary/10 px-6 py-8 flex flex-col items-center">
        <UserAvatar src={user.avatar} alt={user.name} size="lg" />
        <h2 className="text-xl font-bold mt-3">{user.name}</h2>
        
        {/* Location */}
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <MapPin size={14} className="mr-1" />
          <span>{user.location}</span>
        </div>
        
        <div className="mt-2 flex items-center gap-2">
          <PointsBadge points={user.points} />
          {isPremium && (
            <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full flex items-center">
              <CrownIcon size={12} className="mr-1" />
              Premium
            </span>
          )}
          {/* Role Badge */}
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full flex items-center">
            {roleBadge.icon}
            {roleBadge.name}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
