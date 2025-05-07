import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import BookFreeConsultation from "./components/BookFreeConsultation";
// import CustomSoftware from "./pages/CustomSoftware";
// import WebMobilApp from "./pages/WebMobilApp";
// import AiMlSolution from "./pages/AiMlSolution";
// import BusinessIntelligenceAnalytics from "./pages/BusinessIntelligenceAnalytics";
// import CRM from "./pages/CRM";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/Contact"));
const Service = lazy(() => import("./pages/Service"));
const Career = lazy(() => import("./pages/Career"));
const CareerRegistration = lazy(() => import("./pages/CareerRegistration"));
const KrafThink = lazy(() => import("./pages/krafThink/KrafThink"));
const NotFound = lazy(() => import("./pages/404Page"));
const CRM = lazy(() => import("./pages/CRM"));
const BusinessIntelligenceAnalytics = lazy(() => import("./pages/BusinessIntelligenceAnalytics"));
const AiMlSolution = lazy(() => import("./pages/AiMlSolution"));
const WebMobilApp = lazy(() => import("./pages/WebMobilApp"));
const CustomSoftware = lazy(() => import("./pages/CustomSoftware"));  

// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  // Maintenance alert (runs once on first visit)
  useEffect(() => {
    const hasSeenAlert = sessionStorage.getItem("maintenanceAlertShown");
    if (!hasSeenAlert) {
      alert("This website is under maintenance. Some features may not work. Please wait for maintenance to complete.");
      sessionStorage.setItem("maintenanceAlertShown", "true");
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Headers />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-solutions" element={<Service />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/careers/registration" element={<CareerRegistration />} />
          <Route path="/kraf-think-2025" element={<KrafThink />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/custom-software" element={<CustomSoftware />} />
          <Route path="/web-mobile-app-dev" element={< WebMobilApp />} />
          <Route path="/ai-ml-solution" element={< AiMlSolution />} />
          <Route path="/business-intelligence-analytics" element={< BusinessIntelligenceAnalytics/>} />
          <Route path="/crm" element={< CRM />} />
        </Routes>
      </Suspense>
      <BookFreeConsultation />
      <Footer />
    </Router>
  );
}

export default App;