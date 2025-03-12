
import React from 'react';
import { MapPin, CheckCircle, QrCode, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InStoreDealFieldsProps {
  location: string;
  setLocation: (value: string) => void;
  locationVerified: boolean;
  setLocationVerified: (value: boolean) => void;
  qrCodeImage: string | null;
  userLocation: { lat: number; lng: number } | null;
  verifyLocation: () => void;
  handleQRCodeUpload: () => void;
  setQrCodeImage: (value: string | null) => void;
}

const InStoreDealFields: React.FC<InStoreDealFieldsProps> = ({
  location,
  setLocation,
  locationVerified,
  setLocationVerified,
  qrCodeImage,
  userLocation,
  verifyLocation,
  handleQRCodeUpload,
  setQrCodeImage
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="location" className="block text-sm font-medium mb-1">
          Location <span className="text-xs text-muted-foreground">(Required)</span>
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setLocationVerified(false);
            }}
            placeholder="Store address"
            className={`w-full pl-10 pr-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none ${locationVerified ? 'ring-1 ring-primary' : ''}`}
            required
          />
          {locationVerified && (
            <CheckCircle size={18} className="absolute right-3 top-2.5 text-primary" />
          )}
        </div>
        <div className="mt-1 flex justify-between items-center">
          <p className="text-xs text-muted-foreground">
            Add a precise location for better visibility
          </p>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={verifyLocation}
              className={`text-xs ${locationVerified ? 'text-primary' : 'text-muted-foreground'} hover:text-primary flex items-center`}
            >
              <MapPin size={12} className="mr-1" />
              {locationVerified ? 'Verified' : 'Verify Location'}
            </button>
            <button
              type="button"
              onClick={() => {
                if (userLocation) {
                  setLocation("Current Location");
                  setLocationVerified(false);
                }
              }}
              className="text-xs text-primary flex items-center"
            >
              <MapPin size={12} className="mr-1" />
              Use Current Location
            </button>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="qrcode" className="block text-sm font-medium mb-1">
          Store QR Code <span className="text-xs text-muted-foreground">(Optional)</span>
        </label>
        <div className="border rounded-lg p-4 bg-muted/30 flex flex-col items-center justify-center text-center">
          {qrCodeImage ? (
            <div className="relative w-32 h-32 mb-2">
              <img 
                src={qrCodeImage} 
                alt="QR Code" 
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setQrCodeImage(null)}
                className="absolute -top-2 -right-2 p-1 bg-background rounded-full border"
              >
                <ArrowLeft size={14} />
              </button>
            </div>
          ) : (
            <>
              <QrCode size={40} className="text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Add store-provided QR code for easier redemption
              </p>
            </>
          )}
          <Button
            type="button"
            variant="outline"
            onClick={handleQRCodeUpload}
            size="sm"
          >
            {qrCodeImage ? 'Change QR Code' : 'Upload QR Code'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InStoreDealFields;
