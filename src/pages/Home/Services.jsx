import { useContext } from "react";
import ServiceCard from "../../components/ServiceCard";
import { ServicesContext } from "../Root";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  const services = useContext(ServicesContext);
  return (
    <div
      data-aos="zoom-in"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 bg-[#F9FCFD] py-8 px-8 mx-auto"
    >
      {services?.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Services;
