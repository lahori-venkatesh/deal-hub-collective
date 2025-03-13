
import { useState, useEffect } from 'react';
import { toast } from '@/components/ui/toast';
import { DealFilter } from '@/utils/types';
import { useNavigate } from 'react-router-dom';

interface UseAddDealFormProps {
  dealType: DealFilter;
  isBusinessAccount: boolean;
}

export const useAddDealForm = ({ dealType, isBusinessAccount }: UseAddDealFormProps) => {
  const navigate = useNavigate();
  
  // Common fields
  const [dealImage, setDealImage] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [discount, setDiscount] = useState('');
  const [store, setStore] = useState('');
  const [category, setCategory] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // In-store deal fields
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [imageVerified, setImageVerified] = useState(false);
  const [locationVerified, setLocationVerified] = useState(false);
  const [qrCodeImage, setQrCodeImage] = useState<string | null>(null);
  
  // Online deal fields
  const [promoCode, setPromoCode] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [platform, setPlatform] = useState('');
  const [isDuplicateCode, setIsDuplicateCode] = useState(false);
  
  // Affiliate deal fields
  const [affiliateUrl, setAffiliateUrl] = useState('');
  const [affiliateDetails, setAffiliateDetails] = useState<{
    title?: string;
    description?: string;
    discount?: string;
    platform?: string;
  } | null>(null);
  const [isLoadingAffiliateDetails, setIsLoadingAffiliateDetails] = useState(false);
  
  // Set default expiry date to 24 hours from now
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setHours(tomorrow.getHours() + 24);
    setExpiryDate(tomorrow.toISOString().split('T')[0]);
  }, []);
  
  // Get user's current location for verification
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);
  
  // Verify location is close to user's current location
  const verifyLocation = () => {
    if (!userLocation) {
      toast({
        title: "Location Access Required",
        description: "Please allow location access to verify your deal location",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would perform distance calculation between the entered location
    // and the user's current location. Here we're just simulating verification.
    setTimeout(() => {
      setLocationVerified(true);
      toast({
        title: "Location Verified",
        description: "Your location has been verified for this deal",
      });
    }, 1000);
  };
  
  // Simulate image verification process
  const verifyImage = () => {
    if (!dealImage) {
      toast({
        title: "Image Required",
        description: "Please upload a photo of the deal to verify",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would perform image analysis here
    setIsSubmitting(true);
    setTimeout(() => {
      setImageVerified(true);
      setIsSubmitting(false);
      toast({
        title: "Image Verified",
        description: "Your deal photo has been verified",
      });
    }, 1500);
  };

  // Verify that promo code is not a duplicate
  const verifyPromoCode = () => {
    if (!promoCode) {
      toast({
        title: "Promo Code Required",
        description: "Please enter a promo code to verify",
        variant: "destructive"
      });
      return;
    }

    // In a real app, you would check against existing codes in your database
    setIsSubmitting(true);
    setTimeout(() => {
      setIsDuplicateCode(false);
      setIsSubmitting(false);
      toast({
        title: "Code Verified",
        description: "This promo code is unique and has been verified",
      });
    }, 1000);
  };

  // Fetch affiliate details from URL
  const fetchAffiliateDetails = () => {
    if (!affiliateUrl) {
      toast({
        title: "URL Required",
        description: "Please enter an affiliate URL to fetch details",
        variant: "destructive"
      });
      return;
    }

    // In a real app, you would use web scraping or an API to fetch details
    setIsLoadingAffiliateDetails(true);
    setTimeout(() => {
      // Simulating fetched data
      setAffiliateDetails({
        title: "40% off on Zomato orders",
        description: "Get 40% off on your first 5 orders with Zomato",
        discount: "40%",
        platform: "Zomato"
      });
      
      // Auto-fill the form fields
      setTitle("40% off on Zomato orders");
      setDescription("Get 40% off on your first 5 orders with Zomato");
      setDiscount("40%");
      setPlatform("Zomato");
      setStore("Zomato");
      
      setIsLoadingAffiliateDetails(false);
      toast({
        title: "Details Fetched",
        description: "Deal details have been extracted from the URL",
      });
    }, 1500);
  };
  
  // Simulate camera/image upload by setting a placeholder image
  const handleImageUpload = () => {
    setDealImage('https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
    setImageVerified(false); // Reset verification when new image is uploaded
  };

  // Simulate QR code upload
  const handleQRCodeUpload = () => {
    setQrCodeImage('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ExampleStorePromoCode');
    toast({
      title: "QR Code Uploaded",
      description: "Store QR code has been added to your deal",
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Common validations
    if (!title || !discount || !store || !category || !expiryDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Type-specific validations
    if (dealType === 'in-store') {
      // Check verification requirements for in-store deals
      if (!dealImage) {
        toast({
          title: "Image Required",
          description: "Please upload a photo of the deal to post",
          variant: "destructive"
        });
        return;
      }
      
      if (!locationVerified) {
        toast({
          title: "Location Verification Required",
          description: "Please verify your location to continue",
          variant: "destructive"
        });
        return;
      }
      
      if (!imageVerified) {
        toast({
          title: "Image Verification Required",
          description: "Please verify your deal photo to continue",
          variant: "destructive"
        });
        return;
      }
    } else if (dealType === 'online') {
      // Validate online deal specific fields
      if (!promoCode) {
        toast({
          title: "Promo Code Required",
          description: "Please enter a valid promo code",
          variant: "destructive"
        });
        return;
      }
      
      if (!platform) {
        toast({
          title: "Platform Required",
          description: "Please select or enter a platform (e.g., Amazon, Myntra)",
          variant: "destructive"
        });
        return;
      }

      if (isDuplicateCode) {
        toast({
          title: "Duplicate Code",
          description: "This promo code already exists in our system",
          variant: "destructive"
        });
        return;
      }
    } else if (dealType === 'affiliate') {
      // Validate affiliate deal specific fields
      if (!affiliateUrl) {
        toast({
          title: "Affiliate URL Required",
          description: "Please enter a valid affiliate URL",
          variant: "destructive"
        });
        return;
      }
    }
    
    setIsSubmitting(true);
    
    // In a real app, you would submit this to your backend
    setTimeout(() => {
      toast({
        title: "Deal Posted Successfully!",
        description: "Your deal has been submitted and is now live",
      });
      navigate('/');
    }, 1000);
  };

  return {
    // Common fields
    dealImage,
    setDealImage,
    title,
    setTitle,
    description,
    setDescription,
    discount,
    setDiscount,
    store,
    setStore,
    category,
    setCategory,
    expiryDate,
    setExpiryDate,
    isSubmitting,
    
    // In-store fields
    location,
    setLocation,
    userLocation,
    imageVerified,
    locationVerified,
    qrCodeImage,
    
    // Online fields
    promoCode,
    setPromoCode,
    sourceUrl,
    setSourceUrl,
    platform,
    setPlatform,
    isDuplicateCode,
    
    // Affiliate fields
    affiliateUrl,
    setAffiliateUrl,
    affiliateDetails,
    isLoadingAffiliateDetails,
    
    // Methods
    verifyLocation,
    verifyImage,
    verifyPromoCode,
    fetchAffiliateDetails,
    handleImageUpload,
    handleQRCodeUpload,
    handleSubmit
  };
};
