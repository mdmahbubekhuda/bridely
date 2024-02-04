import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { cover, title, price, shortDescription } = service;

  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src={cover} alt="img-blur-shadow" />
      </div>
      <div className="p-6 flex-grow">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {shortDescription}
        </p>
      </div>
      <div className="p-6 pt-0 ">
        <p className="block font-sans text-base font-medium leading-relaxed text-inherit antialiased text-[#9ACCC9] mb-6">
          Price: {price}
        </p>
        <Link to={`/${service.id}`}>
          <button
            className="select-none rounded-l-full rounded-r-full bg-[#F4A492] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#F4A492] transition-all hover:shadow-lg hover:shadow-[#F4A492] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full"
            type="button"
            data-ripple-light="true"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
