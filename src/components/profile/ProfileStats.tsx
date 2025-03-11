
import React from 'react';
import { Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

interface ProfileStatsProps {
  pointsInRupees: number;
  dealsPosted: number;
  monthlySavings: number;
  formattedJoinDate: string;
  onShareSavings: () => void;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ 
  pointsInRupees, 
  dealsPosted, 
  monthlySavings, 
  formattedJoinDate,
  onShareSavings 
}) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-muted/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">₹{pointsInRupees}</div>
          <div className="text-sm text-muted-foreground">Value Earned</div>
        </div>
        <div className="bg-muted/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">{dealsPosted}</div>
          <div className="text-sm text-muted-foreground">Deals Posted</div>
        </div>
      </div>
      
      {/* Savings Tracker */}
      <div className="bg-green-50 text-green-800 rounded-lg p-4 mb-6 flex justify-between items-center">
        <div>
          <div className="font-semibold">You saved ₹{monthlySavings} this month!</div>
          <div className="text-xs text-green-700">Based on deals you've used</div>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 bg-green-100 hover:bg-green-200 text-green-800"
          onClick={onShareSavings}
        >
          <Share2 size={16} className="mr-1" />
          Share
        </Button>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center text-sm">
          <Calendar size={16} className="mr-3 text-muted-foreground" />
          <span>Joined {formattedJoinDate}</span>
        </div>
        <div className="flex items-center text-sm">
          <Award size={16} className="mr-3 text-muted-foreground" />
          <span>Level 2 Deal Hunter</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
