
import React from 'react';
import { ArrowUpRight, BarChart3, Calendar, CheckCheck, CreditCard, Users } from 'lucide-react';
import { BusinessDashboardStats } from '@/utils/types';

interface DashboardOverviewProps {
  stats: BusinessDashboardStats;
}

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ stats }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 border shadow-soft">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-muted-foreground text-sm font-medium">Deal Stats</h3>
            <BarChart3 className="h-5 w-5 text-primary" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-3xl font-bold">{stats.totalDeals}</p>
              <p className="text-xs text-muted-foreground">Total Deals</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{stats.activeDeals}</p>
              <p className="text-xs text-muted-foreground">Active Deals</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{stats.expiredDeals}</p>
              <p className="text-xs text-muted-foreground">Expired</p>
            </div>
            <div className="flex items-end">
              <div className="bg-primary/10 text-primary text-xs rounded-full px-2 py-1 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +12%
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-xl p-5 border shadow-soft">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-muted-foreground text-sm font-medium">Engagement</h3>
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-3xl font-bold">{stats.totalRedemptions}</p>
              <p className="text-xs text-muted-foreground">Redemptions</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{stats.views}</p>
              <p className="text-xs text-muted-foreground">Total Views</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{Math.round(stats.engagement * 100)}%</p>
              <p className="text-xs text-muted-foreground">Engagement</p>
            </div>
            <div className="flex items-end">
              <div className="bg-primary/10 text-primary text-xs rounded-full px-2 py-1 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +5%
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-xl p-5 border shadow-soft">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-muted-foreground text-sm font-medium">Revenue</h3>
            <CreditCard className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-3xl font-bold">₹{stats.revenue.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Estimated Revenue</p>
            </div>
            <div className="flex justify-between items-end mt-6">
              <div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
                <div className="flex items-center mt-1">
                  <div className="bg-primary/10 text-primary text-xs rounded-full px-2 py-1 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +18%
                  </div>
                </div>
              </div>
              <button className="text-primary text-sm flex items-center">
                View Report <ArrowUpRight className="h-3 w-3 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card rounded-xl p-5 border shadow-soft">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-medium">Upcoming Expirations</h3>
            <Calendar className="h-5 w-5 text-muted-foreground" />
          </div>
          <ul className="space-y-3">
            <li className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <p className="font-medium">50% Off Summer Collection</p>
                <p className="text-xs text-muted-foreground">Expires in 2 days</p>
              </div>
              <div className="text-sm font-medium text-red-500">June 30</div>
            </li>
            <li className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <p className="font-medium">BOGO Phone Accessories</p>
                <p className="text-xs text-muted-foreground">Expires in 5 days</p>
              </div>
              <div className="text-sm font-medium text-amber-500">July 3</div>
            </li>
          </ul>
        </div>
        
        <div className="bg-card rounded-xl p-5 border shadow-soft">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-medium">Recent Redemptions</h3>
            <CheckCheck className="h-5 w-5 text-muted-foreground" />
          </div>
          <ul className="space-y-3">
            <li className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <p className="font-medium">20% Off Electronics</p>
                <p className="text-xs text-muted-foreground">8 redemptions today</p>
              </div>
              <div className="bg-success/10 text-success text-xs rounded-full px-2 py-1">
                Popular
              </div>
            </li>
            <li className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <p className="font-medium">Free Coffee with Breakfast</p>
                <p className="text-xs text-muted-foreground">3 redemptions today</p>
              </div>
              <div className="bg-blue-100 text-blue-700 text-xs rounded-full px-2 py-1">
                New
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
