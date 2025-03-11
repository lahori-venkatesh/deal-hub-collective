import { Deal, User, Notification } from './types';

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

// Mock deals data
export const mockDeals: Deal[] = [
  {
    id: "deal1",
    title: "50% Off on Pizza",
    description: "Get 50% off on all pizzas at Domino's Pizza. Valid for dine-in and takeaway only.",
    discount: "50%",
    store: "Domino's Pizza",
    category: "Food & Dining",
    dealType: "in-store",
    promoCode: "PIZZA50",
    location: {
      address: "123 Main St, Bangalore",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    expiresAt: "2023-08-30T23:59:59Z",
    createdAt: "2023-08-01T10:00:00Z",
    postedBy: {
      id: "user1",
      name: "Rahul S",
      avatar: "/assets/avatars/user1.jpg",
      accountType: "business" // Business posted deal
    },
    verified: 5,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    sponsored: true
  },
  {
    id: "deal2",
    title: "Flat 30% Off on Apparels",
    description: "Get a flat 30% off on all clothing and accessories at Lifestyle Stores. Offer valid on online and in-store purchases.",
    discount: "30%",
    store: "Lifestyle Stores",
    category: "Fashion",
    dealType: "online",
    promoCode: "STYLE30",
    affiliateUrl: "https://www.lifestylestores.com/offers",
    location: {
      address: "Online",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    expiresAt: "2023-09-15T23:59:59Z",
    createdAt: "2023-08-03T14:20:00Z",
    postedBy: {
      id: "user2",
      name: "Priya Sharma",
      avatar: "/assets/avatars/user2.jpg",
      accountType: "user"
    },
    verified: 7,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1485230895905-ec338641421b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    platform: "Lifestyle Online"
  },
  {
    id: "deal3",
    title: "Weekend Buffet at ₹999",
    description: "Enjoy a lavish weekend buffet at The Grand Hotel for just ₹999 per person. Offer valid on Saturday and Sunday.",
    discount: "₹999",
    store: "The Grand Hotel",
    category: "Food & Dining",
    dealType: "in-store",
    promoCode: "None",
    location: {
      address: "The Grand Hotel, MG Road, Bangalore",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    expiresAt: "2023-08-27T23:59:59Z",
    createdAt: "2023-08-04T11:15:00Z",
    postedBy: {
      id: "user3",
      name: "Amit Kumar",
      avatar: "/assets/avatars/user3.jpg",
      accountType: "user"
    },
    verified: 6,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "deal4",
    title: "Buy 1 Get 1 Free on Movie Tickets",
    description: "Buy one movie ticket and get another one free at PVR Cinemas. Valid for all shows from Monday to Thursday.",
    discount: "Buy 1 Get 1",
    store: "PVR Cinemas",
    category: "Entertainment",
    dealType: "online",
    promoCode: "BOGO2023",
    affiliateUrl: "https://www.pvrcinemas.com/offers",
    location: {
      address: "PVR Koramangala, Bangalore",
      coordinates: { lat: 12.9349, lng: 77.6205 }
    },
    expiresAt: "2023-09-30T23:59:59Z",
    createdAt: "2023-08-05T15:30:00Z",
    postedBy: {
      id: "user2",
      name: "Priya M",
      avatar: "/assets/avatars/user2.jpg",
      accountType: "user" // User posted deal
    },
    verified: 1, // Low verification score
    flagged: 0,
    image: "https://images.unsplash.com/photo-1627133900223-aabebbe9566b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    platform: "PVR App"
  },
  {
    id: "deal5",
    title: "Flat 40% Off on Electronics",
    description: "Get a flat 40% off on all electronics at Croma. Offer valid on online and in-store purchases.",
    discount: "40%",
    store: "Croma",
    category: "Electronics",
    dealType: "online",
    promoCode: "ELEC40",
    affiliateUrl: "https://www.croma.com/offers",
    location: {
      address: "Online",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    expiresAt: "2023-09-20T23:59:59Z",
    createdAt: "2023-08-06T12:45:00Z",
    postedBy: {
      id: "user4",
      name: "Sneha Reddy",
      avatar: "/assets/avatars/user4.jpg",
      accountType: "user"
    },
    verified: 9,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1584768176383-1451985588ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    platform: "Croma Online"
  },
  {
    id: "deal6",
    title: "Free Dessert with Every Meal",
    description: "Enjoy a complimentary dessert with every meal at The Dessert Factory. Offer valid on all days of the week.",
    discount: "Free Dessert",
    store: "The Dessert Factory",
    category: "Food & Dining",
    dealType: "in-store",
    promoCode: "None",
    location: {
      address: "The Dessert Factory, Indiranagar, Bangalore",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    expiresAt: "2023-09-10T23:59:59Z",
    createdAt: "2023-08-07T16:00:00Z",
    postedBy: {
      id: "user1",
      name: "Rahul S",
      avatar: "/assets/avatars/user1.jpg",
      accountType: "user"
    },
    verified: 4,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1563720239558-9e94790c3542?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "deal7",
    title: "Up to 60% Off on Footwear",
    description: "Get up to 60% off on all footwear at Bata. Offer valid on online and in-store purchases.",
    discount: "Up to 60%",
    store: "Bata",
    category: "Fashion",
    dealType: "online",
    promoCode: "BATA60",
    affiliateUrl: "https://www.bata.in/offers",
    location: {
      address: "Online",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    expiresAt: "2023-09-05T23:59:59Z",
    createdAt: "2023-08-08T13:30:00Z",
    postedBy: {
      id: "user5",
      name: "Neha Patel",
      avatar: "/assets/avatars/user5.jpg",
      accountType: "user"
    },
    verified: 3,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    platform: "Bata Online"
  },
  {
    id: "deal8",
    title: "Free Popcorn with Every Movie Ticket",
    description: "Get a complimentary popcorn with every movie ticket purchase at Cinepolis. Offer valid on all shows.",
    discount: "Free Popcorn",
    store: "Cinepolis",
    category: "Entertainment",
    dealType: "in-store",
    promoCode: "None",
    location: {
      address: "Cinepolis, JP Nagar, Bangalore",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    expiresAt: "2023-09-25T23:59:59Z",
    createdAt: "2023-08-09T10:00:00Z",
    postedBy: {
      id: "user2",
      name: "Priya Sharma",
      avatar: "/assets/avatars/user2.jpg",
      accountType: "user"
    },
    verified: 8,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1578560904687-64d99a18d93b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "deal9",
    title: "Flat 25% Off on Home Decor",
    description: "Get a flat 25% off on all home decor items at Home Centre. Offer valid on online and in-store purchases.",
    discount: "25%",
    store: "Home Centre",
    category: "Home & Garden",
    dealType: "online",
    promoCode: "HOME25",
    affiliateUrl: "https://www.homecentre.in/offers",
    location: {
      address: "Online",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    expiresAt: "2023-09-30T23:59:59Z",
    createdAt: "2023-08-10T11:45:00Z",
    postedBy: {
      id: "user3",
      name: "Amit Kumar",
      avatar: "/assets/avatars/user3.jpg",
      accountType: "user"
    },
    verified: 5,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1567016546863-c50149632353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    platform: "Home Centre Online"
  },
  {
    id: "deal10",
    title: "Summer Fashion Sale - 70% Off",
    description: "Enjoy up to 70% off on summer fashion collection including clothing, accessories, and footwear.",
    discount: "Up to 70%",
    store: "Myntra",
    category: "Fashion",
    dealType: "online",
    promoCode: "SUMMER70",
    affiliateUrl: "https://www.myntra.com/summer-sale",
    location: {
      address: "Online",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    expiresAt: "2023-09-15T23:59:59Z",
    createdAt: "2023-08-10T09:15:00Z",
    postedBy: {
      id: "user5",
      name: "Fashion Hub",
      avatar: "/assets/avatars/business1.jpg",
      accountType: "business" // Business posted deal
    },
    verified: 8,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    platform: "Myntra",
    sponsored: true
  },
  {
    id: "deal11",
    title: "Monsoon Special - 40% Off",
    description: "Enjoy flat 40% off on all rainwear and accessories. Stay dry and stylish this monsoon season.",
    discount: "40% Off",
    store: "Amazon",
    category: "Fashion",
    dealType: "online",
    promoCode: "RAINY40",
    affiliateUrl: "https://www.amazon.in/monsoon-sale",
    location: {
      address: "Online",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    expiresAt: "2023-09-10T23:59:59Z",
    createdAt: "2023-08-11T14:30:00Z",
    postedBy: {
      id: "user6",
      name: "RainWear Store",
      avatar: "/assets/avatars/business2.jpg",
      accountType: "business"
    },
    verified: 7,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1534161394100-49c9939f11d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    platform: "Amazon",
    sponsored: false
  },
  {
    id: "deal12",
    title: "Independence Day Offer - Flat 50% Off",
    description: "Celebrate Independence Day with a flat 50% off on all products. Limited time offer.",
    discount: "50% Off",
    store: "Flipkart",
    category: "All",
    dealType: "online",
    promoCode: "IND50",
    affiliateUrl: "https://www.flipkart.com/independence-day-sale",
    location: {
      address: "Online",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    expiresAt: "2023-08-15T23:59:59Z",
    createdAt: "2023-08-12T10:00:00Z",
    postedBy: {
      id: "user7",
      name: "Flipkart Deals",
      avatar: "/assets/avatars/business3.jpg",
      accountType: "business"
    },
    verified: 9,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    platform: "Flipkart",
    sponsored: true
  }
];

// Mock notifications data
export const mockNotifications: Notification[] = [
  {
    id: "notification1",
    type: "deal_expiring",
    title: "Deal Expiring Soon",
    message: "Your deal '50% Off on Pizza' is expiring in 2 days.",
    timestamp: "2023-08-28T12:00:00Z",
    read: false,
    relatedDealId: "deal1"
  },
  {
    id: "notification2",
    type: "points_earned",
    title: "Points Earned",
    message: "You have earned 10 points for verifying a deal.",
    timestamp: "2023-08-27T18:30:00Z",
    read: true
  },
  {
    id: "notification3",
    type: "deal_verified",
    title: "Deal Verified",
    message: "Your deal 'Flat 30% Off on Apparels' has been verified.",
    timestamp: "2023-08-26T09:45:00Z",
    read: true,
    relatedDealId: "deal2"
  },
  {
    id: "notification4",
    type: "new_deal",
    title: "New Deal Alert",
    message: "A new deal 'Weekend Buffet at ₹999' has been posted near you.",
    timestamp: "2023-08-25T15:20:00Z",
    read: false,
    relatedDealId: "deal3"
  }
];
