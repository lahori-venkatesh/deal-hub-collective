
import { User } from './types';

// Current mock user for header and other components
export const currentUser: User = {
  id: "user123",
  name: "John Doe",
  avatar: "/assets/avatars/user1.jpg",
  points: 150,
  dealsPosted: 5,
  dealsVerified: 3,
  joined: "2023-07-01",
  isPremium: false,
  location: "Bangalore",
  category: "student",
  reputation: 4.2,
  isTrustedVerifier: false,
  email: "john.doe@example.com",
  phone: "+91 99999 99999",
  accountType: "user",
  dealPreferences: ["electronics", "fashion", "dining"],
  locationAccess: true
};

// Mock user data
export const mockUser: User = {
  id: "user123",
  name: "John Doe",
  avatar: "/assets/avatars/user1.jpg",
  points: 150,
  dealsPosted: 5,
  dealsVerified: 3,
  joined: "2023-07-01",
  isPremium: false,
  location: "Bangalore",
  category: "student",
  reputation: 4.2,
  isTrustedVerifier: false,
  email: "john.doe@example.com",
  phone: "+91 99999 99999",
  accountType: "user",
  dealPreferences: ["electronics", "fashion", "dining"],
  locationAccess: true
};

export const mockBusinessUser: User = {
  id: "business456",
  name: "Acme Corp",
  avatar: "/assets/avatars/business1.jpg",
  points: 0,
  dealsPosted: 15,
  dealsVerified: 10,
  joined: "2022-05-15",
  isPremium: true,
  location: "Mumbai",
  category: "professional",
  reputation: 4.8,
  isTrustedVerifier: true,
  email: "info@acmecorp.com",
  phone: "+91 88888 88888",
  accountType: "business",
  businessDetails: {
    name: "Acme Corporation",
    type: "Retail",
    isVerified: true,
    documents: ["gst-certificate.pdf", "pan-card.jpg"],
    email: "legal@acmecorp.com",
    contact: "+91 77777 77777"
  },
  dealPreferences: ["electronics", "home", "fashion"],
  locationAccess: true
};
