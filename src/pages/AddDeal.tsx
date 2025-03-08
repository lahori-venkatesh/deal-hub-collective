
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Camera, 
  Image, 
  MapPin,
  Tag,
  Calendar,
  Store,
  Info
} from 'lucide-react';
import Header from '@/components/layout/Header';
import BottomNavbar from '@/components/layout/BottomNavbar';
import { dealCategories } from '@/utils/mockData';

const AddDeal: React.FC = () => {
  const navigate = useNavigate();
  
  const [dealImage, setDealImage] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [discount, setDiscount] = useState('');
  const [store, setStore] = useState('');
  const [category, setCategory] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [location, setLocation] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit this to your backend
    navigate('/');
  };
  
  // Simulate camera/image upload by setting a placeholder image
  const handleImageUpload = () => {
    setDealImage('https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
  };
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header />
      
      <main className="pt-16 px-4 max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-foreground/80 hover:text-foreground"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold ml-2">Add New Deal</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image upload section */}
          <div className="bg-muted/50 rounded-xl p-4 flex flex-col items-center justify-center text-center animate-scale-in">
            {dealImage ? (
              <div className="relative w-full">
                <img 
                  src={dealImage} 
                  alt="Deal preview" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setDealImage(null)}
                  className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-full"
                >
                  <ArrowLeft size={18} />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-3 p-4 bg-muted rounded-full">
                  <Camera size={32} className="text-muted-foreground" />
                </div>
                <h3 className="font-medium mb-1">Add a photo of the deal</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take a clear photo of the price tag, receipt, or product
                </p>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg flex items-center"
                  >
                    <Camera size={18} className="mr-2" />
                    Take Photo
                  </button>
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg flex items-center"
                  >
                    <Image size={18} className="mr-2" />
                    Upload
                  </button>
                </div>
              </>
            )}
          </div>
          
          {/* Deal details */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "50ms" }}>
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Deal Title
              </label>
              <div className="relative">
                <Tag className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., 50% Off All Produce"
                  className="w-full pl-10 pr-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="discount" className="block text-sm font-medium mb-1">
                Discount
              </label>
              <input
                id="discount"
                type="text"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                placeholder="e.g., 20%, BOGO, $5 OFF"
                className="w-full px-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="store" className="block text-sm font-medium mb-1">
                Store Name
              </label>
              <div className="relative">
                <Store className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
                <input
                  id="store"
                  type="text"
                  value={store}
                  onChange={(e) => setStore(e.target.value)}
                  placeholder="e.g., Whole Foods, Target"
                  className="w-full pl-10 pr-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-1">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                required
              >
                <option value="">Select a category</option>
                {dealCategories.filter(cat => cat !== "All Deals").map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium mb-1">
                Expiry Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
                <input
                  id="expiry"
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
                <input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Store address"
                  className="w-full pl-10 pr-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  required
                />
              </div>
              <div className="mt-1 flex justify-end">
                <button
                  type="button"
                  className="text-xs text-primary flex items-center"
                >
                  <MapPin size={12} className="mr-1" />
                  Use Current Location
                </button>
              </div>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add details about the deal..."
                className="w-full px-3 py-2 bg-muted/50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none min-h-[100px]"
              ></textarea>
            </div>
          </div>
          
          <div className="flex items-center pt-4 text-xs text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
            <Info size={14} className="mr-2" />
            <p>By posting, you confirm this deal is legitimate and accurate.</p>
          </div>
          
          <div className="pt-4 animate-slide-up" style={{ animationDelay: "150ms" }}>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Post Deal
            </button>
          </div>
        </form>
      </main>
      
      <BottomNavbar />
    </div>
  );
};

export default AddDeal;
