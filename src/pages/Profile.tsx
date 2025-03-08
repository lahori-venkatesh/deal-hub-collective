
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Settings, 
  Award, 
  Gift, 
  Bookmark,
  LogOut,
  ThumbsUp,
  Tag,
  User as UserIcon
} from 'lucide-react';
import Header from '@/components/layout/Header';
import BottomNavbar from '@/components/layout/BottomNavbar';
import UserAvatar from '@/components/ui/UserAvatar';
import PointsBadge from '@/components/ui/PointsBadge';
import { currentUser } from '@/utils/mockData';
import { cn } from '@/lib/utils';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  
  const menuItems = [
    {
      icon: Bookmark,
      label: 'Saved Deals',
      description: '10 deals saved for later',
      path: '/saved-deals',
    },
    {
      icon: Tag,
      label: 'My Deals',
      description: `${currentUser.dealsPosted} deals posted`,
      path: '/my-deals',
    },
    {
      icon: Award,
      label: 'My Achievements',
      description: '3 badges earned so far',
      path: '/achievements',
    },
    {
      icon: Gift,
      label: 'Rewards',
      description: 'Redeem your points for gift cards',
      path: '/rewards',
      highlight: true,
    },
    {
      icon: Settings,
      label: 'Settings',
      description: 'Notifications, privacy, and more',
      path: '/settings',
    },
  ];
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header showSearch={false} />
      
      <main className="pt-16 px-4 max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-foreground/80 hover:text-foreground"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold ml-2">Profile</h1>
        </div>
        
        {/* Profile header */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 mb-6 animate-scale-in">
          <div className="flex items-center">
            <UserAvatar 
              src={currentUser.avatar} 
              alt={currentUser.name} 
              size="lg"
              className="border-4 border-background"
            />
            
            <div className="ml-4">
              <h2 className="text-xl font-bold">{currentUser.name}</h2>
              <div className="flex items-center mt-1">
                <PointsBadge points={currentUser.points} />
                <span className="text-xs text-muted-foreground ml-2">
                  Member since {new Date(currentUser.joined).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-background/60 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center">
              <div className="text-xl font-bold text-primary">{currentUser.dealsPosted}</div>
              <div className="text-xs text-muted-foreground text-center">Deals Posted</div>
            </div>
            
            <div className="bg-background/60 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center">
              <div className="text-xl font-bold text-primary">{currentUser.dealsVerified}</div>
              <div className="text-xs text-muted-foreground text-center">Deals Verified</div>
            </div>
            
            <div className="bg-background/60 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center">
              <div className="text-xl font-bold text-primary">3</div>
              <div className="text-xs text-muted-foreground text-center">Badges Earned</div>
            </div>
          </div>
          
          {!currentUser.isPremium && (
            <div className="mt-6 bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-semibold mb-1">Upgrade to Premium</div>
                  <div className="text-xs text-muted-foreground">
                    Unlock exclusive deals and remove ads for $2.99/month
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-primary text-primary-foreground text-sm rounded-lg">
                  Upgrade
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Menu items */}
        <div className="space-y-2 animate-slide-up">
          {menuItems.map((item, index) => (
            <button
              key={item.path}
              className={cn(
                "w-full flex items-center py-4 px-4 rounded-lg hover:bg-muted/70 transition-colors",
                item.highlight && "bg-primary/5 border border-primary/20"
              )}
              style={{ animationDelay: `${50 + (index * 50)}ms` }}
              onClick={() => navigate(item.path)}
            >
              <div className={cn(
                "p-2 rounded-full mr-4",
                item.highlight ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
              )}>
                <item.icon size={18} />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.description}</div>
              </div>
              <div className="text-muted-foreground">
                <ArrowLeft size={16} className="rotate-180" />
              </div>
            </button>
          ))}
          
          <button
            className="w-full flex items-center py-4 px-4 rounded-lg text-destructive hover:bg-destructive/5 transition-colors mt-8 animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="p-2 rounded-full bg-destructive/10 text-destructive mr-4">
              <LogOut size={18} />
            </div>
            <div className="flex-1 text-left">
              <div className="font-medium">Log Out</div>
            </div>
          </button>
        </div>
      </main>
      
      <BottomNavbar />
    </div>
  );
};

export default Profile;
