
import React from 'react';
import { Gift, Zap, ShieldCheck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { User } from '@/utils/types';
import { Badge } from '@/components/ui/badge';

interface RewardItem {
  name: string;
  points: number;
  icon: string;
  sponsored?: boolean;
  verified?: boolean;
}

interface RewardsSectionProps {
  user: User;
  rewardSuggestions: RewardItem[];
}

const RewardsSection: React.FC<RewardsSectionProps> = ({ user, rewardSuggestions }) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-card rounded-xl overflow-hidden border shadow-soft mb-6 animate-slide-up" style={{ animationDelay: "50ms" }}>
      <div className="p-4 bg-primary/5 flex justify-between items-center">
        <h3 className="font-semibold flex items-center">
          <Gift size={18} className="mr-2 text-primary" />
          Recommended Rewards for You
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-primary"
          onClick={() => navigate('/rewards')}
        >
          See All
        </Button>
      </div>
      <div className="p-4 grid grid-cols-1 gap-3">
        {rewardSuggestions.map((reward, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center">
              <span className="text-xl mr-3">{reward.icon}</span>
              <div>
                <span>{reward.name}</span>
                <div className="flex space-x-2 mt-1">
                  {reward.verified && (
                    <Badge variant="default" className="flex items-center gap-1 bg-primary/90 h-5 text-xs">
                      <ShieldCheck size={10} />
                      <span>Verified</span>
                    </Badge>
                  )}
                  
                  {reward.sponsored && (
                    <Badge variant="default" className="flex items-center gap-1 bg-amber-500/90 text-white h-5 text-xs">
                      <Star size={10} />
                      <span>Sponsored</span>
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className={user.points >= reward.points ? "text-primary" : "text-muted-foreground"}
              disabled={user.points < reward.points}
            >
              <Zap size={14} className="mr-1" />
              {reward.points} pts
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsSection;
