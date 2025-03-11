
import { User } from '@/utils/types';
import { GraduationCap, ShoppingCart, Briefcase } from 'lucide-react';
import React from 'react';

interface RoleBadge {
  icon: React.ReactNode;
  name: string;
}

interface RewardItem {
  name: string;
  points: number;
  icon: string;
}

export const useUserRewards = (user: User) => {
  const getRoleBadge = (): RoleBadge => {
    switch(user.category) {
      case 'student':
        return { 
          icon: React.createElement(GraduationCap, { size: 16, className: "mr-1" }), 
          name: "Campus Saver" 
        };
      case 'family':
        return { 
          icon: React.createElement(ShoppingCart, { size: 16, className: "mr-1" }), 
          name: "Grocery Guru" 
        };
      case 'professional':
      default:
        return { 
          icon: React.createElement(Briefcase, { size: 16, className: "mr-1" }), 
          name: "Office Hero" 
        };
    }
  };

  const getRewardSuggestions = (): RewardItem[] => {
    switch(user.category) {
      case 'student':
        return [
          { name: "Zomato ₹200 Coupon", points: 300, icon: "🍔" },
          { name: "Exam Stationery Kit", points: 450, icon: "📝" },
          { name: "College Fest Pass", points: 600, icon: "🎭" }
        ];
      case 'family':
        return [
          { name: "Big Bazaar ₹500 Voucher", points: 800, icon: "🛒" },
          { name: "Disney+ Hotstar 1 Month", points: 600, icon: "📺" },
          { name: "Family Restaurant Deal", points: 900, icon: "🍽️" }
        ];
      case 'professional':
      default:
        return [
          { name: "Uber ₹300 Credit", points: 500, icon: "🚗" },
          { name: "LinkedIn Learning 1 Month", points: 750, icon: "💻" },
          { name: "Premium Coffee Subscription", points: 400, icon: "☕" }
        ];
    }
  };

  return {
    roleBadge: getRoleBadge(),
    rewardSuggestions: getRewardSuggestions()
  };
};
