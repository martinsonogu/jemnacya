import { ReactNode } from "react";
import { REGULAR_PATHS } from "./paths";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/AboutUs";
import Contact from "../pages/ContactUs";
import Services from "../pages/Services";
// import Work from "../pages/Work";
import It from "../pages/Services/It";
import Energy from "../pages/Services/Energy";
import RealEstate from "../pages/Services/RealEstate";



type LayoutProps = {
    children: ReactNode;
  };
  
export const AppRouter = () => {
  // Define paths
  const { HOME, CONTACT, ABOUT, SERVICES, IT_CONSULTATION, ENERGY, REAL_ESTATE } = REGULAR_PATHS;

  // Layout for front-end
  const Layout = ({ children }: LayoutProps) => {
    return (
      <div>
        <Navbar />
        <div className="h-100vh">
        {children}
        </div>
        
        <Footer />
      </div>
    );
  };

  return (
        <Layout>
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={CONTACT} element={<Contact />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={SERVICES} element={<Services />} />
            {/* <Route path={WORK} element={<Work />} /> */}
            <Route path={IT_CONSULTATION} element={<It />} />
            <Route path={ENERGY} element={<Energy />} />
            <Route path={REAL_ESTATE} element={<RealEstate/>} />
          </Routes>
        </Layout>
  );
};
