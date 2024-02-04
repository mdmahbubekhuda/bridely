import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import { createContext } from "react";

export const ServicesContext = createContext(null);

const Root = () => {
  const services = useLoaderData();
  return (
    <ServicesContext.Provider value={services}>
      <div className="max-w-[1440px] mx-auto">
        <Toaster />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ServicesContext.Provider>
  );
};

export default Root;
