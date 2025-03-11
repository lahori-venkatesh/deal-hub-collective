
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { DealPreference } from '@/components/explore/types';

interface UserProfileSetupProps {
  onComplete: (data: { name: string; preferences: DealPreference[]; locationAccess: boolean }) => void;
  onBack: () => void;
}

const UserProfileSetup: React.FC<UserProfileSetupProps> = ({ onComplete, onBack }) => {
  const [name, setName] = useState('');
  const [selectedPreferences, setSelectedPreferences] = useState<DealPreference[]>([]);
  const [locationAccess, setLocationAccess] = useState(false);
  
  const preferences: { value: DealPreference; label: string }[] = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'groceries', label: 'Groceries' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'dining', label: 'Dining' },
    { value: 'travel', label: 'Travel' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health & Beauty' },
    { value: 'home', label: 'Home & Garden' }
  ];
  
  const togglePreference = (preference: DealPreference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(selectedPreferences.filter(p => p !== preference));
    } else {
      setSelectedPreferences([...selectedPreferences, preference]);
    }
  };
  
  const handleComplete = () => {
    onComplete({
      name,
      preferences: selectedPreferences,
      locationAccess
    });
  };
  
  return (
    <div className="flex flex-col h-full p-6 animate-fade-in">
      <div className="w-full flex items-center mb-6">
        <button onClick={onBack} className="p-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold mx-auto pr-8">Profile Setup</h1>
      </div>
      
      <div className="w-full max-w-md mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
          <Input
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-3">Deal Preferences</label>
          <p className="text-xs text-muted-foreground mb-3">
            Select categories you're interested in to personalize your feed
          </p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {preferences.map(preference => (
              <Badge
                key={preference.value}
                variant={selectedPreferences.includes(preference.value) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => togglePreference(preference.value)}
              >
                {preference.label}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="bg-muted/30 p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="location" 
              checked={locationAccess} 
              onCheckedChange={(checked) => setLocationAccess(checked as boolean)}
            />
            <div>
              <label
                htmlFor="location"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                Enable Location Access
              </label>
              <p className="text-xs text-muted-foreground mt-1">
                Allow DealHub to access your location to find nearby deals and stores
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-6">
        <Button
          onClick={handleComplete}
          className="w-full max-w-md mx-auto"
          disabled={!name}
        >
          Complete Setup <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default UserProfileSetup;
