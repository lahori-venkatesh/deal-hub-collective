
export interface Deal {
  id: string;
  title: string;
  description: string;
  discount: string;
  store: string;
  category: string;
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
  };
  verified: number;
  flagged: number;
  image: string;
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
}

// Current mock user
export const currentUser: User = {
  id: "u1",
  name: "Alex Johnson",
  avatar: "https://i.pravatar.cc/150?img=11",
  points: 345,
  dealsPosted: 12,
  dealsVerified: 28,
  joined: "2023-09-15",
  isPremium: false,
};

// Mock deals data
export const mockDeals: Deal[] = [
  {
    id: "d1",
    title: "50% Off All Produce",
    description: "Get 50% off all fresh produce until end of day!",
    discount: "50%",
    store: "Whole Foods Market",
    category: "Groceries",
    location: {
      address: "123 Main St, San Francisco, CA",
      coordinates: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    expiresAt: new Date(Date.now() + 3600000 * 5).toISOString(), // 5 hours from now
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(), // 2 hours ago
    postedBy: {
      id: "u2",
      name: "Jamie Smith",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    verified: 12,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  },
  {
    id: "d2",
    title: "Buy 1 Get 1 Free Lattes",
    description: "Buy one latte, get one free! Perfect for bringing a friend.",
    discount: "BOGO",
    store: "Starbucks",
    category: "Coffee & Beverages",
    location: {
      address: "456 Market St, San Francisco, CA",
      coordinates: {
        lat: 37.7899,
        lng: -122.4014,
      },
    },
    expiresAt: new Date(Date.now() + 3600000 * 24).toISOString(), // 24 hours from now
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(), // 5 hours ago
    postedBy: {
      id: "u3",
      name: "Riley Chen",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    verified: 8,
    flagged: 1,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1937&q=80",
  },
  {
    id: "d3",
    title: "30% Off All Athleisure",
    description: "Flash sale on all athleisure wear. Discount applied at checkout.",
    discount: "30%",
    store: "Lululemon",
    category: "Clothing & Fashion",
    location: {
      address: "789 Union Square, San Francisco, CA",
      coordinates: {
        lat: 37.7879,
        lng: -122.4075,
      },
    },
    expiresAt: new Date(Date.now() + 3600000 * 48).toISOString(), // 48 hours from now
    createdAt: new Date(Date.now() - 3600000 * 10).toISOString(), // 10 hours ago
    postedBy: {
      id: "u4",
      name: "Morgan Taylor",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    verified: 15,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: "d4",
    title: "75% Off Clearance Electronics",
    description: "Massive clearance on last season's electronics. Limited quantities!",
    discount: "75%",
    store: "Best Buy",
    category: "Electronics",
    location: {
      address: "101 Technology Ave, San Francisco, CA",
      coordinates: {
        lat: 37.7739,
        lng: -122.4312,
      },
    },
    expiresAt: new Date(Date.now() + 3600000 * 10).toISOString(), // 10 hours from now
    createdAt: new Date(Date.now() - 3600000 * 1).toISOString(), // 1 hour ago
    postedBy: {
      id: "u5",
      name: "Casey Kim",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    verified: 6,
    flagged: 2,
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1801&q=80",
  },
  {
    id: "d5",
    title: "20% Off Weekend Brunch",
    description: "Enjoy 20% off our weekend brunch menu, including mimosas!",
    discount: "20%",
    store: "The Breakfast Club",
    category: "Restaurants & Dining",
    location: {
      address: "202 Foodie Lane, San Francisco, CA",
      coordinates: {
        lat: 37.7855,
        lng: -122.4230,
      },
    },
    expiresAt: new Date(Date.now() + 3600000 * 72).toISOString(), // 72 hours from now
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(), // 18 hours ago
    postedBy: {
      id: "u6",
      name: "Jordan Webb",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    verified: 22,
    flagged: 0,
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
];

// Categories for filtering
export const dealCategories = [
  "All Deals",
  "Groceries",
  "Restaurants & Dining",
  "Coffee & Beverages",
  "Clothing & Fashion",
  "Electronics",
  "Home & Garden",
  "Health & Beauty",
  "Entertainment",
  "Travel",
];

// Mock notifications
export interface Notification {
  id: string;
  type: "deal_expiring" | "points_earned" | "deal_verified" | "new_deal";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  relatedDealId?: string;
}

export const mockNotifications: Notification[] = [
  {
    id: "n1",
    type: "deal_expiring",
    title: "Deal Expiring Soon",
    message: "The 50% off at Whole Foods expires in 2 hours!",
    timestamp: new Date(Date.now() - 3600000 * 1).toISOString(),
    read: false,
    relatedDealId: "d1",
  },
  {
    id: "n2",
    type: "points_earned",
    title: "Points Earned",
    message: "You earned 10 points for posting a new deal!",
    timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
    read: true,
  },
  {
    id: "n3",
    type: "deal_verified",
    title: "Deal Verified",
    message: "5 people verified your Starbucks BOGO deal!",
    timestamp: new Date(Date.now() - 3600000 * 12).toISOString(),
    read: true,
    relatedDealId: "d2",
  },
  {
    id: "n4",
    type: "new_deal",
    title: "New Deal Nearby",
    message: "New electronics deal at Best Buy just 0.5 miles away!",
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    read: false,
    relatedDealId: "d4",
  },
];

// Helper functions
export const formatDistanceToNow = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return `${diffInSeconds} sec ago`;
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hr ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
};

export const formatTimeRemaining = (dateString: string): string => {
  const expiryDate = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((expiryDate.getTime() - now.getTime()) / 1000);
  
  if (diffInSeconds <= 0) return "Expired";
  
  if (diffInSeconds < 60) return `${diffInSeconds}s left`;
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m left`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h left`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}d left`;
};

export const getExpiryColor = (dateString: string): string => {
  const expiryDate = new Date(dateString);
  const now = new Date();
  const diffInHours = (expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60);
  
  if (diffInHours <= 3) return "text-destructive bg-destructive/10";  // Less than 3 hours
  if (diffInHours <= 12) return "text-warning bg-warning/10";  // Less than 12 hours
  return "text-success bg-success/10";  // More than 12 hours
};
