
import React from 'react';
import { Camera, Image, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageUploadSectionProps {
  dealImage: string | null;
  setDealImage: (image: string | null) => void;
  imageVerified: boolean;
  verifyImage: () => void;
  handleImageUpload: () => void;
  isSubmitting: boolean;
}

const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({
  dealImage,
  setDealImage,
  imageVerified,
  verifyImage,
  handleImageUpload,
  isSubmitting
}) => {
  return (
    <div className="bg-muted/50 rounded-xl p-4 flex flex-col items-center justify-center text-center animate-scale-in">
      {dealImage ? (
        <div className="relative w-full">
          <img 
            src={dealImage} 
            alt="Deal preview" 
            className={`w-full h-48 object-cover rounded-lg ${imageVerified ? 'ring-2 ring-primary' : ''}`}
          />
          <div className="absolute top-2 right-2 flex gap-2">
            {imageVerified && (
              <div className="p-2 bg-primary text-primary-foreground rounded-full">
                <CheckCircle size={18} />
              </div>
            )}
            <button
              type="button"
              onClick={() => setDealImage(null)}
              className="p-2 bg-background/80 backdrop-blur-sm rounded-full"
            >
              <ArrowLeft size={18} />
            </button>
          </div>
          {!imageVerified && (
            <Button
              type="button" 
              onClick={verifyImage}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs"
              size="sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Verifying...' : 'Verify Image'}
            </Button>
          )}
        </div>
      ) : (
        <>
          <div className="mb-3 p-4 bg-muted rounded-full">
            <Camera size={32} className="text-muted-foreground" />
          </div>
          <h3 className="font-medium mb-1">Add a photo of the deal</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Take a clear photo of the price tag, receipt, or product
          </p>
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={handleImageUpload}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg flex items-center"
            >
              <Camera size={18} className="mr-2" />
              Take Photo
            </button>
            <button
              type="button"
              onClick={handleImageUpload}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg flex items-center"
            >
              <Image size={18} className="mr-2" />
              Upload
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageUploadSection;
