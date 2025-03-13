
import React from 'react';
import { Upload } from 'lucide-react';

const DealImageUpload: React.FC = () => {
  return (
    <div>
      <label htmlFor="deal-image" className="block text-sm font-medium mb-1">Deal Image</label>
      <div className="border-2 border-dashed border-input rounded-lg p-4 flex flex-col items-center justify-center hover:bg-muted/30 transition-colors">
        <Upload className="h-6 w-6 text-muted-foreground mb-2" />
        <p className="font-medium">Upload Image</p>
        <p className="text-xs text-muted-foreground">JPG, PNG or GIF, max 5MB</p>
      </div>
    </div>
  );
};

export default DealImageUpload;
