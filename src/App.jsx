import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, MapPin, Calendar, Phone } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import Destinations from "./pages/Destinations.jsx";
import Bookings from "./pages/Bookings.jsx";
import ContactUs from "./pages/ContactUs.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Destinations",
    to: "/destinations",
    icon: <MapPin className="h-4 w-4" />,
  },
  {
    title: "Bookings",
    to: "/bookings",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Contact Us",
    to: "/contact-us",
    icon: <Phone className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="destinations" element={<Destinations />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="contact-us" element={<ContactUs />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;