import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import BookFreeConsultation from "./components/BookFreeConsultation";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/Contact"));
const Career = lazy(() => import("./pages/Career"));
const CareerRegistration = lazy(() => import("./pages/CareerRegistration"));
const KrafThink = lazy(() => import("./pages/krafThink/KrafThink"));
const NotFound = lazy(() => import("./pages/404Page"));

const NewServices = lazy(() => import("./pages/NewServices"));
const Company = lazy(() => import("./pages/Company"));
const Partners = lazy(() => import("./pages/Partners"));
const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const CRM = lazy(() => import("./pages/CRM"));
const BusinessIntelligenceAnalytics = lazy(() =>
  import("./pages/BusinessIntelligenceAnalytics")
);
const AiMlSolution = lazy(() => import("./pages/AiMlSolution"));
const WebMobilApp = lazy(() => import("./pages/WebMobilApp"));
const CustomSoftware = lazy(() => import("./pages/CustomSoftware"));
const BillingSystem = lazy(() => import("./pages/BillingSystem"));
const ERP = lazy(() => import("./pages/ERP"));

// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
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
          <Route path="/careers" element={<Career />} />
          <Route
            path="/careers/registration"
            element={<CareerRegistration />}
          />
          <Route path="/kraf-think-2025" element={<KrafThink />} />
          <Route path="/custom-software" element={<CustomSoftware />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/services" element={<NewServices />} />
          <Route path="/company" element={<Company />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/web-mobile-app-dev" element={<WebMobilApp />} />
          <Route path="/ai-ml-solution" element={<AiMlSolution />} />
          <Route
            path="/business-intelligence-analytics"
            element={<BusinessIntelligenceAnalytics />}
          />
          <Route path="/billing-system" element={<BillingSystem />} />
          <Route path="/erp" element={<ERP />} />

          <Route path="*" element={<NotFound />} />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <BookFreeConsultation />
      <Footer />
    </Router>
  );
}

export default App;
