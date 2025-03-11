
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  LayoutDashboard, 
  PlusCircle, 
  TrendingUp, 
  Settings, 
  Bell,
  LogOut
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Import Business Dashboard Components
import DashboardOverview from '@/components/business/DashboardOverview';
import AddDealPanel from '@/components/business/AddDealPanel';
import PerformanceInsights from '@/components/business/PerformanceInsights';

// Mock data
const mockBusinessStats = {
  totalDeals: 12,
  activeDeals: 8,
  expiredDeals: 4,
  totalRedemptions: 425,
  views: 1150,
  engagement: 0.32,
  revenue: 28500
};

const BusinessDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleLogout = () => {
    toast.success('Logged out successfully');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} className="mr-1" />
            <span>Back to App</span>
          </button>
          
          <div className="flex items-center gap-2">
            <button className="relative p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 bg-destructive text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut size={16} className="mr-1" />
              Logout
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-primary h-12 w-12 rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">B</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Business Dashboard</h1>
            <p className="text-muted-foreground">Manage your deals and insights</p>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="bg-card rounded-xl border shadow-soft overflow-hidden">
            <TabsList className="w-full grid grid-cols-4 h-16 rounded-none border-b bg-muted/50">
              <TabsTrigger value="overview" className="data-[state=active]:bg-background data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="add-deal" className="data-[state=active]:bg-background data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Deal
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-background data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full">
                <TrendingUp className="h-4 w-4 mr-2" />
                Insights
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-background data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <div className="p-6">
              <TabsContent value="overview" className="mt-0">
                <DashboardOverview stats={mockBusinessStats} />
              </TabsContent>
              
              <TabsContent value="add-deal" className="mt-0">
                <AddDealPanel />
              </TabsContent>
              
              <TabsContent value="insights" className="mt-0">
                <PerformanceInsights />
              </TabsContent>
              
              <TabsContent value="settings" className="mt-0">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Account Settings</h2>
                  <p className="text-muted-foreground">
                    Business account settings will be implemented here, including business details,
                    verification status, payment information, and notification preferences.
                  </p>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
        
        <p className="text-xs text-center text-muted-foreground mt-6">
          DealHub Business Portal v1.0 — © 2023 DealHub Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default BusinessDashboard;
