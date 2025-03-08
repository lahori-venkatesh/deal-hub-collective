
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DealDetails from "./pages/DealDetails";
import AddDeal from "./pages/AddDeal";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deal/:id" element={<DealDetails />} />
          <Route path="/add-deal" element={<AddDeal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* Future pages to be added */}
          <Route path="/explore" element={<Home />} />
          <Route path="/saved-deals" element={<Home />} />
          <Route path="/my-deals" element={<Home />} />
          <Route path="/achievements" element={<Home />} />
          <Route path="/rewards" element={<Home />} />
          <Route path="/settings" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
