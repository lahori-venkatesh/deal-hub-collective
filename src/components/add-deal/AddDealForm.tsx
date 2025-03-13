
import React from 'react';
import { Info } from 'lucide-react';
import { DealFilter } from '@/utils/types';
import InStoreDealFields from './InStoreDealFields';
import OnlineDealFields from './OnlineDealFields';
import AffiliateDealFields from './AffiliateDealFields';
import CommonDealFields from './CommonDealFields';
import ImageUploadSection from './ImageUploadSection';
import FormSubmitFooter from './FormSubmitFooter';
import { useAddDealForm } from '@/hooks/useAddDealForm';

interface AddDealFormProps {
  dealType: DealFilter;
  isBusinessAccount: boolean;
}

const AddDealForm: React.FC<AddDealFormProps> = ({ 
  dealType,
  isBusinessAccount
}) => {
  const {
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
  } = useAddDealForm({ dealType, isBusinessAccount });
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Image upload section - only shown for in-store deals */}
      {dealType === 'in-store' && (
        <ImageUploadSection
          dealImage={dealImage}
          setDealImage={setDealImage}
          imageVerified={imageVerified}
          verifyImage={verifyImage}
          handleImageUpload={handleImageUpload}
          isSubmitting={isSubmitting}
        />
      )}
      
      {/* Common Deal details */}
      <CommonDealFields 
        title={title}
        setTitle={setTitle}
        discount={discount}
        setDiscount={setDiscount}
        store={store}
        setStore={setStore}
        category={category}
        setCategory={setCategory}
        expiryDate={expiryDate}
        setExpiryDate={setExpiryDate}
        description={description}
        setDescription={setDescription}
        dealType={dealType}
        isBusinessAccount={isBusinessAccount}
      />
      
      {/* Deal type specific fields */}
      {dealType === 'in-store' && (
        <InStoreDealFields 
          location={location}
          setLocation={setLocation}
          locationVerified={locationVerified}
          verifyLocation={verifyLocation}
          qrCodeImage={qrCodeImage}
          userLocation={userLocation}
          handleQRCodeUpload={handleQRCodeUpload}
        />
      )}
      
      {dealType === 'online' && (
        <OnlineDealFields 
          platform={platform}
          setPlatform={setPlatform}
          promoCode={promoCode}
          setPromoCode={setPromoCode}
          isDuplicateCode={isDuplicateCode}
          sourceUrl={sourceUrl}
          setSourceUrl={setSourceUrl}
          verifyPromoCode={verifyPromoCode}
        />
      )}
      
      {dealType === 'affiliate' && (
        <AffiliateDealFields 
          affiliateUrl={affiliateUrl}
          setAffiliateUrl={setAffiliateUrl}
          affiliateDetails={affiliateDetails}
          isLoadingAffiliateDetails={isLoadingAffiliateDetails}
          fetchAffiliateDetails={fetchAffiliateDetails}
        />
      )}
      
      <FormSubmitFooter
        isSubmitting={isSubmitting}
        dealType={dealType}
        locationVerified={locationVerified}
        imageVerified={imageVerified}
        isDuplicateCode={isDuplicateCode}
      />
    </form>
  );
};

export default AddDealForm;
