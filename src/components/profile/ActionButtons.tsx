
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CrownIcon, CheckCircle2, LogOut } from 'lucide-react';

interface ActionButtonsProps {
  isPremium: boolean;
  dealsPosted: number;
  onUpgrade: () => void;
  onLogout: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ isPremium, dealsPosted, onUpgrade, onLogout }) => {
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-cols-1 gap-4 mb-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
      <button
        onClick={() => navigate('/my-deals')}
        className="bg-card hover:bg-muted/50 border rounded-lg p-4 flex justify-between items-center transition-colors"
      >
        <span className="font-medium">My Deals</span>
        <span className="text-muted-foreground">{dealsPosted}</span>
      </button>
      
      <button
        onClick={() => navigate('/saved-deals')}
        className="bg-card hover:bg-muted/50 border rounded-lg p-4 flex justify-between items-center transition-colors"
      >
        <span className="font-medium">Saved Deals</span>
        <span className="text-muted-foreground">3</span>
      </button>
      
      {!isPremium ? (
        <button
          onClick={onUpgrade}
          className="bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg p-4 flex justify-between items-center transition-colors"
        >
          <div className="flex items-center">
            <CrownIcon size={18} className="mr-2" />
            <span className="font-medium">Upgrade to Premium</span>
          </div>
          <span>₹499/year</span>
        </button>
      ) : (
        <div className="bg-amber-50 text-amber-800 rounded-lg p-4 flex justify-between items-center">
          <div className="flex items-center">
            <CheckCircle2 size={18} className="mr-2" />
            <span className="font-medium">Premium Member</span>
          </div>
          <span className="text-xs text-muted-foreground">Expires in 364 days</span>
        </div>
      )}
      
      <button
        onClick={onLogout}
        className="bg-destructive/10 hover:bg-destructive/20 text-destructive rounded-lg p-4 flex items-center justify-center transition-colors mt-4"
      >
        <LogOut size={18} className="mr-2" />
        <span className="font-medium">Log Out</span>
      </button>
    </div>
  );
};

export default ActionButtons;
