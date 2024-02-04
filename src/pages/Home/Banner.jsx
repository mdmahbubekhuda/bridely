import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 place-items-center bg-gradient-to-r from-[#E7F3F5] to-white py-6">
        <img
          className="col-start-1 row-start-1"
          src="/images/banner_overlay.png"
          alt=""
        />
        <div className="col-start-1 row-start-1 flex flex-col-reverse md:flex-row w-4/5 place-items-center gap-8">
          <div data-aos="fade-up" className="basis-1/2">
            <img
              className="rounded-tl-[6rem] rounded-br-[3rem] border-8 border-white mx-auto"
              src="/images/banner_couple.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-down" className="space-y-6 basis-1/2">
            <img src="/public/images/Banner_ring.png" alt="" />
            <h1 className="text-4xl font-bold max-w-[15ch]">
              Perfect Weddings Made Easy!
            </h1>
            <p className="max-w-[40ch]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm
              tempor incididunt
            </p>
            <button className="btn btn-md lg:btn-lg bg-[#F4A492] rounded-l-full rounded-r-full text-white">
              Make Reservations
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
