import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { toast } from 'sonner';
import Header from '@/components/layout/Header';
import BottomNavbar from '@/components/layout/BottomNavbar';
import { mockDeals } from '@/utils/dealsData';
import { currentUser } from '@/utils/userData';
import { CrownIcon, Share2 } from 'lucide-react';

// Import the new components
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileStats from '@/components/profile/ProfileStats';
import RewardsSection from '@/components/profile/RewardsSection';
import ActionButtons from '@/components/profile/ActionButtons';
import { useUserRewards } from '@/hooks/useUserRewards';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { toast: shadowToast } = useToast();
  const [isPremium, setIsPremium] = useState(currentUser.isPremium);
  
  // Update user with Indian name and location
  const user = {
    ...currentUser,
    name: "Arjun Sharma",
    location: "Mumbai, Maharashtra"
  };
  
  // Get user rewards and role badge
  const { roleBadge, rewardSuggestions } = useUserRewards(user);
  
  // Calculate statistics
  const dealsPosted = mockDeals.filter(deal => deal.postedBy.id === user.id).length;
  const joinDate = new Date(user.joined);
  const formattedJoinDate = joinDate.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Convert points to Indian Rupees (just for display)
  const pointsInRupees = user.points * 10; // Assuming 1 point = ₹10
  
  // Monthly savings - for the savings tracker
  const monthlySavings = 2000; // This would be calculated from actual deal usage in a real app
  
  const handleLogout = () => {
    shadowToast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    
    // In a real app, we would clear the authentication state
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };
  
  const handleUpgrade = () => {
    setIsPremium(true);
    toast.success("Upgraded to premium successfully!", {
      description: "You now have access to exclusive deals and features.",
      icon: <CrownIcon className="text-yellow-500" />,
    });
  };

  const handleShareSavings = () => {
    toast.success("Savings summary ready to share!", {
      description: "Your savings summary has been copied to clipboard.",
      icon: <Share2 className="text-blue-500" />,
    });
    // In a real app, this would trigger the native share dialog
  };
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header showSearch={false} />
      
      <main className="pt-16 px-4 max-w-3xl mx-auto">
        {/* User Profile Header */}
        <ProfileHeader 
          user={user} 
          isPremium={isPremium} 
          roleBadge={roleBadge} 
        />
        
        {/* User Profile Card */}
        <div className="bg-card rounded-xl overflow-hidden border shadow-soft mb-6 animate-fade-in">
          {/* User Stats Section */}
          <ProfileStats 
            pointsInRupees={pointsInRupees}
            dealsPosted={dealsPosted}
            monthlySavings={monthlySavings}
            formattedJoinDate={formattedJoinDate}
            onShareSavings={handleShareSavings}
          />
        </div>
        
        {/* Rewards Section */}
        <RewardsSection 
          user={user} 
          rewardSuggestions={rewardSuggestions} 
        />
        
        {/* Action Buttons */}
        <ActionButtons 
          isPremium={isPremium}
          dealsPosted={dealsPosted}
          onUpgrade={handleUpgrade}
          onLogout={handleLogout}
        />
      </main>
      
      <BottomNavbar />
    </div>
  );
};

export default Profile;
