
import { Routes, Route } from "react-router-dom";
import './App.css';

// Pages
import Home from './pages/Home';
import Index from './pages/Index';
import Explore from './pages/Explore';
import DealDetails from './pages/DealDetails';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import MyDeals from './pages/MyDeals';
import SavedDeals from './pages/SavedDeals';
import BusinessDashboard from './pages/BusinessDashboard';
import AddDeal from './pages/AddDeal';
import Onboarding from './pages/Onboarding';
import VerifyDeal from './pages/VerifyDeal';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/deal/:id" element={<DealDetails />} />
      <Route path="/my-deals" element={<MyDeals />} />
      <Route path="/saved-deals" element={<SavedDeals />} />
      <Route path="/business-dashboard" element={<BusinessDashboard />} />
      <Route path="/add-deal" element={<AddDeal />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/verify/:token" element={<VerifyDeal />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
