
import { Notification } from './types';

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
