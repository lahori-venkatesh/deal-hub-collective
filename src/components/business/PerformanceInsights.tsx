
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { ArrowUpRight, TrendingUp, Eye, MousePointerClick, ShoppingBag } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PerformanceInsights: React.FC = () => {
  // Mock data for the charts
  const viewsData = [
    { name: 'Mon', views: 120 },
    { name: 'Tue', views: 145 },
    { name: 'Wed', views: 135 },
    { name: 'Thu', views: 170 },
    { name: 'Fri', views: 190 },
    { name: 'Sat', views: 210 },
    { name: 'Sun', views: 180 },
  ];
  
  const engagementData = [
    { name: 'Mon', clicks: 45, saves: 15, shares: 5 },
    { name: 'Tue', clicks: 55, saves: 20, shares: 8 },
    { name: 'Wed', clicks: 48, saves: 18, shares: 6 },
    { name: 'Thu', clicks: 62, saves: 25, shares: 10 },
    { name: 'Fri', clicks: 70, saves: 30, shares: 12 },
    { name: 'Sat', clicks: 80, saves: 35, shares: 15 },
    { name: 'Sun', clicks: 65, saves: 28, shares: 11 },
  ];
  
  const redemptionData = [
    { name: 'Electronics 20%', value: 35 },
    { name: 'BOGO Coffee', value: 22 },
    { name: 'Weekend Sale', value: 18 },
    { name: 'Happy Hour', value: 15 },
    { name: 'New Arrivals', value: 10 },
  ];
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center">
        <TrendingUp className="h-6 w-6 mr-2 text-primary" />
        Performance Insights
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 border shadow-soft">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1 text-muted-foreground" />
                <h3 className="text-muted-foreground text-sm font-medium">Total Views</h3>
              </div>
              <p className="text-3xl font-bold mt-1">1,150</p>
            </div>
            <div className="bg-green-100 text-green-700 text-xs rounded-full px-2 py-1 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +12%
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-xl p-5 border shadow-soft">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center">
                <MousePointerClick className="h-4 w-4 mr-1 text-muted-foreground" />
                <h3 className="text-muted-foreground text-sm font-medium">Click Rate</h3>
              </div>
              <p className="text-3xl font-bold mt-1">32%</p>
            </div>
            <div className="bg-green-100 text-green-700 text-xs rounded-full px-2 py-1 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +5%
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-xl p-5 border shadow-soft">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center">
                <ShoppingBag className="h-4 w-4 mr-1 text-muted-foreground" />
                <h3 className="text-muted-foreground text-sm font-medium">Redemptions</h3>
              </div>
              <p className="text-3xl font-bold mt-1">425</p>
            </div>
            <div className="bg-green-100 text-green-700 text-xs rounded-full px-2 py-1 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +18%
            </div>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="views" className="w-full">
        <TabsList>
          <TabsTrigger value="views">Views</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="redemptions">Redemptions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="views" className="pt-4">
          <div className="bg-card rounded-xl p-5 border shadow-soft">
            <h3 className="text-lg font-medium mb-4">Daily Views (Last 7 Days)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={viewsData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="views" 
                    stroke="hsl(262.1, 83.3%, 57.8%)" 
                    strokeWidth={2} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="engagement" className="pt-4">
          <div className="bg-card rounded-xl p-5 border shadow-soft">
            <h3 className="text-lg font-medium mb-4">User Engagement (Last 7 Days)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={engagementData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="clicks" fill="hsl(262.1, 83.3%, 57.8%)" name="Clicks" />
                  <Bar dataKey="saves" fill="hsl(142.1, 76.2%, 36.3%)" name="Saves" />
                  <Bar dataKey="shares" fill="hsl(217, 91%, 60%)" name="Shares" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="redemptions" className="pt-4">
          <div className="bg-card rounded-xl p-5 border shadow-soft grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-4">Top Deals by Redemptions</h3>
              <div className="space-y-3">
                {redemptionData.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  >
                    <p className="font-medium">{item.name}</p>
                    <div className="text-primary font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={redemptionData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(262.1, 83.3%, 57.8%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PerformanceInsights;
