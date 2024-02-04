import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1">
        <img
          className="col-start-1 row-start-1 w-full h-full"
          src="/images/lines_section.jpg"
          alt=""
        />
        <img
          className="col-start-1 row-start-1 place-self-center justify-self-end"
          src="/images/Design_element_sec.png"
          alt=""
        />
        <img
          className="col-start-1 row-start-1 place-self-start justify-self-start p-2 lg:p-12"
          src="/images/hearts.png"
          alt=""
        />
        <div className="col-start-1 row-start-1 flex gap-8 flex-col md:flex-row place-items-center place-content-center my-20">
          <div data-aos="fade-down" className="text-center space-y-6 basis-1/2">
            <img
              className="mx-auto"
              src="/images/Team_design_element.png"
              alt=""
            />
            <h1 className="text-2xl mx-auto font-semibold max-w-[15ch]">
              Meet Our Creative Event Organizer
            </h1>
            <p className="max-w-[30ch] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm
              tempor incididunt.
            </p>
            <button className="btn btn-md lg:btn-lg text-white bg-[#9ACCC9] rounded-l-full rounded-r-full">
              Learn More
            </button>
          </div>
          <div
            data-aos="fade-up"
            className="grid grid-cols-2 gap-4 basis-1/2 px-4 place-items-center mx-auto"
          >
            <div className="border-8 border-white mb-4">
              <img src="/images/team_1.jpg" alt="" />
              <h2 className="bg-white font-semibold text-center py-4">
                Alisha Rees
              </h2>
            </div>
            <div className="border-8 border-white mt-4">
              <img src="/images/team_2.jpg" alt="" />
              <h2 className="bg-white font-semibold text-center py-4">
                Rhys Carter
              </h2>
            </div>
            <div className="border-8 border-white mb-4">
              <img src="/images/team_3.jpg" alt="" />
              <h2 className="bg-white font-semibold text-center py-4">
                Kyle Buckely
              </h2>
            </div>
            <div className="border-8 border-white mt-4">
              <img src="/images/team_4.jpg" alt="" />
              <h2 className="bg-white font-semibold text-center py-4">
                Maisie Walton
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
