
import React from 'react';
import { GraduationCap, Home, Briefcase } from 'lucide-react';

interface UserCategoryIndicatorProps {
  category: string;
}

const UserCategoryIndicator: React.FC<UserCategoryIndicatorProps> = ({ category }) => {
  return (
    <div className="mb-6 flex items-center text-sm text-muted-foreground">
      Posting as: 
      <span className="ml-2 flex items-center text-foreground font-medium">
        {category === 'student' ? (
          <>
            <GraduationCap size={16} className="mr-1 text-primary" />
            Student
          </>
        ) : category === 'family' ? (
          <>
            <Home size={16} className="mr-1 text-primary" />
            Family
          </>
        ) : (
          <>
            <Briefcase size={16} className="mr-1 text-primary" />
            Professional
          </>
        )}
      </span>
    </div>
  );
};

export default UserCategoryIndicator;
