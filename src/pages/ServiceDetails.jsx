import { useContext } from "react";
import { ServicesContext } from "./Root";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useContext(ServicesContext);
  const { serviceId } = useParams();

  const matchedId = services.find((service) => service.id === serviceId);

  const { title, cover, description, price } = matchedId;

  return (
    <div className="my-6 relative flex w-4/5 lg:w-3/5 mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={cover} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-2 flex flex-col md:flex-row items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {title}
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {price}
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
