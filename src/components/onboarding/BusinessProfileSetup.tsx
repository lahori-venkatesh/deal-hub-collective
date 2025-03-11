
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BusinessType } from '@/components/explore/types';

interface BusinessProfileSetupProps {
  onComplete: (data: {
    businessName: string;
    businessType: BusinessType;
    documents: string[];
    businessEmail: string;
    businessContact: string;
    termsAccepted: boolean;
  }) => void;
  onBack: () => void;
}

const BusinessProfileSetup: React.FC<BusinessProfileSetupProps> = ({ onComplete, onBack }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState<BusinessType>('retail');
  const [documents, setDocuments] = useState<string[]>([]);
  const [businessEmail, setBusinessEmail] = useState('');
  const [businessContact, setBusinessContact] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const businessTypes: { value: BusinessType; label: string }[] = [
    { value: 'retail', label: 'Retail Store' },
    { value: 'restaurant', label: 'Restaurant or Cafe' },
    { value: 'online-store', label: 'Online Store' },
    { value: 'service', label: 'Service Provider' },
    { value: 'other', label: 'Other' }
  ];
  
  const mockUploadDocument = () => {
    // In a real app, this would upload a document
    const mockDocId = `doc-${Date.now()}`;
    setDocuments([...documents, mockDocId]);
  };
  
  const handleComplete = () => {
    onComplete({
      businessName,
      businessType,
      documents,
      businessEmail,
      businessContact,
      termsAccepted
    });
  };
  
  return (
    <div className="flex flex-col h-full p-6 animate-fade-in">
      <div className="w-full flex items-center mb-6">
        <button onClick={onBack} className="p-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold mx-auto pr-8">Business Profile</h1>
      </div>
      
      <div className="w-full max-w-md mx-auto space-y-5 overflow-y-auto pb-24">
        <div>
          <label htmlFor="business-name" className="block text-sm font-medium mb-1">Business Name</label>
          <Input
            id="business-name"
            placeholder="Your business name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="business-type" className="block text-sm font-medium mb-1">Business Type</label>
          <Select value={businessType} onValueChange={(value) => setBusinessType(value as BusinessType)}>
            <SelectTrigger>
              <SelectValue placeholder="Select business type" />
            </SelectTrigger>
            <SelectContent>
              {businessTypes.map(type => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Business Verification</label>
          <p className="text-xs text-muted-foreground mb-3">
            Upload documents to verify your business (GST, PAN, Store Address)
          </p>
          
          <div className="space-y-3">
            <button
              onClick={mockUploadDocument}
              className="w-full border-2 border-dashed border-input rounded-lg p-4 flex flex-col items-center justify-center hover:bg-muted/30 transition-colors"
            >
              <Upload className="h-6 w-6 text-muted-foreground mb-2" />
              <p className="font-medium">Upload GST Certificate</p>
              <p className="text-xs text-muted-foreground">PDF, JPG or PNG, max 5MB</p>
            </button>
            
            <button
              onClick={mockUploadDocument}
              className="w-full border-2 border-dashed border-input rounded-lg p-4 flex flex-col items-center justify-center hover:bg-muted/30 transition-colors"
            >
              <Upload className="h-6 w-6 text-muted-foreground mb-2" />
              <p className="font-medium">Upload PAN Card</p>
              <p className="text-xs text-muted-foreground">PDF, JPG or PNG, max 5MB</p>
            </button>
            
            {documents.length > 0 && (
              <div className="bg-success/10 text-success rounded-lg p-3 text-sm">
                {documents.length} document(s) uploaded successfully
              </div>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="business-email" className="block text-sm font-medium mb-1">Business Email</label>
          <Input
            id="business-email"
            type="email"
            placeholder="business@example.com"
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="business-contact" className="block text-sm font-medium mb-1">Business Contact</label>
          <Input
            id="business-contact"
            type="tel"
            placeholder="+91 99999 99999"
            value={businessContact}
            onChange={(e) => setBusinessContact(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="bg-muted/30 p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="terms" 
              checked={termsAccepted} 
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
            />
            <div>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Terms & Conditions
              </label>
              <p className="text-xs text-muted-foreground mt-1">
                I agree to the Terms of Service and Privacy Policy. I understand that my business information will be verified before approval.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm pt-3 pb-6 px-6">
        <Button
          onClick={handleComplete}
          className="w-full max-w-md mx-auto"
          disabled={!businessName || !businessEmail || !businessContact || !termsAccepted}
        >
          Complete Setup <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BusinessProfileSetup;
