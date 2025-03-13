import { Deal } from './types';

export const dealCategories = [
  { name: 'Electronics', icon: '📱' },
  { name: 'Fashion', icon: '👕' },
  { name: 'Groceries', icon: '🛒' },
  { name: 'Dining', icon: '🍔' },
  { name: 'Travel', icon: '✈️' },
  { name: 'Entertainment', icon: '🎬' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Home', icon: '🏠' }
];

// Helper function to add days to a date
const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// Mock deals data
export const mockDeals: Deal[] = [
  {
    id: "deal1",
    title: "50% Off on Pizza",
    description: "Get 50% off on all large pizzas. Valid only on weekdays. Minimum order value of ₹500. Cannot be combined with other offers or discounts.",
    discount: "50% Off",
    store: "Domino's Pizza",
    category: "Dining",
    dealType: "in-store",
    location: {
      address: "Koramangala, Bangalore",
      coordinates: {
        lat: 12.9352,
        lng: 77.6245
      }
    },
    expiresAt: addDays(new Date(), 7).toISOString(),
    createdAt: addDays(new Date(), -2).toISOString(),
    postedBy: {
      id: "user123",
      name: "John Doe",
      avatar: "/assets/avatars/user1.jpg"
    },
    verified: 15,
    flagged: 2,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    redemptionId: "PIZZA50",
    verificationToken: "abc123",
    verificationUrl: "https://dealhub.app/verify/abc123",
    isVerifiedByBusiness: true,
    userCategories: ["student", "family"]
  },
  {
    id: "deal2",
    title: "Flat 30% Off on Apparels",
    description: "Get flat 30% off on all apparels. Valid on all products. Minimum purchase of ₹1500 required. Not valid on already discounted items.",
    discount: "30% Off",
    store: "H&M",
    category: "Fashion",
    dealType: "in-store",
    location: {
      address: "Phoenix Mall, Mumbai",
      coordinates: {
        lat: 19.0760,
        lng: 72.8777
      }
    },
    expiresAt: addDays(new Date(), 14).toISOString(),
    createdAt: addDays(new Date(), -5).toISOString(),
    postedBy: {
      id: "user456",
      name: "Sarah Wilson",
      avatar: "/assets/avatars/user2.jpg"
    },
    verified: 28,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80",
    redemptionId: "APPARELS30",
    verificationToken: "def456",
    verificationUrl: "https://dealhub.app/verify/def456",
    isVerifiedByBusiness: false,
    userCategories: ["student", "professional"]
  },
  {
    id: "deal3",
    title: "Weekend Buffet at ₹999",
    description: "Enjoy our special weekend buffet at just ₹999 per person. Offer includes a wide variety of dishes. Offer valid only on weekends (Saturday and Sunday).",
    discount: "₹999",
    store: "The Grand Hotel",
    category: "Dining",
    dealType: "in-store",
    location: {
      address: "MG Road, Bangalore",
      coordinates: {
        lat: 12.9716,
        lng: 77.5946
      }
    },
    expiresAt: addDays(new Date(), 21).toISOString(),
    createdAt: addDays(new Date(), -10).toISOString(),
    postedBy: {
      id: "business456",
      name: "Acme Corp",
      avatar: "/assets/avatars/business1.jpg",
      accountType: "business"
    },
    verified: 42,
    flagged: 1,
    image: "https://images.unsplash.com/photo-1517248135469-4fe796d424dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    redemptionId: null,
    userCategories: ["family", "professional"]
  },
  {
    id: "deal4",
    title: "Upto 60% Off on Electronics",
    description: "Get upto 60% off on a wide range of electronics products. Offer valid on select items only. Visit our website for more details.",
    discount: "Upto 60% Off",
    store: "Amazon",
    category: "Electronics",
    dealType: "online",
    promoCode: "ELEC60",
    platform: "Amazon",
    expiresAt: addDays(new Date(), 30).toISOString(),
    createdAt: addDays(new Date(), -15).toISOString(),
    postedBy: {
      id: "business789",
      name: "ElectroStore",
      avatar: "/assets/avatars/business2.jpg",
      accountType: "business"
    },
    verified: 65,
    flagged: 3,
    image: "https://images.unsplash.com/photo-1496181133206-80fa9e748b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    redemptionId: null,
    userCategories: ["student", "professional"]
  },
  {
    id: "deal5",
    title: "Buy 1 Get 1 Free on Selected Items",
    description: "Buy one and get one free on selected clothing items. Offer valid on select products only. Visit our store for more details.",
    discount: "Buy 1 Get 1 Free",
    store: "Lifestyle",
    category: "Fashion",
    dealType: "in-store",
    location: {
      address: "Indiranagar, Bangalore",
      coordinates: {
        lat: 12.9716,
        lng: 77.5946
      }
    },
    expiresAt: addDays(new Date(), 10).toISOString(),
    createdAt: addDays(new Date(), -3).toISOString(),
    postedBy: {
      id: "user789",
      name: "Priya Sharma",
      avatar: "/assets/avatars/user3.jpg"
    },
    verified: 22,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    redemptionId: "BOGO",
    userCategories: ["family"]
  },
  {
    id: "deal6",
    title: "Flat 20% Off on All Products",
    description: "Get a flat 20% discount on all products. This offer is valid for both in-store and online purchases. Use code SUMMER20 at checkout.",
    discount: "20% Off",
    store: "Myntra",
    category: "Fashion",
    dealType: "online",
    promoCode: "SUMMER20",
    platform: "Myntra",
    expiresAt: addDays(new Date(), 25).toISOString(),
    createdAt: addDays(new Date(), -8).toISOString(),
    postedBy: {
      id: "business101",
      name: "FashionHub",
      avatar: "/assets/avatars/business3.jpg",
      accountType: "business"
    },
    verified: 50,
    flagged: 2,
    image: "https://images.unsplash.com/photo-1514846325693-841b28358e15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2215&q=80",
    redemptionId: null,
    userCategories: ["student", "family", "professional"]
  },
  {
    id: "deal7",
    title: "Free Dessert with Every Meal",
    description: "Enjoy a complimentary dessert with every meal purchased. This offer is valid for dine-in customers only. Limited time offer.",
    discount: "Free Dessert",
    store: "The Dessert Spot",
    category: "Dining",
    dealType: "in-store",
    location: {
      address: "Jayanagar, Bangalore",
      coordinates: {
        lat: 12.9279,
        lng: 77.5825
      }
    },
    expiresAt: addDays(new Date(), 5).toISOString(),
    createdAt: addDays(new Date(), -1).toISOString(),
    postedBy: {
      id: "user202",
      name: "David Lee",
      avatar: "/assets/avatars/user4.jpg"
    },
    verified: 18,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    redemptionId: "FREEDESSERT",
    userCategories: ["family", "student"]
  },
  {
    id: "deal8",
    title: "Up to 70% off on Winter Collection",
    description: "Get ready for winter with up to 70% off on our exclusive winter collection. Offer valid online and in-store. Limited stock available.",
    discount: "Up to 70% off",
    store: "WinterWear",
    category: "Fashion",
    dealType: "online",
    promoCode: "WINTER70",
    platform: "WinterWear",
    expiresAt: addDays(new Date(), 35).toISOString(),
    createdAt: addDays(new Date(), -12).toISOString(),
    postedBy: {
      id: "business303",
      name: "Snowflake Fashions",
      avatar: "/assets/avatars/business4.jpg",
      accountType: "business"
    },
    verified: 70,
    flagged: 5,
    image: "https://images.unsplash.com/photo-1485230895905-ec35ba43b698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    redemptionId: null,
    userCategories: ["student", "family", "professional"]
  },
  {
    id: "deal9",
    title: "Flat 40% Off on All Orders",
    description: "Get a flat 40% discount on all orders. This offer is valid for both in-store and online purchases. Use code SPRING40 at checkout.",
    discount: "40% Off",
    store: "StyleCraze",
    category: "Fashion",
    dealType: "online",
    promoCode: "SPRING40",
    platform: "StyleCraze",
    expiresAt: addDays(new Date(), 20).toISOString(),
    createdAt: addDays(new Date(), -6).toISOString(),
    postedBy: {
      id: "business404",
      name: "Chic Boutique",
      avatar: "/assets/avatars/business5.jpg",
      accountType: "business"
    },
    verified: 55,
    flagged: 1,
    image: "https://images.unsplash.com/photo-1543168278-536f5e2c9f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    redemptionId: null,
    userCategories: ["student", "family", "professional"]
  },
  {
    id: "deal10",
    title: "Free Shipping on Orders Over ₹500",
    description: "Enjoy free shipping on all orders over ₹500. This offer is valid for online purchases only. No promo code required.",
    discount: "Free Shipping",
    store: "eShop",
    category: "Electronics",
    dealType: "online",
    platform: "eShop",
    expiresAt: addDays(new Date(), 15).toISOString(),
    createdAt: addDays(new Date(), -4).toISOString(),
    postedBy: {
      id: "business505",
      name: "TechWorld",
      avatar: "/assets/avatars/business6.jpg",
      accountType: "business"
    },
    verified: 60,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1584398216243-79975ca9594a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2205&q=80",
    redemptionId: null,
    userCategories: ["student", "professional"]
  }
];

// Filter out deals that are expired for more than 7 days
export const activeDeals = mockDeals.filter(deal => {
  const expiryDate = new Date(deal.expiresAt);
  const now = new Date();
  const diffInDays = (expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  return diffInDays > -7;
});
