import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Reservation = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1">
        <img
          className="col-start-1 row-start-1 w-full h-full rotate-180 -z-20"
          src="/images/lines_section.jpg"
          alt=""
        />
        <img
          className="col-start-1 row-start-1 place-self-center justify-self-start rotate-180 -z-10"
          src="/images/Design_element_sec.png"
          alt=""
        />
        <img
          className="col-start-1 row-start-1 place-self-start justify-self-end p-2 lg:p-12"
          src="/images/hearts.png"
          alt=""
        />
        <div className="col-start-1 row-start-1 flex gap-8 flex-col md:flex-row place-items-center place-content-center my-20">
          <div className="col-start-1 row-start-1 flex flex-col-reverse md:flex-row w-4/5 place-items-center gap-8">
            <div data-aos="fade-up" className="text-center space-y-6 basis-1/2">
              <img
                className="mx-auto"
                src="/images/Team_design_element.png"
                alt=""
              />
              <h1 className="text-2xl mx-auto font-semibold max-w-[20ch]">
                Make Reservations
              </h1>
              <p className="max-w-[40ch] mx-auto">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                doeiusm tempor incididunt
              </p>

              <form className="card-body pt-0">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-md lg:btn-lg text-white bg-[#9ACCC9] rounded-l-full rounded-r-full">
                    Make Reservation
                  </button>
                </div>
              </form>
            </div>
            <div data-aos="fade-down" className="basis-1/2">
              <img
                className="rounded-tr-[6rem] rounded-bl-[3rem] border-8 border-white mx-auto"
                src="/images/reserved_sec.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
