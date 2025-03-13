export interface Deal {
  id: string;
  title: string;
  description: string;
  discount: string;
  store: string;
  category: string;
  dealType: "in-store" | "online" | "affiliate";
  promoCode?: string;
  affiliateUrl?: string;
  redemptionId?: string;
  verificationToken?: string; // New field for verification
  verificationUrl?: string; // New field for verification URL
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  expiresAt: string;
  createdAt: string;
  postedBy: {
    id: string;
    name: string;
    avatar: string;
    accountType?: "user" | "business";
  };
  verified: number;
  flagged: number;
  image: string;
  userCategories?: Array<"student" | "family" | "professional">;
  platform?: string; // For online deals (e.g., Amazon, Myntra)
  isRedeemed?: boolean;
  receiptVerified?: boolean;
  sponsored?: boolean; // Added this field for sponsored deals
  isVerifiedByBusiness?: boolean; // New field to track if a business has verified the deal
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  points: number;
  dealsPosted: number;
  dealsVerified: number;
  joined: string;
  isPremium: boolean;
  location?: string;
  category?: "student" | "family" | "professional";
  reputation?: number;
  isTrustedVerifier?: boolean;
  email?: string;
  phone?: string;
  accountType?: "user" | "business";
  businessDetails?: {
    name: string;
    type: string;
    isVerified: boolean;
    documents: string[];
    email: string;
    contact: string;
  };
  dealPreferences?: string[];
  locationAccess?: boolean;
}

export interface Notification {
  id: string;
  type: "deal_expiring" | "points_earned" | "deal_verified" | "new_deal";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  relatedDealId?: string;
}

export type DealFilter = "all" | "in-store" | "online" | "affiliate";

export interface BusinessDashboardStats {
  totalDeals: number;
  activeDeals: number;
  expiredDeals: number;
  totalRedemptions: number;
  views: number;
  engagement: number;
  revenue: number;
}

export interface OnboardingState {
  step: string;
  accountType: "user" | "business" | null;
  email: string;
  phone: string;
  password: string;
  name: string;
  businessName: string;
  businessType: string;
  dealPreferences: string[];
  locationAccess: boolean;
  documents: string[];
  businessEmail: string;
  businessContact: string;
  termsAccepted: boolean;
}

export interface VerificationResult {
  success: boolean;
  message: string;
  dealId?: string;
  storeName?: string;
}
